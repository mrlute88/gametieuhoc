// Ngân hàng câu đố học tập GDPT 2018 Lớp 1 - 2 (Toán, Tiếng Việt, Tiếng Anh, TN&XH)
// Tổng cộng hơn 120 ải với độ khó tăng dần: Dễ (Ải 1-10) -> Trung bình (Ải 11-20) -> Khó (Ải 21-28) -> Trùm thử thách (Ải 29+)

export const SUBJECTS = [
  {
    id: 'math',
    name: 'Đảo Toán Học',
    grade: 'Lớp 1 - 2',
    icon: '🔢',
    color: 'from-amber-400 to-orange-500',
    accentColor: '#f59e0b',
    description: 'Từ đếm số cơ bản đến phép tính phạm vi 20, bảng nhân chia và tư duy logic.',
    bannerEmoji: '🏝️'
  },
  {
    id: 'vietnamese',
    name: 'Rừng Tiếng Việt',
    grade: 'Lớp 1 - 2',
    icon: '📖',
    color: 'from-emerald-400 to-teal-600',
    accentColor: '#10b981',
    description: 'Từ âm vần, thanh điệu đến ghép từ, chính tả c/k, g/gh, câu kể và đọc hiểu thơ.',
    bannerEmoji: '🌲'
  },
  {
    id: 'english',
    name: 'Thung Lũng Tiếng Anh',
    grade: 'Khởi động',
    icon: '🌍',
    color: 'from-sky-400 to-blue-600',
    accentColor: '#0ea5e9',
    description: 'Từ vựng màu sắc, số đếm, gia đình, trường học, cảm xúc và ngữ pháp giao tiếp.',
    bannerEmoji: '🌈'
  },
  {
    id: 'science',
    name: 'Xứ Sở Khoa Học',
    grade: 'Lớp 1 - 2',
    icon: '🌱',
    color: 'from-purple-400 to-indigo-600',
    accentColor: '#8b5cf6',
    description: 'Khám phá cơ thể, động thực vật, thời tiết, vòng đời sinh vật và bảo vệ môi trường.',
    bannerEmoji: '🔬'
  }
];

export const PETS = [
  {
    id: 'dragon',
    name: 'Rồng Con Đốm Lửa',
    title: 'Dũng Cảm & Tò Mò',
    avatar: '🐲',
    level: 1,
    perk: 'Tăng 10% năng lượng khi giải đúng Toán học',
    specialMove: 'Hơi Thở Tri Thức',
    color: '#ff6b6b'
  },
  {
    id: 'owl',
    name: 'Cú Mèo Mắt Sáng',
    title: 'Thông Thái & Tỉ Mỉ',
    avatar: '🦉',
    level: 1,
    perk: 'Mở rộng 1 gợi ý đặc biệt cho Tiếng Việt',
    specialMove: 'Cánh Soi Sáng',
    color: '#4ecdc4'
  },
  {
    id: 'fox',
    name: 'Cáo Vàng Nhanh Nhẹn',
    title: 'Linh Hoạt & Sáng Tạo',
    avatar: '🦊',
    level: 1,
    perk: 'Nhận thêm 5 xu tri thức sau mỗi trận',
    specialMove: 'Móng Vuốt Nhanh Trí',
    color: '#f39c12'
  },
  {
    id: 'unicorn',
    name: 'Kỳ Lân Cầu Vồng',
    title: 'Hiền Hòa & Kiên Trì',
    avatar: '🦄',
    level: 1,
    perk: 'Bảo vệ chuỗi Streak khi quên học 1 ngày',
    specialMove: 'Ánh Sáng Yêu Thương',
    color: '#a29bfe'
  }
];

export const PET_ITEMS = [
  { id: 'hat_wizard', name: 'Nón Phù Thủy Tri Thức', icon: '🧙‍♂️', cost: 15, owned: true, type: 'hat' },
  { id: 'glasses_smart', name: 'Kính Tròn Thông Thái', icon: '👓', cost: 25, owned: false, type: 'accessory' },
  { id: 'crown_gold', name: 'Vương Miện Quán Quân', icon: '👑', cost: 50, owned: false, type: 'hat' },
  { id: 'cape_hero', name: 'Áo Choàng Hiệp Sĩ', icon: '🦸', cost: 40, owned: false, type: 'cape' },
  { id: 'apple_treat', name: 'Táo Thần Nạp Năng Lượng', icon: '🍏', cost: 10, owned: false, type: 'food' },
  { id: 'shield_magic', name: 'Khiên Thần Ánh Sáng', icon: '🛡️', cost: 35, owned: false, type: 'shield' },
  { id: 'wings_fairy', name: 'Đôi Cánh Tiên Bướm', icon: '🧚', cost: 60, owned: false, type: 'wings' }
];

// Dữ liệu 32 Ải Toán Học
const mathLessons = [
  {
    id: 'm1', stage: 1, difficulty: 'easy', title: 'Đếm quả táo đỏ', opponentName: 'Gấu Thần Rừng', opponentAvatar: '🐻',
    questionText: 'Bé hãy đếm xem có bao nhiêu quả táo đỏ trên cây nhé?',
    items: ['🍎', '🍎', '🍎', '🍎', '🍎'], options: ['3', '4', '5', '6'], correctAnswer: '5',
    scaffoldHint: 'Bé hãy chỉ tay và cùng đếm từng quả: 1, 2, 3, 4, và 5 quả táo!',
    funFact: 'Táo chứa nhiều vitamin giúp mắt sáng và cơ thể khỏe mạnh đấy!'
  },
  {
    id: 'm2', stage: 2, difficulty: 'easy', title: 'Phép cộng trong rừng', opponentName: 'Thỏ Trắng Nhanh Trí', opponentAvatar: '🐰',
    questionText: 'Có 3 chú thỏ con, thêm 2 chú thỏ chạy tới. Có tất cả mấy chú thỏ?',
    leftItems: ['🐰', '🐰', '🐰'], operator: '+', rightItems: ['🐰', '🐰'], options: ['4', '5', '6', '7'], correctAnswer: '5',
    scaffoldHint: 'Bé gom lại: 3 chú thỏ + 2 chú thỏ nữa = 5 chú thỏ con tất cả!',
    funFact: '3 cộng 2 bằng 5. Bé làm toán nhanh như chớp!'
  },
  {
    id: 'm3', stage: 3, difficulty: 'easy', title: 'Hái cà rốt cho sóc', opponentName: 'Sóc Nâu Tinh Nghịch', opponentAvatar: '🐿️',
    questionText: 'Chú sóc có 6 củ cà rốt, sóc ăn hết 2 củ. Sóc còn lại mấy củ?',
    leftItems: ['🥕', '🥕', '🥕', '🥕', '🥕', '🥕'], operator: '-', rightItems: ['🥕', '🥕'], options: ['3', '4', '5', '6'], correctAnswer: '4',
    scaffoldHint: 'Từ 6 củ ban đầu, bé bớt đi 2 củ: 6 trừ 2 còn lại đúng 4 củ cà rốt!',
    funFact: 'Phép trừ là hành động bớt đi hoặc cho đi một phần đó bé!'
  },
  {
    id: 'm4', stage: 4, difficulty: 'easy', title: 'So sánh số lượng', opponentName: 'Rùa Già Thông Thái', opponentAvatar: '🐢',
    questionText: 'Bên nào có nhiều ngôi sao hơn? Điền dấu thích hợp: 4 ... 7',
    visual: '4 ⭐⭐⭐⭐  so với  7 ⭐⭐⭐⭐⭐⭐⭐', options: ['< (Bé hơn)', '> (Lớn hơn)', '= (Bằng nhau)'], correctAnswer: '< (Bé hơn)',
    scaffoldHint: '4 ít hơn 7, nên cái miệng cá sấu sẽ há rộng về phía số 7 to hơn: 4 < 7!',
    funFact: 'Dấu bé hơn mũi nhọn luôn hướng về số nhỏ hơn đó bé!'
  },
  {
    id: 'm5', stage: 5, difficulty: 'easy', title: 'Thu hoạch cam vàng', opponentName: 'Khỉ Vàng Nhanh Nhẹn', opponentAvatar: '🐒',
    questionText: 'Bé có 4 quả cam, mẹ cho thêm 4 quả cam nữa. Bé có tất cả mấy quả cam?',
    leftItems: ['🍊', '🍊', '🍊', '🍊'], operator: '+', rightItems: ['🍊', '🍊', '🍊', '🍊'], options: ['6', '7', '8', '9'], correctAnswer: '8',
    scaffoldHint: 'Bé đếm tiếp từ 4: thêm 1 là 5, thêm 2 là 6, thêm 3 là 7, thêm 4 là 8! 4 + 4 = 8!',
    funFact: 'Quả cam có nhiều vitamin C giúp bé không bị ốm vặt!'
  },
  {
    id: 'm6', stage: 6, difficulty: 'easy', title: 'Đàn ong chăm chỉ', opponentName: 'Ong Chúa Hoàng Gia', opponentAvatar: '🐝',
    questionText: 'Có 9 chú ong đang hút mật, 4 chú ong bay về tổ. Còn lại mấy chú ong?',
    leftItems: ['🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝'], operator: '-', rightItems: ['🐝', '🐝', '🐝', '🐝'], options: ['4', '5', '6', '7'], correctAnswer: '5',
    scaffoldHint: 'Bé lấy 9 ngón tay bớt đi 4 ngón: 9 trừ 4 còn lại đúng 5 chú ong!',
    funFact: 'Ong mật bay rất xa để mang về giọt mật ngọt ngào cho đời!'
  },
  {
    id: 'm7', stage: 7, difficulty: 'easy', title: 'Nhận diện hình khối', opponentName: 'Nhím Gai Kiến Trúc', opponentAvatar: '🦔',
    questionText: 'Hình nào có 3 cạnh và 3 góc nhọn xinh xắn?',
    visual: '🔺 📐', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctAnswer: 'Hình tam giác',
    scaffoldHint: 'Tam có nghĩa là 3! Hình có 3 cạnh là hình tam giác như chiếc bánh pizza hay mái nhà!',
    funFact: 'Kim tự tháp nổi tiếng ở Ai Cập có các mặt là hình tam giác khổng lồ đấy!'
  },
  {
    id: 'm8', stage: 8, difficulty: 'easy', title: 'Bé xem đồng hồ', opponentName: 'Cú Đồng Hồ Cổ', opponentAvatar: '🦉',
    questionText: 'Kim ngắn chỉ số 7, kim dài chỉ số 12. Bây giờ là mấy giờ?',
    visual: '⏰ (Kim ngắn: 7, Kim dài: 12)', options: ['6 giờ đúng', '7 giờ đúng', '8 giờ đúng', '12 giờ đúng'], correctAnswer: '7 giờ đúng',
    scaffoldHint: 'Khi kim dài chỉ số 12, kim ngắn chỉ vào số nào thì là đúng giờ đó: 7 giờ sáng bé đi học!',
    funFact: 'Dậy sớm lúc 6-7 giờ sáng giúp bé hít thở không khí trong lành và thông minh hơn!'
  },
  {
    id: 'm9', stage: 9, difficulty: 'easy', title: 'Phép cộng ba số', opponentName: 'Voi Con Khổng Lồ', opponentAvatar: '🐘',
    questionText: 'Tính nhẩm nhanh chuỗi phép tính: 2 + 3 + 2 = ?',
    visual: '🌟 2 + 3 + 2 = ?', options: ['6', '7', '8', '9'], correctAnswer: '7',
    scaffoldHint: 'Bé làm từng bước: 2 + 3 = 5, sau đó lấy 5 + 2 = 7!',
    funFact: 'Tính nhẩm từng đôi một là bí quyết của các kiện tướng toán học!'
  },
  {
    id: 'm10', stage: 10, difficulty: 'easy', title: 'Kho báu số 10 tròn trĩnh', opponentName: 'Rồng Thần Hộ Vệ', opponentAvatar: '🐉',
    questionText: 'Số nào cộng với 6 để vừa tròn số 10 kỳ diệu? 6 + ... = 10',
    visual: '💎 6 + ? = 10', options: ['3', '4', '5', '6'], correctAnswer: '4',
    scaffoldHint: 'Bé xòe 10 ngón tay, gập lại 6 ngón tay, đếm số ngón tay còn đứng: đúng 4 ngón! 6 + 4 = 10!',
    funFact: 'Số 10 là số tròn chục nhỏ nhất và có hai chữ số đó bé!'
  },
  // Bổ sung 22 ải mới với độ khó tăng dần
  {
    id: 'm11', stage: 11, difficulty: 'medium', title: 'Phép cộng phạm vi 20', opponentName: 'Hươu Sao Nhanh Trí', opponentAvatar: '🦌',
    questionText: 'Một đàn hươu có 10 con, thêm 5 con chạy đến nhập đàn. Có tất cả bao nhiêu con hươu?',
    visual: '🦌 10 + 5 = ?', options: ['13', '14', '15', '16'], correctAnswer: '15',
    scaffoldHint: '1 chục cộng với 5 đơn vị là mười lăm (15)! 10 + 5 = 15!',
    funFact: 'Số 15 gồm 1 chục và 5 đơn vị ghép lại đấy bé!'
  },
  {
    id: 'm12', stage: 12, difficulty: 'medium', title: 'Nhảy cóc đếm cách 2', opponentName: 'Ếch Xanh Vui Nhộn', opponentAvatar: '🐸',
    questionText: 'Chú ếch nhảy theo dãy số chẵn: 2, 4, 6, 8, ... Chú sẽ nhảy vào số nào tiếp theo?',
    visual: '🐸 2 ➔ 4 ➔ 6 ➔ 8 ➔ ?', options: ['9', '10', '11', '12'], correctAnswer: '10',
    scaffoldHint: 'Mỗi lần nhảy chú ếch cộng thêm 2: 8 cộng thêm 2 bằng 10!',
    funFact: 'Đếm cách 2 chính là nền tảng để sau này bé học bảng nhân 2 siêu nhanh!'
  },
  {
    id: 'm13', stage: 13, difficulty: 'medium', title: 'Phép trừ không nhớ phạm vi 20', opponentName: 'Cừu Bông Thông Thái', opponentAvatar: '🐑',
    questionText: 'Bác nông dân có 17 quả trứng, bác biếu bà nội 4 quả. Bác còn lại bao nhiêu quả trứng?',
    visual: '🥚 17 - 4 = ?', options: ['11', '12', '13', '14'], correctAnswer: '13',
    scaffoldHint: 'Bé lấy hàng đơn vị trừ trước: 7 - 4 = 3, giữ nguyên 1 chục là 13!',
    funFact: 'Trừ hàng đơn vị trước là quy tắc chuẩn để tính nhẩm số lớn!'
  },
  {
    id: 'm14', stage: 14, difficulty: 'medium', title: 'Số liền trước và liền sau', opponentName: 'Chuột Túi Nhảy Cao', opponentAvatar: '🦘',
    questionText: 'Số liền trước của số 19 là số nào?',
    visual: '❓ ➔ 19 ➔ 20', options: ['17', '18', '20', '21'], correctAnswer: '18',
    scaffoldHint: 'Muốn tìm số liền trước, bé chỉ cần lấy số đó bớt đi 1: 19 - 1 = 18!',
    funFact: 'Số liền trước đứng ngay trước, số liền sau đứng ngay sau trên tia số!'
  },
  {
    id: 'm15', stage: 15, difficulty: 'medium', title: 'Thước kẻ xăng-ti-mét (cm)', opponentName: 'Hải Ly Thợ Mộc', opponentAvatar: '🦫',
    questionText: 'Cây bút chì đặt từ vạch 0 cm đến vạch 9 cm trên thước kẻ. Chiếc bút chì dài mấy cm?',
    visual: '📏 [0 cm ──────── 9 cm]', options: ['7 cm', '8 cm', '9 cm', '10 cm'], correctAnswer: '9 cm',
    scaffoldHint: 'Điểm đầu ở vạch 0, điểm cuối ở vạch 9 nên bút chì dài đúng 9 cm!',
    funFact: 'Xăng-ti-mét viết tắt là cm, đơn vị đo độ dài rất quen thuộc của học sinh!'
  },
  {
    id: 'm16', stage: 16, difficulty: 'medium', title: 'Phép tính hai bước liên tiếp', opponentName: 'Ngựa Vằn Tốc Độ', opponentAvatar: '🦓',
    questionText: 'Tính giá trị biểu thức: 16 - 6 + 5 = ?',
    visual: '⚡ (16 - 6) + 5 = ?', options: ['13', '14', '15', '16'], correctAnswer: '15',
    scaffoldHint: 'Bé tính từ trái sang phải: 16 - 6 = 10, sau đó 10 + 5 = 15!',
    funFact: 'Làm tính từ trái sang phải là quy tắc vàng của toán học!'
  },
  {
    id: 'm17', stage: 17, difficulty: 'medium', title: 'Bài toán nhiều hơn', opponentName: 'Gấu Trúc Dễ Thương', opponentAvatar: '🐼',
    questionText: 'Lan có 7 bông hoa, Mai có nhiều hơn Lan 3 bông hoa. Hỏi Mai có mấy bông hoa?',
    visual: '🌸 Lan: 7 bông | Mai: nhiều hơn 3', options: ['9 bông', '10 bông', '11 bông', '12 bông'], correctAnswer: '10 bông',
    scaffoldHint: 'Nhiều hơn thì bé làm phép cộng: 7 + 3 = 10 bông hoa!',
    funFact: 'Từ "nhiều hơn" báo hiệu phép cộng ngọt ngào!'
  },
  {
    id: 'm18', stage: 18, difficulty: 'medium', title: 'Cộng các số tròn chục', opponentName: 'Hà Mã Khổng Lồ', opponentAvatar: '🦛',
    questionText: 'Đoàn tàu có 30 toa hàng, nối thêm 40 toa hàng nữa. Đoàn tàu có tất cả bao nhiêu toa?',
    visual: '🚂 30 + 40 = ?', options: ['60', '70', '80', '90'], correctAnswer: '70',
    scaffoldHint: '3 chục + 4 chục = 7 chục. 7 chục là 70 toa hàng!',
    funFact: 'Cộng các số tròn chục chỉ cần cộng chữ số hàng chục và thêm số 0 ở sau!'
  },
  {
    id: 'm19', stage: 19, difficulty: 'medium', title: 'Tìm số bí ẩn trong ô trống', opponentName: 'Bạch Tuộc Xảo Quyệt', opponentAvatar: '🐙',
    questionText: 'Tìm số thích hợp điền vào ô vuông: 12 + ⬛ = 18',
    visual: '🔍 12 + [ ? ] = 18', options: ['4', '5', '6', '7'], correctAnswer: '6',
    scaffoldHint: 'Bé lấy 18 trừ đi 12: 18 - 12 = 6! Vậy số cần tìm là 6!',
    funFact: 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết!'
  },
  {
    id: 'm20', stage: 20, difficulty: 'medium', title: 'Lịch tuần của bé', opponentName: 'Chó Sói Tri Thức', opponentAvatar: '🐺',
    questionText: 'Một tuần lễ có 7 ngày. Nếu hôm nay là Thứ Tư, thì ngày mai là thứ mấy?',
    visual: '📅 T2 ➔ T3 ➔ T4 ➔ [ ? ]', options: ['Thứ Ba', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'], correctAnswer: 'Thứ Năm',
    scaffoldHint: 'Thứ Năm là ngày đứng liền sau Thứ Tư trong tuần lễ!',
    funFact: 'Một tuần có 7 ngày: Thứ Hai, Ba, Tư, Năm, Sáu, Bảy và Chủ Nhật!'
  },
  {
    id: 'm21', stage: 21, difficulty: 'hard', title: 'Khối lập phương & Hộp chữ nhật', opponentName: 'Sư Tử Kiến Trúc Sư', opponentAvatar: '🦁',
    questionText: 'Viên xúc xắc xúc xắc 6 mặt đều bằng nhau có hình dạng của khối gì?',
    visual: '🎲 (Xúc xắc 6 mặt vuông)', options: ['Khối lập phương', 'Khối cầu', 'Khối trụ', 'Khối chữ nhật'], correctAnswer: 'Khối lập phương',
    scaffoldHint: 'Khối lập phương có 6 mặt đều là các hình vuông bằng nhau chằn chặn!',
    funFact: 'Khối rubik huyền thoại cũng được ghép từ các khối lập phương nhỏ đấy!'
  },
  {
    id: 'm22', stage: 22, difficulty: 'hard', title: 'So sánh hai biểu thức', opponentName: 'Báo Đốm Nhanh Chân', opponentAvatar: '🐆',
    questionText: 'Điền dấu so sánh thích hợp: (8 + 5) ... (9 + 4)',
    visual: '⚖️ (8 + 5) so với (9 + 4)', options: ['< (Bé hơn)', '> (Lớn hơn)', '= (Bằng nhau)'], correctAnswer: '= (Bằng nhau)',
    scaffoldHint: 'Bé tính hai vế: 8 + 5 = 13, 9 + 4 = 13. Cả hai vế đều bằng 13 nên điền dấu = !',
    funFact: 'Khi hai phép tính có cùng kết quả, chúng bằng nhau tuyệt đối!'
  },
  {
    id: 'm23', stage: 23, difficulty: 'hard', title: 'Phép cộng qua 10 (Tách số)', opponentName: 'Phượng Hoàng Lửa', opponentAvatar: '🦅',
    questionText: 'Tính nhẩm bằng cách làm tròn 10: 9 + 6 = ?',
    visual: '🔥 9 + 1 + 5 = ?', options: ['14', '15', '16', '17'], correctAnswer: '15',
    scaffoldHint: '9 cần thêm 1 để thành 10. Tách 6 thành 1 và 5: 9 + 1 = 10, rồi 10 + 5 = 15!',
    funFact: 'Tách số để làm tròn 10 là tuyệt chiêu tính nhẩm của các thần đồng toán học!'
  },
  {
    id: 'm24', stage: 24, difficulty: 'hard', title: 'Phép trừ qua 10', opponentName: 'Cá Sấu Đầm Lầy', opponentAvatar: '🐊',
    questionText: 'Có 14 quả dừa trên cây, gió thổi rụng 6 quả. Còn lại bao nhiêu quả dừa?',
    visual: '🥥 14 - 6 = ?', options: ['7', '8', '9', '10'], correctAnswer: '8',
    scaffoldHint: 'Lấy 14 trừ 4 được 10, rồi lấy 10 trừ tiếp 2 bằng 8! 14 - 6 = 8!',
    funFact: '14 - 6 = 8. Bớt dần qua 10 giúp bé không bao giờ bị trừ sai!'
  },
  {
    id: 'm25', stage: 25, difficulty: 'hard', title: 'Khởi động bảng nhân 2', opponentName: 'Tê Giác Dũng Mãnh', opponentAvatar: '🦏',
    questionText: 'Có 4 đôi đũa. Mỗi đôi đũa có 2 chiếc đũa. Hỏi có tất cả mấy chiếc đũa?',
    visual: '🥢 2 được lấy 4 lần: 2 x 4 = ?', options: ['6 chiếc', '7 chiếc', '8 chiếc', '10 chiếc'], correctAnswer: '8 chiếc',
    scaffoldHint: '2 + 2 + 2 + 2 = 8 chiếc đũa, viết gọn là 2 x 4 = 8!',
    funFact: 'Phép nhân chính là phép cộng nhiều số giống nhau lặp lại!'
  },
  {
    id: 'm26', stage: 26, difficulty: 'hard', title: 'Khởi động bảng chia 2', opponentName: 'Thiên Nga Thần Tiên', opponentAvatar: '🦢',
    questionText: 'Có 10 cái kẹo chia đều cho 2 bạn. Mỗi bạn nhận được mấy cái kẹo?',
    visual: '🍬 10 cái kẹo chia cho 2 bạn: 10 : 2 = ?', options: ['4 cái', '5 cái', '6 cái', '7 cái'], correctAnswer: '5 cái',
    scaffoldHint: 'Chia đều làm 2 phần bằng nhau: 10 : 2 = 5 cái kẹo mỗi bạn!',
    funFact: 'Chia sẻ kẹo cùng bạn bè vừa vui vừa giúp bé hiểu phép chia!'
  },
  {
    id: 'm27', stage: 27, difficulty: 'hard', title: 'Tìm quy luật dãy số bí ẩn', opponentName: 'Tắc Kè Đổi Màu', opponentAvatar: '🦎',
    questionText: 'Dãy số ma thuật: 1, 4, 7, 10, ... Số tiếp theo là số nào?',
    visual: '✨ 1 (+3) ➔ 4 (+3) ➔ 7 (+3) ➔ 10 (+3) ➔ ?', options: ['11', '12', '13', '14'], correctAnswer: '13',
    scaffoldHint: 'Mỗi số đứng sau đều hơn số đứng trước 3 đơn vị: 10 + 3 = 13!',
    funFact: 'Tìm ra quy luật dãy số chứng tỏ tư duy logic của bé cực kỳ sắc sảo!'
  },
  {
    id: 'm28', stage: 28, difficulty: 'hard', title: 'Cân đĩa thăng bằng logic', opponentName: 'Gấu Bắc Cực Trí Tuệ', opponentAvatar: '🐻‍❄️',
    questionText: '1 quả dưa hấu nặng bằng 3 quả táo. Nếu có 2 quả dưa hấu thì nặng bằng mấy quả táo?',
    visual: '⚖️ 🍉 = 🍎🍎🍎 | 🍉🍉 = ?', options: ['4 quả', '5 quả', '6 quả', '8 quả'], correctAnswer: '6 quả',
    scaffoldHint: 'Mỗi quả dưa hấu bằng 3 quả táo, nên 2 quả dưa hấu là 3 + 3 = 6 quả táo!',
    funFact: 'Cân thăng bằng là bài toán rèn luyện trí tuệ nổi tiếng thế giới!'
  },
  {
    id: 'm29', stage: 29, difficulty: 'boss', title: 'Khám phá bảng nhân 5', opponentName: 'Cá Heo Hoàng Gia', opponentAvatar: '🐬',
    questionText: 'Có 5 lọ hoa, mỗi lọ cắm 4 bông hoa rực rỡ. Có tất cả bao nhiêu bông hoa?',
    visual: '💐 5 x 4 = ?', options: ['18 bông', '20 bông', '22 bông', '25 bông'], correctAnswer: '20 bông',
    scaffoldHint: '5 lấy 4 lần: 5 + 5 + 5 + 5 = 20 bông hoa! 5 x 4 = 20!',
    funFact: 'Bảng nhân 5 có chữ số tận cùng luôn là 0 hoặc 5 rất dễ nhớ!'
  },
  {
    id: 'm30', stage: 30, difficulty: 'boss', title: 'Tính nhanh cộng có nhớ', opponentName: 'Chim Ưng Tinh Anh', opponentAvatar: '🦅',
    questionText: 'Tính nhanh giá trị: 28 + 12 = ?',
    visual: '💎 28 + 12 = ?', options: ['38', '40', '42', '50'], correctAnswer: '40',
    scaffoldHint: '8 + 2 = 10, nhớ 1 chục; 2 + 1 = 3, thêm 1 chục vừa nhớ là 4 chục = 40!',
    funFact: '28 + 12 = 40 tròn trĩnh tuyệt đẹp!'
  },
  {
    id: 'm31', stage: 31, difficulty: 'boss', title: 'Bài toán hai bước giải', opponentName: 'Kỳ Lân Cổ Đại', opponentAvatar: '🦄',
    questionText: 'Nam có 15 viên bi. Nam cho Bình 5 viên bi, sau đó mẹ mua thêm cho Nam 8 viên bi. Hỏi Nam có mấy viên bi?',
    visual: '🔮 15 - 5 + 8 = ?', options: ['16 viên', '17 viên', '18 viên', '20 viên'], correctAnswer: '18 viên',
    scaffoldHint: 'Bước 1: Sau khi cho Bình, Nam còn 15 - 5 = 10 viên. Bước 2: Mẹ cho thêm 10 + 8 = 18 viên!',
    funFact: 'Chia bài toán dài thành từng bước nhỏ sẽ giúp mọi câu hỏi trở nên dễ dàng!'
  },
  {
    id: 'm32', stage: 32, difficulty: 'boss', title: 'Vua Rồng Đại Năng Lượng (TRÙM TOÁN)', opponentName: 'Vua Rồng Kim Cương', opponentAvatar: '👑🐉',
    questionText: 'Số bí mật nào khi trừ đi 15 thì được kết quả đúng bằng 25? (⬛ - 15 = 25)',
    visual: '⚔️ [ ? ] - 15 = 25', options: ['30', '35', '40', '45'], correctAnswer: '40',
    scaffoldHint: 'Muốn tìm số bị trừ, bé lấy hiệu cộng với số trừ: 25 + 15 = 40! Số bí mật là 40!',
    funFact: 'Bé đã giải mã câu đố của Vua Rồng Kim Cương! Bé chính là Đại Hiệp Sĩ Toán Học!'
  }
];

// Dữ liệu 30 Ải Tiếng Việt
const vietnameseLessons = [
  {
    id: 'v1', stage: 1, difficulty: 'easy', title: 'Thanh điệu kỳ diệu', opponentName: 'Vẹt Sặc Sỡ', opponentAvatar: '🦜',
    questionText: 'Tiếng "cá" gồm chữ "c", chữ "a" và dấu gì ở trên đầu?',
    displayWord: 'C Á', options: ['Dấu huyền ( \\ )', 'Dấu sắc ( / )', 'Dấu hỏi ( ? )', 'Dấu nặng ( . )'], correctAnswer: 'Dấu sắc ( / )',
    scaffoldHint: 'Dấu sắc như nét bút chéo lên từ trái sang phải: c - a - sắc - cá!',
    funFact: 'Tiếng Việt có 5 dấu thanh làm nên lời ru ngọt ngào!'
  },
  {
    id: 'v2', stage: 2, difficulty: 'easy', title: 'Ghép chữ tạo từ', opponentName: 'Mèo Mướp Chăm Học', opponentAvatar: '🐱',
    questionText: 'Ghép âm "b" đứng trước và vần "a" đứng sau, ta được tiếng gì?',
    displayFormula: 'b + a = ?', options: ['ba', 'ca', 'da', 'ma'], correctAnswer: 'ba',
    scaffoldHint: 'Bé đọc trơn: bờ - a - ba! "Ba" là người cha yêu thương bé đó.',
    funFact: 'Chữ b và chữ a là những chữ cái đầu tiên bé học đấy!'
  },
  {
    id: 'v3', stage: 3, difficulty: 'easy', title: 'Tìm chữ cái còn thiếu', opponentName: 'Cừu Bông Trắng', opponentAvatar: '🐑',
    questionText: 'Điền chữ cái còn thiếu vào chỗ chấm: "M ... MẸ"',
    visual: '👩‍👧', options: ['ẹ', 'a', 'ô', 'u'], correctAnswer: 'ẹ',
    scaffoldHint: 'Mẹ yêu của bé! m - e - nặng - mẹ!',
    funFact: 'Tiếng "Mẹ" là âm thanh ấm áp nhất trên đời.'
  },
  {
    id: 'v4', stage: 4, difficulty: 'easy', title: 'Chữ hoa và chữ thường', opponentName: 'Họa Mi Hót Vang', opponentAvatar: '🐦',
    questionText: 'Chữ in thường của chữ cái in hoa "A" là chữ nào?',
    displayWord: 'Chữ in hoa: A', options: ['a', 'b', 'c', 'd'], correctAnswer: 'a',
    scaffoldHint: 'Chữ A in hoa đứng đầu bảng chữ cái, chữ in thường là "a" tròn xinh có nét móc!',
    funFact: 'Chữ in hoa thường được viết ở đầu câu và tên riêng của bé đó!'
  },
  {
    id: 'v5', stage: 5, difficulty: 'easy', title: 'Ghép vần có âm cuối', opponentName: 'Khỉ Thông Thái', opponentAvatar: '🐵',
    questionText: 'Ghép âm "n" vào sau vần "a" ta được vần gì? (a + n = ?)',
    displayFormula: 'a + n = ?', options: ['an', 'am', 'ang', 'anh'], correctAnswer: 'an',
    scaffoldHint: 'A - n - an! Vần "an" trong từ "bạn bè", "bàn học"!',
    funFact: 'Vần "an" có mặt trong rất nhiều bài thơ hay của thiếu nhi.'
  },
  {
    id: 'v6', stage: 6, difficulty: 'easy', title: 'Phân biệt dấu hỏi và dấu ngã', opponentName: 'Thiên Nga Dịu Dàng', opponentAvatar: '🦢',
    questionText: 'Từ chỉ quả màu đỏ ngọt mát là "quả ..."? Điền từ đúng chính tả:',
    visual: '🍒', options: ['quả đỏ (dấu hỏi)', 'quả đõ (dấu ngã)', 'quả đo (không dấu)', 'quả đọ (dấu nặng)'], correctAnswer: 'quả đỏ (dấu hỏi)',
    scaffoldHint: 'Đỏ tươi viết bằng dấu hỏi: đ - o - hỏi - đỏ!',
    funFact: 'Dấu hỏi có hình dáng như một chiếc móc câu xinh xắn!'
  },
  {
    id: 'v7', stage: 7, difficulty: 'easy', title: 'Đố vui con vật', opponentName: 'Cáo Hiền Lành', opponentAvatar: '🦊',
    questionText: '"Con gì đuôi ngắn tai dài - Mắt hồng lông mượt có tài chạy nhanh?"',
    visual: '🥕 🐾', options: ['Con thỏ', 'Con mèo', 'Con chuột', 'Con chó'], correctAnswer: 'Con thỏ',
    scaffoldHint: 'Con thỏ rất thích ăn cà rốt và có đôi tai dài dựng đứng!',
    funFact: 'Thỏ chạy rất nhanh nhờ đôi chân sau khỏe mạnh đấy!'
  },
  {
    id: 'v8', stage: 8, difficulty: 'easy', title: 'Từ chỉ hoạt động của bé', opponentName: 'Sư Tử Tiên Tri', opponentAvatar: '🦁',
    questionText: 'Từ nào dưới đây là từ chỉ hoạt động mà bé làm mỗi ngày?',
    visual: '🏃‍♂️ 📖', options: ['Đọc sách', 'Quyển vở', 'Cái bàn', 'Ngôi trường'], correctAnswer: 'Đọc sách',
    scaffoldHint: 'Hoạt động là việc bé cử động và làm: đọc sách, múa hát, chạy nhảy!',
    funFact: 'Mỗi ngày đọc sách 15 phút sẽ giúp vốn từ của bé phong phú như một nhà văn!'
  },
  // Bổ sung 22 ải Tiếng Việt
  {
    id: 'v9', stage: 9, difficulty: 'medium', title: 'Quy tắc chính tả C hay K', opponentName: 'Gà Trống Thông Thái', opponentAvatar: '🐓',
    questionText: 'Đồ vật để ngắm khuôn mặt xinh xắn viết đúng chính tả là cái gì?',
    visual: '🪞', options: ['Cái kính', 'Cái cính', 'Cái kĩnh', 'Cái cĩn'], correctAnswer: 'Cái kính',
    scaffoldHint: 'Quy tắc nhớ đời: Âm "k" luôn đi trước các chữ i, e, ê (kính, kem, kẹo)!',
    funFact: 'K đứng trước i, e, ê; còn C đứng trước a, o, ô, ơ, u, ư!'
  },
  {
    id: 'v10', stage: 10, difficulty: 'medium', title: 'Quy tắc chính tả G hay GH', opponentName: 'Ngựa Gỗ Thần Kỳ', opponentAvatar: '🎠',
    questionText: 'Đồ vật để ngồi học bài viết đúng chính tả là cái gì?',
    visual: '🪑', options: ['Cái ghế', 'Cái gế', 'Cái ghê', 'Cái gễ'], correctAnswer: 'Cái ghế',
    scaffoldHint: 'Âm "gh" (ghép thêm chữ h) luôn đi trước các chữ i, e, ê: ghế, ghi, ghé!',
    funFact: 'Nhớ câu thần chú: gh chỉ bầu bạn cùng i, e, ê thôi bé nhé!'
  },
  {
    id: 'v11', stage: 11, difficulty: 'medium', title: 'Quy tắc chính tả NG hay NGH', opponentName: 'Ngỗng Trắng Khổng Lồ', opponentAvatar: '🪿',
    questionText: 'Hành động dùng tai để thưởng thức bài hát viết đúng chính tả là gì?',
    visual: '🎧 👂', options: ['Nghe nhạc', 'Nge nhạc', 'Nghè nhạc', 'Ngề nhạc'], correctAnswer: 'Nghe nhạc',
    scaffoldHint: 'Âm "ngh" đứng trước chữ e: n - g - h - e = nghe!',
    funFact: 'Cũng giống gh và k, ngh luôn đi trước i, e, ê!'
  },
  {
    id: 'v12', stage: 12, difficulty: 'medium', title: 'Vần đôi thơm ngon: UÔI', opponentName: 'Khỉ Thích Chuối', opponentAvatar: '🐒',
    questionText: 'Quả gì vỏ vàng, vị ngọt thơm chú khỉ rất mê?',
    visual: '🍌', options: ['Quả chuối', 'Quả chuói', 'Quả chuới', 'Quả chuổi'], correctAnswer: 'Quả chuối',
    scaffoldHint: 'Ch - uôi - sắc - chuối! Vần "uôi" gồm ba chữ u, ô, i ghép lại!',
    funFact: 'Chuối là loại quả giàu năng lượng giúp bé học tập hăng say!'
  },
  {
    id: 'v13', stage: 13, difficulty: 'medium', title: 'Sắp xếp trật tự câu', opponentName: 'Sóc Nhặt Hạt Dẻ', opponentAvatar: '🐿️',
    questionText: 'Sắp xếp các từ: "chăm chỉ / Bé / học bài" thành câu hoàn chỉnh và có nghĩa:',
    visual: '🧩 chăm chỉ / Bé / học bài', options: ['Bé chăm chỉ học bài.', 'Học bài bé chăm chỉ.', 'Chăm chỉ bé học bài.', 'Bé học chăm bài chỉ.'], correctAnswer: 'Bé chăm chỉ học bài.',
    scaffoldHint: 'Từ chỉ người (Bé) đứng đầu câu, tiếp theo là đặc điểm (chăm chỉ) và hành động (học bài)!',
    funFact: 'Đầu câu viết hoa, cuối câu có dấu chấm là câu chuẩn mực!'
  },
  {
    id: 'v14', stage: 14, difficulty: 'medium', title: 'Điền từ vào ca dao tục ngữ', opponentName: 'Cò Trắng Bay Lả', opponentAvatar: '🦩',
    questionText: 'Điền từ còn thiếu vào câu tục ngữ: "Học ăn, học nói, học gói, học ..."',
    visual: '📜 Học ăn, học nói, học gói, học ... ?', options: ['mở', 'hát', 'chơi', 'cười'], correctAnswer: 'mở',
    scaffoldHint: '"Học gói, học mở" là lời khuyên bé học cách cư xử khéo léo và lễ phép!',
    funFact: 'Tục ngữ Việt Nam chứa đựng bao lời dạy sâu sắc của ông bà ngày xưa!'
  },
  {
    id: 'v15', stage: 15, difficulty: 'medium', title: 'Dấu chấm câu đúng vị trí', opponentName: 'Chim Bồ Câu Đưa Thư', opponentAvatar: '🕊️',
    questionText: 'Dấu câu nào dùng để kết thúc một câu kể đầy đủ ý nghĩa?',
    visual: '📝 Hôm nay trời nắng đẹp [ ? ]', options: ['Dấu chấm ( . )', 'Dấu phẩy ( , )', 'Dấu hai chấm ( : )', 'Dấu gạch ngang ( - )'], correctAnswer: 'Dấu chấm ( . )',
    scaffoldHint: 'Khi câu kể đã diễn đạt trọn vẹn một ý, bé đặt dấu chấm ( . ) ở cuối câu!',
    funFact: 'Dấu chấm như một trạm dừng chân cho mắt bé nghỉ ngơi khi đọc sách!'
  },
  {
    id: 'v16', stage: 16, difficulty: 'medium', title: 'Từ chỉ đặc điểm màu sắc', opponentName: 'Bướm Hoa Vườn Cúc', opponentAvatar: '🦋',
    questionText: 'Từ nào dưới đây là từ chỉ màu sắc của bông hoa cúc mùa thu?',
    visual: '🌼', options: ['Vàng tươi', 'Chạy nhảy', 'Bàn ghế', 'Hát ca'], correctAnswer: 'Vàng tươi',
    scaffoldHint: 'Vàng tươi là từ chỉ màu sắc rực rỡ của cánh hoa cúc!',
    funFact: 'Từ chỉ đặc điểm giúp bức tranh ngôn từ của bé trở nên sinh động và rực rỡ!'
  },
  {
    id: 'v17', stage: 17, difficulty: 'medium', title: 'Từ chỉ sự vật trong nhà', opponentName: 'Mèo Lười Sưởi Nắng', opponentAvatar: '🐈',
    questionText: 'Từ nào dưới đây là từ chỉ đồ vật quen thuộc trong gia đình em?',
    visual: '📺 🛏️', options: ['Cái tivi', 'Múa may', 'Vui vẻ', 'Chạy nhanh'], correctAnswer: 'Cái tivi',
    scaffoldHint: 'Sự vật là người, đồ vật, con vật, cây cối bé có thể nhìn thấy và chạm vào!',
    funFact: 'Xung quanh bé có hàng ngàn sự vật đáng yêu đấy!'
  },
  {
    id: 'v18', stage: 18, difficulty: 'medium', title: 'Cặp từ trái nghĩa', opponentName: 'Gấu Trắng & Chuột Nhắt', opponentAvatar: '🐻🐭',
    questionText: 'Từ trái nghĩa với từ "Nhanh" (như chú rùa và thỏ) là từ nào?',
    visual: '🏎️ ➔ Nhanh  |  🐢 ➔ [ ? ]', options: ['Chậm', 'Cao', 'Lớn', 'Dài'], correctAnswer: 'Chậm',
    scaffoldHint: 'Nhanh đối lập với Chậm chạp như thỏ phóng nhanh còn rùa bò chậm!',
    funFact: 'Từ trái nghĩa giúp bé so sánh sự việc rõ ràng hơn bao giờ hết!'
  },
  {
    id: 'v19', stage: 19, difficulty: 'medium', title: 'Cặp từ đồng nghĩa gần gũi', opponentName: 'Ong Vàng Chăm Chỉ', opponentAvatar: '🐝',
    questionText: 'Từ nào có nghĩa giống với từ "Chăm chỉ" học tập?',
    visual: '📚 ✨', options: ['Cần cù', 'Lười biếng', 'Vội vàng', 'Chậm chạp'], correctAnswer: 'Cần cù',
    scaffoldHint: 'Cần cù và chăm chỉ đều khen ngợi người chịu khó làm việc và học bài!',
    funFact: 'Tiếng Việt có rất nhiều từ đồng nghĩa phong phú!'
  },
  {
    id: 'v20', stage: 20, difficulty: 'medium', title: 'Mẫu câu "Ai là gì?"', opponentName: 'Cô Giáo Cú Mèo', opponentAvatar: '🦉',
    questionText: 'Câu nào dưới đây được viết theo mẫu câu giới thiệu "Ai là gì?"',
    visual: '👩‍🏫 🏫', options: ['Mẹ em là cô giáo.', 'Mẹ em đang nấu cơm.', 'Mẹ em rất hiền từ.', 'Mẹ em đi làm về.'], correctAnswer: 'Mẹ em là cô giáo.',
    scaffoldHint: 'Mẫu câu có từ "là" dùng để giới thiệu nghề nghiệp hoặc tên gọi: Mẹ em LÀ cô giáo!',
    funFact: 'Mẫu câu "Ai là gì?" giúp bé tự tin giới thiệu bản thân trước cả lớp!'
  },
  {
    id: 'v21', stage: 21, difficulty: 'hard', title: 'Mẫu câu "Ai làm gì?"', opponentName: 'Bác Nông Dân Trâu Mộng', opponentAvatar: '🐃',
    questionText: 'Câu nào dưới đây miêu tả hành động theo mẫu câu "Ai làm gì?"',
    visual: '🌾 🚜', options: ['Bác nông dân đang cày ruộng.', 'Bác nông dân là người lao động.', 'Bác nông dân rất cần cù.', 'Cánh đồng lúa chín vàng.'], correctAnswer: 'Bác nông dân đang cày ruộng.',
    scaffoldHint: '"Cày ruộng" là hành động cụ thể, trả lời cho câu hỏi bác nông dân làm gì!',
    funFact: 'Mẫu câu "Ai làm gì?" luôn chứa từ chỉ hoạt động!'
  },
  {
    id: 'v22', stage: 22, difficulty: 'hard', title: 'Mẫu câu "Ai thế nào?"', opponentName: 'Thiếu Nữ Hoa Sen', opponentAvatar: '🪷',
    questionText: 'Câu nào dưới đây miêu tả đặc điểm theo mẫu câu "Ai thế nào?"',
    visual: '🌸 💖', options: ['Bông hoa hồng rất thơm và đẹp.', 'Bông hoa là loài thực vật.', 'Bé đang tưới nước cho hoa.', 'Gió thổi cánh hoa rơi.'], correctAnswer: 'Bông hoa hồng rất thơm và đẹp.',
    scaffoldHint: '"Thơm và đẹp" là từ chỉ đặc điểm, trả lời cho câu hỏi bông hoa thế nào!',
    funFact: 'Dùng từ chỉ đặc điểm làm cho câu văn tràn ngập cảm xúc!'
  },
  {
    id: 'v23', stage: 23, difficulty: 'hard', title: 'Hình ảnh so sánh đẹp', opponentName: 'Họa Sĩ Công Xòe Đuôi', opponentAvatar: '🦚',
    questionText: 'Điền từ so sánh vào câu thơ: "Mặt trời đỏ rực ... quả cầu lửa khổng lồ."',
    visual: '☀️ 🔴', options: ['như', 'và', 'vì', 'nhưng'], correctAnswer: 'như',
    scaffoldHint: 'Từ "như" dùng để so sánh hai sự vật có nét tương đồng: đỏ rực NHƯ quả cầu lửa!',
    funFact: 'Phép so sánh là đôi cánh giúp bài văn của bé bay bổng!'
  },
  {
    id: 'v24', stage: 24, difficulty: 'hard', title: 'Đọc hiểu đoạn văn ngắn', opponentName: 'Thần Sách Cổ', opponentAvatar: '📖',
    questionText: 'Đọc đoạn văn: "Mùa xuân về, cây cối đâm chồi nảy lộc. Hoa mai hoa đào nở rộ đón Tết." Mùa xuân có hoa gì nở?',
    visual: '🌸 🌼 🧧', options: ['Hoa mai và hoa đào', 'Hoa phượng vĩ', 'Hoa cúc trắng', 'Hoa sen hồng'], correctAnswer: 'Hoa mai và hoa đào',
    scaffoldHint: 'Đoạn văn viết rõ: "Hoa mai hoa đào nở rộ đón Tết"!',
    funFact: 'Đọc kỹ từng câu chữ sẽ giúp bé tìm ra đáp án ngay trong bài đọc!'
  },
  {
    id: 'v25', stage: 25, difficulty: 'hard', title: 'Chính tả phân biệt S hay X', opponentName: 'Ngôi Sao Sáng Ngời', opponentAvatar: '⭐',
    questionText: 'Từ nào viết đúng chính tả để chỉ bầu trời đêm lấp lánh?',
    visual: '✨ 🌌', options: ['Ngôi sao', 'Ngôi xao', 'Xao xáng', 'Ngôi xảo'], correctAnswer: 'Ngôi sao',
    scaffoldHint: 'Ngôi sao viết bằng s (s mạnh): s - ao - sao!',
    funFact: 'Phân biệt s và x giúp nét chữ của bé luôn chuẩn mực và sạch đẹp!'
  },
  {
    id: 'v26', stage: 26, difficulty: 'hard', title: 'Chính tả phân biệt TR hay CH', opponentName: 'Chú Trâu Cần Mẫn', opponentAvatar: '🐂',
    questionText: 'Con vật giúp bác nông dân cày ruộng viết đúng chính tả là con gì?',
    visual: '🌾 🐃', options: ['Con trâu', 'Con châu', 'Con trầu', 'Con chầu'], correctAnswer: 'Con trâu',
    scaffoldHint: 'Con trâu viết bằng chữ tr: tr - âu - trâu!',
    funFact: 'Trâu là bạn thân thiết của nhà nông Việt Nam từ ngàn xưa!'
  },
  {
    id: 'v27', stage: 27, difficulty: 'hard', title: 'Phát hiện lỗi sai chính tả', opponentName: 'Bác Sĩ Cú Vọ Bắt Sâu', opponentAvatar: '🦉',
    questionText: 'Trong câu "Bé rửa tay xạch sẽ trước khi ăn", từ nào bị viết sai chính tả?',
    visual: '🔍 "Bé rửa tay xạch sẽ trước khi ăn"', options: ['xạch sẽ (đúng là sạch sẽ)', 'rửa tay', 'trước khi', 'Bé'], correctAnswer: 'xạch sẽ (đúng là sạch sẽ)',
    scaffoldHint: 'Sạch sẽ phải viết bằng s: s - ach - nặng - sạch!',
    funFact: 'Trở thành thám tử chính tả bắt lỗi sai là trò chơi luyện chữ cực vui!'
  },
  {
    id: 'v28', stage: 28, difficulty: 'hard', title: 'Vốn từ về Tình cảm Gia đình', opponentName: 'Trái Tim Yêu Thương', opponentAvatar: '💖',
    questionText: 'Từ nào thể hiện lòng biết ơn và sự vâng lời của con cái đối với ông bà, cha mẹ?',
    visual: '👨‍👩‍👧‍👦 👵', options: ['Hiếu thảo', 'Tò mò', 'Nhanh nhẹn', 'Thật thà'], correctAnswer: 'Hiếu thảo',
    scaffoldHint: 'Con cháu hiếu thảo luôn yêu thương, chăm sóc và làm vui lòng ông bà cha mẹ!',
    funFact: 'Hiếu thảo là phẩm chất đáng quý nhất của một người con ngoan!'
  },
  {
    id: 'v29', stage: 29, difficulty: 'boss', title: 'Khôi phục câu thơ lục bát', opponentName: 'Cụ Rùa Hồ Gươm', opponentAvatar: '🐢📜',
    questionText: 'Điền từ thích hợp vào câu ca dao: "Công cha như núi Thái Sơn - Nghĩa mẹ như nước trong ... chảy ra."',
    visual: '⛰️ 🌊 "Nghĩa mẹ như nước trong ... chảy ra"', options: ['nguồn', 'sông', 'biển', 'suối'], correctAnswer: 'nguồn',
    scaffoldHint: '"Nước trong nguồn" chảy mãi không bao giờ cạn như tình yêu thương bao la của mẹ!',
    funFact: 'Bài ca dao bất hủ dạy chúng ta về công ơn trời biển của đấng sinh thành!'
  },
  {
    id: 'v30', stage: 30, difficulty: 'boss', title: 'Thần Cổ Thụ Ngôn Ngữ (TRÙM TIẾNG VIỆT)', opponentName: 'Thần Cổ Thụ Tri Thức', opponentAvatar: '👑🌳',
    questionText: 'Từ ngữ nào vừa có nghĩa là "học sinh chịu khó", vừa là lời chúc tốt đẹp nhất?',
    visual: '🌟 📖 Danh hiệu cao quý nhất của học sinh tiểu học', options: ['Chăm ngoan học giỏi', 'Nhanh nhảu đoảng', 'Thao thao bất tuyệt', 'Nói trước quên sau'], correctAnswer: 'Chăm ngoan học giỏi',
    scaffoldHint: 'Cháu ngoan Bác Hồ luôn "Chăm ngoan học giỏi" để mai sau xây dựng đất nước!',
    funFact: 'Chúc mừng bé đã chinh phục trọn vẹn 30 ải Rừng Tiếng Việt! Bé là Trạng Nguyên Nhí xuất sắc!'
  }
];

// Dữ liệu 30 Ải Tiếng Anh
const englishLessons = [
  {
    id: 'e1', stage: 1, difficulty: 'easy', title: 'Magic Colors: Red', opponentName: 'Friendly Fox', opponentAvatar: '🦊',
    questionText: 'Quả táo màu đỏ này trong Tiếng Anh đọc là màu gì?',
    visual: '🍎', options: ['Blue (Xanh dương)', 'Red (Màu đỏ)', 'Green (Màu lục)', 'Yellow (Màu vàng)'], correctAnswer: 'Red (Màu đỏ)',
    scaffoldHint: 'Red /red/ nghĩa là màu đỏ tươi như quả táo chín mọng!',
    funFact: 'A red apple a day keeps the doctor away!'
  },
  {
    id: 'e2', stage: 2, difficulty: 'easy', title: 'Animal Friends: Cat', opponentName: 'Puppy Hero', opponentAvatar: '🐶',
    questionText: 'Bạn mèo kêu "meow meow" trong Tiếng Anh gọi là gì?',
    visual: '🐱', options: ['Dog', 'Cat', 'Fish', 'Bird'], correctAnswer: 'Cat',
    scaffoldHint: 'C-A-T là Cat! Chú mèo dễ thương.',
    funFact: 'Cats can jump six times their height!'
  },
  {
    id: 'e3', stage: 3, difficulty: 'easy', title: 'Numbers Magic: Three', opponentName: 'Penguin Wizard', opponentAvatar: '🐧',
    questionText: 'Có 3 ngôi sao ⭐⭐⭐. Số 3 trong Tiếng Anh đọc là gì?',
    visual: '⭐⭐⭐', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Three',
    scaffoldHint: 'One (1), Two (2), Three (3)! Số 3 đọc là Three /θriː/!',
    funFact: 'You have two eyes, but three stars on your shield!'
  },
  {
    id: 'e4', stage: 4, difficulty: 'easy', title: 'Sky & Sea Colors: Blue', opponentName: 'Blue Dolphin', opponentAvatar: '🐬',
    questionText: 'Bầu trời và biển cả có màu xanh dương. Màu xanh dương là gì?',
    visual: '🌊 ☁️', options: ['Blue', 'Pink', 'Orange', 'Black'], correctAnswer: 'Blue',
    scaffoldHint: 'Blue /bluː/ là màu xanh dương thanh bình của biển cả và bầu trời!',
    funFact: 'The ocean looks blue because water absorbs other colors!'
  },
  {
    id: 'e5', stage: 5, difficulty: 'easy', title: 'School Supplies: Pencil', opponentName: 'Panda Scholar', opponentAvatar: '🐼',
    questionText: 'Đồ dùng học tập dùng để viết và vẽ tranh này là gì? ✏️',
    visual: '✏️', options: ['Pencil (Bút chì)', 'Bag (Cặp sách)', 'Chair (Cái ghế)', 'Desk (Bàn học)'], correctAnswer: 'Pencil (Bút chì)',
    scaffoldHint: 'Pencil /ˈpensl/ là chiếc bút chì xinh giúp bé viết chữ đẹp!',
    funFact: 'A single pencil can draw a line 35 miles long!'
  },
  {
    id: 'e6', stage: 6, difficulty: 'easy', title: 'Delicious Fruits: Banana', opponentName: 'Monkey Chef', opponentAvatar: '🐒',
    questionText: 'Quả chuối chín vàng thơm ngọt bạn khỉ rất thích là gì?',
    visual: '🍌', options: ['Banana', 'Mango', 'Grape', 'Watermelon'], correctAnswer: 'Banana',
    scaffoldHint: 'B-A-N-A-N-A đọc là Banana /bəˈnænə/ nghĩa là quả chuối!',
    funFact: 'Bananas float in water because they are less dense!'
  },
  {
    id: 'e7', stage: 7, difficulty: 'easy', title: 'Body Parts: Nose', opponentName: 'Wise Koala', opponentAvatar: '🐨',
    questionText: 'Cái mũi xinh xắn dùng để ngửi mùi thơm hoa quả trong Tiếng Anh là gì?',
    visual: '👃', options: ['Nose', 'Eye', 'Ear', 'Mouth'], correctAnswer: 'Nose',
    scaffoldHint: 'N-O-S-E đọc là Nose /nəʊz/ nghĩa là cái mũi!',
    funFact: 'Your nose can remember 50,000 different scents!'
  },
  {
    id: 'e8', stage: 8, difficulty: 'easy', title: 'Greetings: Good Morning', opponentName: 'Golden Lion King', opponentAvatar: '🦁',
    questionText: 'Khi gặp thầy cô và bạn bè buổi sáng, em nói câu chào nào?',
    visual: '☀️ 🏫 👋', options: ['Good morning!', 'Good night!', 'Goodbye!', 'Thank you!'], correctAnswer: 'Good morning!',
    scaffoldHint: 'Good morning có nghĩa là "Chào buổi sáng tốt lành!"',
    funFact: 'A cheerful greeting brings a bright smile to everyone!'
  },
  // Bổ sung 22 ải Tiếng Anh
  {
    id: 'e9', stage: 9, difficulty: 'medium', title: 'Count Numbers: Ten', opponentName: 'Bouncing Kangaroo', opponentAvatar: '🦘',
    questionText: 'Bé xòe 10 ngón tay xinh. Số 10 trong Tiếng Anh là gì?',
    visual: '🔟 🖐️🖐️', options: ['Eight', 'Nine', 'Ten', 'Seven'], correctAnswer: 'Ten',
    scaffoldHint: 'T-E-N là Ten /ten/ nghĩa là số 10!',
    funFact: 'You have ten fingers and ten toes!'
  },
  {
    id: 'e10', stage: 10, difficulty: 'medium', title: 'Farm Animals: Cow', opponentName: 'Farm Dog', opponentAvatar: '🐕',
    questionText: 'Bạn bò sữa kêu "Moo moo" trong Tiếng Anh đọc là gì?',
    visual: '🐄 🥛', options: ['Cow', 'Pig', 'Duck', 'Horse'], correctAnswer: 'Cow',
    scaffoldHint: 'C-O-W là Cow /kaʊ/ nghĩa là bạn bò sữa!',
    funFact: 'Cows give us fresh delicious milk every day!'
  },
  {
    id: 'e11', stage: 11, difficulty: 'medium', title: 'Shapes Magic: Circle', opponentName: 'Round Hedgehog', opponentAvatar: '🦔',
    questionText: 'Hình tròn trịa như chiếc đồng hồ hoặc ông mặt trời là hình gì?',
    visual: '⭕ 🌕', options: ['Circle', 'Square', 'Triangle', 'Star'], correctAnswer: 'Circle',
    scaffoldHint: 'Circle /ˈsɜːkl/ nghĩa là hình tròn xinh xắn!',
    funFact: 'The sun, the moon, and full coins are all circles!'
  },
  {
    id: 'e12', stage: 12, difficulty: 'medium', title: 'Family Members: Mother', opponentName: 'Mother Bear', opponentAvatar: '🐻',
    questionText: 'Người phụ nữ dịu dàng sinh ra và nuôi nấng em (Mẹ) trong Tiếng Anh là gì?',
    visual: '👩‍👧 💐', options: ['Mother', 'Father', 'Brother', 'Sister'], correctAnswer: 'Mother',
    scaffoldHint: 'Mother /ˈmʌðə/ nghĩa là người mẹ kính yêu!',
    funFact: 'Mother is often called Mom or Mommy!'
  },
  {
    id: 'e13', stage: 13, difficulty: 'medium', title: 'Classroom: Book', opponentName: 'Owl Scholar', opponentAvatar: '🦉',
    questionText: 'Vật dụng chứa nhiều bài học hay và tranh ảnh em đọc mỗi ngày là gì?',
    visual: '📚', options: ['Book', 'Ruler', 'Eraser', 'Desk'], correctAnswer: 'Book',
    scaffoldHint: 'B-O-O-K là Book /bʊk/ nghĩa là quyển sách!',
    funFact: 'Reading books opens a magical world of adventure!'
  },
  {
    id: 'e14', stage: 14, difficulty: 'medium', title: 'Food & Drinks: Milk', opponentName: 'Baby Calf', opponentAvatar: '🐮',
    questionText: 'Thức uống màu trắng thơm mát giúp bé cao lớn mỗi ngày là gì?',
    visual: '🥛', options: ['Milk', 'Water', 'Tea', 'Juice'], correctAnswer: 'Milk',
    scaffoldHint: 'M-I-L-K là Milk /mɪlk/ nghĩa là sữa tươi bổ dưỡng!',
    funFact: 'Drinking milk makes your teeth and bones super strong!'
  },
  {
    id: 'e15', stage: 15, difficulty: 'medium', title: 'Action Verbs: Jump', opponentName: 'Frog Champion', opponentAvatar: '🐸',
    questionText: 'Hành động nhún chân bật cao lên không trung (nhảy) là từ nào?',
    visual: '🦘 ⬆️', options: ['Jump', 'Sleep', 'Sit', 'Read'], correctAnswer: 'Jump',
    scaffoldHint: 'J-U-M-P là Jump /dʒʌmp/ nghĩa là nhảy bật lên!',
    funFact: 'Frogs can jump twenty times their body length!'
  },
  {
    id: 'e16', stage: 16, difficulty: 'medium', title: 'Days: Sunday', opponentName: 'Sunny Parrot', opponentAvatar: '🦜',
    questionText: 'Ngày cuối tuần được nghỉ học đi chơi cùng bố mẹ (Chủ Nhật) là gì?',
    visual: '🎈 🏖️', options: ['Sunday', 'Monday', 'Wednesday', 'Friday'], correctAnswer: 'Sunday',
    scaffoldHint: 'Sunday /ˈsʌndeɪ/ nghĩa là Ngày Chủ Nhật rực rỡ nắng vàng!',
    funFact: 'Sunday is named after the bright Sun in the sky!'
  },
  {
    id: 'e17', stage: 17, difficulty: 'medium', title: 'Feelings: Happy', opponentName: 'Smiling Bunny', opponentAvatar: '🐰',
    questionText: 'Khi em mỉm cười vui sướng và nhận được quà, cảm xúc đó là gì?',
    visual: '😊 🎁', options: ['Happy', 'Sad', 'Angry', 'Tired'], correctAnswer: 'Happy',
    scaffoldHint: 'Happy /ˈhæpi/ nghĩa là hạnh phúc, vui vẻ!',
    funFact: 'A happy smile is contagious to all your friends!'
  },
  {
    id: 'e18', stage: 18, difficulty: 'medium', title: 'Weather: Sunny', opponentName: 'Bright Sunflower', opponentAvatar: '🌻',
    questionText: 'Khi bầu trời trong xanh có ánh nắng vàng rực rỡ, thời tiết đó là gì?',
    visual: '☀️ 🌤️', options: ['Sunny', 'Rainy', 'Snowy', 'Windy'], correctAnswer: 'Sunny',
    scaffoldHint: 'Sunny /ˈsʌni/ nghĩa là trời có nhiều nắng ấm!',
    funFact: 'Sunny days give plants energy to grow tall!'
  },
  {
    id: 'e19', stage: 19, difficulty: 'medium', title: 'Rooms: Bedroom', opponentName: 'Sleepy Sloth', opponentAvatar: '🦥',
    questionText: 'Căn phòng có chiếc giường êm ái để bé ngủ say mỗi đêm là gì?',
    visual: '🛏️ 🌙', options: ['Bedroom', 'Kitchen', 'Bathroom', 'Garden'], correctAnswer: 'Bedroom',
    scaffoldHint: 'Bed (giường) + Room (phòng) = Bedroom /ˈbedruːm/ nghĩa là phòng ngủ!',
    funFact: 'Bedrooms are cozy places for sweet dreams!'
  },
  {
    id: 'e20', stage: 20, difficulty: 'medium', title: 'Clothes: Hat', opponentName: 'Gentleman Beaver', opponentAvatar: '🦫',
    questionText: 'Đồ vật đội lên đầu để che nắng che mưa khi ra ngoài là gì?',
    visual: '🧢 🎩', options: ['Hat', 'Shoes', 'Socks', 'Coat'], correctAnswer: 'Hat',
    scaffoldHint: 'H-A-T là Hat /hæt/ nghĩa là chiếc mũ, chiếc nón!',
    funFact: 'Hats protect your head from bright sunlight!'
  },
  {
    id: 'e21', stage: 21, difficulty: 'hard', title: 'Prepositions: On', opponentName: 'Cat on the Table', opponentAvatar: '🐱📦',
    questionText: 'Chú mèo nằm ở PHÍA TRÊN chiếc hộp. Từ "ở trên" trong Tiếng Anh là gì?',
    visual: '🐱 ⬆️ [Box]', options: ['On', 'In', 'Under', 'Behind'], correctAnswer: 'On',
    scaffoldHint: 'On /ɒn/ nghĩa là ở trên bề mặt một vật nào đó!',
    funFact: 'The book is ON the desk!'
  },
  {
    id: 'e22', stage: 22, difficulty: 'hard', title: 'Prepositions: Under', opponentName: 'Fish under Water', opponentAvatar: '🐟🌊',
    questionText: 'Bạn cá bơi ở PHÍA DƯỚI mặt nước. Từ "ở dưới" trong Tiếng Anh là gì?',
    visual: '🌊 ⬇️ 🐟', options: ['Under', 'On', 'In', 'Above'], correctAnswer: 'Under',
    scaffoldHint: 'Under /ˈʌndə/ nghĩa là ở phía dưới!',
    funFact: 'Under the sea, there are millions of colorful fish!'
  },
  {
    id: 'e23', stage: 23, difficulty: 'hard', title: 'Self-Introduction', opponentName: 'English Prince', opponentAvatar: '🤴',
    questionText: 'Khi người bạn nước ngoài hỏi "What is your name?", em trả lời thế nào?',
    visual: '👋 "What is your name?"', options: ['My name is Nam.', 'I am seven.', 'I am fine.', 'It is a cat.'], correctAnswer: 'My name is Nam.',
    scaffoldHint: '"My name is..." dùng để nói tên của em cho bạn biết!',
    funFact: 'Introducing your name is the first step to making global friends!'
  },
  {
    id: 'e24', stage: 24, difficulty: 'hard', title: 'Asking Age: How old', opponentName: 'Birthday Bear', opponentAvatar: '🐻🎂',
    questionText: 'Bé 7 tuổi. Khi được hỏi "How old are you?", em trả lời câu nào?',
    visual: '🎂 7 tuổi 🕯️', options: ['I am seven years old.', 'I like apples.', 'I am tall.', 'I have a dog.'], correctAnswer: 'I am seven years old.',
    scaffoldHint: '"I am seven years old" nghĩa là "Tớ 7 tuổi!"',
    funFact: 'In Grade 1 and 2, most students are 6 or 7 years old!'
  },
  {
    id: 'e25', stage: 25, difficulty: 'hard', title: 'Abilities: Can a bird fly?', opponentName: 'Eagle of the Sky', opponentAvatar: '🦅',
    questionText: 'Trả lời câu hỏi: "Can a bird fly?" (Loài chim có thể bay không?)',
    visual: '🦅 ☁️', options: ['Yes, it can.', 'No, it cannot.', 'It is green.', 'I don\'t know.'], correctAnswer: 'Yes, it can.',
    scaffoldHint: 'Yes, it can! Loài chim có đôi cánh khỏe nên bay lượn rất giỏi trên bầu trời!',
    funFact: 'Birds have lightweight hollow bones that help them fly!'
  },
  {
    id: 'e26', stage: 26, difficulty: 'hard', title: 'Opposites: Big vs Small', opponentName: 'Elephant & Ant', opponentAvatar: '🐘🐜',
    questionText: 'Chú voi rất TO LỚN (Big). Từ trái nghĩa chỉ chú kiến NHỎ BÉ là gì?',
    visual: '🐘 (Big)  vs  🐜 ( ? )', options: ['Small', 'Tall', 'Fast', 'Heavy'], correctAnswer: 'Small',
    scaffoldHint: 'Small /smɔːl/ nghĩa là nhỏ bé, tí hon!',
    funFact: 'Big and Small are opposites!'
  },
  {
    id: 'e27', stage: 27, difficulty: 'hard', title: 'Telling Time: Clock', opponentName: 'Tick-Tock Clock', opponentAvatar: '⏰',
    questionText: 'Đồng hồ chỉ đúng 8 giờ sáng. Em nói thế nào trong Tiếng Anh?',
    visual: '⏰ 8:00', options: ['It is eight o\'clock.', 'It is sunny.', 'It is blue.', 'It is eight pencils.'], correctAnswer: 'It is eight o\'clock.',
    scaffoldHint: 'It is eight o\'clock nghĩa là "Bây giờ là 8 giờ đúng!"',
    funFact: 'O\'clock stands for "of the clock"!'
  },
  {
    id: 'e28', stage: 28, difficulty: 'hard', title: 'Favorite Colors', opponentName: 'Rainbow Unicorn', opponentAvatar: '🦄🌈',
    questionText: 'Hoàn thành câu: "I like ... because it is like fresh green grass."',
    visual: '🌱 🌿', options: ['Green', 'Red', 'Pink', 'Yellow'], correctAnswer: 'Green',
    scaffoldHint: 'Green /ɡriːn/ là màu xanh lá cây mát rượi của thảm cỏ!',
    funFact: 'Green is the color of nature and vitality!'
  },
  {
    id: 'e29', stage: 29, difficulty: 'boss', title: 'Reading Short Story', opponentName: 'Storybook Dragon', opponentAvatar: '🐉📚',
    questionText: 'Read: "Tom has a little brown dog. The dog likes to play with a red ball." What does the dog play with?',
    visual: '🐶 🔴', options: ['A red ball', 'A blue fish', 'A green tree', 'A yellow hat'], correctAnswer: 'A red ball',
    scaffoldHint: 'The sentence says: "The dog likes to play with a red ball"!',
    funFact: 'Reading English stories makes your vocabulary grow fast!'
  },
  {
    id: 'e30', stage: 30, difficulty: 'boss', title: 'Dragon Master of English (TRÙM TIẾNG ANH)', opponentName: 'Supreme English Dragon', opponentAvatar: '👑🌍',
    questionText: 'Chọn câu chào mừng trang trọng nhất khi đón khách quốc tế: "Welcome to ...!"',
    visual: '🇻🇳 🌟 Welcome to ...', options: ['Welcome to Vietnam!', 'Goodbye friends!', 'Good night!', 'No, thank you!'], correctAnswer: 'Welcome to Vietnam!',
    scaffoldHint: '"Welcome to Vietnam!" nghĩa là "Chào mừng bạn đến với đất nước Việt Nam tươi đẹp!"',
    funFact: 'Congratulations! Bé đã chinh phục hoàn toàn 30 ải Thung Lũng Tiếng Anh!'
  }
];

// Dữ liệu 30 Ải Khoa Học
const scienceLessons = [
  {
    id: 's1', stage: 1, difficulty: 'easy', title: 'Giác quan của em', opponentName: 'Hươu Cao Cổ', opponentAvatar: '🦒',
    questionText: 'Em dùng bộ phận nào trên cơ thể để ngắm nhìn bông hoa xinh đẹp?',
    visual: '🌸 👀', options: ['Đôi mắt (Thị giác)', 'Đôi tai (Thính giác)', 'Cái mũi (Khứu giác)', 'Bàn tay (Xúc giác)'], correctAnswer: 'Đôi mắt (Thị giác)',
    scaffoldHint: 'Đôi mắt (thị giác) giúp em nhìn thấy màu sắc rực rỡ và hình dáng của vạn vật!',
    funFact: 'Mỗi ngày hãy chớp mắt đều đặn và không nhìn màn hình quá gần nhé bé!'
  },
  {
    id: 's2', stage: 2, difficulty: 'easy', title: 'Cây xanh quanh em', opponentName: 'Thần Cây Đại Thụ', opponentAvatar: '🌳',
    questionText: 'Bộ phận nào của cây hút nước và chất dinh dưỡng từ dưới lòng đất?',
    visual: '🌳 💧', options: ['Rễ cây', 'Lá cây', 'Bông hoa', 'Quả ngọt'], correctAnswer: 'Rễ cây',
    scaffoldHint: 'Rễ cây cắm sâu dưới đất như những bàn tay tí hon uống nước mát!',
    funFact: 'Rễ giữ cho cây đứng vững vàng trước những cơn gió bão!'
  },
  {
    id: 's3', stage: 3, difficulty: 'easy', title: 'Thức ăn của các loài vật', opponentName: 'Bò Vàng Hiền Hòa', opponentAvatar: '🐄',
    questionText: 'Bạn bò sữa và bạn ngựa thường ăn món gì để lớn lên khỏe mạnh?',
    visual: '🌾 🐄 🐎', options: ['Cỏ tươi và rơm', 'Thịt cá', 'Kẹo ngọt', 'Bánh kem'], correctAnswer: 'Cỏ tươi và rơm',
    scaffoldHint: 'Bò và ngựa là động vật ăn thực vật, các bạn ấy thích gặm cỏ non tươi mát!',
    funFact: 'Sữa bò chứa rất nhiều canxi giúp xương bé dài và cao lớn hơn mỗi ngày!'
  },
  {
    id: 's4', stage: 4, difficulty: 'easy', title: 'Bé giữ vệ sinh cá nhân', opponentName: 'Bác Sĩ Hải Cẩu', opponentAvatar: '🦭',
    questionText: 'Bé cần rửa tay sạch bằng xà phòng vào những lúc nào?',
    visual: '🧼 🖐️ 💧', options: ['Trước khi ăn và sau khi đi vệ sinh', 'Chỉ khi tay bị dính mực', 'Chỉ khi tắm biển', 'Không cần rửa tay'], correctAnswer: 'Trước khi ăn và sau khi đi vệ sinh',
    scaffoldHint: 'Rửa tay với xà phòng trong 20-30 giây giúp đuổi sạch vi khuẩn gây hại!',
    funFact: 'Bàn tay sạch giúp bé phòng tránh cảm cúm và bệnh đường ruột rất tốt!'
  },
  {
    id: 's5', stage: 5, difficulty: 'easy', title: 'Thời tiết hôm nay', opponentName: 'Thần Mưa Vui Vẻ', opponentAvatar: '🌧️',
    questionText: 'Khi trời đổ mưa rào, em cần mang theo đồ dùng gì để không bị ướt?',
    visual: '🌧️ ☔ 🧥', options: ['Ô (dù) và áo mưa', 'Kính râm chống nắng', 'Quạt máy', 'Mũ len mùa đông'], correctAnswer: 'Ô (dù) và áo mưa',
    scaffoldHint: 'Chiếc ô và áo mưa che chắn hạt mưa rơi, giữ cho quần áo của bé khô ráo!',
    funFact: 'Sau cơn mưa rào mùa hè, bầu trời thường xuất hiện cầu vồng 7 màu rực rỡ!'
  },
  {
    id: 's6', stage: 6, difficulty: 'easy', title: 'Bốn mùa tươi đẹp', opponentName: 'Nàng Tiên Bốn Mùa', opponentAvatar: '🧚‍♀️',
    questionText: 'Mùa nào trong năm hoa đào, hoa mai nở rộ và bé được đón Tết cổ truyền?',
    visual: '🌸 🌼 🧧', options: ['Mùa Xuân', 'Mùa Hè', 'Mùa Thu', 'Mùa Đông'], correctAnswer: 'Mùa Xuân',
    scaffoldHint: 'Mùa xuân là mùa cây cối đâm chồi nảy lộc và khởi đầu một năm mới an lành!',
    funFact: 'Một năm có bốn mùa: Xuân ấm áp, Hạ rực rỡ, Thu êm dịu, Đông se lạnh!'
  },
  {
    id: 's7', stage: 7, difficulty: 'easy', title: 'Bé tham gia giao thông an toàn', opponentName: 'Chú Cảnh Sát Cú Vọ', opponentAvatar: '👮‍♂️',
    questionText: 'Khi đi qua đường gặp đèn tín hiệu giao thông màu ĐỎ, em phải làm gì?',
    visual: '🔴 🚦', options: ['Dừng lại an toàn', 'Chạy thật nhanh', 'Đi chậm rãi', 'Nhắm mắt đi tiếp'], correctAnswer: 'Dừng lại an toàn',
    scaffoldHint: 'Đèn đỏ dừng lại - Đèn xanh mới được đi - Đèn vàng đi chậm quan sát!',
    funFact: 'Luôn nắm tay người lớn khi qua đường để giữ an toàn tuyệt đối nhé bé!'
  },
  {
    id: 's8', stage: 8, difficulty: 'easy', title: 'Bảo vệ nguồn nước sạch', opponentName: 'Rùa Biển Đại Dương', opponentAvatar: '🐢',
    questionText: 'Hành động nào dưới đây là tiết kiệm và bảo vệ nguồn nước sạch?',
    visual: '🚰 💧', options: ['Khóa vòi nước khi đánh răng xong', 'Mở vòi nước xả tràn lan', 'Vứt rác xuống hồ nước', 'Đổ dầu ăn xuống cống'], correctAnswer: 'Khóa vòi nước khi đánh răng xong',
    scaffoldHint: 'Nước ngọt rất quý giá! Khóa chặt vòi sau khi dùng giúp giữ gìn giọt nước cho muôn loài!',
    funFact: 'Trái Đất có nhiều nước nhưng hơn 97% là nước biển mặn, chỉ có rất ít nước ngọt uống được!'
  },
  // Bổ sung 22 ải Khoa Học
  {
    id: 's9', stage: 9, difficulty: 'medium', title: 'Môi trường sống của loài vật', opponentName: 'Cá Voi Xanh Đại Dương', opponentAvatar: '🐋',
    questionText: 'Loài động vật nào dưới đây sinh sống và bơi lội suốt đời dưới nước?',
    visual: '🌊 🐠', options: ['Cá chép', 'Con chim bồ câu', 'Con thỏ', 'Con khỉ'], correctAnswer: 'Cá chép',
    scaffoldHint: 'Cá chép thở bằng mang và có vây để bơi lội dưới làn nước mát!',
    funFact: 'Dưới đại dương và sông hồ có hàng triệu loài sinh vật kỳ diệu!'
  },
  {
    id: 's10', stage: 10, difficulty: 'medium', title: 'Các bộ phận của cây hoa', opponentName: 'Ong Thợ Lấy Mật', opponentAvatar: '🐝',
    questionText: 'Bộ phận nào của cây hoa có màu sắc rực rỡ và hương thơm ngát để thu hút ong bướm?',
    visual: '🌺 🌸', options: ['Bông hoa', 'Rễ cây', 'Thân cây', 'Gai nhọn'], correctAnswer: 'Bông hoa',
    scaffoldHint: 'Cánh hoa rực rỡ tỏa hương thơm ngát mời gọi bạn ong bướm đến hút mật!',
    funFact: 'Nhờ có ong bướm thụ phấn, hoa mới kết thành những quả ngọt ngào!'
  },
  {
    id: 's11', stage: 11, difficulty: 'medium', title: 'Bé chăm sóc hàm răng xinh', opponentName: 'Bác Sĩ Gấu Trắng', opponentAvatar: '🐻‍❄️',
    questionText: 'Để răng không bị sâu và miệng luôn thơm tho, em nên đánh răng khi nào?',
    visual: '🪥 🦷 ✨', options: ['Sau khi thức dậy buổi sáng và trước khi đi ngủ buổi tối', 'Chỉ khi ăn kẹo mút', 'Một tuần một lần', 'Không cần đánh răng'], correctAnswer: 'Sau khi thức dậy buổi sáng và trước khi đi ngủ buổi tối',
    scaffoldHint: 'Đánh răng ít nhất 2 lần mỗi ngày (sáng và tối) giúp hàm răng bé trắng tinh!',
    funFact: 'Men răng là chất cứng nhất trong toàn bộ cơ thể con người đấy!'
  },
  {
    id: 's12', stage: 12, difficulty: 'medium', title: 'Mặt trời mọc và lặn', opponentName: 'Gà Trống Bình Minh', opponentAvatar: '🌅🐓',
    questionText: 'Mỗi buổi sáng thức dậy, ông Mặt trời mọc ở hướng nào?',
    visual: '☀️ 🌄', options: ['Hướng Đông', 'Hướng Tây', 'Hướng Nam', 'Hướng Bắc'], correctAnswer: 'Hướng Đông',
    scaffoldHint: 'Mặt trời mọc ở hướng Đông đón bình minh, và lặn ở hướng Tây khi hoàng hôn!',
    funFact: 'Đón ánh nắng sớm hướng Đông giúp cơ thể bé tổng hợp vitamin D cho xương chắc khỏe!'
  },
  {
    id: 's13', stage: 13, difficulty: 'medium', title: 'Bầu trời ban đêm', opponentName: 'Cú Đêm Ngắm Trăng', opponentAvatar: '🦉🌙',
    questionText: 'Vật thể sáng lung linh soi sáng bầu trời đêm thanh bình là gì?',
    visual: '🌙 ⭐ ✨', options: ['Mặt trăng và các vì sao', 'Mặt trời', 'Cầu vồng bảy sắc', 'Tia chớp mùa hè'], correctAnswer: 'Mặt trăng và các vì sao',
    scaffoldHint: 'Khi màn đêm buông xuống, Mặt trăng dịu dàng và muôn triệu vì sao thắp sáng bầu trời!',
    funFact: 'Mặt trăng không tự phát sáng mà phản chiếu ánh sáng từ Mặt trời đấy bé!'
  },
  {
    id: 's14', stage: 14, difficulty: 'medium', title: 'Động vật đẻ con và đẻ trứng', opponentName: 'Mẹ Gà Ấp Trứng', opponentAvatar: '🐔🥚',
    questionText: 'Con vật nào dưới đây sinh sản bằng cách đẻ trứng trong ổ?',
    visual: '🥚 🪺', options: ['Gà mái', 'Con chó', 'Con mèo', 'Con bò'], correctAnswer: 'Gà mái',
    scaffoldHint: 'Gà mẹ đẻ ra những quả trứng tròn xoe rồi ấp 21 ngày nở ra gà con!',
    funFact: 'Chim, gà, vịt, rùa và cá là những động vật sinh sản bằng cách đẻ trứng!'
  },
  {
    id: 's15', stage: 15, difficulty: 'medium', title: 'Phân loại rác bảo vệ môi trường', opponentName: 'Hiệp Sĩ Môi Trường', opponentAvatar: '♻️🦊',
    questionText: 'Vỏ chuối, cọng rau thừa thuộc loại rác nào có thể ủ làm phân bón cho cây?',
    visual: '🍌 🥬 🗑️', options: ['Rác hữu cơ', 'Rác nhựa', 'Pin cũ hỏng', 'Mảnh thủy tinh'], correctAnswer: 'Rác hữu cơ',
    scaffoldHint: 'Thức ăn thừa và vỏ rau củ là rác hữu cơ, dễ dàng phân hủy làm giàu cho đất!',
    funFact: 'Phân loại rác tại nguồn là hành động đẹp của công dân nhí gương mẫu!'
  },
  {
    id: 's16', stage: 16, difficulty: 'medium', title: 'Bữa ăn lành mạnh cho bé', opponentName: 'Đầu Bếp Gấu Trúc', opponentAvatar: '🐼🥗',
    questionText: 'Món ăn nào dưới đây giúp bé có đôi mắt sáng và đường tiêu hóa khỏe mạnh?',
    visual: '🥦 🥕 🐟', options: ['Rau xanh và cà rốt', 'Kẹo ngọt nhiều phẩm màu', 'Nước ngọt có gas', 'Khoai tây chiên nhiều dầu'], correctAnswer: 'Rau xanh và cà rốt',
    scaffoldHint: 'Rau củ chứa vitamin A và chất xơ tuyệt vời cho sức khỏe của bé!',
    funFact: 'Ăn đủ 5 màu rau củ mỗi ngày giúp cơ thể tràn đầy sức đề kháng!'
  },
  {
    id: 's17', stage: 17, difficulty: 'medium', title: 'An toàn điện và chống bỏng', opponentName: 'Chú Lính Cứu Hỏa', opponentAvatar: '👨‍🚒🔥',
    questionText: 'Hành động nào dưới đây là NGUY HIỂM mà bé tuyệt đối không được làm ở nhà?',
    visual: '⚡ 🔌 🚫', options: ['Thò tay vào ổ cắm điện', 'Nhờ bố mẹ cắm quạt', 'Uống nước mát', 'Đọc truyện tranh'], correctAnswer: 'Thò tay vào ổ cắm điện',
    scaffoldHint: 'Ổ cắm điện và nước sôi cực kỳ nguy hiểm, bé không bao giờ được nghịch vào!',
    funFact: 'Ghi nhớ số điện thoại khẩn cấp 114 để gọi cứu hỏa khi có nguy hiểm cháy nổ!'
  },
  {
    id: 's18', stage: 18, difficulty: 'medium', title: 'Các trạng thái kỳ diệu của nước', opponentName: 'Người Tuyết Vui Vẻ', opponentAvatar: '☃️🧊',
    questionText: 'Khi để nước lỏng vào ngăn đá tủ lạnh, nước sẽ đông cứng thành thể gì?',
    visual: '🧊 ❄️', options: ['Thể rắn (Băng đá)', 'Thể khí (Hơi nước)', 'Thể lỏng', 'Biến mất hoàn toàn'], correctAnswer: 'Thể rắn (Băng đá)',
    scaffoldHint: 'Ở nhiệt độ 0 độ C, nước đông lại thành những viên đá rắn chắc mát lạnh!',
    funFact: 'Nước có ba thể kỳ diệu: thể lỏng, thể rắn (băng đá) và thể khí (hơi nước)!'
  },
  {
    id: 's19', stage: 19, difficulty: 'medium', title: 'Không khí quanh em', opponentName: 'Cơn Gió Mát Lành', opponentAvatar: '💨🍃',
    questionText: 'Không khí trong lành giúp con người và sinh vật hít thở có đặc điểm gì?',
    visual: '🌬️ 🫁', options: ['Không màu, không mùi, không vị', 'Có màu đen và mùi khét', 'Có vị ngọt như đường', 'Có màu đỏ rực'], correctAnswer: 'Không màu, không mùi, không vị',
    scaffoldHint: 'Không khí trong lành vô hình quanh ta, không màu và không mùi nhưng cần thiết cho sự sống!',
    funFact: 'Trồng nhiều cây xanh giúp lọc sạch không khí cho ngôi trường của bé!'
  },
  {
    id: 's20', stage: 20, difficulty: 'medium', title: 'Âm thanh trong tự nhiên', opponentName: 'Dế Mèn Hát Ca', opponentAvatar: '🦗🎵',
    questionText: 'Âm thanh nào dưới đây được phát ra từ thế giới tự nhiên kỳ thú?',
    visual: '🐦 🌊 🎶', options: ['Tiếng chim hót líu lo và suối reo', 'Tiếng còi xe máy ồn ào', 'Tiếng máy khoan đục tường', 'Tiếng chuông báo thức'], correctAnswer: 'Tiếng chim hót líu lo và suối reo',
    scaffoldHint: 'Tiếng chim hót và suối reo là bản hòa ca êm dịu của mẹ thiên nhiên!',
    funFact: 'Lắng nghe âm thanh thiên nhiên giúp tâm trí bé thư giãn và thông minh hơn!'
  },
  {
    id: 's21', stage: 21, difficulty: 'hard', title: 'Nam châm kỳ diệu', opponentName: 'Nhà Bác Học Chuột', opponentAvatar: '🐭🧲',
    questionText: 'Thanh nam châm có thể hút dính những đồ vật làm bằng chất liệu gì?',
    visual: '🧲 📎', options: ['Sắt và thép', 'Gỗ', 'Nhựa dẻo', 'Vải bông'], correctAnswer: 'Sắt và thép',
    scaffoldHint: 'Nam châm có từ tính kỳ diệu, hút chặt các vật bằng sắt như kẹp ghim, đinh sắt!',
    funFact: 'Nam châm có hai cực Bắc (N) và Nam (S); hai cực cùng tên sẽ đẩy nhau, khác tên sẽ hút nhau!'
  },
  {
    id: 's22', stage: 22, difficulty: 'hard', title: 'Vòng đời của bướm', opponentName: 'Bướm Xinh Rực Rỡ', opponentAvatar: '🐛🦋',
    questionText: 'Trước khi biến thành chú bướm rực rỡ biết bay, bướm từng trải qua giai đoạn nào?',
    visual: '🥚 ➔ 🐛 ➔ 🥥 ➔ 🦋', options: ['Sâu bướm rồi nằm trong kén nhộng', 'Nòng nọc dưới nước', 'Cá con', 'Gà con'], correctAnswer: 'Sâu bướm rồi nằm trong kén nhộng',
    scaffoldHint: 'Vòng đời kỳ diệu: Trứng nở thành sâu bướm, sâu đóng kén ngủ say rồi hóa bướm bay lên!',
    funFact: 'Sự biến hóa này trong sinh học gọi là quá trình biến thái hoàn toàn!'
  },
  {
    id: 's23', stage: 23, difficulty: 'hard', title: 'Nguồn phát ra ánh sáng', opponentName: 'Đom Đóm Soi Đường', opponentAvatar: '🪲💡',
    questionText: 'Nguồn phát ánh sáng tự nhiên lớn nhất và quan trọng nhất cho Trái Đất là gì?',
    visual: '☀️ 🌍', options: ['Mặt trời', 'Ngọn nến nhỏ', 'Bóng đèn pin', 'Ánh lửa trại'], correctAnswer: 'Mặt trời',
    scaffoldHint: 'Mặt trời chiếu sáng và sưởi ấm cho toàn bộ hành tinh Trái Đất thân yêu!',
    funFact: 'Ánh sáng Mặt trời mất khoảng 8 phút 20 giây để bay đến Trái Đất!'
  },
  {
    id: 's24', stage: 24, difficulty: 'hard', title: 'Lá cây đổi màu mùa thu', opponentName: 'Sóc Nhặt Hạt Dẻ Vàng', opponentAvatar: '🐿️🍂',
    questionText: 'Vào mùa thu, tại sao nhiều loài cây rụng lá chuyển từ màu xanh sang màu vàng đỏ?',
    visual: '🍃 ➔ 🍂', options: ['Chất diệp lục màu xanh giảm đi', 'Cây bị ốm sốt', 'Có người sơn màu lên lá', 'Do lá bị ngấm nước mưa'], correctAnswer: 'Chất diệp lục màu xanh giảm đi',
    scaffoldHint: 'Khi trời se lạnh và ít nắng, chất diệp lục xanh tan biến, để lộ sắc vàng đỏ lộng lẫy!',
    funFact: 'Cây rụng lá mùa đông để tiết kiệm nước và ngủ đông an toàn!'
  },
  {
    id: 's25', stage: 25, difficulty: 'hard', title: 'Hạt mầm cần gì để lớn?', opponentName: 'Mầm Xanh Thần Kỳ', opponentAvatar: '🌱',
    questionText: 'Để một hạt đậu nảy mầm và phát triển thành cây con xanh tốt, hạt cần những gì?',
    visual: '🫘 ➔ 💧 ☀️ ➔ 🌱', options: ['Nước, không khí, ánh sáng và đất màu mỡ', 'Chỉ cần kẹo ngọt', 'Để trong phòng tối kín mít', 'Đổ nước muối lên hạt'], correctAnswer: 'Nước, không khí, ánh sáng và đất màu mỡ',
    scaffoldHint: 'Hạt giống cần nước để thức dậy, cần đất và ánh sáng mặt trời để vươn mình thành cây!',
    funFact: 'Tự tay gieo một hạt mầm và chăm sóc mỗi ngày là bài học khoa học tuyệt vời nhất!'
  },
  {
    id: 's26', stage: 26, difficulty: 'hard', title: 'Sự thích nghi của loài vật', opponentName: 'Lạc Đà Sa Mạc', opponentAvatar: '🐪',
    questionText: 'Chiếc bướu trên lưng chú lạc đà ở sa mạc chứa gì để giúp chú đi xa nhiều ngày không đói?',
    visual: '🏜️ 🐪', options: ['Chứa mỡ dự trữ năng lượng', 'Chứa đầy nước uống', 'Chứa cát sa mạc', 'Chứa không khí'], correctAnswer: 'Chứa mỡ dự trữ năng lượng',
    scaffoldHint: 'Bướu lạc đà chứa mô mỡ giàu năng lượng, khi cần cơ thể sẽ chuyển hóa thành dinh dưỡng và nước!',
    funFact: 'Lạc đà còn có hàng mi dài giúp chắn bão cát sa mạc nữa đấy!'
  },
  {
    id: 's27', stage: 27, difficulty: 'hard', title: 'Trọng lực và quả táo rơi', opponentName: 'Nhà Vật Lý Trái Đất', opponentAvatar: '🍏🌍',
    questionText: 'Tại sao khi bé thả quả bóng hoặc quả táo rơi từ trên cao, nó luôn rơi xuống đất?',
    visual: '🍎 ⬇️ 🌍', options: ['Do lực hút của Trái Đất (Trọng lực)', 'Do quả táo muốn ngủ', 'Do gió thổi ép xuống', 'Do quả bóng có chân'], correctAnswer: 'Do lực hút của Trái Đất (Trọng lực)',
    scaffoldHint: 'Trái Đất như một nam châm khổng lồ hút mọi vật về phía tâm của nó bằng trọng lực!',
    funFact: 'Nhà bác học Isaac Newton phát hiện ra định luật vạn vật hấp dẫn nhờ nhìn quả táo rơi!'
  },
  {
    id: 's28', stage: 28, difficulty: 'hard', title: 'Năng lượng xanh tái tạo', opponentName: 'Cối Xay Gió Khổng Lồ', opponentAvatar: '🌬️⚡',
    questionText: 'Nguồn năng lượng sạch vô tận từ thiên nhiên không gây khói bụi ô nhiễm là gì?',
    visual: '☀️ 💨 🌊', options: ['Năng lượng gió và ánh sáng mặt trời', 'Khói than tổ ong', 'Khói xả xe máy', 'Đốt rác thải nhựa'], correctAnswer: 'Năng lượng gió và ánh sáng mặt trời',
    scaffoldHint: 'Năng lượng từ ánh nắng mặt trời và sức gió là nguồn năng lượng xanh bảo vệ Trái Đất!',
    funFact: 'Pin mặt trời biến đổi ánh sáng thành điện năng thắp sáng ngôi nhà của bé!'
  },
  {
    id: 's29', stage: 29, difficulty: 'boss', title: 'Chuỗi thức ăn rừng xanh', opponentName: 'Chúa Sơn Lâm Sư Tử', opponentAvatar: '🦁🌾',
    questionText: 'Sắp xếp chuỗi thức ăn tự nhiên: "Cỏ tươi ➔ Thỏ con ➔ Cáo già". Sinh vật nào ăn cỏ đầu tiên?',
    visual: '🌾 ➔ 🐰 ➔ 🦊', options: ['Thỏ con', 'Cáo già', 'Sư tử', 'Đại bàng'], correctAnswer: 'Thỏ con',
    scaffoldHint: 'Cỏ là thức ăn cho thỏ con hiền lành; rồi thỏ là thức ăn của thú săn mồi trong tự nhiên!',
    funFact: 'Mọi sinh vật trong chuỗi thức ăn đều có vai trò giữ cân bằng sinh thái cho Trái Đất!'
  },
  {
    id: 's30', stage: 30, difficulty: 'boss', title: 'Thần Thiên Nhiên Đại Thụ (TRÙM KHOA HỌC)', opponentName: 'Thần Đất Mẹ Gaia', opponentAvatar: '👑🌍🌱',
    questionText: 'Hành động ý nghĩa nhất mà mọi bạn nhỏ có thể làm để bảo vệ hành tinh xanh Trái Đất?',
    visual: '🌳 💧 💚 Ngôi nhà chung Trái Đất', options: ['Trồng cây xanh, tiết kiệm điện nước và không xả rác', 'Chặt phá cây rừng', 'Bật đèn quạt lãng phí', 'Vứt túi nilon xuống biển'], correctAnswer: 'Trồng cây xanh, tiết kiệm điện nước và không xả rác',
    scaffoldHint: 'Mỗi hành động nhỏ: trồng thêm một cây xanh, tắt đèn khi ra khỏi phòng sẽ cứu lấy Trái Đất!',
    funFact: 'Chúc mừng bé đã trở thành Nhà Khoa Học Tí Hon Toàn Năng! Vương Quốc Tri Thức tự hào về bé!'
  }
];

export const LESSONS = {
  math: mathLessons,
  vietnamese: vietnameseLessons,
  english: englishLessons,
  science: scienceLessons
};
