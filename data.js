const rawVocab = `hello|xin chào|/heˈləʊ/
world|thế giới|/wɜːld/
time|thời gian|/taɪm/
person|người|/ˈpɜː.sən/
year|năm|/jɪər/
way|cách, đường|/weɪ/
day|ngày|/deɪ/
thing|vật, thứ|/θɪŋ/
man|đàn ông|/mæn/
world|thế giới|/wɜːld/
life|cuộc sống|/laɪf/
hand|bàn tay|/hænd/
part|phần|/pɑːt/
child|đứa trẻ|/tʃaɪld/
eye|mắt|/aɪ/
woman|phụ nữ|/ˈwʊm.ən/
place|nơi chốn|/pleɪs/
work|công việc|/wɜːk/
week|tuần|/wiːk/
case|trường hợp|/keɪs/
point|điểm|/pɔɪnt/
government|chính phủ|/ˈɡʌv.ən.mənt/
company|công ty|/ˈkʌm.pə.ni/
number|số|/ˈnʌm.bər/
group|nhóm|/ɡruːp/
problem|vấn đề|/ˈprɒb.ləm/
fact|sự thật|/fækt/
book|sách|/bʊk/
water|nước|/ˈwɔː.tər/
room|phòng|/ruːm/
mother|mẹ|/ˈmʌð.ər/
area|khu vực|/ˈeə.ri.ə/
money|tiền|/ˈmʌn.i/
story|câu chuyện|/ˈstɔː.ri/
fact|sự kiện|/fækt/
month|tháng|/mʌnθ/
lot|nhiều|/lɒt/
right|quyền, bên phải|/raɪt/
study|học tập|/ˈstʌd.i/
night|đêm|/naɪt/
word|từ|/wɜːd/
family|gia đình|/ˈfæm.əl.i/
question|câu hỏi|/ˈkwes.tʃən/
student|học sinh|/ˈstjuː.dənt/
door|cửa|/dɔːr/
friend|bạn bè|/frend/
father|cha|/ˈfɑː.ðər/
power|sức mạnh|/paʊər/
hour|giờ|/aʊər/
game|trò chơi|/ɡeɪm/
line|đường kẻ|/laɪn/
end|kết thúc|/end/
member|thành viên|/ˈmem.bər/
law|luật pháp|/lɔː/
car|ô tô|/kɑːr/
city|thành phố|/ˈsɪt.i/
community|cộng đồng|/kəˈmjuː.nə.ti/
name|tên|/neɪm/
president|tổng thống|/ˈprez.ɪ.dənt/
team|đội|/tiːm/
minute|phút|/ˈmɪn.ɪt/
idea|ý tưởng|/aɪˈdɪə/
kid|đứa trẻ|/kɪd/
body|cơ thể|/ˈbɒd.i/
information|thông tin|/ˌɪn.fəˈmeɪ.ʃən/
back|lưng, phía sau|/bæk/
parent|phụ huynh|/ˈpeə.rənt/
face|khuôn mặt|/feɪs/
others|những người khác|/ˈʌð.ərz/
level|mức độ|/ˈlev.əl/
office|văn phòng|/ˈɒf.ɪs/
health|sức khỏe|/helθ/
art|nghệ thuật|/ɑːt/
history|lịch sử|/ˈhɪs.tər.i/
party|bữa tiệc|/ˈpɑː.ti/
result|kết quả|/rɪˈzʌlt/
change|sự thay đổi|/tʃeɪndʒ/
morning|buổi sáng|/ˈmɔː.nɪŋ/
reason|lý do|/ˈriː.zən/
research|nghiên cứu|/rɪˈsɜːtʃ/
girl|cô gái|/ɡɜːl/
guy|chàng trai|/ɡaɪ/
food|thức ăn|/fuːd/
moment|khoảnh khắc|/ˈməʊ.mənt/
air|không khí|/eər/
teacher|giáo viên|/ˈtiː.tʃər/
force|lực lượng|/fɔːs/
education|giáo dục|/ˌedʒ.ʊˈkeɪ.ʃən/
foot|bàn chân|/fʊt/
boy|cậu bé|/bɔɪ/
age|tuổi|/eɪdʒ/
policy|chính sách|/ˈpɒl.ə.si/
process|quá trình|/ˈprəʊ.ses/
music|âm nhạc|/ˈmjuː.zɪk/
market|thị trường|/ˈmɑː.kɪt/
sense|cảm giác|/sens/
nation|quốc gia|/ˈneɪ.ʃən/
plan|kế hoạch|/plæn/
college|trường cao đẳng|/ˈkɒl.ɪdʒ/
interest|sự quan tâm|/ˈɪn.trəst/
death|cái chết|/deθ/
experience|kinh nghiệm|/ɪkˈspɪə.ri.əns/
effect|tác động|/ɪˈfekt/
use|sử dụng|/juːz/
class|lớp học|/klɑːs/
control|điều khiển|/kənˈtrəʊl/
care|chăm sóc|/keər/
field|cánh đồng|/fiːld/
development|sự phát triển|/dɪˈvel.əp.mənt/
role|vai trò|/rəʊl/
effort|nỗ lực|/ˈef.ət/
rate|tỷ lệ|/reɪt/
heart|trái tim|/hɑːt/
drug|thuốc|/drʌɡ/
show|chương trình|/ʃəʊ/
leader|nhà lãnh đạo|/ˈliː.dər/
light|ánh sáng|/laɪt/
voice|giọng nói|/vɔɪs/
wife|vợ|/waɪf/
police|cảnh sát|/pəˈliːs/
mind|tâm trí|/maɪnd/
step|bước|/step/
record|hồ sơ|/ˈrek.ɔːd/
paper|giấy|/ˈpeɪ.pər/
action|hành động|/ˈæk.ʃən/
model|mô hình|/ˈmɒd.əl/
nature|thiên nhiên|/ˈneɪ.tʃər/
matter|vấn đề|/ˈmæt.ər/
bill|hóa đơn|/bɪl/
space|không gian|/speɪs/
figure|con số|/ˈfɪɡ.ər/
model|mẫu|/ˈmɒd.əl/
project|dự án|/ˈprɒdʒ.ekt/
fear|nỗi sợ|/fɪər/
news|tin tức|/njuːz/
tax|thuế|/tæks/
success|thành công|/səkˈses/
system|hệ thống|/ˈsɪs.təm/
computer|máy tính|/kəmˈpjuː.tər/
president|tổng thống|/ˈprez.ɪ.dənt/
hospital|bệnh viện|/ˈhɒs.pɪ.təl/
movie|phim|/ˈmuː.vi/
love|tình yêu|/lʌv/
camera|máy ảnh|/ˈkæm.rə/
tree|cây|/triː/
animal|động vật|/ˈæn.ɪ.məl/
plant|thực vật|/plɑːnt/
sun|mặt trời|/sʌn/
moon|mặt trăng|/muːn/
star|ngôi sao|/stɑːr/
earth|trái đất|/ɜːθ/
sea|biển|/siː/
river|sông|/ˈrɪv.ər/
mountain|núi|/ˈmaʊn.tɪn/
color|màu sắc|/ˈkʌl.ər/
red|đỏ|/red/
blue|xanh dương|/bluː/
green|xanh lá|/ɡriːn/
black|đen|/blæk/
white|trắng|/waɪt/
yellow|vàng|/ˈjel.əʊ/
apple|quả táo|/ˈæp.əl/
banana|quả chuối|/bəˈnæn.ə/
orange|quả cam|/ˈɒr.ɪndʒ/
grape|quả nho|/ɡreɪp/
lemon|quả chanh|/ˈlem.ən/
bread|bánh mì|/bred/
rice|cơm|/raɪs/
meat|thịt|/miːt/
fish|cá|/fɪʃ/
chicken|gà|/ˈtʃɪk.ɪn/
milk|sữa|/mɪlk/
coffee|cà phê|/ˈkɒf.i/
tea|trà|/tiː/
sugar|đường|/ˈʃʊɡ.ər/
salt|muối|/sɒlt/
house|ngôi nhà|/haʊs/
window|cửa sổ|/ˈwɪn.dəʊ/
chair|cái ghế|/tʃeər/
table|cái bàn|/ˈteɪ.bəl/
bed|giường|/bed/
sofa|ghế sô pha|/ˈsəʊ.fə/
clock|đồng hồ|/klɒk/
watch|đồng hồ đeo tay|/wɒtʃ/
phone|điện thoại|/fəʊn/
bag|túi|/bæɡ/
shoe|giày|/ʃuː/
shirt|áo sơ mi|/ʃɜːt/
pants|quần dài|/pænts/
dress|váy|/dres/
hat|mũ|/hæt/
dog|con chó|/dɒɡ/
cat|con mèo|/kæt/
bird|con chim|/bɜːd/
horse|con ngựa|/hɔːs/
pig|con lợn|/pɪɡ/
cow|con bò|/kaʊ/
sheep|con cừu|/ʃiːp/
mouse|con chuột|/maʊs/
happy|vui vẻ|/ˈhæp.i/
sad|buồn|/sæd/
angry|tức giận|/ˈæŋ.ɡri/
scared|sợ hãi|/skeəd/
tired|mệt mỏi|/taɪəd/
hungry|đói|/ˈhʌŋ.ɡri/
thirsty|khát|/ˈθɜː.sti/
hot|nóng|/hɒt/
cold|lạnh|/kəʊld/
good|tốt|/ɡʊd/
bad|xấu|/bæd/
big|to|/bɪɡ/
small|nhỏ|/smɔːl/
long|dài|/lɒŋ/
short|ngắn|/ʃɔːt/
fast|nhanh|/fɑːst/
slow|chậm|/sləʊ/
beautiful|đẹp|/ˈbjuː.tɪ.fəl/
ugly|xấu xí|/ˈʌɡ.li/
clean|sạch sẽ|/kliːn/
dirty|bẩn|/ˈdɜː.ti/
easy|dễ|/ˈiː.zi/
hard|khó|/hɑːd/
rich|giàu|/rɪtʃ/
poor|nghèo|/pɔːr/
strong|mạnh|/strɒŋ/
weak|yếu|/wiːk/
new|mới|/njuː/
old|cũ|/əʊld/
young|trẻ|/jʌŋ/
true|đúng|/truː/
false|sai|/fɒls/
full|đầy|/fʊl/
empty|trống|/ˈemp.ti/
heavy|nặng|/ˈhev.i/
light|nhẹ|/laɪt/
dark|tối|/dɑːk/
bright|sáng|/braɪt/
run|chạy|/rʌn/
walk|đi bộ|/wɔːk/
jump|nhảy|/dʒʌmp/
swim|bơi|/swɪm/
fly|bay|/flaɪ/
sit|ngồi|/sɪt/
stand|đứng|/stænd/
sleep|ngủ|/sliːp/
wake|thức dậy|/weɪk/
eat|ăn|/iːt/
drink|uống|/drɪŋk/
read|đọc|/riːd/
write|viết|/raɪt/
speak|nói|/spiːk/
listen|nghe|/ˈlɪs.ən/
look|nhìn|/lʊk/
see|thấy|/siː/
hear|nghe thấy|/hɪər/
smell|ngửi|/smel/
taste|nếm|/teɪst/
touch|chạm|/tʌtʃ/
think|nghĩ|/θɪŋk/
know|biết|/nəʊ/
understand|hiểu|/ˌʌn.dəˈstænd/
learn|học|/lɜːn/
teach|dạy|/tiːtʃ/
work|làm việc|/wɜːk/
play|chơi|/pleɪ/
sing|hát|/sɪŋ/
dance|nhảy múa|/dɑːns/
buy|mua|/baɪ/
sell|bán|/sel/
open|mở|/ˈəʊ.pən/
close|đóng|/kləʊz/
start|bắt đầu|/stɑːt/
stop|dừng lại|/stɒp/
win|thắng|/wɪn/
lose|thua|/luːz/
give|cho|/ɡɪv/
take|lấy|/teɪk/
find|tìm|/faɪnd/
lose|làm mất|/luːz/
make|làm|/meɪk/
break|làm vỡ|/breɪk/
build|xây|/bɪld/
destroy|phá hủy|/dɪˈstrɔɪ/
love|yêu|/lʌv/
hate|ghét|/heɪt/
like|thích|/laɪk/
want|muốn|/wɒnt/
need|cần|/niːd/
help|giúp đỡ|/help/
wait|đợi|/weɪt/
go|đi|/ɡəʊ/
come|đến|/kʌm/
arrive|đến nơi|/əˈraɪv/
leave|rời đi|/liːv/
return|trở lại|/rɪˈtɜːn/
one|một|/wʌn/
two|hai|/tuː/
three|ba|/θriː/
four|bốn|/fɔːr/
five|năm|/faɪv/
six|sáu|/sɪks/
seven|bảy|/ˈsev.ən/
eight|tám|/eɪt/
nine|chín|/naɪn/
ten|mười|/ten/
hundred|trăm|/ˈhʌn.drəd/
thousand|nghìn|/ˈθaʊ.zənd/
million|triệu|/ˈmɪl.jən/
always|luôn luôn|/ˈɔːl.weɪz/
never|không bao giờ|/ˈnev.ər/
sometimes|thỉnh thoảng|/ˈsʌm.taɪmz/
often|thường xuyên|/ˈɒf.ən/
usually|thường thường|/ˈjuː.ʒu.ə.li/
now|bây giờ|/naʊ/
then|sau đó|/ðen/
before|trước khi|/bɪˈfɔːr/
after|sau khi|/ˈɑːf.tər/
today|hôm nay|/təˈdeɪ/
yesterday|hôm qua|/ˈjes.tə.deɪ/
tomorrow|ngày mai|/təˈmɒr.əʊ/
here|ở đây|/hɪər/
there|ở đó|/ðeər/
up|lên|/ʌp/
down|xuống|/daʊn/
in|trong|/ɪn/
out|ngoài|/aʊt/
on|trên|/ɒn/
off|tắt, ra khỏi|/ɒf/
over|quá, bên trên|/ˈəʊ.vər/
under|dưới|/ˈʌn.dər/
again|lại|/əˈɡen/
why|tại sao|/waɪ/
how|thế nào|/haʊ/
what|cái gì|/wɒt/
when|khi nào|/wen/
where|ở đâu|/weər/
who|ai|/huː/
which|cái nào|/wɪtʃ/
yes|có|/jes/
no|không|/nəʊ/
maybe|có thể|/ˈmeɪ.bi/
very|rất|/ˈver.i/
much|nhiều|/mʌtʃ/
many|nhiều|/ˈmen.i/
little|ít|/ˈlɪt.əl/
few|vài|/fjuː/
all|tất cả|/ɔːl/
some|một số|/sʌm/
any|bất kỳ|/ˈen.i/
every|mỗi|/ˈev.ri/
more|nhiều hơn|/mɔːr/
less|ít hơn|/les/
most|hầu hết|/məʊst/
least|ít nhất|/liːst/
other|khác|/ˈʌð.ər/
same|giống nhau|/seɪm/
different|khác nhau|/ˈdɪf.ər.ənt/
goodbye|tạm biệt|/ɡʊdˈbaɪ/
please|làm ơn|/pliːz/
sorry|xin lỗi|/ˈsɒr.i/
excuse|xin lỗi|/ɪkˈskjuːz/
thank|cảm ơn|/θæŋk/
welcome|chào mừng|/ˈwel.kəm/
friendship|tình bạn|/ˈfrend.ʃɪp/
music|âm nhạc|/ˈmjuː.zɪk/
dance|điệu nhảy|/dɑːns/
song|bài hát|/sɒŋ/
singer|ca sĩ|/ˈsɪŋ.ər/
actor|diễn viên nam|/ˈæk.tər/
actress|diễn viên nữ|/ˈæk.trəs/
movie|phim ảnh|/ˈmuː.vi/
theater|rạp hát|/ˈθɪə.tər/
book|quyển sách|/bʊk/
page|trang|/peɪdʒ/
pen|bút mực|/pen/
pencil|bút chì|/ˈpen.səl/
school|trường học|/skuːl/
class|lớp học|/klɑːs/
lesson|bài học|/ˈles.ən/
exam|bài kiểm tra|/ɪɡˈzæm/
test|kiểm tra|/test/
pass|đỗ|/pɑːs/
fail|trượt|/feɪl/
sport|thể thao|/spɔːt/
football|bóng đá|/ˈfʊt.bɔːl/
basketball|bóng rổ|/ˈbɑː.skɪt.bɔːl/
volleyball|bóng chuyền|/ˈvɒl.i.bɔːl/
tennis|quần vợt|/ˈten.ɪs/
swimming|bơi lội|/ˈswɪm.ɪŋ/
running|chạy bộ|/ˈrʌn.ɪŋ/
weather|thời tiết|/ˈweð.ər/
rain|mưa|/reɪn/
snow|tuyết|/snəʊ/
wind|gió|/wɪnd/
cloud|đám mây|/klaʊd/
storm|bão|/stɔːm/
season|mùa|/ˈsiː.zən/
spring|mùa xuân|/sprɪŋ/
summer|mùa hè|/ˈsʌm.ər/
autumn|mùa thu|/ˈɔː.təm/
winter|mùa đông|/ˈwɪn.tər/
direction|phương hướng|/dɪˈrek.ʃən/
north|hướng bắc|/nɔːθ/
south|hướng nam|/saʊθ/
east|hướng đông|/iːst/
west|hướng tây|/west/
color|màu|/ˈkʌl.ər/
black|màu đen|/blæk/
white|màu trắng|/waɪt/
gray|màu xám|/ɡreɪ/
brown|màu nâu|/braʊn/
pink|màu hồng|/pɪŋk/
purple|màu tím|/ˈpɜː.pəl/
animal|thú vật|/ˈæn.ɪ.məl/
bear|con gấu|/beər/
lion|sư tử|/ˈlaɪ.ən/
tiger|con hổ|/ˈtaɪ.ɡər/
elephant|con voi|/ˈel.ɪ.fənt/
monkey|con khỉ|/ˈmʌŋ.ki/
snake|con rắn|/sneɪk/
rabbit|con thỏ|/ˈræb.ɪt/
body|thân thể|/ˈbɒd.i/
head|cái đầu|/hed/
hair|tóc|/heər/
eye|con mắt|/aɪ/
ear|cái tai|/ɪər/
nose|cái mũi|/nəʊz/
mouth|cái miệng|/maʊθ/
tooth|răng|/tuːθ/
neck|cái cổ|/nek/
shoulder|vai|/ˈʃəʊl.dər/
arm|cánh tay|/ɑːm/
hand|bàn tay|/hænd/
finger|ngón tay|/ˈfɪŋ.ɡər/
leg|cái chân|/leɡ/
foot|bàn chân|/fʊt/
toe|ngón chân|/təʊ/
clothes|quần áo|/kləʊðz/
shirt|áo sơ mi|/ʃɜːt/
pants|quần dài|/pænts/
jeans|quần bò|/dʒiːnz/
skirt|chân váy|/skɜːt/
dress|chiếc váy|/dres/
shoe|chiếc giày|/ʃuː/
sock|chiếc tất|/sɒk/
hat|cái mũ|/hæt/
coat|áo khoác|/kəʊt/
jacket|áo khoác ngắn|/ˈdʒæk.ɪt/
food|đồ ăn|/fuːd/
bread|bánh mì|/bred/
rice|cơm, gạo|/raɪs/
meat|thịt|/miːt/
fish|cá|/fɪʃ/
chicken|thịt gà|/ˈtʃɪk.ɪn/
egg|quả trứng|/eɡ/
milk|sữa|/mɪlk/
water|nước|/ˈwɔː.tər/
juice|nước ép|/dʒuːs/
coffee|cà phê|/ˈkɒf.i/
tea|trà|/tiː/
fruit|trái cây|/fruːt/
apple|quả táo|/ˈæp.əl/
banana|quả chuối|/bəˈnæn.ə/
orange|quả cam|/ˈɒr.ɪndʒ/
grape|quả nho|/ɡreɪp/
vegetable|rau|/ˈvedʒ.tə.bəl/
potato|khoai tây|/pəˈteɪ.təʊ/
tomato|cà chua|/təˈmɑː.təʊ/
onion|hành tây|/ˈʌn.jən/
house|ngôi nhà|/haʊs/
room|căn phòng|/ruːm/
door|cánh cửa|/dɔːr/
window|cửa sổ|/ˈwɪn.dəʊ/
floor|sàn nhà|/flɔːr/
wall|bức tường|/wɔːl/
roof|mái nhà|/ruːf/
kitchen|nhà bếp|/ˈkɪtʃ.ən/
bedroom|phòng ngủ|/ˈbed.ruːm/
bathroom|phòng tắm|/ˈbɑːθ.ruːm/
garden|khu vườn|/ˈɡɑː.dən/
furniture|đồ nội thất|/ˈfɜː.nɪ.tʃər/
chair|cái ghế|/tʃeər/
table|cái bàn|/ˈteɪ.bəl/
bed|cái giường|/bed/
sofa|ghế bành|/ˈsəʊ.fə/
lamp|đèn|/læmp/
clock|đồng hồ|/klɒk/
mirror|gương|/ˈmɪr.ər/
picture|bức tranh|/ˈpɪk.tʃər/
vehicle|xe cộ|/ˈvɪə.kəl/
car|ô tô|/kɑːr/
bus|xe buýt|/bʌs/
train|tàu hỏa|/treɪn/
plane|máy bay|/pleɪn/
boat|thuyền|/bəʊt/
ship|tàu thủy|/ʃɪp/
bicycle|xe đạp|/ˈbaɪ.sɪ.kəl/
motorcycle|xe máy|/ˈməʊ.tə.saɪ.kəl/
city|thành phố|/ˈsɪt.i/
town|thị trấn|/taʊn/
village|ngôi làng|/ˈvɪl.ɪdʒ/
street|con đường|/striːt/
road|đường đi|/rəʊd/
bridge|cây cầu|/brɪdʒ/
park|công viên|/pɑːk/
bank|ngân hàng|/bæŋk/
shop|cửa hàng|/ʃɒp/
store|cửa hiệu|/stɔːr/
market|chợ|/ˈmɑː.kɪt/
hospital|bệnh viện|/ˈhɒs.pɪ.təl/
school|trường học|/skuːl/
library|thư viện|/ˈlaɪ.brər.i/
restaurant|nhà hàng|/ˈres.trɒnt/
hotel|khách sạn|/həʊˈtel/
airport|sân bay|/ˈeə.pɔːt/
station|nhà ga|/ˈsteɪ.ʃən/
job|nghề nghiệp|/dʒɒb/
doctor|bác sĩ|/ˈdɒk.tər/
nurse|y tá|/nɜːs/
teacher|giáo viên|/ˈtiː.tʃər/
student|học sinh|/ˈstjuː.dənt/
engineer|kỹ sư|/ˌen.dʒɪˈnɪər/
driver|tài xế|/ˈdraɪ.vər/
worker|công nhân|/ˈwɜː.kər/
farmer|nông dân|/ˈfɑː.mər/
cook|đầu bếp|/kʊk/
waiter|bồi bàn|/ˈweɪ.tər/
manager|quản lý|/ˈmæn.ɪ.dʒər/
police|cảnh sát|/pəˈliːs/
soldier|quân nhân|/ˈsəʊl.dʒər/
time|thời gian|/taɪm/
second|giây|/ˈsek.ənd/
minute|phút|/ˈmɪn.ɪt/
hour|giờ|/aʊər/
day|ngày|/deɪ/
week|tuần|/wiːk/
month|tháng|/mʌnθ/
year|năm|/jɪər/
morning|buổi sáng|/ˈmɔː.nɪŋ/
afternoon|buổi chiều|/ˌɑːf.təˈnuːn/
evening|buổi tối|/ˈiː.vən.ɪŋ/
night|đêm|/naɪt/
today|hôm nay|/təˈdeɪ/
tomorrow|ngày mai|/təˈmɒr.əʊ/
yesterday|hôm qua|/ˈjes.tə.deɪ/
now|bây giờ|/naʊ/
always|luôn luôn|/ˈɔːl.weɪz/
never|không bao giờ|/ˈnev.ər/
sometimes|đôi khi|/ˈsʌm.taɪmz/
often|thường xuyên|/ˈɒf.ən/
nature|thiên nhiên|/ˈneɪ.tʃər/
sun|mặt trời|/sʌn/
moon|mặt trăng|/muːn/
star|ngôi sao|/stɑːr/
sky|bầu trời|/skaɪ/
cloud|đám mây|/klaʊd/
rain|cơn mưa|/reɪn/
snow|tuyết|/snəʊ/
wind|gió|/wɪnd/
storm|bão|/stɔːm/
water|nước|/ˈwɔː.tər/
fire|lửa|/faɪər/
earth|đất|/ɜːθ/
land|đất đai|/lænd/
sea|biển|/siː/
ocean|đại dương|/ˈəʊ.ʃən/
river|con sông|/ˈrɪv.ər/
lake|hồ|/leɪk/
mountain|ngọn núi|/ˈmaʊn.tɪn/
tree|cây|/triː/
flower|bông hoa|/flaʊər/
grass|cỏ|/ɡrɑːs/
shape|hình dáng|/ʃeɪp/
circle|hình tròn|/ˈsɜː.kəl/
square|hình vuông|/skweər/
triangle|hình tam giác|/ˈtraɪ.æŋ.ɡəl/
line|đường thẳng|/laɪn/
point|điểm|/pɔɪnt/
money|tiền bạc|/ˈmʌn.i/
bank|ngân hàng|/bæŋk/
price|giá cả|/praɪs/
cost|chi phí|/kɒst/
value|giá trị|/ˈvæl.juː/
buy|mua|/baɪ/
sell|bán|/sel/
pay|trả tiền|/peɪ/
spend|tiêu xài|/spend/
save|tiết kiệm|/seɪv/
feeling|cảm xúc|/ˈfiː.lɪŋ/
love|tình yêu|/lʌv/
hate|sự căm ghét|/heɪt/
anger|sự tức giận|/ˈæŋ.ɡər/
fear|nỗi sợ|/fɪər/
joy|niềm vui|/dʒɔɪ/
sadness|nỗi buồn|/ˈsæd.nəs/
surprise|sự ngạc nhiên|/səˈpraɪz/
hope|niềm hy vọng|/həʊp/
mind|tâm trí|/maɪnd/
thought|suy nghĩ|/θɔːt/
idea|ý tưởng|/aɪˈdɪə/
memory|trí nhớ|/ˈmem.ər.i/
knowledge|kiến thức|/ˈnɒl.ɪdʒ/
reason|lý do|/ˈriː.zən/
decision|quyết định|/dɪˈsɪʒ.ən/
choice|sự lựa chọn|/tʃɔɪs/
action|hành động|/ˈæk.ʃən/
movement|sự di chuyển|/ˈmuːv.mənt/
work|công việc|/wɜːk/
play|trò chơi|/pleɪ/
rest|sự nghỉ ngơi|/rest/
sleep|giấc ngủ|/sliːp/
dream|giấc mơ|/driːm/
life|cuộc sống|/laɪf/
death|cái chết|/deθ/
birth|sự sinh ra|/bɜːθ/
age|độ tuổi|/eɪdʒ/
youth|tuổi trẻ|/juːθ/
health|sức khỏe|/helθ/
disease|bệnh tật|/dɪˈziːz/
pain|cơn đau|/peɪn/
medicine|thuốc|/ˈmed.ɪ.sən/
doctor|bác sĩ|/ˈdɒk.tər/
hospital|bệnh viện|/ˈhɒs.pɪ.təl/`;

export const vocabList = rawVocab.trim().split('\n').map((line, index) => {
    const [chars, meaning, pinyin] = line.split('|');
    return { id: index + 1, chars, meaning, pinyin };
});
