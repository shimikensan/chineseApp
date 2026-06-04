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
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('start-btn');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

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
    
    // Initial draw
    updateClawTransform();
}

function startGame() {
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
}

function generateLevel() {
    groundEl.innerHTML = '';
    nuggetsData = [];
    
    // Pick 5-7 random vocab words for this level
    const numNuggets = Math.floor(Math.random() * 3) + 5;
    let selectedVocabs = [];
    let tempVocabList = [...vocabList]; // from data.js
    
    for (let i = 0; i < numNuggets; i++) {
        if (tempVocabList.length === 0) break;
        const idx = Math.floor(Math.random() * tempVocabList.length);
        selectedVocabs.push(tempVocabList[idx]);
        tempVocabList.splice(idx, 1);
    }
    
    // Set target word
    const targetIdx = Math.floor(Math.random() * selectedVocabs.length);
    currentTarget = selectedVocabs[targetIdx];
    meaningEl.innerText = currentTarget.meaning;
    pinyinEl.innerText = currentTarget.pinyin;
    
    // Create nuggets DOM elements
    selectedVocabs.forEach((vocab) => {
        // Random position, keep away from edges and top sky area
        const rect = playArea.getBoundingClientRect();
        // ground is approx bottom 70%, sky is top 30%
        // but claw starts at top, so minY should be below sky
        const minY = rect.height * 0.35; 
        const maxY = rect.height - 80;
        const minX = 60;
        const maxX = rect.width - 60;
        
        const size = Math.random() * 30 + 70; // 70-100px
        const x = minX + Math.random() * (maxX - minX);
        const y = minY + Math.random() * (maxY - minY);
        
        const el = document.createElement('div');
        el.className = 'nugget';
        el.innerText = vocab.chars;
        el.style.width = size + 'px';
        el.style.height = (size * 0.8) + 'px'; // slightly oval
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        
        groundEl.appendChild(el);
        
        nuggetsData.push({
            type: 'nugget',
            el: el,
            vocab: vocab,
            x: x,
            y: y,
            radius: size / 2, // approximation for collision
            grabbed: false
        });
    });
    
    // Create rocks DOM elements
    const numRocks = Math.floor(Math.random() * 3) + 2; // 2-4 rocks
    for(let i = 0; i < numRocks; i++) {
        const rect = playArea.getBoundingClientRect();
        const minY = rect.height * 0.35; 
        const maxY = rect.height - 80;
        const minX = 60;
        const maxX = rect.width - 60;
        
        const size = Math.random() * 40 + 60; // 60-100px
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
    
    // Calculate hook world position relative to playArea
    const playRect = playArea.getBoundingClientRect();
    const baseRect = document.getElementById('claw-base').getBoundingClientRect();
    
    // Base center point
    const baseX = baseRect.left + baseRect.width / 2 - playRect.left;
    const baseY = baseRect.top + 10 - playRect.top; // 10px is claw-arm top
    
    // Angle in radians
    const rad = clawAngle * Math.PI / 180;
    
    // Hook end point
    hookX = baseX - Math.sin(rad) * clawLength;
    hookY = baseY + Math.cos(rad) * clawLength;
}

function checkCollision() {
    for (let i = 0; i < nuggetsData.length; i++) {
        let n = nuggetsData[i];
        if (n.grabbed) continue;
        
        // Simple distance check
        const dx = hookX - n.x;
        const dy = hookY - n.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < n.radius + 15) { // 15 is approx hook radius
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
        
        // Check out of bounds
        const playRect = playArea.getBoundingClientRect();
        if (hookX < 0 || hookX > playRect.width || hookY > playRect.height || clawLength > MAX_LENGTH) {
            clawState = CLAW_STATE.RETRACTING;
            grabTarget = null;
        } else {
            // Check collision
            let hit = checkCollision();
            if (hit) {
                clawState = CLAW_STATE.RETRACTING;
                grabTarget = hit;
                hit.grabbed = true;
                hit.el.classList.add('grabbed');
                
                // Adjust retract speed based on whether it's right or wrong
                // Optional: make wrong answers heavier
                if (hit.type === 'rock') {
                    retractSpeed = 2; // Very slow
                } else if (hit.vocab.id === currentTarget.id) {
                    retractSpeed = 6;
                } else {
                    retractSpeed = 3; // heavier, slower
                }
            }
        }
    }
    else if (clawState === CLAW_STATE.RETRACTING) {
        clawLength -= retractSpeed;
        
        if (grabTarget) {
            // Move nugget with hook
            grabTarget.el.style.left = hookX + 'px';
            grabTarget.el.style.top = hookY + 'px';
        }
        
        if (clawLength <= INITIAL_LENGTH) {
            clawLength = INITIAL_LENGTH;
            clawState = CLAW_STATE.SWINGING;
            
            // Process grabbed item
            if (grabTarget) {
                grabTarget.el.remove(); // remove from DOM
                
                const baseX = playArea.getBoundingClientRect().width / 2;
                const baseY = 50;

                if (grabTarget.type === 'rock') {
                    // Rock
                    timeLeft -= 10; // bigger penalty for rock
                    if(timeLeft < 0) timeLeft = 0;
                    timeEl.innerText = timeLeft;
                    showFloatingText("ĐÁ! -10s", false, baseX, baseY);
                } else if (grabTarget.vocab.id === currentTarget.id) {
                    // Correct
                    score += 100;
                    scoreEl.innerText = score;
                    showFloatingText("+100", true, baseX, baseY);
                    // generate next level
                    setTimeout(generateLevel, 500);
                } else {
                    // Wrong
                    timeLeft -= 5; // penalty
                    if(timeLeft < 0) timeLeft = 0;
                    timeEl.innerText = timeLeft;
                    showFloatingText("SAI! -5s", false, baseX, baseY);
                }
                
                // Remove from array
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
