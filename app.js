import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { collection, getDocs, query, orderBy, limit, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { vocabList } from './data.js';

// Auth State
let currentUser = null;

// Game variables
let score = 0;
let timeLeft = 60;
let isPlaying = false;
let currentTarget = null;
let nuggetsData = [];
let grabTarget = null;

// DOM Elements
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const meaningEl = document.getElementById('target-meaning');
const pinyinEl = document.getElementById('target-pinyin');
const groundEl = document.getElementById('ground');
const playArea = document.getElementById('play-area');
const clawArm = document.getElementById('claw-arm');

// Overlays and Modals
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('start-btn');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

const authOverlay = document.getElementById('auth-overlay');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const authError = document.getElementById('auth-error');

const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');

const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardOverlay = document.getElementById('leaderboard-overlay');
const leaderboardList = document.getElementById('leaderboard-list');
const closeLeaderboardBtn = document.getElementById('close-leaderboard-btn');

// Claw parameters
const CLAW_STATE = { SWINGING: 0, DROPPING: 1, RETRACTING: 2 };
let clawState = CLAW_STATE.SWINGING;
let clawAngle = 0;
let clawDirection = 1; // 1 for right, -1 for left
let clawLength = 60;
const INITIAL_LENGTH = 60;
const MAX_LENGTH = 800; // should be enough to reach bottom
let swingSpeed = 1.5; // degrees per frame
let dropSpeed = 10;   // px per frame
let retractSpeed = 8; // px per frame
let hookX = 0;
let hookY = 0;

let gameLoopId;
let timerId;

// Initialize
function init() {
    startBtn.addEventListener('click', startGame);
    playArea.addEventListener('mousedown', attemptDrop);
    playArea.addEventListener('touchstart', (e) => { e.preventDefault(); attemptDrop(); }, {passive: false});
    
    // Auth events
    loginBtn.addEventListener('click', handleLogin);
    registerBtn.addEventListener('click', handleRegister);
    logoutBtn.addEventListener('click', handleLogout);
    
    // Leaderboard events
    leaderboardBtn.addEventListener('click', showLeaderboard);
    closeLeaderboardBtn.addEventListener('click', () => {
        leaderboardOverlay.classList.add('hidden');
    });
    
    // Listen to Auth State
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user;
            authOverlay.classList.add('hidden');
            overlay.classList.remove('hidden');
            userInfo.classList.remove('hidden');
            userName.innerText = user.email.split('@')[0]; // Simple display name
        } else {
            currentUser = null;
            authOverlay.classList.remove('hidden');
            overlay.classList.add('hidden');
            userInfo.classList.add('hidden');
            if (isPlaying) endGame();
        }
    });

    // Initial draw
    updateClawTransform();
}

// --- Firebase Auth ---
async function handleLogin() {
    const email = emailInput.value;
    const password = passwordInput.value;
    if(!email || !password) return showAuthError("Vui lòng nhập đủ email và mật khẩu.");
    try {
        await signInWithEmailAndPassword(auth, email, password);
        authError.innerText = "";
    } catch (error) {
        showAuthError("Đăng nhập thất bại: " + error.message);
    }
}

async function handleRegister() {
    const email = emailInput.value;
    const password = passwordInput.value;
    if(!email || !password) return showAuthError("Vui lòng nhập đủ email và mật khẩu.");
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        authError.innerText = "";
    } catch (error) {
        showAuthError("Đăng ký thất bại: " + error.message);
    }
}

async function handleLogout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Lỗi đăng xuất", error);
    }
}

function showAuthError(msg) {
    authError.innerText = msg;
}

// --- Firebase Firestore ---
async function saveScore(finalScore) {
    if (!currentUser) return;
    try {
        const userRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userRef);
        
        let shouldSave = true;
        if (docSnap.exists()) {
            const currentHigh = docSnap.data().highScore || 0;
            if (finalScore <= currentHigh) shouldSave = false;
        }

        if (shouldSave) {
            await setDoc(userRef, {
                email: currentUser.email,
                name: currentUser.email.split('@')[0],
                highScore: finalScore,
                lastUpdated: new Date()
            }, { merge: true });
            console.log("Đã lưu điểm cao mới!");
        }
    } catch (e) {
        console.error("Lỗi khi lưu điểm: ", e);
    }
}

async function showLeaderboard() {
    leaderboardOverlay.classList.remove('hidden');
    leaderboardList.innerHTML = '<li>Đang tải...</li>';
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy("highScore", "desc"), limit(10));
        const querySnapshot = await getDocs(q);
        
        leaderboardList.innerHTML = '';
        if (querySnapshot.empty) {
            leaderboardList.innerHTML = '<li>Chưa có ai ghi điểm.</li>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `<span class="lb-name">${data.name}</span> <span class="lb-score">${data.highScore}</span>`;
            leaderboardList.appendChild(li);
        });
    } catch (e) {
        console.error("Lỗi khi tải BXH: ", e);
        leaderboardList.innerHTML = '<li>Lỗi tải dữ liệu.</li>';
    }
}

// --- Game Logic ---
function startGame() {
    if(!currentUser) {
        alert("Vui lòng đăng nhập để chơi!");
        return;
    }
    score = 0;
    timeLeft = 60;
    scoreEl.innerText = score;
    timeEl.innerText = timeLeft;
    overlay.classList.add('hidden');
    isPlaying = true;
    
    clawState = CLAW_STATE.SWINGING;
    clawLength = INITIAL_LENGTH;
    clawAngle = 0;
    
    generateLevel();
    
    timerId = setInterval(updateTimer, 1000);
    gameLoopId = requestAnimationFrame(gameLoop);
}

function updateTimer() {
    if (!isPlaying) return;
    timeLeft--;
    timeEl.innerText = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    isPlaying = false;
    clearInterval(timerId);
    cancelAnimationFrame(gameLoopId);
    
    modalTitle.innerText = "HẾT GIỜ!";
    modalDesc.innerText = `Điểm của bạn: ${score}\nBạn đã làm rất tốt!`;
    startBtn.innerText = "Chơi Lại";
    overlay.classList.remove('hidden');
    
    if (score > 0) {
        saveScore(score);
    }
}

function generateLevel() {
    groundEl.innerHTML = '';
    nuggetsData = [];
    
    const numNuggets = Math.floor(Math.random() * 3) + 5;
    let selectedVocabs = [];
    let tempVocabList = [...vocabList];
    
    for (let i = 0; i < numNuggets; i++) {
        if (tempVocabList.length === 0) break;
        const idx = Math.floor(Math.random() * tempVocabList.length);
        selectedVocabs.push(tempVocabList[idx]);
        tempVocabList.splice(idx, 1);
    }
    
    const targetIdx = Math.floor(Math.random() * selectedVocabs.length);
    currentTarget = selectedVocabs[targetIdx];
    meaningEl.innerText = currentTarget.meaning;
    pinyinEl.innerText = currentTarget.pinyin;
    
    const rect = playArea.getBoundingClientRect();
    const minY = rect.height * 0.35; 
    const maxY = rect.height - 80;
    const minX = 60;
    const maxX = rect.width - 60;
    
    selectedVocabs.forEach((vocab) => {
        const size = Math.random() * 30 + 70;
        const x = minX + Math.random() * (maxX - minX);
        const y = minY + Math.random() * (maxY - minY);
        
        const el = document.createElement('div');
        el.className = 'nugget';
        el.innerText = vocab.chars;
        el.style.width = size + 'px';
        el.style.height = (size * 0.8) + 'px';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        
        groundEl.appendChild(el);
        
        nuggetsData.push({
            type: 'nugget',
            el: el,
            vocab: vocab,
            x: x,
            y: y,
            radius: size / 2,
            grabbed: false
        });
    });
    
    const numRocks = Math.floor(Math.random() * 3) + 2;
    for(let i = 0; i < numRocks; i++) {
        const size = Math.random() * 40 + 60;
        const x = minX + Math.random() * (maxX - minX);
        const y = minY + Math.random() * (maxY - minY);
        
        const el = document.createElement('div');
        el.className = 'rock';
        el.style.width = size + 'px';
        el.style.height = (size * 0.9) + 'px'; 
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        
        groundEl.appendChild(el);
        
        nuggetsData.push({
            type: 'rock',
            el: el,
            x: x,
            y: y,
            radius: size / 2,
            grabbed: false
        });
    }
}

function attemptDrop() {
    if (!isPlaying) return;
    if (clawState === CLAW_STATE.SWINGING) {
        clawState = CLAW_STATE.DROPPING;
    }
}

function updateClawTransform() {
    clawArm.style.transform = `rotate(${clawAngle}deg)`;
    clawArm.style.height = `${clawLength}px`;
    
    const playRect = playArea.getBoundingClientRect();
    const baseRect = document.getElementById('claw-base').getBoundingClientRect();
    
    const baseX = baseRect.left + baseRect.width / 2 - playRect.left;
    const baseY = baseRect.top + 15 - playRect.top;
    
    const rad = clawAngle * Math.PI / 180;
    
    hookX = baseX - Math.sin(rad) * clawLength;
    hookY = baseY + Math.cos(rad) * clawLength;
}

function checkCollision() {
    for (let i = 0; i < nuggetsData.length; i++) {
        let n = nuggetsData[i];
        if (n.grabbed) continue;
        
        const dx = hookX - n.x;
        const dy = hookY - n.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < n.radius + 15) {
            return n;
        }
    }
    return null;
}

function showFloatingText(text, isCorrect, x, y) {
    const el = document.createElement('div');
    el.className = 'float-text' + (isCorrect ? '' : ' wrong');
    el.innerText = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    playArea.appendChild(el);
    setTimeout(() => {
        if(el.parentNode) el.parentNode.removeChild(el);
    }, 1000);
}

function gameLoop() {
    if (!isPlaying) return;
    
    if (clawState === CLAW_STATE.SWINGING) {
        clawAngle += swingSpeed * clawDirection;
        if (clawAngle > 60) {
            clawAngle = 60;
            clawDirection = -1;
        } else if (clawAngle < -60) {
            clawAngle = -60;
            clawDirection = 1;
        }
    } 
    else if (clawState === CLAW_STATE.DROPPING) {
        clawLength += dropSpeed;
        
        const playRect = playArea.getBoundingClientRect();
        if (hookX < 0 || hookX > playRect.width || hookY > playRect.height || clawLength > MAX_LENGTH) {
            clawState = CLAW_STATE.RETRACTING;
            grabTarget = null;
        } else {
            let hit = checkCollision();
            if (hit) {
                clawState = CLAW_STATE.RETRACTING;
                grabTarget = hit;
                hit.grabbed = true;
                hit.el.classList.add('grabbed');
                
                if (hit.type === 'rock') {
                    retractSpeed = 2;
                } else if (hit.vocab.id === currentTarget.id) {
                    retractSpeed = 6;
                } else {
                    retractSpeed = 3;
                }
            }
        }
    }
    else if (clawState === CLAW_STATE.RETRACTING) {
        clawLength -= retractSpeed;
        
        if (grabTarget) {
            grabTarget.el.style.left = hookX + 'px';
            grabTarget.el.style.top = hookY + 'px';
        }
        
        if (clawLength <= INITIAL_LENGTH) {
            clawLength = INITIAL_LENGTH;
            clawState = CLAW_STATE.SWINGING;
            
            if (grabTarget) {
                grabTarget.el.remove();
                
                const baseX = playArea.getBoundingClientRect().width / 2;
                const baseY = 50;

                if (grabTarget.type === 'rock') {
                    timeLeft -= 10;
                    if(timeLeft < 0) timeLeft = 0;
                    timeEl.innerText = timeLeft;
                    showFloatingText("ĐÁ! -10s", false, baseX, baseY);
                } else if (grabTarget.vocab.id === currentTarget.id) {
                    score += 100;
                    scoreEl.innerText = score;
                    showFloatingText("+100", true, baseX, baseY);
                    setTimeout(generateLevel, 500);
                } else {
                    timeLeft -= 5;
                    if(timeLeft < 0) timeLeft = 0;
                    timeEl.innerText = timeLeft;
                    showFloatingText("SAI! -5s", false, baseX, baseY);
                }
                
                nuggetsData = nuggetsData.filter(n => n !== grabTarget);
                grabTarget = null;
            }
        }
    }
    
    updateClawTransform();
    gameLoopId = requestAnimationFrame(gameLoop);
}

// Start
init();
