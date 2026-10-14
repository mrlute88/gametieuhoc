// Ngân hàng câu đố học tập GDPT 2018 Toàn Diện (Tiểu Học Lớp 1 - 5)
// Mức 1 (Lớp 1 - 2): 8 Hòn Đảo Tri Thức (242 Ải - từ 30 đến 32 ải mỗi môn)
// Mức 2 (Lớp 3 - 4 - 5): 9 Hòn Đảo Chinh Phục (270 Ải Nâng Cao - 30 ải mỗi môn)
// Tổng cộng: 17 Hòn Đảo & 512 Ải thử thách trí tuệ bám sát toàn diện SGK GDPT 2018
import {
  ethicsLessons,
  informaticsTechLessons,
  artsMusicLessons,
  lifeSkillsLessons
} from './additionalCurriculumLevel1.js';
import {
  informaticsAdvLessons,
  technologyAdvLessons,
  ethicsAdvLessons,
  artsMusicAdvLessons
} from './additionalCurriculumLevel2.js';

export const GRADE_LEVELS = [
  {
    id: 'level1',
    name: 'Mức 1: Lớp 1 - 2',
    shortName: 'Lớp 1 - 2',
    badge: '🌱 Khởi Động',
    title: 'Vương Quốc Khởi Động (Lớp 1 - 2)',
    description: 'Kiến thức toàn diện chuẩn GDPT 2018: Toán, Tiếng Việt, Tiếng Anh, TN&XH, Đạo đức, Tin học - Công nghệ, Âm nhạc - Mĩ thuật và Kỹ năng sinh tồn.',
    color: '#10b981',
    accentColor: '#10b981',
    bgBadge: '#ecfdf5',
    borderBadge: '#a7f3d0'
  },
  {
    id: 'level2',
    name: 'Mức 2: Lớp 3 - 4 - 5',
    shortName: 'Lớp 3 - 4 - 5',
    badge: '🚀 Chinh Phục',
    title: 'Vương Quốc Khám Phá (Lớp 3 - 4 - 5)',
    description: 'Tư duy chuyên sâu chuẩn GDPT 2018: Toán nâng cao, Tiếng Việt mở rộng, Tiếng Anh giao tiếp, Khoa học, Lịch sử - Địa lí, Tin học lập trình, Công nghệ sáng chế, Đạo đức công dân và Nghệ thuật.',
    color: '#6366f1',
    accentColor: '#4f46e5',
    bgBadge: '#ede9fe',
    borderBadge: '#c7d2fe'
  }
];

export const SUBJECTS_LEVEL1 = [
  {
    id: 'math',
    levelId: 'level1',
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
    levelId: 'level1',
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
    levelId: 'level1',
    name: 'Thung Lũng Tiếng Anh',
    grade: 'Lớp 1 - 2',
    icon: '🌍',
    color: 'from-sky-400 to-blue-600',
    accentColor: '#0ea5e9',
    description: 'Từ vựng màu sắc, số đếm, gia đình, trường học, cảm xúc và ngữ pháp giao tiếp.',
    bannerEmoji: '🌈'
  },
  {
    id: 'science',
    levelId: 'level1',
    name: 'Xứ Sở Khoa Học (TN&XH)',
    grade: 'Lớp 1 - 2',
    icon: '🌱',
    color: 'from-purple-400 to-indigo-600',
    accentColor: '#8b5cf6',
    description: 'Khám phá cơ thể, động thực vật, thời tiết, vòng đời sinh vật và bảo vệ môi trường.',
    bannerEmoji: '🔬'
  },
  {
    id: 'ethics',
    levelId: 'level1',
    name: 'Vườn Ươm Đạo Đức & Kỹ Năng',
    grade: 'Lớp 1 - 2',
    icon: '💖',
    color: 'from-pink-400 to-rose-600',
    accentColor: '#e11d48',
    description: 'Lời chào lễ phép, cảm ơn xin lỗi, hiếu thảo cha mẹ, thật thà và an toàn giao thông.',
    bannerEmoji: '🌸'
  },
  {
    id: 'informatics_tech',
    levelId: 'level1',
    name: 'Đảo Tin Học & Công Nghệ Nhí',
    grade: 'Lớp 1 - 2',
    icon: '💻',
    color: 'from-cyan-400 to-blue-600',
    accentColor: '#0284c7',
    description: 'Làm quen máy tính, chuột và bàn phím, an toàn điện gia đình và tư duy thuật toán hình ảnh.',
    bannerEmoji: '🤖'
  },
  {
    id: 'arts_music',
    levelId: 'level1',
    name: 'Ốc Đảo Âm Nhạc & Sắc Màu',
    grade: 'Lớp 1 - 2',
    icon: '🎨',
    color: 'from-amber-400 to-yellow-600',
    accentColor: '#d97706',
    description: 'Bảy nốt nhạc diệu kỳ, nhạc cụ gõ, màu sắc cơ bản, pha màu thần tiên và hình khối mĩ thuật.',
    bannerEmoji: '🎶'
  },
  {
    id: 'life_skills',
    levelId: 'level1',
    name: 'Thung Lũng Kỹ Năng Sinh Tồn',
    grade: 'Lớp 1 - 2',
    icon: '🛡️',
    color: 'from-teal-400 to-emerald-600',
    accentColor: '#0d9488',
    description: 'Rửa tay 6 bước, số cứu hộ 113-114-115, quy tắc 5 ngón tay, thoát hiểm khói lửa và phòng đuối nước.',
    bannerEmoji: '🏕️'
  }
];

export const SUBJECTS_LEVEL2 = [
  {
    id: 'math_adv',
    levelId: 'level2',
    name: 'Toán Học Nâng Cao',
    grade: 'Lớp 3 - 4 - 5',
    icon: '📐',
    color: 'from-amber-500 to-red-600',
    accentColor: '#ea580c',
    description: 'Phép nhân chia nhiều chữ số, phân số, số thập phân, hình học phẳng và toán chuyển động đều.',
    bannerEmoji: '🏰'
  },
  {
    id: 'vietnamese_adv',
    levelId: 'level2',
    name: 'Đại Ngàn Tiếng Việt',
    grade: 'Lớp 3 - 4 - 5',
    icon: '📚',
    color: 'from-emerald-500 to-green-700',
    accentColor: '#059669',
    description: 'Biện pháp tu từ, từ đồng nghĩa - trái nghĩa, câu ghép, thành ngữ tục ngữ và cảm thụ văn học.',
    bannerEmoji: '🌳'
  },
  {
    id: 'english_adv',
    levelId: 'level2',
    name: 'Đỉnh Núi Tiếng Anh',
    grade: 'Lớp 3 - 4 - 5',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    accentColor: '#0284c7',
    description: 'Thì hiện tại - quá khứ - tương lai, so sánh hơn - nhất, từ vựng Cambridge Movers/Flyers và đọc hiểu.',
    bannerEmoji: '🏔️'
  },
  {
    id: 'science_adv',
    levelId: 'level2',
    name: 'Viện Hàn Lâm Khoa Học',
    grade: 'Lớp 3 - 4 - 5',
    icon: '⚡',
    color: 'from-purple-500 to-violet-700',
    accentColor: '#7c3aed',
    description: 'Cơ quan tuần hoàn - hô hấp, các thể của chất, năng lượng tái tạo, chuỗi thức ăn và bảo vệ Trái Đất.',
    bannerEmoji: '🔭'
  },
  {
    id: 'history_geo',
    levelId: 'level2',
    name: 'Non Sông & Sử Ký Việt Nam',
    grade: 'Lớp 4 - 5',
    icon: '🗺️',
    color: 'from-rose-500 to-red-700',
    accentColor: '#e11d48',
    description: 'Địa lý các vùng miền, biển đảo thiêng liêng và các mốc son lịch sử hào hùng dựng nước giữ nước.',
    bannerEmoji: '🚩'
  },
  {
    id: 'informatics_adv',
    levelId: 'level2',
    name: 'Thành Phố Tin Học & Thuật Toán',
    grade: 'Lớp 3 - 4 - 5',
    icon: '💾',
    color: 'from-blue-500 to-indigo-700',
    accentColor: '#3b82f6',
    description: 'Thông tin dữ liệu, mạng Internet an toàn, sơ đồ tư duy, cấu trúc lặp và lập trình khối Scratch.',
    bannerEmoji: '🖥️'
  },
  {
    id: 'technology_adv',
    levelId: 'level2',
    name: 'Thung Lũng Sáng Chế & Công Nghệ',
    grade: 'Lớp 3 - 4 - 5',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-700',
    accentColor: '#d97706',
    description: 'Đèn học bảo vệ mắt, cơ cấu truyền động xích đai, mạch điện cơ bản, năng lượng sạch và lắp ráp cơ khí.',
    bannerEmoji: '🔧'
  },
  {
    id: 'ethics_adv',
    levelId: 'level2',
    name: 'Vương Quốc Đạo Đức & Công Dân',
    grade: 'Lớp 3 - 4 - 5',
    icon: '🕊️',
    color: 'from-fuchsia-500 to-pink-700',
    accentColor: '#c026d3',
    description: 'Tôn trọng sự khác biệt, giữ chữ tín, phòng chống bạo lực học đường, quyền trẻ em và bảo vệ Trái Đất.',
    bannerEmoji: '🏛️'
  },
  {
    id: 'arts_music_adv',
    levelId: 'level2',
    name: 'Cung Điện Âm Nhạc & Mĩ Thuật',
    grade: 'Lớp 3 - 4 - 5',
    icon: '🎻',
    color: 'from-violet-500 to-purple-800',
    accentColor: '#8b5cf6',
    description: 'Khuông nhạc khóa Sol, trường độ nốt, dân ca 3 miền, tranh dân gian Đông Hồ và luật phối cảnh xa gần.',
    bannerEmoji: '🎭'
  }
];

export const SUBJECTS_BY_LEVEL = {
  level1: SUBJECTS_LEVEL1,
  level2: SUBJECTS_LEVEL2
};

export const SUBJECTS = [...SUBJECTS_LEVEL1, ...SUBJECTS_LEVEL2];

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
    items: ['🍎', '🍎', '🍎', '🍎', '🍎'], options: ['3', '4', '6', '5'], correctAnswer: '5',
    scaffoldHint: 'Bé hãy chỉ tay và cùng đếm từng quả: 1, 2, 3, 4, và 5 quả táo!',
    funFact: 'Táo chứa nhiều vitamin giúp mắt sáng và cơ thể khỏe mạnh đấy!'
  },
  {
    id: 'm2', stage: 2, difficulty: 'easy', title: 'Phép cộng trong rừng', opponentName: 'Thỏ Trắng Nhanh Trí', opponentAvatar: '🐰',
    questionText: 'Có 3 chú thỏ con, thêm 2 chú thỏ chạy tới. Có tất cả mấy chú thỏ?',
    leftItems: ['🐰', '🐰', '🐰'], operator: '+', rightItems: ['🐰', '🐰'], options: ['5', '4', '6', '7'], correctAnswer: '5',
    scaffoldHint: 'Bé gom lại: 3 chú thỏ + 2 chú thỏ nữa = 5 chú thỏ con tất cả!',
    funFact: '3 cộng 2 bằng 5. Bé làm toán nhanh như chớp!'
  },
  {
    id: 'm3', stage: 3, difficulty: 'easy', title: 'Hái cà rốt cho sóc', opponentName: 'Sóc Nâu Tinh Nghịch', opponentAvatar: '🐿️',
    questionText: 'Chú sóc có 6 củ cà rốt, sóc ăn hết 2 củ. Sóc còn lại mấy củ?',
    leftItems: ['🥕', '🥕', '🥕', '🥕', '🥕', '🥕'], operator: '-', rightItems: ['🥕', '🥕'], options: ['3', '5', '4', '6'], correctAnswer: '4',
    scaffoldHint: 'Từ 6 củ ban đầu, bé bớt đi 2 củ: 6 trừ 2 còn lại đúng 4 củ cà rốt!',
    funFact: 'Phép trừ là hành động bớt đi hoặc cho đi một phần đó bé!'
  },
  {
    id: 'm4', stage: 4, difficulty: 'easy', title: 'So sánh số lượng', opponentName: 'Rùa Già Thông Thái', opponentAvatar: '🐢',
    questionText: 'Bên nào có nhiều ngôi sao hơn? Điền dấu thích hợp: 4 ... 7',
    visual: '4 ⭐⭐⭐⭐  so với  7 ⭐⭐⭐⭐⭐⭐⭐', options: ['> (Lớn hơn)', '< (Bé hơn)', '= (Bằng nhau)'], correctAnswer: '< (Bé hơn)',
    scaffoldHint: '4 ít hơn 7, nên cái miệng cá sấu sẽ há rộng về phía số 7 to hơn: 4 < 7!',
    funFact: 'Dấu bé hơn mũi nhọn luôn hướng về số nhỏ hơn đó bé!'
  },
  {
    id: 'm5', stage: 5, difficulty: 'easy', title: 'Thu hoạch cam vàng', opponentName: 'Khỉ Vàng Nhanh Nhẹn', opponentAvatar: '🐒',
    questionText: 'Bé có 4 quả cam, mẹ cho thêm 4 quả cam nữa. Bé có tất cả mấy quả cam?',
    leftItems: ['🍊', '🍊', '🍊', '🍊'], operator: '+', rightItems: ['🍊', '🍊', '🍊', '🍊'], options: ['8', '6', '7', '9'], correctAnswer: '8',
    scaffoldHint: 'Bé đếm tiếp từ 4: thêm 1 là 5, thêm 2 là 6, thêm 3 là 7, thêm 4 là 8! 4 + 4 = 8!',
    funFact: 'Quả cam có nhiều vitamin C giúp bé không bị ốm vặt!'
  },
  {
    id: 'm6', stage: 6, difficulty: 'easy', title: 'Đàn ong chăm chỉ', opponentName: 'Ong Chúa Hoàng Gia', opponentAvatar: '🐝',
    questionText: 'Có 9 chú ong đang hút mật, 4 chú ong bay về tổ. Còn lại mấy chú ong?',
    leftItems: ['🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝', '🐝'], operator: '-', rightItems: ['🐝', '🐝', '🐝', '🐝'], options: ['4', '6', '5', '7'], correctAnswer: '5',
    scaffoldHint: 'Bé lấy 9 ngón tay bớt đi 4 ngón: 9 trừ 4 còn lại đúng 5 chú ong!',
    funFact: 'Ong mật bay rất xa để mang về giọt mật ngọt ngào cho đời!'
  },
  {
    id: 'm7', stage: 7, difficulty: 'easy', title: 'Nhận diện hình khối', opponentName: 'Nhím Gai Kiến Trúc', opponentAvatar: '🦔',
    questionText: 'Hình nào có 3 cạnh và 3 góc nhọn xinh xắn?',
    visual: '🔺 📐', options: ['Hình tròn', 'Hình tam giác', 'Hình vuông', 'Hình chữ nhật'], correctAnswer: 'Hình tam giác',
    scaffoldHint: 'Tam có nghĩa là 3! Hình có 3 cạnh là hình tam giác như chiếc bánh pizza hay mái nhà!',
    funFact: 'Kim tự tháp nổi tiếng ở Ai Cập có các mặt là hình tam giác khổng lồ đấy!'
  },
  {
    id: 'm8', stage: 8, difficulty: 'easy', title: 'Bé xem đồng hồ', opponentName: 'Cú Đồng Hồ Cổ', opponentAvatar: '🦉',
    questionText: 'Kim ngắn chỉ số 7, kim dài chỉ số 12. Bây giờ là mấy giờ?',
    visual: '⏰ (Kim ngắn: 7, Kim dài: 12)', options: ['6 giờ đúng', '8 giờ đúng', '12 giờ đúng', '7 giờ đúng'], correctAnswer: '7 giờ đúng',
    scaffoldHint: 'Khi kim dài chỉ số 12, kim ngắn chỉ vào số nào thì là đúng giờ đó: 7 giờ sáng bé đi học!',
    funFact: 'Dậy sớm lúc 6-7 giờ sáng giúp bé hít thở không khí trong lành và thông minh hơn!'
  },
  {
    id: 'm9', stage: 9, difficulty: 'easy', title: 'Phép cộng ba số', opponentName: 'Voi Con Khổng Lồ', opponentAvatar: '🐘',
    questionText: 'Tính nhẩm nhanh chuỗi phép tính: 2 + 3 + 2 = ?',
    visual: '🌟 2 + 3 + 2 = ?', options: ['6', '8', '7', '9'], correctAnswer: '7',
    scaffoldHint: 'Bé làm từng bước: 2 + 3 = 5, sau đó lấy 5 + 2 = 7!',
    funFact: 'Tính nhẩm từng đôi một là bí quyết của các kiện tướng toán học!'
  },
  {
    id: 'm10', stage: 10, difficulty: 'easy', title: 'Kho báu số 10 tròn trĩnh', opponentName: 'Rồng Thần Hộ Vệ', opponentAvatar: '🐉',
    questionText: 'Số nào cộng với 6 để vừa tròn số 10 kỳ diệu? 6 + ... = 10',
    visual: '💎 6 + ? = 10', options: ['4', '3', '5', '6'], correctAnswer: '4',
    scaffoldHint: 'Bé xòe 10 ngón tay, gập lại 6 ngón tay, đếm số ngón tay còn đứng: đúng 4 ngón! 6 + 4 = 10!',
    funFact: 'Số 10 là số tròn chục nhỏ nhất và có hai chữ số đó bé!'
  },
  // Bổ sung 22 ải mới với độ khó tăng dần
  {
    id: 'm11', stage: 11, difficulty: 'medium', title: 'Phép cộng phạm vi 20', opponentName: 'Hươu Sao Nhanh Trí', opponentAvatar: '🦌',
    questionText: 'Một đàn hươu có 10 con, thêm 5 con chạy đến nhập đàn. Có tất cả bao nhiêu con hươu?',
    visual: '🦌 10 + 5 = ?', options: ['13', '14', '16', '15'], correctAnswer: '15',
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
    visual: '📏 [0 cm ──────── 9 cm]', options: ['9 cm', '7 cm', '8 cm', '10 cm'], correctAnswer: '9 cm',
    scaffoldHint: 'Điểm đầu ở vạch 0, điểm cuối ở vạch 9 nên bút chì dài đúng 9 cm!',
    funFact: 'Xăng-ti-mét viết tắt là cm, đơn vị đo độ dài rất quen thuộc của học sinh!'
  },
  {
    id: 'm16', stage: 16, difficulty: 'medium', title: 'Phép tính hai bước liên tiếp', opponentName: 'Ngựa Vằn Tốc Độ', opponentAvatar: '🦓',
    questionText: 'Tính giá trị biểu thức: 16 - 6 + 5 = ?',
    visual: '⚡ (16 - 6) + 5 = ?', options: ['13', '14', '16', '15'], correctAnswer: '15',
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
    visual: '🚂 30 + 40 = ?', options: ['60', '80', '90', '70'], correctAnswer: '70',
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
    visual: '📅 T2 ➔ T3 ➔ T4 ➔ [ ? ]', options: ['Thứ Năm', 'Thứ Ba', 'Thứ Sáu', 'Thứ Bảy'], correctAnswer: 'Thứ Năm',
    scaffoldHint: 'Thứ Năm là ngày đứng liền sau Thứ Tư trong tuần lễ!',
    funFact: 'Một tuần có 7 ngày: Thứ Hai, Ba, Tư, Năm, Sáu, Bảy và Chủ Nhật!'
  },
  {
    id: 'm21', stage: 21, difficulty: 'hard', title: 'Khối lập phương & Hộp chữ nhật', opponentName: 'Sư Tử Kiến Trúc Sư', opponentAvatar: '🦁',
    questionText: 'Viên xúc xắc xúc xắc 6 mặt đều bằng nhau có hình dạng của khối gì?',
    visual: '🎲 (Xúc xắc 6 mặt vuông)', options: ['Khối cầu', 'Khối trụ', 'Khối chữ nhật', 'Khối lập phương'], correctAnswer: 'Khối lập phương',
    scaffoldHint: 'Khối lập phương có 6 mặt đều là các hình vuông bằng nhau chằn chặn!',
    funFact: 'Khối rubik huyền thoại cũng được ghép từ các khối lập phương nhỏ đấy!'
  },
  {
    id: 'm22', stage: 22, difficulty: 'hard', title: 'So sánh hai biểu thức', opponentName: 'Báo Đốm Nhanh Chân', opponentAvatar: '🐆',
    questionText: 'Điền dấu so sánh thích hợp: (8 + 5) ... (9 + 4)',
    visual: '⚖️ (8 + 5) so với (9 + 4)', options: ['= (Bằng nhau)', '< (Bé hơn)', '> (Lớn hơn)'], correctAnswer: '= (Bằng nhau)',
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
    visual: '🥥 14 - 6 = ?', options: ['7', '9', '8', '10'], correctAnswer: '8',
    scaffoldHint: 'Lấy 14 trừ 4 được 10, rồi lấy 10 trừ tiếp 2 bằng 8! 14 - 6 = 8!',
    funFact: '14 - 6 = 8. Bớt dần qua 10 giúp bé không bao giờ bị trừ sai!'
  },
  {
    id: 'm25', stage: 25, difficulty: 'hard', title: 'Khởi động bảng nhân 2', opponentName: 'Tê Giác Dũng Mãnh', opponentAvatar: '🦏',
    questionText: 'Có 4 đôi đũa. Mỗi đôi đũa có 2 chiếc đũa. Hỏi có tất cả mấy chiếc đũa?',
    visual: '🥢 2 được lấy 4 lần: 2 x 4 = ?', options: ['6 chiếc', '8 chiếc', '7 chiếc', '10 chiếc'], correctAnswer: '8 chiếc',
    scaffoldHint: '2 + 2 + 2 + 2 = 8 chiếc đũa, viết gọn là 2 x 4 = 8!',
    funFact: 'Phép nhân chính là phép cộng nhiều số giống nhau lặp lại!'
  },
  {
    id: 'm26', stage: 26, difficulty: 'hard', title: 'Khởi động bảng chia 2', opponentName: 'Thiên Nga Thần Tiên', opponentAvatar: '🦢',
    questionText: 'Có 10 cái kẹo chia đều cho 2 bạn. Mỗi bạn nhận được mấy cái kẹo?',
    visual: '🍬 10 cái kẹo chia cho 2 bạn: 10 : 2 = ?', options: ['4 cái', '6 cái', '5 cái', '7 cái'], correctAnswer: '5 cái',
    scaffoldHint: 'Chia đều làm 2 phần bằng nhau: 10 : 2 = 5 cái kẹo mỗi bạn!',
    funFact: 'Chia sẻ kẹo cùng bạn bè vừa vui vừa giúp bé hiểu phép chia!'
  },
  {
    id: 'm27', stage: 27, difficulty: 'hard', title: 'Tìm quy luật dãy số bí ẩn', opponentName: 'Tắc Kè Đổi Màu', opponentAvatar: '🦎',
    questionText: 'Dãy số ma thuật: 1, 4, 7, 10, ... Số tiếp theo là số nào?',
    visual: '✨ 1 (+3) ➔ 4 (+3) ➔ 7 (+3) ➔ 10 (+3) ➔ ?', options: ['11', '12', '14', '13'], correctAnswer: '13',
    scaffoldHint: 'Mỗi số đứng sau đều hơn số đứng trước 3 đơn vị: 10 + 3 = 13!',
    funFact: 'Tìm ra quy luật dãy số chứng tỏ tư duy logic của bé cực kỳ sắc sảo!'
  },
  {
    id: 'm28', stage: 28, difficulty: 'hard', title: 'Cân đĩa thăng bằng logic', opponentName: 'Gấu Bắc Cực Trí Tuệ', opponentAvatar: '🐻‍❄️',
    questionText: '1 quả dưa hấu nặng bằng 3 quả táo. Nếu có 2 quả dưa hấu thì nặng bằng mấy quả táo?',
    visual: '⚖️ 🍉 = 🍎🍎🍎 | 🍉🍉 = ?', options: ['6 quả', '4 quả', '5 quả', '8 quả'], correctAnswer: '6 quả',
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
    visual: '💎 28 + 12 = ?', options: ['40', '38', '42', '50'], correctAnswer: '40',
    scaffoldHint: '8 + 2 = 10, nhớ 1 chục; 2 + 1 = 3, thêm 1 chục vừa nhớ là 4 chục = 40!',
    funFact: '28 + 12 = 40 tròn trĩnh tuyệt đẹp!'
  },
  {
    id: 'm31', stage: 31, difficulty: 'boss', title: 'Bài toán hai bước giải', opponentName: 'Kỳ Lân Cổ Đại', opponentAvatar: '🦄',
    questionText: 'Nam có 15 viên bi. Nam cho Bình 5 viên bi, sau đó mẹ mua thêm cho Nam 8 viên bi. Hỏi Nam có mấy viên bi?',
    visual: '🔮 15 - 5 + 8 = ?', options: ['16 viên', '17 viên', '20 viên', '18 viên'], correctAnswer: '18 viên',
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
    displayFormula: 'b + a = ?', options: ['ca', 'da', 'ba', 'ma'], correctAnswer: 'ba',
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
    displayWord: 'Chữ in hoa: A', options: ['b', 'c', 'd', 'a'], correctAnswer: 'a',
    scaffoldHint: 'Chữ A in hoa đứng đầu bảng chữ cái, chữ in thường là "a" tròn xinh có nét móc!',
    funFact: 'Chữ in hoa thường được viết ở đầu câu và tên riêng của bé đó!'
  },
  {
    id: 'v5', stage: 5, difficulty: 'easy', title: 'Ghép vần có âm cuối', opponentName: 'Khỉ Thông Thái', opponentAvatar: '🐵',
    questionText: 'Ghép âm "n" vào sau vần "a" ta được vần gì? (a + n = ?)',
    displayFormula: 'a + n = ?', options: ['am', 'an', 'ang', 'anh'], correctAnswer: 'an',
    scaffoldHint: 'A - n - an! Vần "an" trong từ "bạn bè", "bàn học"!',
    funFact: 'Vần "an" có mặt trong rất nhiều bài thơ hay của thiếu nhi.'
  },
  {
    id: 'v6', stage: 6, difficulty: 'easy', title: 'Phân biệt dấu hỏi và dấu ngã', opponentName: 'Thiên Nga Dịu Dàng', opponentAvatar: '🦢',
    questionText: 'Từ chỉ quả màu đỏ ngọt mát là "quả ..."? Điền từ đúng chính tả:',
    visual: '🍒', options: ['quả đõ (dấu ngã)', 'quả đo (không dấu)', 'quả đọ (dấu nặng)', 'quả đỏ (dấu hỏi)'], correctAnswer: 'quả đỏ (dấu hỏi)',
    scaffoldHint: 'Đỏ tươi viết bằng dấu hỏi: đ - o - hỏi - đỏ!',
    funFact: 'Dấu hỏi có hình dáng như một chiếc móc câu xinh xắn!'
  },
  {
    id: 'v7', stage: 7, difficulty: 'easy', title: 'Đố vui con vật', opponentName: 'Cáo Hiền Lành', opponentAvatar: '🦊',
    questionText: '"Con gì đuôi ngắn tai dài - Mắt hồng lông mượt có tài chạy nhanh?"',
    visual: '🥕 🐾', options: ['Con mèo', 'Con chuột', 'Con thỏ', 'Con chó'], correctAnswer: 'Con thỏ',
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
    visual: '🪞', options: ['Cái cính', 'Cái kĩnh', 'Cái cĩn', 'Cái kính'], correctAnswer: 'Cái kính',
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
    visual: '🎧 👂', options: ['Nge nhạc', 'Nghe nhạc', 'Nghè nhạc', 'Ngề nhạc'], correctAnswer: 'Nghe nhạc',
    scaffoldHint: 'Âm "ngh" đứng trước chữ e: n - g - h - e = nghe!',
    funFact: 'Cũng giống gh và k, ngh luôn đi trước i, e, ê!'
  },
  {
    id: 'v12', stage: 12, difficulty: 'medium', title: 'Vần đôi thơm ngon: UÔI', opponentName: 'Khỉ Thích Chuối', opponentAvatar: '🐒',
    questionText: 'Quả gì vỏ vàng, vị ngọt thơm chú khỉ rất mê?',
    visual: '🍌', options: ['Quả chuói', 'Quả chuới', 'Quả chuối', 'Quả chuổi'], correctAnswer: 'Quả chuối',
    scaffoldHint: 'Ch - uôi - sắc - chuối! Vần "uôi" gồm ba chữ u, ô, i ghép lại!',
    funFact: 'Chuối là loại quả giàu năng lượng giúp bé học tập hăng say!'
  },
  {
    id: 'v13', stage: 13, difficulty: 'medium', title: 'Sắp xếp trật tự câu', opponentName: 'Sóc Nhặt Hạt Dẻ', opponentAvatar: '🐿️',
    questionText: 'Sắp xếp các từ: "chăm chỉ / Bé / học bài" thành câu hoàn chỉnh và có nghĩa:',
    visual: '🧩 chăm chỉ / Bé / học bài', options: ['Học bài bé chăm chỉ.', 'Bé chăm chỉ học bài.', 'Chăm chỉ bé học bài.', 'Bé học chăm bài chỉ.'], correctAnswer: 'Bé chăm chỉ học bài.',
    scaffoldHint: 'Từ chỉ người (Bé) đứng đầu câu, tiếp theo là đặc điểm (chăm chỉ) và hành động (học bài)!',
    funFact: 'Đầu câu viết hoa, cuối câu có dấu chấm là câu chuẩn mực!'
  },
  {
    id: 'v14', stage: 14, difficulty: 'medium', title: 'Điền từ vào ca dao tục ngữ', opponentName: 'Cò Trắng Bay Lả', opponentAvatar: '🦩',
    questionText: 'Điền từ còn thiếu vào câu tục ngữ: "Học ăn, học nói, học gói, học ..."',
    visual: '📜 Học ăn, học nói, học gói, học ... ?', options: ['hát', 'chơi', 'mở', 'cười'], correctAnswer: 'mở',
    scaffoldHint: '"Học gói, học mở" là lời khuyên bé học cách cư xử khéo léo và lễ phép!',
    funFact: 'Tục ngữ Việt Nam chứa đựng bao lời dạy sâu sắc của ông bà ngày xưa!'
  },
  {
    id: 'v15', stage: 15, difficulty: 'medium', title: 'Dấu chấm câu đúng vị trí', opponentName: 'Chim Bồ Câu Đưa Thư', opponentAvatar: '🕊️',
    questionText: 'Dấu câu nào dùng để kết thúc một câu kể đầy đủ ý nghĩa?',
    visual: '📝 Hôm nay trời nắng đẹp [ ? ]', options: ['Dấu phẩy ( , )', 'Dấu hai chấm ( : )', 'Dấu gạch ngang ( - )', 'Dấu chấm ( . )'], correctAnswer: 'Dấu chấm ( . )',
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
    visual: '📺 🛏️', options: ['Múa may', 'Cái tivi', 'Vui vẻ', 'Chạy nhanh'], correctAnswer: 'Cái tivi',
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
    visual: '📚 ✨', options: ['Lười biếng', 'Vội vàng', 'Chậm chạp', 'Cần cù'], correctAnswer: 'Cần cù',
    scaffoldHint: 'Cần cù và chăm chỉ đều khen ngợi người chịu khó làm việc và học bài!',
    funFact: 'Tiếng Việt có rất nhiều từ đồng nghĩa phong phú!'
  },
  {
    id: 'v20', stage: 20, difficulty: 'medium', title: 'Mẫu câu "Ai là gì?"', opponentName: 'Cô Giáo Cú Mèo', opponentAvatar: '🦉',
    questionText: 'Câu nào dưới đây được viết theo mẫu câu giới thiệu "Ai là gì?"',
    visual: '👩‍🏫 🏫', options: ['Mẹ em đang nấu cơm.', 'Mẹ em rất hiền từ.', 'Mẹ em là cô giáo.', 'Mẹ em đi làm về.'], correctAnswer: 'Mẹ em là cô giáo.',
    scaffoldHint: 'Mẫu câu có từ "là" dùng để giới thiệu nghề nghiệp hoặc tên gọi: Mẹ em LÀ cô giáo!',
    funFact: 'Mẫu câu "Ai là gì?" giúp bé tự tin giới thiệu bản thân trước cả lớp!'
  },
  {
    id: 'v21', stage: 21, difficulty: 'hard', title: 'Mẫu câu "Ai làm gì?"', opponentName: 'Bác Nông Dân Trâu Mộng', opponentAvatar: '🐃',
    questionText: 'Câu nào dưới đây miêu tả hành động theo mẫu câu "Ai làm gì?"',
    visual: '🌾 🚜', options: ['Bác nông dân là người lao động.', 'Bác nông dân rất cần cù.', 'Cánh đồng lúa chín vàng.', 'Bác nông dân đang cày ruộng.'], correctAnswer: 'Bác nông dân đang cày ruộng.',
    scaffoldHint: '"Cày ruộng" là hành động cụ thể, trả lời cho câu hỏi bác nông dân làm gì!',
    funFact: 'Mẫu câu "Ai làm gì?" luôn chứa từ chỉ hoạt động!'
  },
  {
    id: 'v22', stage: 22, difficulty: 'hard', title: 'Mẫu câu "Ai thế nào?"', opponentName: 'Thiếu Nữ Hoa Sen', opponentAvatar: '🪷',
    questionText: 'Câu nào dưới đây miêu tả đặc điểm theo mẫu câu "Ai thế nào?"',
    visual: '🌸 💖', options: ['Bông hoa là loài thực vật.', 'Bé đang tưới nước cho hoa.', 'Bông hoa hồng rất thơm và đẹp.', 'Gió thổi cánh hoa rơi.'], correctAnswer: 'Bông hoa hồng rất thơm và đẹp.',
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
    visual: '🌸 🌼 🧧', options: ['Hoa phượng vĩ', 'Hoa mai và hoa đào', 'Hoa cúc trắng', 'Hoa sen hồng'], correctAnswer: 'Hoa mai và hoa đào',
    scaffoldHint: 'Đoạn văn viết rõ: "Hoa mai hoa đào nở rộ đón Tết"!',
    funFact: 'Đọc kỹ từng câu chữ sẽ giúp bé tìm ra đáp án ngay trong bài đọc!'
  },
  {
    id: 'v25', stage: 25, difficulty: 'hard', title: 'Chính tả phân biệt S hay X', opponentName: 'Ngôi Sao Sáng Ngời', opponentAvatar: '⭐',
    questionText: 'Từ nào viết đúng chính tả để chỉ bầu trời đêm lấp lánh?',
    visual: '✨ 🌌', options: ['Ngôi xao', 'Xao xáng', 'Ngôi xảo', 'Ngôi sao'], correctAnswer: 'Ngôi sao',
    scaffoldHint: 'Ngôi sao viết bằng s (s mạnh): s - ao - sao!',
    funFact: 'Phân biệt s và x giúp nét chữ của bé luôn chuẩn mực và sạch đẹp!'
  },
  {
    id: 'v26', stage: 26, difficulty: 'hard', title: 'Chính tả phân biệt TR hay CH', opponentName: 'Chú Trâu Cần Mẫn', opponentAvatar: '🐂',
    questionText: 'Con vật giúp bác nông dân cày ruộng viết đúng chính tả là con gì?',
    visual: '🌾 🐃', options: ['Con châu', 'Con trâu', 'Con trầu', 'Con chầu'], correctAnswer: 'Con trâu',
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
    visual: '👨‍👩‍👧‍👦 👵', options: ['Tò mò', 'Nhanh nhẹn', 'Hiếu thảo', 'Thật thà'], correctAnswer: 'Hiếu thảo',
    scaffoldHint: 'Con cháu hiếu thảo luôn yêu thương, chăm sóc và làm vui lòng ông bà cha mẹ!',
    funFact: 'Hiếu thảo là phẩm chất đáng quý nhất của một người con ngoan!'
  },
  {
    id: 'v29', stage: 29, difficulty: 'boss', title: 'Khôi phục câu thơ lục bát', opponentName: 'Cụ Rùa Hồ Gươm', opponentAvatar: '🐢📜',
    questionText: 'Điền từ thích hợp vào câu ca dao: "Công cha như núi Thái Sơn - Nghĩa mẹ như nước trong ... chảy ra."',
    visual: '⛰️ 🌊 "Nghĩa mẹ như nước trong ... chảy ra"', options: ['sông', 'biển', 'suối', 'nguồn'], correctAnswer: 'nguồn',
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
    visual: '🍎', options: ['Blue (Xanh dương)', 'Green (Màu lục)', 'Red (Màu đỏ)', 'Yellow (Màu vàng)'], correctAnswer: 'Red (Màu đỏ)',
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
    visual: '⭐⭐⭐', options: ['One', 'Two', 'Four', 'Three'], correctAnswer: 'Three',
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
    visual: '✏️', options: ['Bag (Cặp sách)', 'Pencil (Bút chì)', 'Chair (Cái ghế)', 'Desk (Bàn học)'], correctAnswer: 'Pencil (Bút chì)',
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
    visual: '👃', options: ['Eye', 'Ear', 'Mouth', 'Nose'], correctAnswer: 'Nose',
    scaffoldHint: 'N-O-S-E đọc là Nose /nəʊz/ nghĩa là cái mũi!',
    funFact: 'Your nose can remember 50,000 different scents!'
  },
  {
    id: 'e8', stage: 8, difficulty: 'easy', title: 'Greetings: Good Morning', opponentName: 'Golden Lion King', opponentAvatar: '🦁',
    questionText: 'Khi gặp thầy cô và bạn bè buổi sáng, em nói câu chào nào?',
    visual: '☀️ 🏫 👋', options: ['Good night!', 'Goodbye!', 'Good morning!', 'Thank you!'], correctAnswer: 'Good morning!',
    scaffoldHint: 'Good morning có nghĩa là "Chào buổi sáng tốt lành!"',
    funFact: 'A cheerful greeting brings a bright smile to everyone!'
  },
  // Bổ sung 22 ải Tiếng Anh
  {
    id: 'e9', stage: 9, difficulty: 'medium', title: 'Count Numbers: Ten', opponentName: 'Bouncing Kangaroo', opponentAvatar: '🦘',
    questionText: 'Bé xòe 10 ngón tay xinh. Số 10 trong Tiếng Anh là gì?',
    visual: '🔟 🖐️🖐️', options: ['Eight', 'Nine', 'Seven', 'Ten'], correctAnswer: 'Ten',
    scaffoldHint: 'T-E-N là Ten /ten/ nghĩa là số 10!',
    funFact: 'You have ten fingers and ten toes!'
  },
  {
    id: 'e10', stage: 10, difficulty: 'medium', title: 'Farm Animals: Cow', opponentName: 'Farm Dog', opponentAvatar: '🐕',
    questionText: 'Bạn bò sữa kêu "Moo moo" trong Tiếng Anh đọc là gì?',
    visual: '🐄 🥛', options: ['Pig', 'Duck', 'Cow', 'Horse'], correctAnswer: 'Cow',
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
    visual: '👩‍👧 💐', options: ['Father', 'Mother', 'Brother', 'Sister'], correctAnswer: 'Mother',
    scaffoldHint: 'Mother /ˈmʌðə/ nghĩa là người mẹ kính yêu!',
    funFact: 'Mother is often called Mom or Mommy!'
  },
  {
    id: 'e13', stage: 13, difficulty: 'medium', title: 'Classroom: Book', opponentName: 'Owl Scholar', opponentAvatar: '🦉',
    questionText: 'Vật dụng chứa nhiều bài học hay và tranh ảnh em đọc mỗi ngày là gì?',
    visual: '📚', options: ['Ruler', 'Eraser', 'Desk', 'Book'], correctAnswer: 'Book',
    scaffoldHint: 'B-O-O-K là Book /bʊk/ nghĩa là quyển sách!',
    funFact: 'Reading books opens a magical world of adventure!'
  },
  {
    id: 'e14', stage: 14, difficulty: 'medium', title: 'Food & Drinks: Milk', opponentName: 'Baby Calf', opponentAvatar: '🐮',
    questionText: 'Thức uống màu trắng thơm mát giúp bé cao lớn mỗi ngày là gì?',
    visual: '🥛', options: ['Water', 'Milk', 'Tea', 'Juice'], correctAnswer: 'Milk',
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
    visual: '🎈 🏖️', options: ['Monday', 'Wednesday', 'Sunday', 'Friday'], correctAnswer: 'Sunday',
    scaffoldHint: 'Sunday /ˈsʌndeɪ/ nghĩa là Ngày Chủ Nhật rực rỡ nắng vàng!',
    funFact: 'Sunday is named after the bright Sun in the sky!'
  },
  {
    id: 'e17', stage: 17, difficulty: 'medium', title: 'Feelings: Happy', opponentName: 'Smiling Bunny', opponentAvatar: '🐰',
    questionText: 'Khi em mỉm cười vui sướng và nhận được quà, cảm xúc đó là gì?',
    visual: '😊 🎁', options: ['Sad', 'Angry', 'Tired', 'Happy'], correctAnswer: 'Happy',
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
    visual: '🛏️ 🌙', options: ['Kitchen', 'Bathroom', 'Bedroom', 'Garden'], correctAnswer: 'Bedroom',
    scaffoldHint: 'Bed (giường) + Room (phòng) = Bedroom /ˈbedruːm/ nghĩa là phòng ngủ!',
    funFact: 'Bedrooms are cozy places for sweet dreams!'
  },
  {
    id: 'e20', stage: 20, difficulty: 'medium', title: 'Clothes: Hat', opponentName: 'Gentleman Beaver', opponentAvatar: '🦫',
    questionText: 'Đồ vật đội lên đầu để che nắng che mưa khi ra ngoài là gì?',
    visual: '🧢 🎩', options: ['Shoes', 'Hat', 'Socks', 'Coat'], correctAnswer: 'Hat',
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
    visual: '🌊 ⬇️ 🐟', options: ['On', 'In', 'Under', 'Above'], correctAnswer: 'Under',
    scaffoldHint: 'Under /ˈʌndə/ nghĩa là ở phía dưới!',
    funFact: 'Under the sea, there are millions of colorful fish!'
  },
  {
    id: 'e23', stage: 23, difficulty: 'hard', title: 'Self-Introduction', opponentName: 'English Prince', opponentAvatar: '🤴',
    questionText: 'Khi người bạn nước ngoài hỏi "What is your name?", em trả lời thế nào?',
    visual: '👋 "What is your name?"', options: ['I am seven.', 'My name is Nam.', 'I am fine.', 'It is a cat.'], correctAnswer: 'My name is Nam.',
    scaffoldHint: '"My name is..." dùng để nói tên của em cho bạn biết!',
    funFact: 'Introducing your name is the first step to making global friends!'
  },
  {
    id: 'e24', stage: 24, difficulty: 'hard', title: 'Asking Age: How old', opponentName: 'Birthday Bear', opponentAvatar: '🐻🎂',
    questionText: 'Bé 7 tuổi. Khi được hỏi "How old are you?", em trả lời câu nào?',
    visual: '🎂 7 tuổi 🕯️', options: ['I like apples.', 'I am tall.', 'I have a dog.', 'I am seven years old.'], correctAnswer: 'I am seven years old.',
    scaffoldHint: '"I am seven years old" nghĩa là "Tớ 7 tuổi!"',
    funFact: 'In Grade 1 and 2, most students are 6 or 7 years old!'
  },
  {
    id: 'e25', stage: 25, difficulty: 'hard', title: 'Abilities: Can a bird fly?', opponentName: 'Eagle of the Sky', opponentAvatar: '🦅',
    questionText: 'Trả lời câu hỏi: "Can a bird fly?" (Loài chim có thể bay không?)',
    visual: '🦅 ☁️', options: ['No, it cannot.', 'It is green.', 'Yes, it can.', 'I don\'t know.'], correctAnswer: 'Yes, it can.',
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
    visual: '⏰ 8:00', options: ['It is sunny.', 'It is blue.', 'It is eight pencils.', 'It is eight o\'clock.'], correctAnswer: 'It is eight o\'clock.',
    scaffoldHint: 'It is eight o\'clock nghĩa là "Bây giờ là 8 giờ đúng!"',
    funFact: 'O\'clock stands for "of the clock"!'
  },
  {
    id: 'e28', stage: 28, difficulty: 'hard', title: 'Favorite Colors', opponentName: 'Rainbow Unicorn', opponentAvatar: '🦄🌈',
    questionText: 'Hoàn thành câu: "I like ... because it is like fresh green grass."',
    visual: '🌱 🌿', options: ['Red', 'Green', 'Pink', 'Yellow'], correctAnswer: 'Green',
    scaffoldHint: 'Green /ɡriːn/ là màu xanh lá cây mát rượi của thảm cỏ!',
    funFact: 'Green is the color of nature and vitality!'
  },
  {
    id: 'e29', stage: 29, difficulty: 'boss', title: 'Reading Short Story', opponentName: 'Storybook Dragon', opponentAvatar: '🐉📚',
    questionText: 'Read: "Tom has a little brown dog. The dog likes to play with a red ball." What does the dog play with?',
    visual: '🐶 🔴', options: ['A blue fish', 'A green tree', 'A red ball', 'A yellow hat'], correctAnswer: 'A red ball',
    scaffoldHint: 'The sentence says: "The dog likes to play with a red ball"!',
    funFact: 'Reading English stories makes your vocabulary grow fast!'
  },
  {
    id: 'e30', stage: 30, difficulty: 'boss', title: 'Dragon Master of English (TRÙM TIẾNG ANH)', opponentName: 'Supreme English Dragon', opponentAvatar: '👑🌍',
    questionText: 'Chọn câu chào mừng trang trọng nhất khi đón khách quốc tế: "Welcome to ...!"',
    visual: '🇻🇳 🌟 Welcome to ...', options: ['Goodbye friends!', 'Welcome to Vietnam!', 'Good night!', 'No, thank you!'], correctAnswer: 'Welcome to Vietnam!',
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
    visual: '🌳 💧', options: ['Lá cây', 'Bông hoa', 'Rễ cây', 'Quả ngọt'], correctAnswer: 'Rễ cây',
    scaffoldHint: 'Rễ cây cắm sâu dưới đất như những bàn tay tí hon uống nước mát!',
    funFact: 'Rễ giữ cho cây đứng vững vàng trước những cơn gió bão!'
  },
  {
    id: 's3', stage: 3, difficulty: 'easy', title: 'Thức ăn của các loài vật', opponentName: 'Bò Vàng Hiền Hòa', opponentAvatar: '🐄',
    questionText: 'Bạn bò sữa và bạn ngựa thường ăn món gì để lớn lên khỏe mạnh?',
    visual: '🌾 🐄 🐎', options: ['Thịt cá', 'Cỏ tươi và rơm', 'Kẹo ngọt', 'Bánh kem'], correctAnswer: 'Cỏ tươi và rơm',
    scaffoldHint: 'Bò và ngựa là động vật ăn thực vật, các bạn ấy thích gặm cỏ non tươi mát!',
    funFact: 'Sữa bò chứa rất nhiều canxi giúp xương bé dài và cao lớn hơn mỗi ngày!'
  },
  {
    id: 's4', stage: 4, difficulty: 'easy', title: 'Bé giữ vệ sinh cá nhân', opponentName: 'Bác Sĩ Hải Cẩu', opponentAvatar: '🦭',
    questionText: 'Bé cần rửa tay sạch bằng xà phòng vào những lúc nào?',
    visual: '🧼 🖐️ 💧', options: ['Chỉ khi tay bị dính mực', 'Chỉ khi tắm biển', 'Không cần rửa tay', 'Trước khi ăn và sau khi đi vệ sinh'], correctAnswer: 'Trước khi ăn và sau khi đi vệ sinh',
    scaffoldHint: 'Rửa tay với xà phòng trong 20-30 giây giúp đuổi sạch vi khuẩn gây hại!',
    funFact: 'Bàn tay sạch giúp bé phòng tránh cảm cúm và bệnh đường ruột rất tốt!'
  },
  {
    id: 's5', stage: 5, difficulty: 'easy', title: 'Thời tiết hôm nay', opponentName: 'Thần Mưa Vui Vẻ', opponentAvatar: '🌧️',
    questionText: 'Khi trời đổ mưa rào, em cần mang theo đồ dùng gì để không bị ướt?',
    visual: '🌧️ ☔ 🧥', options: ['Kính râm chống nắng', 'Quạt máy', 'Ô (dù) và áo mưa', 'Mũ len mùa đông'], correctAnswer: 'Ô (dù) và áo mưa',
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
    visual: '🔴 🚦', options: ['Chạy thật nhanh', 'Đi chậm rãi', 'Nhắm mắt đi tiếp', 'Dừng lại an toàn'], correctAnswer: 'Dừng lại an toàn',
    scaffoldHint: 'Đèn đỏ dừng lại - Đèn xanh mới được đi - Đèn vàng đi chậm quan sát!',
    funFact: 'Luôn nắm tay người lớn khi qua đường để giữ an toàn tuyệt đối nhé bé!'
  },
  {
    id: 's8', stage: 8, difficulty: 'easy', title: 'Bảo vệ nguồn nước sạch', opponentName: 'Rùa Biển Đại Dương', opponentAvatar: '🐢',
    questionText: 'Hành động nào dưới đây là tiết kiệm và bảo vệ nguồn nước sạch?',
    visual: '🚰 💧', options: ['Mở vòi nước xả tràn lan', 'Khóa vòi nước khi đánh răng xong', 'Vứt rác xuống hồ nước', 'Đổ dầu ăn xuống cống'], correctAnswer: 'Khóa vòi nước khi đánh răng xong',
    scaffoldHint: 'Nước ngọt rất quý giá! Khóa chặt vòi sau khi dùng giúp giữ gìn giọt nước cho muôn loài!',
    funFact: 'Trái Đất có nhiều nước nhưng hơn 97% là nước biển mặn, chỉ có rất ít nước ngọt uống được!'
  },
  // Bổ sung 22 ải Khoa Học
  {
    id: 's9', stage: 9, difficulty: 'medium', title: 'Môi trường sống của loài vật', opponentName: 'Cá Voi Xanh Đại Dương', opponentAvatar: '🐋',
    questionText: 'Loài động vật nào dưới đây sinh sống và bơi lội suốt đời dưới nước?',
    visual: '🌊 🐠', options: ['Con chim bồ câu', 'Con thỏ', 'Cá chép', 'Con khỉ'], correctAnswer: 'Cá chép',
    scaffoldHint: 'Cá chép thở bằng mang và có vây để bơi lội dưới làn nước mát!',
    funFact: 'Dưới đại dương và sông hồ có hàng triệu loài sinh vật kỳ diệu!'
  },
  {
    id: 's10', stage: 10, difficulty: 'medium', title: 'Các bộ phận của cây hoa', opponentName: 'Ong Thợ Lấy Mật', opponentAvatar: '🐝',
    questionText: 'Bộ phận nào của cây hoa có màu sắc rực rỡ và hương thơm ngát để thu hút ong bướm?',
    visual: '🌺 🌸', options: ['Rễ cây', 'Bông hoa', 'Thân cây', 'Gai nhọn'], correctAnswer: 'Bông hoa',
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
    visual: '☀️ 🌄', options: ['Hướng Tây', 'Hướng Nam', 'Hướng Bắc', 'Hướng Đông'], correctAnswer: 'Hướng Đông',
    scaffoldHint: 'Mặt trời mọc ở hướng Đông đón bình minh, và lặn ở hướng Tây khi hoàng hôn!',
    funFact: 'Đón ánh nắng sớm hướng Đông giúp cơ thể bé tổng hợp vitamin D cho xương chắc khỏe!'
  },
  {
    id: 's13', stage: 13, difficulty: 'medium', title: 'Bầu trời ban đêm', opponentName: 'Cú Đêm Ngắm Trăng', opponentAvatar: '🦉🌙',
    questionText: 'Vật thể sáng lung linh soi sáng bầu trời đêm thanh bình là gì?',
    visual: '🌙 ⭐ ✨', options: ['Mặt trời', 'Mặt trăng và các vì sao', 'Cầu vồng bảy sắc', 'Tia chớp mùa hè'], correctAnswer: 'Mặt trăng và các vì sao',
    scaffoldHint: 'Khi màn đêm buông xuống, Mặt trăng dịu dàng và muôn triệu vì sao thắp sáng bầu trời!',
    funFact: 'Mặt trăng không tự phát sáng mà phản chiếu ánh sáng từ Mặt trời đấy bé!'
  },
  {
    id: 's14', stage: 14, difficulty: 'medium', title: 'Động vật đẻ con và đẻ trứng', opponentName: 'Mẹ Gà Ấp Trứng', opponentAvatar: '🐔🥚',
    questionText: 'Con vật nào dưới đây sinh sản bằng cách đẻ trứng trong ổ?',
    visual: '🥚 🪺', options: ['Con chó', 'Con mèo', 'Con bò', 'Gà mái'], correctAnswer: 'Gà mái',
    scaffoldHint: 'Gà mẹ đẻ ra những quả trứng tròn xoe rồi ấp 21 ngày nở ra gà con!',
    funFact: 'Chim, gà, vịt, rùa và cá là những động vật sinh sản bằng cách đẻ trứng!'
  },
  {
    id: 's15', stage: 15, difficulty: 'medium', title: 'Phân loại rác bảo vệ môi trường', opponentName: 'Hiệp Sĩ Môi Trường', opponentAvatar: '♻️🦊',
    questionText: 'Vỏ chuối, cọng rau thừa thuộc loại rác nào có thể ủ làm phân bón cho cây?',
    visual: '🍌 🥬 🗑️', options: ['Rác nhựa', 'Pin cũ hỏng', 'Rác hữu cơ', 'Mảnh thủy tinh'], correctAnswer: 'Rác hữu cơ',
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
    visual: '⚡ 🔌 🚫', options: ['Nhờ bố mẹ cắm quạt', 'Uống nước mát', 'Đọc truyện tranh', 'Thò tay vào ổ cắm điện'], correctAnswer: 'Thò tay vào ổ cắm điện',
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
    visual: '🌬️ 🫁', options: ['Có màu đen và mùi khét', 'Không màu, không mùi, không vị', 'Có vị ngọt như đường', 'Có màu đỏ rực'], correctAnswer: 'Không màu, không mùi, không vị',
    scaffoldHint: 'Không khí trong lành vô hình quanh ta, không màu và không mùi nhưng cần thiết cho sự sống!',
    funFact: 'Trồng nhiều cây xanh giúp lọc sạch không khí cho ngôi trường của bé!'
  },
  {
    id: 's20', stage: 20, difficulty: 'medium', title: 'Âm thanh trong tự nhiên', opponentName: 'Dế Mèn Hát Ca', opponentAvatar: '🦗🎵',
    questionText: 'Âm thanh nào dưới đây được phát ra từ thế giới tự nhiên kỳ thú?',
    visual: '🐦 🌊 🎶', options: ['Tiếng còi xe máy ồn ào', 'Tiếng máy khoan đục tường', 'Tiếng chim hót líu lo và suối reo', 'Tiếng chuông báo thức'], correctAnswer: 'Tiếng chim hót líu lo và suối reo',
    scaffoldHint: 'Tiếng chim hót và suối reo là bản hòa ca êm dịu của mẹ thiên nhiên!',
    funFact: 'Lắng nghe âm thanh thiên nhiên giúp tâm trí bé thư giãn và thông minh hơn!'
  },
  {
    id: 's21', stage: 21, difficulty: 'hard', title: 'Nam châm kỳ diệu', opponentName: 'Nhà Bác Học Chuột', opponentAvatar: '🐭🧲',
    questionText: 'Thanh nam châm có thể hút dính những đồ vật làm bằng chất liệu gì?',
    visual: '🧲 📎', options: ['Gỗ', 'Sắt và thép', 'Nhựa dẻo', 'Vải bông'], correctAnswer: 'Sắt và thép',
    scaffoldHint: 'Nam châm có từ tính kỳ diệu, hút chặt các vật bằng sắt như kẹp ghim, đinh sắt!',
    funFact: 'Nam châm có hai cực Bắc (N) và Nam (S); hai cực cùng tên sẽ đẩy nhau, khác tên sẽ hút nhau!'
  },
  {
    id: 's22', stage: 22, difficulty: 'hard', title: 'Vòng đời của bướm', opponentName: 'Bướm Xinh Rực Rỡ', opponentAvatar: '🐛🦋',
    questionText: 'Trước khi biến thành chú bướm rực rỡ biết bay, bướm từng trải qua giai đoạn nào?',
    visual: '🥚 ➔ 🐛 ➔ 🥥 ➔ 🦋', options: ['Nòng nọc dưới nước', 'Cá con', 'Sâu bướm rồi nằm trong kén nhộng', 'Gà con'], correctAnswer: 'Sâu bướm rồi nằm trong kén nhộng',
    scaffoldHint: 'Vòng đời kỳ diệu: Trứng nở thành sâu bướm, sâu đóng kén ngủ say rồi hóa bướm bay lên!',
    funFact: 'Sự biến hóa này trong sinh học gọi là quá trình biến thái hoàn toàn!'
  },
  {
    id: 's23', stage: 23, difficulty: 'hard', title: 'Nguồn phát ra ánh sáng', opponentName: 'Đom Đóm Soi Đường', opponentAvatar: '🪲💡',
    questionText: 'Nguồn phát ánh sáng tự nhiên lớn nhất và quan trọng nhất cho Trái Đất là gì?',
    visual: '☀️ 🌍', options: ['Ngọn nến nhỏ', 'Bóng đèn pin', 'Ánh lửa trại', 'Mặt trời'], correctAnswer: 'Mặt trời',
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
    visual: '🫘 ➔ 💧 ☀️ ➔ 🌱', options: ['Chỉ cần kẹo ngọt', 'Nước, không khí, ánh sáng và đất màu mỡ', 'Để trong phòng tối kín mít', 'Đổ nước muối lên hạt'], correctAnswer: 'Nước, không khí, ánh sáng và đất màu mỡ',
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
    visual: '🍎 ⬇️ 🌍', options: ['Do quả táo muốn ngủ', 'Do gió thổi ép xuống', 'Do quả bóng có chân', 'Do lực hút của Trái Đất (Trọng lực)'], correctAnswer: 'Do lực hút của Trái Đất (Trọng lực)',
    scaffoldHint: 'Trái Đất như một nam châm khổng lồ hút mọi vật về phía tâm của nó bằng trọng lực!',
    funFact: 'Nhà bác học Isaac Newton phát hiện ra định luật vạn vật hấp dẫn nhờ nhìn quả táo rơi!'
  },
  {
    id: 's28', stage: 28, difficulty: 'hard', title: 'Năng lượng xanh tái tạo', opponentName: 'Cối Xay Gió Khổng Lồ', opponentAvatar: '🌬️⚡',
    questionText: 'Nguồn năng lượng sạch vô tận từ thiên nhiên không gây khói bụi ô nhiễm là gì?',
    visual: '☀️ 💨 🌊', options: ['Khói than tổ ong', 'Khói xả xe máy', 'Năng lượng gió và ánh sáng mặt trời', 'Đốt rác thải nhựa'], correctAnswer: 'Năng lượng gió và ánh sáng mặt trời',
    scaffoldHint: 'Năng lượng từ ánh nắng mặt trời và sức gió là nguồn năng lượng xanh bảo vệ Trái Đất!',
    funFact: 'Pin mặt trời biến đổi ánh sáng thành điện năng thắp sáng ngôi nhà của bé!'
  },
  {
    id: 's29', stage: 29, difficulty: 'boss', title: 'Chuỗi thức ăn rừng xanh', opponentName: 'Chúa Sơn Lâm Sư Tử', opponentAvatar: '🦁🌾',
    questionText: 'Sắp xếp chuỗi thức ăn tự nhiên: "Cỏ tươi ➔ Thỏ con ➔ Cáo già". Sinh vật nào ăn cỏ đầu tiên?',
    visual: '🌾 ➔ 🐰 ➔ 🦊', options: ['Cáo già', 'Sư tử', 'Đại bàng', 'Thỏ con'], correctAnswer: 'Thỏ con',
    scaffoldHint: 'Cỏ là thức ăn cho thỏ con hiền lành; rồi thỏ là thức ăn của thú săn mồi trong tự nhiên!',
    funFact: 'Mọi sinh vật trong chuỗi thức ăn đều có vai trò giữ cân bằng sinh thái cho Trái Đất!'
  },
  {
    id: 's30', stage: 30, difficulty: 'boss', title: 'Thần Thiên Nhiên Đại Thụ (TRÙM KHOA HỌC)', opponentName: 'Thần Đất Mẹ Gaia', opponentAvatar: '👑🌍🌱',
    questionText: 'Hành động ý nghĩa nhất mà mọi bạn nhỏ có thể làm để bảo vệ hành tinh xanh Trái Đất?',
    visual: '🌳 💧 💚 Ngôi nhà chung Trái Đất', options: ['Chặt phá cây rừng', 'Bật đèn quạt lãng phí', 'Trồng cây xanh, tiết kiệm điện nước và không xả rác', 'Vứt túi nilon xuống biển'], correctAnswer: 'Trồng cây xanh, tiết kiệm điện nước và không xả rác',
    scaffoldHint: 'Mỗi hành động nhỏ: trồng thêm một cây xanh, tắt đèn khi ra khỏi phòng sẽ cứu lấy Trái Đất!',
    funFact: 'Chúc mừng bé đã trở thành Nhà Khoa Học Tí Hon Toàn Năng! Vương Quốc Tri Thức tự hào về bé!'
  }
];

// Dữ liệu 30 Ải Toán Học Nâng Cao (Lớp 3 - 4 - 5)
const mathAdvLessons = [
  {
    id: 'm_adv1', stage: 1, difficulty: 'easy', title: 'Bảng nhân 7 kỳ diệu', opponentName: 'Kỳ Lân Số Học', opponentAvatar: '🦄🔢',
    questionText: 'Tính nhanh phép tính trong bảng nhân 7: 7 x 8 = ?',
    displayFormula: '7 x 8 = ?', options: ['54', '58', '56', '64'], correctAnswer: '56',
    scaffoldHint: 'Bé nhớ câu vè: 7 nhân 8 bằng năm mươi sáu (56)!',
    funFact: 'Học thuộc bảng nhân giúp bé giải toán nhân chia số lớn cực kỳ nhẹ nhàng!'
  },
  {
    id: 'm_adv2', stage: 2, difficulty: 'easy', title: 'Chu vi hình chữ nhật', opponentName: 'Hải Ly Thợ Mộc', opponentAvatar: '🦫📐',
    questionText: 'Một cái bảng có chiều dài 12 cm, chiều rộng 8 cm. Chu vi của cái bảng là bao nhiêu?',
    visual: '📏 Dài: 12 cm, Rộng: 8 cm', options: ['40 cm', '20 cm', '96 cm', '24 cm'], correctAnswer: '40 cm',
    scaffoldHint: 'Muốn tính chu vi hình chữ nhật, bé lấy (chiều dài + chiều rộng) rồi nhân với 2: (12 + 8) x 2 = 40 cm!',
    funFact: 'Chu vi chính là tổng độ dài của đường bao quanh một hình phẳng!'
  },
  {
    id: 'm_adv3', stage: 3, difficulty: 'easy', title: 'Chữ số La Mã', opponentName: 'Chiến Binh La Mã', opponentAvatar: '🏛️⚔️',
    questionText: 'Đồng hồ cổ hiển thị chữ số La Mã "XIV". Số này có giá trị là bao nhiêu trong số tự nhiên?',
    visual: '🏛️ Chữ số La Mã: XIV', options: ['16', '15', '19', '14'], correctAnswer: '14',
    scaffoldHint: 'X là 10, IV là 4. Ghép lại XIV = 10 + 4 = 14!',
    funFact: 'Chữ số La Mã thường được khắc trên mặt đồng hồ và các tập sách cổ kính!'
  },
  {
    id: 'm_adv4', stage: 4, difficulty: 'easy', title: 'Đổi đơn vị đo khối lượng', opponentName: 'Gấu Cân Đẩu Vân', opponentAvatar: '🐻⚖️',
    questionText: 'Một giỏ hoa quả nặng 3 kg 500 g. Đổi ra gam (g) là bao nhiêu?',
    visual: '⚖️ 3 kg 500 g = ? g', options: ['3050 g', '3500 g', '350 g', '3005 g'], correctAnswer: '3500 g',
    scaffoldHint: '1 kg = 1000 g, nên 3 kg = 3000 g. Cộng thêm 500 g là 3500 g!',
    funFact: 'Khối lượng chuẩn giúp các bác nông dân và đầu bếp đong đếm nguyên liệu chính xác!'
  },
  {
    id: 'm_adv5', stage: 5, difficulty: 'easy', title: 'Nhân số có 4 chữ số', opponentName: 'Rồng Lửa Tính Nhanh', opponentAvatar: '🐉🔥',
    questionText: 'Tính giá trị của phép nhân: 1215 x 3 = ?',
    displayFormula: '1215 x 3 = ?', options: ['3635', '3615', '3645', '3845'], correctAnswer: '3645',
    scaffoldHint: 'Bé nhân từ phải sang trái: 3x5=15 (nhớ 1), 3x1=3 thêm 1 là 4, 3x2=6, 3x1=3 -> 3645!',
    funFact: 'Đặt tính thẳng hàng là bí quyết tránh nhầm lẫn khi nhân số có nhiều chữ số!'
  },
  {
    id: 'm_adv6', stage: 6, difficulty: 'easy', title: 'Chia số có 4 chữ số', opponentName: 'Cú Đêm Học Giả', opponentAvatar: '🦉📜',
    questionText: 'Bác nông dân chia đều 4896 quả cam vào 4 thùng. Mỗi thùng có bao nhiêu quả cam?',
    displayFormula: '4896 : 4 = ?', options: ['1214 quả', '1224 quả', '1244 quả', '1124 quả'], correctAnswer: '1224 quả',
    scaffoldHint: 'Bé chia từ trái qua: 4:4=1, 8:4=2, 9:4=2 dư 1, hạ 6 được 16:4=4 -> Kết quả là 1224!',
    funFact: 'Phép chia giúp chúng ta phân chia của cải và tài nguyên một cách công bằng!'
  },
  {
    id: 'm_adv7', stage: 7, difficulty: 'easy', title: 'Diện tích hình vuông', opponentName: 'Nhím Gai Kiến Trúc', opponentAvatar: '🦔🟩',
    questionText: 'Một viên gạch hoa hình vuông có cạnh dài 9 cm. Diện tích của viên gạch đó là:',
    visual: '🟩 Cạnh = 9 cm', options: ['81 cm²', '36 cm²', '72 cm²', '90 cm²'], correctAnswer: '81 cm²',
    scaffoldHint: 'Muốn tính diện tích hình vuông, bé lấy cạnh nhân với chính nó: 9 x 9 = 81 cm²!',
    funFact: 'Đơn vị diện tích có thêm số 2 nhỏ ở trên đầu (cm² - xăng-ti-mét vuông) đó bé!'
  },
  {
    id: 'm_adv8', stage: 8, difficulty: 'easy', title: 'Tìm số chưa biết (Tìm x)', opponentName: 'Cáo Vàng Ẩn Số', opponentAvatar: '🦊🔍',
    questionText: 'Tìm giá trị của x trong phép tính: x : 6 = 240',
    displayFormula: 'x : 6 = 240', options: ['1240', '1400', '40', '1440'], correctAnswer: '1440',
    scaffoldHint: 'Muốn tìm số bị chia, ta lấy thương nhân với số chia: x = 240 x 6 = 1440!',
    funFact: 'Số ẩn x như một kho báu bí mật đang chờ bé giải mã!'
  },
  {
    id: 'm_adv9', stage: 9, difficulty: 'easy', title: 'Đổi đơn vị đo thời gian', opponentName: 'Đồng Hồ Cát Thần Bí', opponentAvatar: '⏳✨',
    questionText: 'Một tiết học kéo dài 2 giờ 15 phút. Hỏi thời gian đó bằng bao nhiêu phút?',
    visual: '⏰ 2 giờ 15 phút = ? phút', options: ['125 phút', '135 phút', '145 phút', '115 phút'], correctAnswer: '135 phút',
    scaffoldHint: '1 giờ có 60 phút, nên 2 giờ = 120 phút. 120 + 15 = 135 phút!',
    funFact: 'Thời gian trôi không ngừng, quản lý thời gian tốt giúp bé làm được nhiều điều bổ ích!'
  },
  {
    id: 'm_adv10', stage: 10, difficulty: 'easy', title: 'Toán đố cắt cuộn dây', opponentName: 'Bác Sĩ Voi Tinh Thông', opponentAvatar: '🐘🩺',
    questionText: 'Một cuộn dây dài 96 m, người ta cắt đi 1/4 cuộn dây để dùng. Cuộn dây còn lại bao nhiêu mét?',
    visual: '🧶 Dài 96 m ➔ Cắt 1/4', options: ['24 m', '70 m', '64 m', '72 m'], correctAnswer: '72 m',
    scaffoldHint: 'Bước 1: Đoạn cắt đi là 96 : 4 = 24 m. Bước 2: Đoạn còn lại là 96 - 24 = 72 m!',
    funFact: 'Chúc mừng bé đã vượt qua toàn bộ 10 ải Lớp 3 xuất sắc!'
  },
  {
    id: 'm_adv11', stage: 11, difficulty: 'medium', title: 'Lớp triệu và hàng triệu', opponentName: 'Vua Thiên Hà Triệu Sao', opponentAvatar: '👑⭐',
    questionText: 'Trong số 35 628 914, chữ số 5 thuộc hàng nào và lớp nào?',
    visual: '🌌 35 628 914', options: ['Hàng chục triệu, lớp triệu', 'Hàng trăm nghìn, lớp nghìn', 'Hàng triệu, lớp triệu', 'Hàng triệu, lớp nghìn'], correctAnswer: 'Hàng triệu, lớp triệu',
    scaffoldHint: 'Từ phải qua: lớp đơn vị (914), lớp nghìn (628), lớp triệu (35). Số 5 thuộc hàng triệu, số 3 thuộc hàng chục triệu!',
    funFact: 'Số tự nhiên có thể lớn vô tận vươn tới hàng tỉ và hàng ngàn tỉ!'
  },
  {
    id: 'm_adv12', stage: 12, difficulty: 'medium', title: 'Dấu hiệu chia hết cho 2 và 5', opponentName: 'Bọ Cánh Cứng Số Học', opponentAvatar: '🪲🔢',
    questionText: 'Số nào dưới đây cùng chia hết cho cả 2 và 5?',
    visual: '125,  240,  318,  552', options: ['240', '125', '318', '552'], correctAnswer: '240',
    scaffoldHint: 'Số vừa chia hết cho 2 vừa chia hết cho 5 phải có chữ số tận cùng là 0. Vậy là số 240!',
    funFact: 'Dấu hiệu chia hết là công cụ tính nhẩm siêu tốc của các nhà toán học!'
  },
  {
    id: 'm_adv13', stage: 13, difficulty: 'medium', title: 'Tìm hai số biết Tổng và Hiệu', opponentName: 'Sư Tử Cân Bằng', opponentAvatar: '🦁⚖️',
    questionText: 'Hai bạn An và Bình có tổng cộng 45 viên bi. An có nhiều hơn Bình 15 viên bi. Hỏi An có bao nhiêu viên bi?',
    visual: 'Tổng = 45  |  Hiệu = 15', options: ['15 viên', '25 viên', '35 viên', '30 viên'], correctAnswer: '30 viên',
    scaffoldHint: 'Số lớn (An) = (Tổng + Hiệu) : 2 = (45 + 15) : 2 = 60 : 2 = 30 viên bi!',
    funFact: 'Công thức vàng: Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng - Hiệu) : 2!'
  },
  {
    id: 'm_adv14', stage: 14, difficulty: 'medium', title: 'Rút gọn phân số tối giản', opponentName: 'Khỉ Thông Thái Phân Số', opponentAvatar: '🐒🍰',
    questionText: 'Rút gọn phân số 18/24 về phân số tối giản:',
    displayFormula: '18 / 24 = ?', options: ['3/4', '9/12', '6/8', '2/3'], correctAnswer: '3/4',
    scaffoldHint: 'Chia cả tử số và mẫu số cho ước chung lớn nhất là 6: 18:6=3, 24:6=4 -> Phân số tối giản là 3/4!',
    funFact: 'Phân số tối giản là phân số mà tử số và mẫu số không cùng chia hết cho số nào lớn hơn 1!'
  },
  {
    id: 'm_adv15', stage: 15, difficulty: 'medium', title: 'Phép cộng hai phân số', opponentName: 'Cá Heo Đại Dương', opponentAvatar: '🐬🌊',
    questionText: 'Tính kết quả phép cộng hai phân số: 2/5 + 3/10 = ?',
    displayFormula: '2/5 + 3/10 = ?', options: ['5/15', '7/10', '1/2', '4/10'], correctAnswer: '7/10',
    scaffoldHint: 'Quy đồng mẫu số: 2/5 = 4/10. Lấy 4/10 + 3/10 = (4+3)/10 = 7/10!',
    funFact: 'Cộng phân số khác mẫu số, bước đầu tiên và quan trọng nhất là quy đồng mẫu số!'
  },
  {
    id: 'm_adv16', stage: 16, difficulty: 'medium', title: 'Phép nhân phân số', opponentName: 'Đại Bàng Sải Cánh', opponentAvatar: '🦅✨',
    questionText: 'Tính giá trị của phép nhân hai phân số: 3/4 x 5/7 = ?',
    displayFormula: '3/4 x 5/7 = ?', options: ['8/11', '15/11', '15/28', '8/28'], correctAnswer: '15/28',
    scaffoldHint: 'Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số: (3x5)/(4x7) = 15/28!',
    funFact: 'Nhân phân số dễ hơn cộng trừ vì không cần phải quy đồng mẫu số!'
  },
  {
    id: 'm_adv17', stage: 17, difficulty: 'medium', title: 'Số trung bình cộng', opponentName: 'Ngựa Gỗ Thần Kỳ', opponentAvatar: '🎠🎯',
    questionText: 'Tìm số trung bình cộng của ba số: 24, 30 và 36',
    visual: '📊 Trung bình cộng: 24, 30, 36', options: ['28', '30', '32', '35'], correctAnswer: '30',
    scaffoldHint: 'Lấy tổng chia cho số các số hạng: (24 + 30 + 36) : 3 = 90 : 3 = 30!',
    funFact: 'Số trung bình cộng giúp chúng ta có cái nhìn tổng quan về một tập hợp dữ liệu!'
  },
  {
    id: 'm_adv18', stage: 18, difficulty: 'medium', title: 'Diện tích hình bình hành', opponentName: 'Báo Gấm Tốc Độ', opponentAvatar: '🐆📏',
    questionText: 'Một hình bình hành có độ dài đáy là 15 cm, chiều cao tương ứng là 8 cm. Diện tích là:',
    visual: '▱ Đáy = 15 cm, Chiều cao = 8 cm', options: ['60 cm²', '100 cm²', '120 cm²', '46 cm²'], correctAnswer: '120 cm²',
    scaffoldHint: 'Diện tích hình bình hành = Độ dài đáy x Chiều cao = 15 x 8 = 120 cm²!',
    funFact: 'Hình bình hành có các cặp cạnh đối diện song song và bằng nhau!'
  },
  {
    id: 'm_adv19', stage: 19, difficulty: 'medium', title: 'Diện tích hình thoi', opponentName: 'Kim Cương Lấp Lánh', opponentAvatar: '💎🔷',
    questionText: 'Một con diều hình thoi có độ dài hai đường chéo là 8 cm và 12 cm. Diện tích con diều là:',
    visual: '🔷 Hai đường chéo: 8 cm và 12 cm', options: ['96 cm²', '20 cm²', '40 cm²', '48 cm²'], correctAnswer: '48 cm²',
    scaffoldHint: 'Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2 = (8 x 12) : 2 = 96 : 2 = 48 cm²!',
    funFact: 'Hai đường chéo của hình thoi vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường!'
  },
  {
    id: 'm_adv20', stage: 20, difficulty: 'medium', title: 'Bài toán diện tích mảnh đất', opponentName: 'Kiến Chúa Xây Dựng', opponentAvatar: '🐜🏗️',
    questionText: 'Mảnh đất hình chữ nhật có chu vi 120 m. Chiều dài hơn chiều rộng 20 m. Diện tích mảnh đất là:',
    visual: 'Chu vi = 120 m  |  Dài hơn rộng = 20 m', options: ['800 m²', '600 m²', '1000 m²', '3500 m²'], correctAnswer: '800 m²',
    scaffoldHint: 'Nửa chu vi = 60 m. Dài = (60+20):2 = 40 m. Rộng = 40-20 = 20 m. Diện tích = 40 x 20 = 800 m²!',
    funFact: 'Bé đã hoàn thành 20 ải và sẵn sàng bước vào lãnh địa thử thách Lớp 5!'
  },
  {
    id: 'm_adv21', stage: 21, difficulty: 'hard', title: 'Khám phá số thập phân', opponentName: 'Nhà Toán Học Cổ Điển', opponentAvatar: '🧙‍♂️📜',
    questionText: 'Viết số đo độ dài 3 m 4 dm dưới dạng số thập phân có đơn vị mét:',
    visual: '📏 3 m 4 dm = ? m', options: ['3,04 m', '3,4 m', '34 m', '0,34 m'], correctAnswer: '3,4 m',
    scaffoldHint: '4 dm = 4/10 m = 0,4 m. Do đó 3 m 4 dm = 3,4 m!',
    funFact: 'Dấu phẩy trong số thập phân phân tách phần nguyên và phần thập phân!'
  },
  {
    id: 'm_adv22', stage: 22, difficulty: 'hard', title: 'Cộng trừ số thập phân', opponentName: 'Thần Gió Sa Mạc', opponentAvatar: '🌪️🐪',
    questionText: 'Tính nhẩm chính xác phép tính: 45,68 + 23,5 = ?',
    displayFormula: '45,68 + 23,5 = ?', options: ['69,18', '68,73', '69,08', '68,18'], correctAnswer: '69,18',
    scaffoldHint: 'Đặt tính thẳng cột dấu phẩy: 45,68 + 23,50 = 69,18!',
    funFact: 'Luôn đặt các dấu phẩy thẳng hàng là quy tắc bất di bất dịch khi cộng trừ số thập phân!'
  },
  {
    id: 'm_adv23', stage: 23, difficulty: 'hard', title: 'Nhân số thập phân', opponentName: 'Báo Đốm Nhanh Nhẹn', opponentAvatar: '🐆⚡',
    questionText: 'Tính kết quả phép nhân: 12,5 x 0,4 = ?',
    displayFormula: '12,5 x 0,4 = ?', options: ['0,5', '50', '5,04', '5'], correctAnswer: '5',
    scaffoldHint: '125 x 4 = 500. Phần thập phân có tất cả 2 chữ số -> Đếm 2 chữ số từ phải qua: 5,00 chính là 5!',
    funFact: 'Nhân với 0,4 tương đương với nhân 4 rồi chia cho 10 đấy bé!'
  },
  {
    id: 'm_adv24', stage: 24, difficulty: 'hard', title: 'Tỉ số phần trăm (%)', opponentName: 'Vua Tài Chính Tinh Anh', opponentAvatar: '👑💰',
    questionText: 'Một lớp học có 40 học sinh, trong đó có 24 bạn nữ. Tỉ số phần trăm của học sinh nữ so với cả lớp là:',
    visual: '👥 Nữ: 24 bạn  /  Tổng: 40 bạn', options: ['50%', '65%', '60%', '70%'], correctAnswer: '60%',
    scaffoldHint: 'Lấy 24 : 40 = 0,6. Đổi 0,6 ra phần trăm: 0,6 x 100 = 60%!',
    funFact: 'Ký hiệu % có nghĩa là "trên một trăm" (phần trăm)! Rất quen thuộc khi đi siêu thị giảm giá!'
  },
  {
    id: 'm_adv25', stage: 25, difficulty: 'hard', title: 'Chu vi hình tròn', opponentName: 'Thiên Nga Xoay Vòng', opponentAvatar: '🦢⭕',
    questionText: 'Một chiếc đĩa tròn có bán kính r = 5 cm. Chu vi của chiếc đĩa tròn đó là bao nhiêu (lấy số pi = 3,14)?',
    visual: '⭕ Bán kính r = 5 cm  |  pi = 3,14', options: ['15,7 cm', '78,5 cm', '62,8 cm', '31,4 cm'], correctAnswer: '31,4 cm',
    scaffoldHint: 'Chu vi hình tròn = 2 x r x 3,14 = 2 x 5 x 3,14 = 10 x 3,14 = 31,4 cm!',
    funFact: 'Số Pi (xấp xỉ 3,14159...) là một trong những hằng số toán học kỳ diệu nhất của vũ trụ!'
  },
  {
    id: 'm_adv26', stage: 26, difficulty: 'hard', title: 'Diện tích hình thang', opponentName: 'Voi Rừng Tây Nguyên', opponentAvatar: '🐘🌲',
    questionText: 'Hình thang có đáy lớn 12 cm, đáy bé 8 cm và chiều cao 6 cm. Diện tích của hình thang đó là:',
    visual: 'Đáy lớn: 12 cm, Đáy bé: 8 cm, Cao: 6 cm', options: ['120 cm²', '96 cm²', '60 cm²', '48 cm²'], correctAnswer: '60 cm²',
    scaffoldHint: 'Muốn tính diện tích hình thang: Đáy lớn đáy nhỏ ta đem cộng vào; Cộng vào nhân với chiều cao; Chia đôi lấy nửa thế nào cũng ra! (12+8)x6:2 = 60 cm²!',
    funFact: 'Bài thơ tính diện tích hình thang đã giúp hàng triệu học sinh Việt Nam nhớ mãi không quên!'
  },
  {
    id: 'm_adv27', stage: 27, difficulty: 'hard', title: 'Thể tích hình hộp chữ nhật', opponentName: 'Robot Khối Lập Phương', opponentAvatar: '🤖📦',
    questionText: 'Một bể cá hình hộp chữ nhật có chiều dài 8 dm, chiều rộng 5 dm và chiều cao 4 dm. Thể tích bể là:',
    visual: '📦 8 dm x 5 dm x 4 dm', options: ['160 dm³', '170 dm³', '340 dm³', '80 dm³'], correctAnswer: '160 dm³',
    scaffoldHint: 'Thể tích hình hộp chữ nhật = Chiều dài x Chiều rộng x Chiều cao = 8 x 5 x 4 = 160 dm³ (tương đương 160 lít nước)!',
    funFact: '1 đề-xi-mét khối (dm³) chứa vừa vặn đúng 1 lít nước ngọt!'
  },
  {
    id: 'm_adv28', stage: 28, difficulty: 'hard', title: 'Toán chuyển động đều', opponentName: 'Tàu Cao Tốc Shinkansen', opponentAvatar: '🚄⚡',
    questionText: 'Một xe ô tô chạy từ Hà Nội đến Hải Phòng dài 120 km hết 2,5 giờ (2 giờ 30 phút). Vận tốc của ô tô là:',
    visual: 'Quãng đường: 120 km  |  Thời gian: 2,5 giờ', options: ['45 km/h', '48 km/h', '50 km/h', '52 km/h'], correctAnswer: '48 km/h',
    scaffoldHint: 'Công thức: Vận tốc = Quãng đường : Thời gian (v = s : t) -> v = 120 : 2,5 = 48 km/giờ!',
    funFact: 'Công thức v = s / t gắn liền với mọi phương tiện giao thông trên khắp thế giới!'
  },
  {
    id: 'm_adv29', stage: 29, difficulty: 'boss', title: 'Hai xe đi ngược chiều gặp nhau', opponentName: 'Rồng Bão Táp Gặp Gỡ', opponentAvatar: '🐉🌪️',
    questionText: 'Hai tỉnh A và B cách nhau 150 km. Cùng một lúc, một ô tô đi từ A với vận tốc 50 km/h và xe máy đi từ B với 25 km/h ngược chiều nhau. Sau bao lâu 2 xe gặp nhau?',
    visual: 'A ➔ 50 km/h 🚗  ... 150 km ...  🏍️ 25 km/h ⬅ B', options: ['1,5 giờ', '2,5 giờ', '3 giờ', '2 giờ'], correctAnswer: '2 giờ',
    scaffoldHint: 'Tổng vận tốc hai xe là: 50 + 25 = 75 km/h. Thời gian gặp nhau: 150 : 75 = 2 giờ!',
    funFact: 'Khi hai xe đi ngược chiều, mỗi giờ khoảng cách giữa hai xe co ngắn lại bằng tổng hai vận tốc!'
  },
  {
    id: 'm_adv30', stage: 30, difficulty: 'boss', title: 'Trùm Cuối Toán: Tổng và Tỉ số', opponentName: 'Đại Ma Vương Số Học', opponentAvatar: '👑🔢🔥',
    questionText: 'Tìm hai số biết tổng của chúng là 120 và số bé bằng 1/3 số lớn. Số lớn là bao nhiêu?',
    visual: 'Tổng = 120  |  Số bé / Số lớn = 1/3', options: ['30', '90', '40', '80'], correctAnswer: '90',
    scaffoldHint: 'Tổng số phần bằng nhau: 1 + 3 = 4 phần. Giá trị 1 phần: 120 : 4 = 30. Số lớn chiếm 3 phần: 30 x 3 = 90!',
    funFact: 'Bé đã chinh phục đỉnh cao nhất của Vương Quốc Toán Học Nâng Cao! Thật phi thường!'
  }
];

// Dữ liệu 30 Ải Tiếng Việt Nâng Cao (Lớp 3 - 4 - 5)
const vietnameseAdvLessons = [
  {
    id: 'v_adv1', stage: 1, difficulty: 'easy', title: 'Biện pháp tu từ So Sánh', opponentName: 'Họa Mi Thi Sĩ', opponentAvatar: '🐦🌸',
    questionText: 'Trong câu: "Mặt trời như một quả cầu lửa khổng lồ đỏ rực", hai sự vật nào được so sánh với nhau?',
    visual: '☀️ 🔴 Mặt trời như quả cầu lửa', options: ['Mặt trời và quả cầu lửa', 'Mặt trời và đám mây', 'Quả cầu lửa và ngọn núi', 'Mặt trời và mặt trăng'], correctAnswer: 'Mặt trời và quả cầu lửa',
    scaffoldHint: 'Từ so sánh là từ "như", nối hai sự vật tương đồng về màu sắc và hình dáng: Mặt trời và quả cầu lửa!',
    funFact: 'Biện pháp so sánh giúp câu văn trở nên gợi cảm, cụ thể và sinh động hơn rất nhiều!'
  },
  {
    id: 'v_adv2', stage: 2, difficulty: 'easy', title: 'Biện pháp Nhân Hóa', opponentName: 'Gió Thu Rì Rào', opponentAvatar: '🍃🌬️',
    questionText: 'Trong câu: "Chị gió nhẹ nhàng lay cành phượng vĩ thì thầm cùng các bạn nhỏ", từ ngữ nào thể hiện phép nhân hóa?',
    visual: '🌬️ Chị gió thì thầm...', options: ['cành phượng vĩ', 'các bạn nhỏ', 'nhẹ nhàng, mùa hè', 'Chị, lay, thì thầm'], correctAnswer: 'Chị, lay, thì thầm',
    scaffoldHint: 'Gió vô tri được gọi là "Chị" và biết "thì thầm" như con người. Đó chính là phép nhân hóa!',
    funFact: 'Nhân hóa là gán cho đồ vật, cây cối, con vật những hành động, cảm xúc và cách xưng hô của con người!'
  },
  {
    id: 'v_adv3', stage: 3, difficulty: 'easy', title: 'Mô hình câu "Ai làm gì?"', opponentName: 'Sóc Nâu Chăm Chỉ', opponentAvatar: '🐿️🌰',
    questionText: 'Câu nào dưới đây thuộc mẫu câu kể "Ai làm gì?" chỉ hoạt động của con người hoặc con vật?',
    visual: '🏃‍♂️ 📖 ⚽', options: ['Mẹ em rất hiền lành và dịu dàng.', 'Các bạn học sinh đang chăm chỉ trồng cây xanh.', 'Hà Nội là thủ đô của nước ta.', 'Bầu trời hôm nay thật trong xanh.'], correctAnswer: 'Các bạn học sinh đang chăm chỉ trồng cây xanh.',
    scaffoldHint: 'Bộ phận vị ngữ trả lời câu hỏi "Làm gì?" chính là "đang chăm chỉ trồng cây xanh"!',
    funFact: 'Mẫu câu "Ai làm gì?" luôn có vị ngữ là cụm động từ chỉ hành động cụ thể!'
  },
  {
    id: 'v_adv4', stage: 4, difficulty: 'easy', title: 'Từ chỉ đặc điểm', opponentName: 'Thiên Nga Xinh Đẹp', opponentAvatar: '🦢✨',
    questionText: 'Tìm các từ chỉ đặc điểm trong câu văn: "Dòng sông quê hương mùa thu trong vắt và êm đềm trôi."',
    visual: '🌊 Dòng sông quê hương', options: ['dòng sông, quê hương', 'mùa thu, trôi', 'trong vắt, êm đềm', 'quê hương, trong vắt'], correctAnswer: 'trong vắt, êm đềm',
    scaffoldHint: '"Trong vắt" chỉ đặc điểm của làn nước, "êm đềm" chỉ trạng thái chảy yên ả của dòng sông!',
    funFact: 'Từ chỉ đặc điểm giúp chúng ta cảm nhận được hình dáng, màu sắc, âm thanh và hương vị của vạn vật!'
  },
  {
    id: 'v_adv5', stage: 5, difficulty: 'easy', title: 'Tác dụng của Dấu Hai Chấm (:)', opponentName: 'Thầy Giáo Cú Vọ', opponentAvatar: '🦉👓',
    questionText: 'Dấu hai chấm trong câu sau có tác dụng gì? Bác Hồ ân cần dặn dò: "Các cháu phải học thật tốt nhé!"',
    visual: 'Bác Hồ dặn dò: "..."', options: ['Dùng để kết thúc một câu kể', 'Báo hiệu lời nói trực tiếp của nhân vật', 'Dùng để bộc lộ cảm xúc vui mừng', 'Dùng để ngắt các vế trong câu đơn'], correctAnswer: 'Báo hiệu lời nói trực tiếp của nhân vật',
    scaffoldHint: 'Dấu hai chấm kết hợp với dấu ngoặc kép báo hiệu lời dẫn trực tiếp lời nói của Bác Hồ!',
    funFact: 'Dấu hai chấm còn có tác dụng báo hiệu phần giải thích cho bộ phận đứng trước nữa đấy!'
  },
  {
    id: 'v_adv6', stage: 6, difficulty: 'easy', title: 'Tìm từ đồng nghĩa', opponentName: 'Khỉ Vàng Nhanh Trí', opponentAvatar: '🐒💡',
    questionText: 'Từ nào dưới đây đồng nghĩa với từ "chăm chỉ"?',
    visual: '🐝 Chăm chỉ như chú ong', options: ['lười biếng, uể oải', 'thông minh, sáng dạ', 'cần cù, siêng năng', 'vui vẻ, hoạt bát'], correctAnswer: 'cần cù, siêng năng',
    scaffoldHint: '"Cần cù" và "siêng năng" đều chỉ phẩm chất chịu khó làm việc, học tập không ngại khó khăn!',
    funFact: 'Từ đồng nghĩa làm cho bài văn của bé không bị lặp từ và giàu hình ảnh hơn!'
  },
  {
    id: 'v_adv7', stage: 7, difficulty: 'easy', title: 'Cặp từ trái nghĩa', opponentName: 'Mèo Đen & Chuột Trắng', opponentAvatar: '🐱🐭',
    questionText: 'Tìm cặp từ trái nghĩa trong câu thành ngữ quen thuộc: "Thức khuya dậy sớm để học bài."',
    visual: '🌙 Thức khuya  vs  ☀️ Dậy sớm', options: ['thức - học', 'dậy - bài', 'thức - sớm', 'khuya - sớm'], correctAnswer: 'khuya - sớm',
    scaffoldHint: '"Khuya" chỉ đêm muộn, "sớm" chỉ lúc tờ mờ sáng. Đây là cặp từ trái ngược nhau về thời gian!',
    funFact: 'Từ trái nghĩa giúp tạo ra sự tương phản rõ nét để làm nổi bật đức tính cần cù!'
  },
  {
    id: 'v_adv8', stage: 8, difficulty: 'easy', title: 'Phân loại từ phức', opponentName: 'Bướm Hoa Sặc Sỡ', opponentAvatar: '🦋📖',
    questionText: 'Trong tiếng Việt, từ phức (từ gồm 2 tiếng trở lên) được chia thành hai loại chính nào?',
    visual: 'Từ đơn vs Từ phức', options: ['Từ ghép và từ láy', 'Danh từ và động từ', 'Từ đồng nghĩa và từ trái nghĩa', 'Từ đơn và từ nhiều nghĩa'], correctAnswer: 'Từ ghép và từ láy',
    scaffoldHint: 'Từ phức gồm từ ghép (ghép các tiếng có nghĩa) và từ láy (lặp lại âm vần hài hòa)!',
    funFact: 'Tiếng Việt giàu đẹp một phần lớn là nhờ hệ thống từ láy phong phú và độc đáo!'
  },
  {
    id: 'v_adv9', stage: 9, difficulty: 'easy', title: 'Nhận diện Từ Láy', opponentName: 'Suối Róc Rách Thần Tiên', opponentAvatar: '💧🎶',
    questionText: 'Từ nào dưới đây là từ láy mô phỏng âm thanh tiếng nước chảy róc rách?',
    visual: '🌊 🎶 Róc rách', options: ['mặt trời', 'róc rách', 'bờ bãi', 'học tập'], correctAnswer: 'róc rách',
    scaffoldHint: '"Róc rách" điệp lại âm đầu "r" và vần "ách", tạo nên âm thanh vui tai của dòng suối!',
    funFact: 'Từ láy tượng thanh mô phỏng âm thanh thiên nhiên sống động như tiếng đàn!'
  },
  {
    id: 'v_adv10', stage: 10, difficulty: 'easy', title: 'Thành ngữ tình nghĩa anh em', opponentName: 'Đàn Chim Yến Đoàn Kết', opponentAvatar: '🕊️❤️',
    questionText: 'Điền từ còn thiếu vào câu tục ngữ khuyên anh chị em phải yêu thương đùm bọc lẫn nhau: "Chị ngã em ..."',
    visual: 'Chị ngã em ...', options: ['nâng', 'cười', 'đứng', 'chạy'], correctAnswer: 'nâng',
    scaffoldHint: '"Chị ngã em nâng" là lời dạy muôn đời về sự nâng đỡ, che chở giữa những người ruột thịt!',
    funFact: 'Bé đã xuất sắc chinh phục 10 ải Lớp 3 Rừng Tiếng Việt!'
  },
  {
    id: 'v_adv11', stage: 11, difficulty: 'medium', title: 'Danh từ chỉ khái niệm', opponentName: 'Bồ Câu Hòa Bình', opponentAvatar: '🕊️☮️',
    questionText: 'Trong câu: "Hòa bình là niềm mơ ước lớn lao của toàn nhân loại", từ nào là danh từ?',
    visual: '🕊️ Hòa bình', options: ['mơ ước, lớn lao', 'là, của', 'toàn, lớn lao', 'Hòa bình, niềm mơ ước, nhân loại'], correctAnswer: 'Hòa bình, niềm mơ ước, nhân loại',
    scaffoldHint: 'Danh từ chỉ người, vật, hiện tượng hoặc khái niệm trừu tượng (như hòa bình, niềm mơ ước, nhân loại)!',
    funFact: 'Danh từ là một trong những từ loại phổ biến và quan trọng nhất trong ngữ pháp tiếng Việt!'
  },
  {
    id: 'v_adv12', stage: 12, difficulty: 'medium', title: 'Hiện tượng Từ Đồng Âm', opponentName: 'Bác Nông Dân & Chim Sẻ', opponentAvatar: '🌾🐦',
    questionText: 'Từ "đậu" trong "bát chè đậu" và "chú chim đậu trên cành cây" là hiện tượng gì?',
    visual: 'Hạt đậu 🫘  vs  Chim đậu 🐦', options: ['Từ đồng nghĩa', 'Từ nhiều nghĩa', 'Từ đồng âm', 'Từ trái nghĩa'], correctAnswer: 'Từ đồng âm',
    scaffoldHint: 'Hai từ phát âm giống hệt nhau nhưng nghĩa hoàn toàn khác nhau (1 là hạt ngũ cốc, 1 là hành động dừng chân)!',
    funFact: 'Từ đồng âm thường được ông cha ta dùng để sáng tạo các câu đố dân gian dí dỏm!'
  },
  {
    id: 'v_adv13', stage: 13, difficulty: 'medium', title: 'Tục ngữ về ý chí và nghị lực', opponentName: 'Người Leo Núi Kiên Cường', opponentAvatar: '🧗‍♂️⛰️',
    questionText: 'Hoàn thành câu tục ngữ ngợi ca ý chí sắt đá vượt qua mọi gian khó: "Có chí thì ..."',
    visual: 'Có chí thì ...', options: ['học', 'thành', 'giỏi', 'nên'], correctAnswer: 'nên',
    scaffoldHint: '"Có chí thì nên" khuyên người có ý chí, quyết tâm thì việc gì cũng thành công ("nên" có nghĩa là thành đạt)!',
    funFact: 'Ý chí kiên trì bền bỉ là chiếc chìa khóa vạn năng mở ra cánh cửa thành công!'
  },
  {
    id: 'v_adv14', stage: 14, difficulty: 'medium', title: 'Nghệ thuật Điệp Ngữ', opponentName: 'Rừng Tre Việt Nam', opponentAvatar: '🎋🇻🇳',
    questionText: 'Câu thơ của Thép Mới: "Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín" điệp lại từ nào?',
    visual: '🎋 Tre giữ làng, giữ nước...', options: ['tre', 'làng', 'giữ', 'mái nhà'], correctAnswer: 'giữ',
    scaffoldHint: 'Từ "giữ" được lặp lại 4 lần liên tiếp nhằm nhấn mạnh tinh thần kiên trung bảo vệ quê hương của cây tre!',
    funFact: 'Điệp từ điệp ngữ tạo nhịp điệu dồn dập, hào hùng như tiếng trống xung trận!'
  },
  {
    id: 'v_adv15', stage: 15, difficulty: 'medium', title: 'Xác định Chủ Ngữ trong câu', opponentName: 'Nhà Ngôn Ngữ Học', opponentAvatar: '📜🖋️',
    questionText: 'Xác định bộ phận chủ ngữ trong câu: "Dưới bóng tre xanh mát, người nông dân Việt Nam cần cù lao động."',
    visual: '🌾 Người nông dân cần cù...', options: ['người nông dân Việt Nam', 'Dưới bóng tre xanh mát', 'cần cù lao động', 'lao động'], correctAnswer: 'người nông dân Việt Nam',
    scaffoldHint: 'Hỏi "Ai cần cù lao động?" -> Câu trả lời chính là chủ ngữ: "người nông dân Việt Nam"!',
    funFact: 'Chủ ngữ trả lời cho các câu hỏi: Ai? Con gì? Cái gì?'
  },
  {
    id: 'v_adv16', stage: 16, difficulty: 'medium', title: 'Câu Cảm bộc lộ cảm xúc', opponentName: 'Nàng Tiên Hoa Hồng', opponentAvatar: '🌹🧚‍♀️',
    questionText: 'Câu nào dưới đây là câu cảm bộc lộ cảm xúc khen ngợi bông hoa đẹp?',
    visual: '🌺 Bông hoa ngát hương', options: ['Bông hoa hồng nở vào buổi sáng.', 'Ôi, bông hoa hồng này ngát hương và đẹp quá!', 'Em có thích hoa hồng không?', 'Hãy chăm sóc hoa cẩn thận nhé.'], correctAnswer: 'Ôi, bông hoa hồng này ngát hương và đẹp quá!',
    scaffoldHint: 'Câu cảm có các từ bộc lộ cảm xúc (Ôi, quá) và kết thúc bằng dấu chấm than (!)!',
    funFact: 'Dùng câu cảm giúp lời nói và bài viết của bé tràn đầy tình cảm chân thành!'
  },
  {
    id: 'v_adv17', stage: 17, difficulty: 'medium', title: 'Từ đồng nghĩa hoàn toàn', opponentName: 'Tàu Hỏa Bắc Nam', opponentAvatar: '🚂🚃',
    questionText: 'Cặp từ nào dưới đây là cặp từ đồng nghĩa hoàn toàn có thể thay thế cho nhau mà không đổi sắc thái?',
    visual: '🚂 Xe lửa / Tàu hỏa', options: ['chết - hy sinh', 'đỏ rực - đo đỏ', 'nhỏ xíu - to lớn', 'xe lửa - tàu hỏa'], correctAnswer: 'xe lửa - tàu hỏa',
    scaffoldHint: '"Xe lửa" và "tàu hỏa" chỉ cùng một loại phương tiện giao thông đường sắt, có thể thay thế nhau hoàn toàn!',
    funFact: 'Trong tiếng Việt có những từ đồng nghĩa hoàn toàn và những từ đồng nghĩa có sắc thái biểu cảm khác nhau!'
  },
  {
    id: 'v_adv18', stage: 18, difficulty: 'medium', title: 'Mô hình câu "Ai thế nào?"', opponentName: 'Mùa Thu Vàng Rực', opponentAvatar: '🍂🍁',
    questionText: 'Câu nào dưới đây thuộc mẫu câu kể "Ai thế nào?" miêu tả đặc điểm tính chất của sự vật?',
    visual: '🍁 Mùa thu êm đềm', options: ['Bác bảo vệ đánh một hồi trống vang dội.', 'Bầu trời mùa thu cao vời vợi và xanh biếc.', 'Trường em là ngôi trường kiểu mẫu.', 'Nam đang đá bóng ngoài sân.'], correctAnswer: 'Bầu trời mùa thu cao vời vợi và xanh biếc.',
    scaffoldHint: 'Vị ngữ "cao vời vợi và xanh biếc" trả lời cho câu hỏi "Thế nào?" -> Mẫu câu "Ai thế nào?"!',
    funFact: 'Mẫu câu "Ai thế nào?" được sử dụng nhiều nhất trong các bài văn miêu tả cảnh đẹp thiên nhiên!'
  },
  {
    id: 'v_adv19', stage: 19, difficulty: 'medium', title: 'Đạo lý "Uống nước nhớ nguồn"', opponentName: 'Đền Hùng Thiêng Liêng', opponentAvatar: '🏛️🇻🇳',
    questionText: 'Câu tục ngữ "Uống nước nhớ nguồn" nhắc nhở chúng ta đạo lý sống cao đẹp nào?',
    visual: '💧 Uống nước nhớ nguồn', options: ['Biết ơn những thế hệ đi trước đã cống hiến cho chúng ta cuộc sống hôm nay', 'Chỉ uống nước khi khát', 'Luôn giữ nguồn nước sạch', 'Tiết kiệm nước ngọt trong mùa hè'], correctAnswer: 'Biết ơn những thế hệ đi trước đã cống hiến cho chúng ta cuộc sống hôm nay',
    scaffoldHint: '"Nguồn" là nơi bắt đầu của dòng nước trong lành; con người có được thành quả hôm nay phải luôn tri ân tổ tiên cha ông!',
    funFact: 'Lòng biết ơn là cội nguồn của mọi phẩm chất đạo đức tốt đẹp nhất của dân tộc Việt Nam!'
  },
  {
    id: 'v_adv20', stage: 20, difficulty: 'medium', title: 'Hiện tượng Từ Nhiều Nghĩa', opponentName: 'Quả Dứa Thần Thông', opponentAvatar: '🍍👁️',
    questionText: 'Từ "mắt" trong câu nào dưới đây được sử dụng theo NGHĨA CHUYỂN?',
    visual: '🍍 Mắt dứa  vs  👀 Mắt bé', options: ['Đôi mắt của bé sáng long lanh.', 'Em chớp mắt khi nhìn ánh mặt trời.', 'Quả dứa chín thơm có rất nhiều mắt dứa.', 'Mắt bà đã mờ theo năm tháng.'], correctAnswer: 'Quả dứa chín thơm có rất nhiều mắt dứa.',
    scaffoldHint: '"Mắt dứa" có hình dáng giống con mắt người nên được chuyển nghĩa theo phương thức ẩn dụ!',
    funFact: 'Bé đã hoàn thành 20 ải và bước vào cấp độ Lớp 5 với nghệ thuật ngôn từ điêu luyện!'
  },
  {
    id: 'v_adv21', stage: 21, difficulty: 'hard', title: 'Quan hệ từ Nguyên nhân - Kết quả', opponentName: 'Cơn Mưa Rào Mùa Hạ', opponentAvatar: '🌧️⚡',
    questionText: 'Điền cặp quan hệ từ thích hợp biểu thị quan hệ Nguyên nhân - Kết quả: "... trời mưa to ... đường làng bị ngập."',
    visual: '🌧️ Mưa to ➔ Đường ngập', options: ['Tuy ... nhưng ...', 'Nếu ... thì ...', 'Chẳng những ... mà còn ...', 'Vì ... nên ...'], correctAnswer: 'Vì ... nên ...',
    scaffoldHint: '"Vì trời mưa to" là nguyên nhân, "nên đường làng bị ngập" là kết quả!',
    funFact: 'Cặp quan hệ từ "Vì... nên..." giúp câu văn có tính logic nhân quả chặt chẽ!'
  },
  {
    id: 'v_adv22', stage: 22, difficulty: 'hard', title: 'Quan hệ từ Tương phản', opponentName: 'Hoa Sen Trong Đầm', opponentAvatar: '🪷💎',
    questionText: 'Cặp quan hệ từ nào dưới đây biểu thị mối quan hệ TƯƠNG PHẢN (nhượng bộ)?',
    visual: 'Gần bùn mà chẳng hôi tanh mùi bùn', options: ['Tuy ... nhưng ...', 'Vì ... nên ...', 'Nếu ... thì ...', 'Nhờ ... mà ...'], correctAnswer: 'Tuy ... nhưng ...',
    scaffoldHint: '"Tuy... nhưng..." dùng để nối hai vế câu có ý nghĩa đối lập, tương phản nhau: Tuy nhà xa nhưng Nam luôn đi học đúng giờ!',
    funFact: 'Cặp từ tương phản làm nổi bật phẩm chất kiên cường vượt lên trên hoàn cảnh!'
  },
  {
    id: 'v_adv23', stage: 23, difficulty: 'hard', title: 'Khái niệm Câu Ghép', opponentName: 'Cầu Rồng Sông Hàn', opponentAvatar: '🌉🐉',
    questionText: 'Thế nào là một CÂU GHÉP trong tiếng Việt?',
    visual: 'Vế 1 (C-V) + Vế 2 (C-V)', options: ['Câu chỉ có duy nhất một cụm Chủ ngữ - Vị ngữ', 'Câu có nhiều từ ngữ hoa mỹ dài dòng', 'Câu do nhiều vế câu ghép lại, mỗi vế có đủ cụm Chủ ngữ - Vị ngữ', 'Câu kết thúc bằng dấu chấm lửng'], correctAnswer: 'Câu do nhiều vế câu ghép lại, mỗi vế có đủ cụm Chủ ngữ - Vị ngữ',
    scaffoldHint: 'Mỗi vế trong câu ghép tương đương một câu đơn hoàn chỉnh và được nối với nhau bằng quan hệ từ hoặc dấu câu!',
    funFact: 'Câu ghép giúp diễn đạt những tư tưởng phức tạp, sâu sắc và đa chiều của bài viết!'
  },
  {
    id: 'v_adv24', stage: 24, difficulty: 'hard', title: 'Đếm số vế câu ghép', opponentName: 'Bình Minh Trên Đảo', opponentAvatar: '🌅🏝️',
    questionText: 'Câu ghép sau gồm có mấy vế câu? "Mặt trời vừa ló dạng trên biển, muôn cánh buồm trắng đã rẽ sóng ra khơi."',
    visual: '🌅 Vế 1 ... , ... Vế 2 ⛵', options: ['3 vế câu', '2 vế câu', '1 vế câu', '4 vế câu'], correctAnswer: '2 vế câu',
    scaffoldHint: 'Vế 1: "Mặt trời vừa ló dạng trên biển", Vế 2: "muôn cánh buồm trắng đã rẽ sóng ra khơi"! Có đúng 2 vế câu!',
    funFact: 'Hai vế câu diễn ra nối tiếp nhau tạo nên bức tranh bình minh biển cả sống động kỳ vĩ!'
  },
  {
    id: 'v_adv25', stage: 25, difficulty: 'hard', title: 'Liên kết câu bằng Thay Thế Từ Ngữ', opponentName: 'Nhà Văn Hào Việt Nam', opponentAvatar: '📖🖋️',
    questionText: 'Trong đoạn văn: "Bác Hồ là vị cha già kính yêu của dân tộc. Người đã dành trọn cuộc đời vì độc lập tự do.", tác giả dùng từ nào để thay thế cho "Bác Hồ"?',
    visual: 'Bác Hồ ➔ Người', options: ['Người', 'cuộc đời', 'dân tộc', 'độc lập'], correctAnswer: 'Người',
    scaffoldHint: 'Đại từ tôn kính "Người" được dùng để thay thế cho "Bác Hồ", tránh lặp từ và thể hiện sự kính trọng thiêng liêng!',
    funFact: 'Phép thay thế từ ngữ là nghệ thuật liên kết văn bản đỉnh cao của các nhà văn lớn!'
  },
  {
    id: 'v_adv26', stage: 26, difficulty: 'hard', title: 'Đại từ xưng hô trong Tiếng Việt', opponentName: 'Đội Thiếu Niên Tiền Phong', opponentAvatar: '🚩👦👧',
    questionText: 'Đại từ xưng hô nào dưới đây dùng để chỉ NGÔI THỨ NHẤT SỐ NHIỀU (người nói gồm nhiều người)?',
    visual: '👥 Chúng tôi, chúng em', options: ['Các bạn, các cậu', 'Họ, bọn họ, các anh ấy', 'Chúng tôi, chúng em, chúng ta', 'Cậu, bạn, mày'], correctAnswer: 'Chúng tôi, chúng em, chúng ta',
    scaffoldHint: '"Chúng tôi, chúng em, chúng ta" đại diện cho tập thể người đang nói!',
    funFact: 'Đại từ xưng hô tiếng Việt phong phú bậc nhất thế giới vì gắn liền với tôn ti trật tự và tình cảm gia đình!'
  },
  {
    id: 'v_adv27', stage: 27, difficulty: 'hard', title: 'Đỉnh cao Phép Nhân Hóa', opponentName: 'Chiến Sĩ Biên Cương', opponentAvatar: '🛡️🏔️',
    questionText: 'Trong câu thơ của Quang Dũng: "Sông Mã gầm lên khúc độc hành", từ ngữ nào nhân hóa dòng sông Mã dũng mãnh?',
    visual: '🌊 Sông Mã gầm lên...', options: ['Sông Mã', 'gầm lên khúc độc hành', 'khúc', 'lên'], correctAnswer: 'gầm lên khúc độc hành',
    scaffoldHint: 'Dòng sông biết "gầm lên" khúc ca kiêu hãnh của người chiến sĩ Tây Tiến anh dũng!',
    funFact: 'Nhân hóa biến dòng sông thiên nhiên thành một chứng nhân lịch sử oai hùng!'
  },
  {
    id: 'v_adv28', stage: 28, difficulty: 'hard', title: 'Tục ngữ về tinh thần Đoàn Kết', opponentName: 'Ba Cây Chụm Lại', opponentAvatar: '🌳🌳🌳',
    questionText: 'Câu ca dao nào ca ngợi sức mạnh vô địch của tinh thần đại đoàn kết toàn dân tộc?',
    visual: '🏔️ Hòn núi cao', options: ['Uống nước nhớ nguồn', 'Ăn quả nhớ kẻ trồng cây', 'Gần mực thì đen, gần đèn thì rạng', 'Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao'], correctAnswer: 'Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao',
    scaffoldHint: 'Một cá nhân riêng lẻ thì yếu ớt ("chẳng nên non"), nhưng khi hợp lực triệu người như một sẽ tạo nên kỳ tích!',
    funFact: 'Đoàn kết là sức mạnh giúp dân tộc Việt Nam chiến thắng mọi kẻ thù xâm lăng và thiên tai dịch bệnh!'
  },
  {
    id: 'v_adv29', stage: 29, difficulty: 'boss', title: 'Tác dụng của Dấu Gạch Ngang (-)', opponentName: 'Chúa Rừng Văn Học', opponentAvatar: '🦁📚',
    questionText: 'Dấu gạch ngang trong câu: "Mùa xuân - mùa của trăm hoa đua nở - đã về trên quê hương" có tác dụng gì?',
    visual: 'Mùa xuân - ... - đã về', options: ['Đánh dấu lời đối thoại của nhân vật', 'Đánh dấu các ý liệt kê đầu dòng', 'Đánh dấu bộ phận chú thích, giải thích thêm trong câu', 'Nối các từ trong một liên danh'], correctAnswer: 'Đánh dấu bộ phận chú thích, giải thích thêm trong câu',
    scaffoldHint: 'Cụm từ "mùa của trăm hoa đua nở" nằm giữa hai dấu gạch ngang nhằm giải thích vẻ đẹp của mùa xuân!',
    funFact: 'Dấu gạch ngang có 4 công dụng quan trọng trong ngữ pháp tiếng Việt!'
  },
  {
    id: 'v_adv30', stage: 30, difficulty: 'boss', title: 'Hạt Gạo Làng Ta (TRÙM TIẾNG VIỆT)', opponentName: 'Nữ Thần Lúa Nước', opponentAvatar: '🌾👑✨',
    questionText: 'Trong bài thơ "Hạt gạo làng ta" của nhà thơ Trần Đăng Khoa, hạt gạo trắng ngần được kết tinh từ những điều gì?',
    visual: '🌾 Hạt gạo làng ta có vị phù sa...', options: ['Vị phù sa sông Kinh Thầy, hương sen thơm ngát và giọt mồ hôi vất vả của mẹ cha', 'Chỉ từ đất cát và nước mưa', 'Từ phân bón hóa học trong nông nghiệp', 'Chỉ từ ánh nắng mặt trời'], correctAnswer: 'Vị phù sa sông Kinh Thầy, hương sen thơm ngát và giọt mồ hôi vất vả của mẹ cha',
    scaffoldHint: '"Hạt gạo làng ta / Có vị phù sa / Của sông Kinh Thầy / Có hương sen thơm / Trong hồ nước đầy / Có lời mẹ hát..."!',
    funFact: 'Chúc mừng bé đã trở thành Đệ Nhất Trạng Nguyên Văn Học! Vương quốc Tiếng Việt nghiêng mình khâm phục bé!'
  }
];

// Dữ liệu 30 Ải Tiếng Anh Nâng Cao (Lớp 3 - 4 - 5)
const englishAdvLessons = [
  {
    id: 'e_adv1', stage: 1, difficulty: 'easy', title: 'Present Simple: Daily Habit', opponentName: 'School Owl', opponentAvatar: '🦉🎒',
    questionText: 'Choose the correct verb form: "She ... to school by bicycle every morning."',
    visual: '🚴‍♀️ She ... to school', options: ['go', 'going', 'is go', 'goes'], correctAnswer: 'goes',
    scaffoldHint: 'With subject "She" (singular third person), we add -es to the verb "go" -> "goes"!',
    funFact: 'In English, he/she/it takes -s or -es in the Present Simple tense!'
  },
  {
    id: 'e_adv2', stage: 2, difficulty: 'easy', title: 'Irregular Plural Noun: Mice', opponentName: 'Cat Wizard', opponentAvatar: '🐱🧙‍♂️',
    questionText: 'Look at the picture: two small animals 🐁🐁. What is the plural form of "mouse"?',
    visual: '🐁🐁 Two little ...', options: ['mice', 'mouses', 'mices', 'mouse'], correctAnswer: 'mice',
    scaffoldHint: 'One mouse, but two mice! "Mice" is an irregular plural noun!',
    funFact: 'Some English words change their vowel inside when plural, like foot -> feet, tooth -> teeth!'
  },
  {
    id: 'e_adv3', stage: 3, difficulty: 'easy', title: 'Prepositions of Place: Under', opponentName: 'Playful Puppy', opponentAvatar: '🐶🪑',
    questionText: 'Complete the sentence: "The sleepy kitten is lying ... the table."',
    visual: '🐱 ⬇️ 🪑', options: ['above', 'between', 'under', 'on'], correctAnswer: 'under',
    scaffoldHint: '"Under" means below the surface of something, like under a chair or bed!',
    funFact: 'Cats love sleeping under tables because they feel safe and cozy!'
  },
  {
    id: 'e_adv4', stage: 4, difficulty: 'easy', title: 'Wh-question: What', opponentName: 'Friendly Fox Scholar', opponentAvatar: '🦊📚',
    questionText: 'Fill in the blank: "... is your favorite subject at school? - I love Science and Art."',
    visual: '❓ ... is your favorite subject?', options: ['Where', 'What', 'Who', 'When'], correctAnswer: 'What',
    scaffoldHint: 'We use "What" to ask for information about things, hobbies or school subjects!',
    funFact: '"What" is one of the 5 famous W-questions in English: What, Where, When, Who, Why!'
  },
  {
    id: 'e_adv5', stage: 5, difficulty: 'easy', title: 'Present Continuous: Playing', opponentName: 'Soccer Champion Lion', opponentAvatar: '🦁⚽',
    questionText: 'Choose the correct sentence to describe the children right now: 🏃‍♂️⚽🏃‍♀️',
    visual: '⚽ Now: They are ...', options: ['They are playing football in the schoolyard.', 'They plays football yesterday.', 'They playing football now.', 'They is playing football.'], correctAnswer: 'They are playing football in the schoolyard.',
    scaffoldHint: 'Present continuous formula: Subject (They) + are + Verb-ing (playing)!',
    funFact: 'Present Continuous describes actions happening at the exact moment of speaking!'
  },
  {
    id: 'e_adv6', stage: 6, difficulty: 'easy', title: 'Telling Time: Half Past', opponentName: 'Grandfather Clock', opponentAvatar: '⏰✨',
    questionText: 'The clock shows 7:30. How do you say this time in English?',
    visual: '⏰ 7:30', options: ['It is quarter to seven.', 'It is seven o\'clock.', 'It is half past seven.', 'It is half to seven.'], correctAnswer: 'It is half past seven.',
    scaffoldHint: '"Half past seven" means 30 minutes past 7 o\'clock (7:30)!',
    funFact: 'In English, "half past" means 30 minutes after the hour!'
  },
  {
    id: 'e_adv7', stage: 7, difficulty: 'easy', title: 'Opposites: Expensive vs Cheap', opponentName: 'Shopping Squirrel', opponentAvatar: '🐿️🏷️',
    questionText: 'What is the opposite of the word "expensive" (đắt tiền)?',
    visual: '💰 Expensive  vs  🏷️ ( ? )', options: ['rich', 'cheap', 'fast', 'heavy'], correctAnswer: 'cheap',
    scaffoldHint: 'Cheap /tʃiːp/ means costing very little money, the opposite of expensive!',
    funFact: 'Learning opposite word pairs is a great trick to double your vocabulary!'
  },
  {
    id: 'e_adv8', stage: 8, difficulty: 'easy', title: 'How Many with Countable Nouns', opponentName: 'Bookworm Koala', opponentAvatar: '🐨📖',
    questionText: 'Complete the question: "How ... English books are there in your bag?"',
    visual: '📚 How ... books?', options: ['much', 'any', 'long', 'many'], correctAnswer: 'many',
    scaffoldHint: 'We use "How many" with plural countable nouns like books, pens, apples!',
    funFact: 'We use "How many" for things we can count, and "How much" for things like water and milk!'
  },
  {
    id: 'e_adv9', stage: 9, difficulty: 'easy', title: 'Daily Routine: Brush teeth', opponentName: 'Dentist Bear', opponentAvatar: '🐻🪥',
    questionText: 'Fill in the blank: "Every morning and evening, I always brush my ... to keep them clean."',
    visual: '🪥 ✨', options: ['toothes', 'tooth', 'teeth', 'hair'], correctAnswer: 'teeth',
    scaffoldHint: 'Teeth /tiːθ/ is the plural form of tooth. We brush all our teeth!',
    funFact: 'Brushing teeth for 2 minutes keeps cavities away and gives you a sparkling smile!'
  },
  {
    id: 'e_adv10', stage: 10, difficulty: 'easy', title: 'Jobs & Occupations: Architect', opponentName: 'Master Builder Beaver', opponentAvatar: '🦫🏛️',
    questionText: '"What does your uncle do? - He is an ... He designs skyscrapers and beautiful houses."',
    visual: '📐 🏛️ Designing buildings', options: ['architect', 'astronaut', 'actor', 'artist'], correctAnswer: 'architect',
    scaffoldHint: 'An architect /ˈɑːrkɪtekt/ designs buildings, bridges and houses!',
    funFact: 'Great job! You have cleared all 10 Grade 3 English stages!'
  },
  {
    id: 'e_adv11', stage: 11, difficulty: 'medium', title: 'Past Simple: Was vs Were', opponentName: 'Time Traveling Rabbit', opponentAvatar: '🐰⏳',
    questionText: 'Choose the correct form: "Yesterday afternoon, my family and I ... at the national park."',
    visual: '📅 Yesterday ➔ We ...', options: ['was', 'are', 'is', 'were'], correctAnswer: 'were',
    scaffoldHint: 'For subjects "We / They / You" in the past, we use "were"!',
    funFact: 'The past tense of "to be" is "was" (for I/he/she/it) and "were" (for we/you/they)!'
  },
  {
    id: 'e_adv12', stage: 12, difficulty: 'medium', title: 'Regular Past Verb: -ed', opponentName: 'Popcorn Panda', opponentAvatar: '🐼🍿',
    questionText: 'Complete the past action: "Last night, Tony ... an exciting movie on TV."',
    visual: '📺 Last night ➔ Tony ...', options: ['watch', 'watched', 'watchs', 'watching'], correctAnswer: 'watched',
    scaffoldHint: 'To make regular verbs in the past, add -ed: watch -> watched!',
    funFact: 'Most regular English verbs simply add -ed to show past actions!'
  },
  {
    id: 'e_adv13', stage: 13, difficulty: 'medium', title: 'Comparative: Faster than', opponentName: 'Lightning Cheetah', opponentAvatar: '🐆⚡',
    questionText: 'Complete the comparison: "A cheetah runs much ... than a horse."',
    visual: '🐆 (Fast)  vs  🐎', options: ['fast', 'fastest', 'faster', 'more fast'], correctAnswer: 'faster',
    scaffoldHint: 'For short adjectives like fast, we add -er + than: faster than!',
    funFact: 'Cheetahs can run up to 120 km/h, making them the fastest land animals on Earth!'
  },
  {
    id: 'e_adv14', stage: 14, difficulty: 'medium', title: 'Irregular Comparative: Better', opponentName: 'Gold Medal Dolphin', opponentAvatar: '🐬🥇',
    questionText: 'What is the comparative form of the adjective "good"?',
    visual: 'Good ➔ ( ? ) than', options: ['gooder', 'better', 'best', 'more good'], correctAnswer: 'better',
    scaffoldHint: '"Good" changes completely to "better than" in comparison!',
    funFact: 'The trio is: Good (tốt) -> Better (tốt hơn) -> The Best (tốt nhất)!'
  },
  {
    id: 'e_adv15', stage: 15, difficulty: 'medium', title: 'Wh-question in the Past', opponentName: 'Wise Sea Turtle', opponentAvatar: '🐢🌊',
    questionText: '"Where were you yesterday, Peter? - I ... at the city library with my sister."',
    visual: '📚 Yesterday at the library', options: ['was', 'were', 'am', 'be'], correctAnswer: 'was',
    scaffoldHint: 'Subject "I" goes with "was" in the past tense: I was at the library!',
    funFact: 'Libraries are quiet treasure chests filled with thousands of adventures!'
  },
  {
    id: 'e_adv16', stage: 16, difficulty: 'medium', title: 'Preposition with Dates: On', opponentName: 'Birthday Cake Elephant', opponentAvatar: '🐘🎂',
    questionText: 'Fill in the correct preposition: "Our school sports festival is ... November 20th."',
    visual: '📅 ... November 20th', options: ['in', 'at', 'to', 'on'], correctAnswer: 'on',
    scaffoldHint: 'We use "ON" for specific dates and days of the week: on Monday, on November 20th!',
    funFact: 'Remember the rule: AT for time, ON for days/dates, IN for months/years!'
  },
  {
    id: 'e_adv17', stage: 17, difficulty: 'medium', title: 'Giving Advice: Should', opponentName: 'Doctor Kangaroo', opponentAvatar: '🦘🩺',
    questionText: '"You look very tired and sleepy. You ... go to bed early tonight."',
    visual: '😴 Tired ➔ You ... sleep', options: ['shouldn\'t', 'should', 'mustn\'t', 'can\'t'], correctAnswer: 'should',
    scaffoldHint: 'We use modal verb "should" to give helpful advice or recommendations to friends!',
    funFact: 'Children need 9 to 10 hours of good sleep every night to grow tall and healthy!'
  },
  {
    id: 'e_adv18', stage: 18, difficulty: 'medium', title: 'Ocean Giants: Blue Whale', opponentName: 'Blue Ocean Whale', opponentAvatar: '🐋🌊',
    questionText: 'Which animal is recognized as the largest mammal to have ever lived on planet Earth?',
    visual: '🌊 🐋 Largest mammal', options: ['African elephant', 'great white shark', 'giraffe', 'blue whale'], correctAnswer: 'blue whale',
    scaffoldHint: 'The blue whale can grow up to 30 meters long and weigh over 150 tons!',
    funFact: 'A blue whale\'s heart is as large as a small car!'
  },
  {
    id: 'e_adv19', stage: 19, difficulty: 'medium', title: 'Answering with Because', opponentName: 'World Traveler Eagle', opponentAvatar: '🦅🌍',
    questionText: '"Why do you want to learn English well? - ... I want to travel and make global friends."',
    visual: '❓ Why ... ? ➔ ( ? )', options: ['Although', 'So', 'Because', 'Therefore'], correctAnswer: 'Because',
    scaffoldHint: 'When a question begins with "Why?", we usually explain the reason starting with "Because"!',
    funFact: 'English is spoken by over 1.5 billion people worldwide as a bridge of communication!'
  },
  {
    id: 'e_adv20', stage: 20, difficulty: 'medium', title: 'Past Vacation Story', opponentName: 'Seaside Seagull', opponentAvatar: '🏖️🕊️',
    questionText: 'Choose the grammatically correct sentence in the past:',
    visual: '🏖️ Last summer holiday', options: ['Last summer, my family visited Ha Long Bay.', 'Last summer, my family visit Ha Long Bay.', 'Last summer, my family is visiting Ha Long Bay.', 'Last summer, my family will visit Ha Long Bay.'], correctAnswer: 'Last summer, my family visited Ha Long Bay.',
    scaffoldHint: '"Last summer" signals the past tense, so we use the past form "visited"!',
    funFact: 'You have conquered Grade 4 English! Next stop: Grade 5 Advanced Challenges!'
  },
  {
    id: 'e_adv21', stage: 21, difficulty: 'hard', title: 'Irregular Past Verb: Make -> Made', opponentName: 'Master Chef Monkey', opponentAvatar: '🐒🎂',
    questionText: 'Complete the past action: "Last Sunday, Lucy ... a wonderful birthday cake for her mom."',
    visual: '🎂 Last Sunday ➔ Lucy ...', options: ['make', 'maked', 'making', 'made'], correctAnswer: 'made',
    scaffoldHint: '"Make" is an irregular verb: make -> made (not maked)!',
    funFact: 'Baking a homemade cake is a wonderful way to express love to family!'
  },
  {
    id: 'e_adv22', stage: 22, difficulty: 'hard', title: 'Three Forms of "Go"', opponentName: 'Starry Dragon Adventurer', opponentAvatar: '🐉⭐',
    questionText: 'Complete the three forms of the verb: "Go - Went - ..."',
    visual: 'Go ➔ Went ➔ ( ? )', options: ['gone', 'goed', 'went', 'been'], correctAnswer: 'gone',
    scaffoldHint: 'The 3 verb forms are: Base (Go) -> Past Simple (Went) -> Past Participle (Gone)!',
    funFact: 'Irregular verbs make English fascinating and have historical Germanic roots!'
  },
  {
    id: 'e_adv23', stage: 23, difficulty: 'hard', title: 'Future Plan: Be Going To', opponentName: 'Campfire Raccoon', opponentAvatar: '🦝⛺',
    questionText: '"Tomorrow is the weekend! We are going to ... camping near the lake."',
    visual: '⛺ Tomorrow: We are going to ...', options: ['went', 'go', 'going', 'goes'], correctAnswer: 'go',
    scaffoldHint: 'Formula for future plans: be going to + base verb (go)!',
    funFact: '"Be going to" is used when you have already planned or decided to do something in the near future!'
  },
  {
    id: 'e_adv24', stage: 24, difficulty: 'hard', title: 'Superlative: The Highest', opponentName: 'Mount Everest Yak', opponentAvatar: '🏔️🐂',
    questionText: 'Complete the fact: "Mount Everest is the ... mountain in the world."',
    visual: '🏔️ 8,848 meters high', options: ['higher', 'high', 'highest', 'most high'], correctAnswer: 'highest',
    scaffoldHint: 'For short adjectives in the superlative, use: the + adjective + -est -> the highest!',
    funFact: 'Mount Everest stands 8,848.86 meters above sea level in the Himalayas!'
  },
  {
    id: 'e_adv25', stage: 25, difficulty: 'hard', title: 'Superlative: The Most Interesting', opponentName: 'Storybook Unicorn', opponentAvatar: '🦄📚',
    questionText: 'Complete the sentence: "This fairy tale is the ... interesting book in our school library."',
    visual: '📖 The ... interesting', options: ['more', 'most', 'much', 'best'], correctAnswer: 'most',
    scaffoldHint: 'For long adjectives (3 syllables: in-ter-est-ing), the superlative is "the most + adjective"!',
    funFact: 'Reading English books expands your imagination and cognitive abilities!'
  },
  {
    id: 'e_adv26', stage: 26, difficulty: 'hard', title: 'Did + Base Verb in Past Questions', opponentName: 'Island Explorer Parrot', opponentAvatar: '🦜🏝️',
    questionText: 'Complete the question: "How did you ... to Phu Quoc Island last summer? - We flew by plane."',
    visual: '✈️ How did you ... to Phu Quoc?', options: ['traveled', 'travels', 'travel', 'traveling'], correctAnswer: 'travel',
    scaffoldHint: 'After the auxiliary verb "did" in questions, the main verb stays in base form: did you travel!',
    funFact: 'Rule: Did + Subject + Verb (bare infinitive)!'
  },
  {
    id: 'e_adv27', stage: 27, difficulty: 'hard', title: 'Natural Wonder: Limestone Islands', opponentName: 'Dragon of Ha Long', opponentAvatar: '🐉🌊',
    questionText: 'Fill in the blank: "Ha Long Bay in Vietnam is world-famous for thousands of limestone ... and mysterious caves."',
    visual: '🏝️ Thousands of limestone ...', options: ['rivers', 'deserts', 'forests', 'islands'], correctAnswer: 'islands',
    scaffoldHint: 'Ha Long Bay has nearly 2,000 limestone islands rising from emerald waters!',
    funFact: 'Ha Long Bay is a UNESCO World Natural Heritage Site loved by international travelers!'
  },
  {
    id: 'e_adv28', stage: 28, difficulty: 'hard', title: 'Pronunciation of -ed Ending', opponentName: 'Phonics Phoenix', opponentAvatar: '🐦‍🔥🎧',
    questionText: 'Find the word whose underlined "-ed" ending is pronounced differently (/t/ instead of /d/):',
    visual: '🎧 Listen to the -ed endings', options: ['watched', 'played', 'listened', 'cleaned'], correctAnswer: 'watched',
    scaffoldHint: 'After unvoiced sound /tʃ/ (watch), -ed is pronounced as /t/! The others end with /d/!',
    funFact: 'The -ed suffix has 3 different sounds: /t/, /d/, and /ɪd/!'
  },
  {
    id: 'e_adv29', stage: 29, difficulty: 'boss', title: 'Green Energy Reading Passage', opponentName: 'Solar Sun Wizard', opponentAvatar: '☀️⚡🧙‍♂️',
    questionText: 'Read: "Solar energy comes from the Sun. It is clean, renewable and does not pollute our environment." What is a benefit of solar energy?',
    visual: '☀️ ➔ ⚡ Clean energy', options: ['It creates black smoke and dust', 'It is clean and does not cause pollution', 'It only works at midnight', 'It uses dirty fossil coal'], correctAnswer: 'It is clean and does not cause pollution',
    scaffoldHint: 'The sentence clearly states: "It is clean, renewable and does not pollute our environment"!',
    funFact: 'Solar and wind power are the future of green clean energy for humanity!'
  },
  {
    id: 'e_adv30', stage: 30, difficulty: 'boss', title: 'Global Proverb (TRÙM TIẾNG ANH)', opponentName: 'Supreme English Dragon', opponentAvatar: '👑🌍🌟',
    questionText: 'Complete the world-famous proverb that encourages children to practice every day: "Practice makes ...!"',
    visual: '🌟 Practice makes ...', options: ['perfect', 'happy', 'fast', 'easy'], correctAnswer: 'perfect',
    scaffoldHint: '"Practice makes perfect!" (Có công mài sắt có ngày nên kim / Luyện tập tạo nên sự hoàn hảo)!',
    funFact: 'Congratulations! You have conquered all 30 Advanced English stages! You are a Global Kid Master!'
  }
];

// Dữ liệu 30 Ải Khoa Học & Đời Sống (Lớp 3 - 4 - 5)
const scienceAdvLessons = [
  {
    id: 's_adv1', stage: 1, difficulty: 'easy', title: 'Cơ quan tuần hoàn máu', opponentName: 'Bác Sĩ Tim Mạch', opponentAvatar: '🫀🩺',
    questionText: 'Cơ quan nào trong cơ thể người hoạt động như một chiếc máy bơm bền bỉ, co bóp để đẩy máu đi khắp các mạch máu?',
    visual: '🫀 Trái tim kỳ diệu', options: ['Lá phổi', 'Trái tim', 'Dạ dày', 'Bộ não'], correctAnswer: 'Trái tim',
    scaffoldHint: 'Trái tim co bóp không ngừng nghỉ suốt ngày đêm để bơm máu giàu oxy và dinh dưỡng nuôi cơ thể!',
    funFact: 'Trái tim của một người lớn đập khoảng 100.000 lần mỗi ngày!'
  },
  {
    id: 's_adv2', stage: 2, difficulty: 'easy', title: 'Cơ quan hô hấp trao đổi khí', opponentName: 'Khinh Khí Cầu Phổi', opponentAvatar: '🫁🎈',
    questionText: 'Khi hít vào và thở ra, cơ quan hô hấp của con người lấy khí gì từ không khí và thải ra khí gì?',
    visual: '🫁 Hít vào ➔ Thở ra', options: ['Lấy khí Oxy, thải ra khí Cacbonic', 'Lấy khí Cacbonic, thải ra khí Oxy', 'Lấy khí Nitơ, thải ra khí Oxy', 'Chỉ lấy hơi nước'], correctAnswer: 'Lấy khí Oxy, thải ra khí Cacbonic',
    scaffoldHint: 'Hai lá phổi hấp thụ khí Oxy tươi mới cho tế bào và đẩy khí thải Cacbonic ra ngoài qua hơi thở!',
    funFact: 'Tập hít thở sâu vào buổi sáng giúp não bộ nhận thêm nhiều oxy và sảng khoái hơn!'
  },
  {
    id: 's_adv3', stage: 3, difficulty: 'easy', title: 'Các loại rễ cây trong tự nhiên', opponentName: 'Cây Bàng Cổ Thụ', opponentAvatar: '🌳🌱',
    questionText: 'Thực vật có hai loại rễ chính phổ biến là rễ cọc và rễ gì?',
    visual: 'Rễ cọc 🌿  vs  Rễ ... ?', options: ['Rễ nhánh', 'Rễ củ', 'Rễ gai', 'Rễ chùm'], correctAnswer: 'Rễ chùm',
    scaffoldHint: 'Rễ cọc (như cây bàng, cây phượng) có một rễ cái to; còn rễ chùm (như cây lúa, cây hành) có nhiều rễ mọc đều nhau!',
    funFact: 'Rễ cây đâm sâu và bám chắc vào lòng đất, giúp giữ đất chống xói mòn khi mưa bão!'
  },
  {
    id: 's_adv4', stage: 4, difficulty: 'easy', title: 'Bảo vệ cơ quan bài tiết', opponentName: 'Cá Heo Yêu Nước Sạch', opponentAvatar: '🐬💧',
    questionText: 'Để bảo vệ hai quả thận và cơ quan bài tiết nước tiểu khỏe mạnh, bé nên làm gì mỗi ngày?',
    visual: '💧 🚰 Uống đủ nước sạch', options: ['Nhịn tiểu thật lâu khi đang chơi game', 'Uống nhiều nước ngọt có gas thay nước lọc', 'Uống đủ nước lọc sạch mỗi ngày và không nhịn tiểu', 'Ăn thật nhiều đồ mặn cay nồng'], correctAnswer: 'Uống đủ nước lọc sạch mỗi ngày và không nhịn tiểu',
    scaffoldHint: 'Uống đủ 1,5 - 2 lít nước sạch mỗi ngày giúp thận lọc sạch chất cặn bã và bài tiết dễ dàng!',
    funFact: 'Nhịn tiểu lâu có thể gây lắng cặn tạo thành sỏi thận và viêm nhiễm đường tiết niệu đó bé!'
  },
  {
    id: 's_adv5', stage: 5, difficulty: 'easy', title: 'Trái Đất quay sinh ra Ngày và Đêm', opponentName: 'Quả Địa Cầu Thần Kỳ', opponentAvatar: '🌍☀️',
    questionText: 'Hiện tượng ngày và đêm luân phiên xảy ra liên tục là do Trái Đất làm gì?',
    visual: '🌍 🔄 Tự quay quanh trục', options: ['Mặt Trời bay quanh Trái Đất', 'Mặt Trăng che khuất Mặt Trời', 'Trái Đất đứng yên một chỗ', 'Trái Đất tự quay quanh trục từ Tây sang Đông'], correctAnswer: 'Trái Đất tự quay quanh trục từ Tây sang Đông',
    scaffoldHint: 'Trái Đất tự quay quanh trục một vòng mất 24 giờ (1 ngày đêm), nửa hướng về Mặt Trời là ban ngày, nửa kia là ban đêm!',
    funFact: 'Khi ở Việt Nam là ban ngày thì ở phía bên kia địa cầu (như nước Mỹ) đang là ban đêm tĩnh mịch!'
  },
  {
    id: 's_adv6', stage: 6, difficulty: 'easy', title: 'Ba thể của nước', opponentName: 'Tuyết Trắng & Suối Nước Nóng', opponentAvatar: '🧊💧☁️',
    questionText: 'Trong tự nhiên, nước tồn tại ở ba thể nào?',
    visual: 'Băng đá 🧊 ➔ Nước lỏng 💧 ➔ Hơi nước ☁️', options: ['Chỉ ở thể lỏng', 'Thể cứng và thể mềm', 'Thể rắn, thể lỏng và thể khí (hơi)', 'Thể đặc và thể loãng'], correctAnswer: 'Thể rắn, thể lỏng và thể khí (hơi)',
    scaffoldHint: 'Nước ở thể rắn là băng tuyết, thể lỏng là nước uống/nước sông hồ, thể khí là hơi nước trong không khí!',
    funFact: 'Nước là một trong số rất ít chất có thể đồng thời tồn tại ở cả ba thể trên bề mặt Trái Đất!'
  },
  {
    id: 's_adv7', stage: 7, difficulty: 'easy', title: 'Sự bay hơi của nước', opponentName: 'Ấm Nước Sôi Sùng Sục', opponentAvatar: '🫖♨️',
    questionText: 'Khi phơi quần áo ướt dưới ánh nắng mặt trời, quần áo khô ráo là nhờ hiện tượng gì?',
    visual: '☀️ 👕 Quần áo phơi khô', options: ['Sự bay hơi của nước thành hơi nước', 'Sự đông đặc của nước thành đá', 'Nước chìm vào trong sợi vải vĩnh viễn', 'Gió cuốn cả giọt nước đi mất'], correctAnswer: 'Sự bay hơi của nước thành hơi nước',
    scaffoldHint: 'Nước lỏng hấp thụ nhiệt lượng từ ánh nắng mặt trời và chuyển hóa thành hơi nước bay vào không khí!',
    funFact: 'Nhiệt độ càng cao và gió càng thổi mạnh thì nước bay hơi càng nhanh!'
  },
  {
    id: 's_adv8', stage: 8, difficulty: 'easy', title: 'Vòng tuần hoàn của nước', opponentName: 'Thần Mây Mưa Đại Dương', opponentAvatar: '🌧️🌊',
    questionText: 'Vòng tuần hoàn của nước trong tự nhiên diễn ra như thế nào?',
    visual: '🌊 ➔ ☁️ ➔ 🌧️ ➔ 🌊', options: ['Nước từ trên trời sinh ra rồi biến mất', 'Nước bốc hơi thành mây, gặp lạnh ngưng tụ thành mưa rơi xuống rồi lại chảy ra sông biển', 'Nước chỉ chảy một chiều xuống lòng đất', 'Mặt Trời hút hết nước về vũ trụ'], correctAnswer: 'Nước bốc hơi thành mây, gặp lạnh ngưng tụ thành mưa rơi xuống rồi lại chảy ra sông biển',
    scaffoldHint: 'Vòng tuần hoàn nước khép kín: Bốc hơi ➔ Ngưng tụ thành mây ➔ Mưa rơi ➔ Trở về nguồn nước!',
    funFact: 'Giọt nước bé uống hôm nay có thể từng nằm trong một cơn mưa rơi từ hàng triệu năm trước thời khủng long!'
  },
  {
    id: 's_adv9', stage: 9, difficulty: 'easy', title: 'Thành phần của không khí', opponentName: 'Bong Bóng Khí Quyển', opponentAvatar: '🫧🎈',
    questionText: 'Khí nào chiếm thể tích lớn nhất (khoảng 78%) trong bầu khí quyển Trái Đất?',
    visual: 'Khí Nitơ (~78%)  vs  Khí Oxy (~21%)', options: ['Khí Oxy', 'Khí Cacbonic', 'Khí Hiđrô', 'Khí Nitơ'], correctAnswer: 'Khí Nitơ',
    scaffoldHint: 'Khí Nitơ chiếm tới 78% thể tích không khí, khí Oxy chiếm khoảng 21%, còn lại là các khí khác!',
    funFact: 'Dù Nitơ chiếm đa số, nhưng Oxy lại là khí quyết định sự sống của muôn loài và sự cháy!'
  },
  {
    id: 's_adv10', stage: 10, difficulty: 'easy', title: 'Tính chất vật lý của không khí', opponentName: 'Cơn Gió Tàng Hình', opponentAvatar: '🌬️🔍',
    questionText: 'Không khí xung quanh chúng ta có những tính chất vật lý nào?',
    visual: '🌬️ Không khí quanh ta', options: ['Có màu xanh nhạt và mùi thơm', 'Trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định', 'Có màu trắng đục như sữa', 'Có hình vuông cố định'], correctAnswer: 'Trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định',
    scaffoldHint: 'Không khí vô hình chiếm đầy mọi khoảng trống trong các vật và có thể bị nén lại hoặc giãn ra!',
    funFact: 'Chúc mừng bé đã chinh phục 10 ải Lớp 3 Khoa Học xuất sắc!'
  },
  {
    id: 's_adv11', stage: 11, difficulty: 'medium', title: 'Nhóm chất bột đường (Gluxit)', opponentName: 'Bát Cơm Dẻo Thơm', opponentAvatar: '🍚🌾',
    questionText: 'Nhóm chất dinh dưỡng cung cấp năng lượng chủ yếu cho cơ thể hoạt động hàng ngày, có nhiều trong cơm, ngô, khoai là:',
    visual: '🍚 🌽 🥔 Chất bột đường', options: ['Chất bột đường (Gluxit)', 'Chất béo (Lipit)', 'Chất đạm (Protein)', 'Khoáng chất'], correctAnswer: 'Chất bột đường (Gluxit)',
    scaffoldHint: 'Cơm, bánh mì, ngô, khoai chứa nhiều tinh bột đường giúp bé có sức khỏe học tập và vui chơi mỗi ngày!',
    funFact: 'Bộ não con người tiêu thụ khoảng 20% tổng năng lượng từ chất bột đường của toàn cơ thể!'
  },
  {
    id: 's_adv12', stage: 12, difficulty: 'medium', title: 'Ăn uống cân đối và lành mạnh', opponentName: 'Bác Sĩ Dinh Dưỡng Thỏ Trắng', opponentAvatar: '🐰🥗',
    questionText: 'Thói quen ăn quá nhiều muối và mỡ động vật chiên rán có thể dẫn đến nguy cơ mắc bệnh gì khi lớn lên?',
    visual: '🧂 🍟 Ăn quá mặn và nhiều mỡ', options: ['Cận thị ở mắt', 'Rụng tóc', 'Bệnh tim mạch và tăng huyết áp', 'Gãy xương tay chân'], correctAnswer: 'Bệnh tim mạch và tăng huyết áp',
    scaffoldHint: 'Ăn thanh đạm, giảm muối và ăn nhiều rau củ quả giúp mạch máu luôn thông thoáng và tim khỏe mạnh!',
    funFact: 'Tổ chức Y tế Thế giới khuyên mỗi người lớn chỉ nên ăn dưới 5g muối mỗi ngày (khoảng 1 thìa cà phê)!'
  },
  {
    id: 's_adv13', stage: 13, difficulty: 'medium', title: 'Sự lan truyền của âm thanh', opponentName: 'Chiếc Chuông Đồng Ngân Vang', opponentAvatar: '🔔🎶',
    questionText: 'Âm thanh có thể lan truyền qua những môi trường nào sau đây?',
    visual: '🔔 Âm thanh truyền qua...', options: ['Chỉ truyền qua không khí', 'Chỉ truyền qua nước', 'Truyền được qua cả chân không tuyệt đối', 'Chất rắn, chất lỏng và chất khí'], correctAnswer: 'Chất rắn, chất lỏng và chất khí',
    scaffoldHint: 'Âm thanh cần môi trường vật chất để dao động; trong vũ trụ chân không, âm thanh hoàn toàn không thể lan truyền!',
    funFact: 'Âm thanh truyền trong chất rắn (như kim loại, đất đá) nhanh hơn nhiều so với truyền trong không khí!'
  },
  {
    id: 's_adv14', stage: 14, difficulty: 'medium', title: 'Vật tự phát ra ánh sáng', opponentName: 'Mặt Trời Rực Rỡ', opponentAvatar: '☀️🕯️',
    questionText: 'Vật nào dưới đây là vật TỰ PHÁT RA ÁNH SÁNG trong tự nhiên?',
    visual: '☀️ Mặt Trời  vs  🌙 Mặt Trăng', options: ['Mặt Trời và ngọn nến đang cháy', 'Mặt Trăng trên bầu trời', 'Tấm gương soi', 'Quyển sách trên bàn'], correctAnswer: 'Mặt Trời và ngọn nến đang cháy',
    scaffoldHint: 'Mặt Trời tự tạo ra ánh sáng nhờ phản ứng hạt nhân; còn Mặt Trăng chỉ phản chiếu lại ánh sáng của Mặt Trời!',
    funFact: 'Đom đóm là loài sinh vật nhỏ bé tự phát ra ánh sáng lạnh kỳ diệu nhờ chất hóa học luciferin!'
  },
  {
    id: 's_adv15', stage: 15, difficulty: 'medium', title: 'Sự hình thành Bóng Tối', opponentName: 'Múa Bóng Nghệ Thuật', opponentAvatar: '👥🔦',
    questionText: 'Khi ánh sáng từ một nguồn sáng chiếu tới một vật cản sáng, phía sau vật cản sáng sẽ xuất hiện gì?',
    visual: '🔦 ➔ 📦 ➔ ⬛ Bóng tối', options: ['Ánh sáng cầu vồng', 'Vật sẽ biến mất', 'Bóng tối của vật cản sáng', 'Tia lửa điện'], correctAnswer: 'Bóng tối của vật cản sáng',
    scaffoldHint: 'Ánh sáng truyền theo đường thẳng, khi gặp vật cản sáng thì không đi qua được, tạo thành vùng tối phía sau!',
    funFact: 'Vào những ngày nắng to, bóng của bé sẽ dài ra vào sáng sớm và chiều tà, ngắn nhất vào đúng buổi trưa!'
  },
  {
    id: 's_adv16', stage: 16, difficulty: 'medium', title: 'Sự dẫn nhiệt của kim loại', opponentName: 'Chiếc Thìa Kim Loại Nóng', opponentAvatar: '🥄♨️',
    questionText: 'Khi đặt một chiếc thìa nhôm vào bát canh nóng, một lát sau ta thấy cán thìa cũng bị nóng lên là do hiện tượng gì?',
    visual: '🥣 🥄 Canh nóng truyền nhiệt', options: ['Sự bay hơi của canh', 'Sự dẫn nhiệt qua kim loại', 'Sự nhiễm điện của thìa', 'Sự co giãn vì nhiệt'], correctAnswer: 'Sự dẫn nhiệt qua kim loại',
    scaffoldHint: 'Kim loại (nhôm, đồng, sắt) dẫn nhiệt rất tốt, nhiệt độ truyền từ đầu ngập trong canh lên cán thìa!',
    funFact: 'Cán chảo thường được bọc bằng gỗ hoặc nhựa vì đây là những chất dẫn nhiệt kém, giúp chúng ta không bị bỏng tay!'
  },
  {
    id: 's_adv17', stage: 17, difficulty: 'medium', title: 'Vật dẫn điện và cách điện', opponentName: 'Chú Thợ Điện Sóc Nâu', opponentAvatar: '🐿️⚡🔌',
    questionText: 'Chất liệu nào dưới đây là vật DẪN ĐIỆN TỐT thường dùng làm lõi dây dẫn điện trong gia đình?',
    visual: '⚡ Dây điện: Lõi kim loại, Vỏ nhựa', options: ['Đồng và nhôm', 'Nhựa và cao su', 'Gỗ khô và thủy tinh', 'Sứ và vải bông'], correctAnswer: 'Đồng và nhôm',
    scaffoldHint: 'Lõi kim loại dẫn điện tốt để đưa dòng điện đến các thiết bị, còn vỏ bọc bằng nhựa cách điện để bảo vệ an toàn!',
    funFact: 'Bạc là kim loại dẫn điện tốt nhất thế giới, nhưng đồng được dùng nhiều nhất vì giá thành hợp lý!'
  },
  {
    id: 's_adv18', stage: 18, difficulty: 'medium', title: 'Kỳ diệu Quá trình Quang Hợp', opponentName: 'Chiếc Lá Xanh Thần Bí', opponentAvatar: '🍃☀️',
    questionText: 'Cây xanh hấp thụ ánh sáng mặt trời, khí cacbonic và nước để tạo ra chất hữu cơ và nhả ra khí gì cho con người thở?',
    visual: '🍃 Quang hợp ➔ Nhả khí Oxy', options: ['Khí Nitơ', 'Khí Cacbonic', 'Khí Oxy', 'Khí Metan'], correctAnswer: 'Khí Oxy',
    scaffoldHint: 'Nhờ có chất diệp lục, cây xanh quang hợp tạo ra khí Oxy quý giá duy trì sự sống của cả Trái Đất!',
    funFact: 'Rừng cây xanh được ví như lá phổi xanh khổng lồ của hành tinh chúng ta!'
  },
  {
    id: 's_adv19', stage: 19, difficulty: 'medium', title: 'Vai trò thụ phấn của ong bướm', opponentName: 'Ong Vàng Chăm Chỉ', opponentAvatar: '🐝🌸',
    questionText: 'Khi bay đi hút mật hoa, bạn ong và bạn bướm đã vô tình giúp ích điều gì vô cùng quan trọng cho cây hoa?',
    visual: '🐝 🌸 Thụ phấn cho hoa', options: ['Làm cho cánh hoa rụng bớt', 'Thụ phấn giúp hoa kết thành quả chứa hạt giống', 'Tưới nước cho hoa', 'Tỉa bớt cành cây'], correctAnswer: 'Thụ phấn giúp hoa kết thành quả chứa hạt giống',
    scaffoldHint: 'Hạt phấn dính vào chân và thân của ong bướm được mang từ nhị hoa sang nhụy hoa, giúp hoa thụ phấn và kết quả!',
    funFact: 'Hơn 75% các loài cây trồng cung cấp lương thực trên thế giới phụ thuộc vào sự thụ phấn của côn trùng!'
  },
  {
    id: 's_adv20', stage: 20, difficulty: 'medium', title: 'Mắt xích đầu tiên của Chuỗi Thức Ăn', opponentName: 'Cỏ Xanh Bất Tận', opponentAvatar: '🌾🦁',
    questionText: 'Trong tự nhiên, hầu hết các chuỗi thức ăn sinh thái đều bắt đầu bằng mắt xích nào?',
    visual: '🌾 Cỏ tươi ➔ 🐰 Thỏ con ➔ 🦊 Cáo', options: ['Động vật ăn thịt hung dữ', 'Con người', 'Sinh vật phân hủy', 'Sinh vật sản xuất (thực vật, cây xanh)'], correctAnswer: 'Sinh vật sản xuất (thực vật, cây xanh)',
    scaffoldHint: 'Cây xanh tự tổng hợp dinh dưỡng từ ánh sáng mặt trời, là nguồn thức ăn khởi đầu nuôi sống các loài động vật ăn cỏ!',
    funFact: 'Bé đã vượt qua 20 ải và chuẩn bị khám phá những bí ẩn chuyên sâu của Khoa Học Lớp 5!'
  },
  {
    id: 's_adv21', stage: 21, difficulty: 'hard', title: 'Sự biến đổi Hóa Học', opponentName: 'Ngọn Lửa Biến Hóa', opponentAvatar: '🔥🧪',
    questionText: 'Hiện tượng nào dưới đây là sự biến đổi HÓA HỌC (có chất mới được tạo thành)?',
    visual: '🧪 Biến đổi tạo chất mới', options: ['Nước đá tan chảy thành nước lỏng', 'Xé nhỏ một tờ giấy trắng', 'Đốt cháy một que diêm thành tro than đen', 'Hòa tan đường vào nước lọc'], correctAnswer: 'Đốt cháy một que diêm thành tro than đen',
    scaffoldHint: 'Đốt cháy que diêm tạo ra tro than và khí khét mới (không thể trở lại que diêm ban đầu) -> Biến đổi hóa học!',
    funFact: 'Biến đổi vật lý chỉ thay đổi hình dạng/trạng thái; còn biến đổi hóa học tạo ra chất hoàn toàn mới!'
  },
  {
    id: 's_adv22', stage: 22, difficulty: 'hard', title: 'Hỗn hợp và Dung Dịch', opponentName: 'Cốc Nước Đường Trong Suốt', opponentAvatar: '🥛🍯',
    questionText: 'Khi cho đường trắng vào cốc nước ấm khuấy đều đến khi đường tan hoàn toàn, chất lỏng thu được gọi là gì?',
    visual: '🥛 Nước + Đường tan hết', options: ['Dung dịch nước đường', 'Hỗn hợp không đồng nhất', 'Chất rắn nguyên chất', 'Khí hòa tan'], correctAnswer: 'Dung dịch nước đường',
    scaffoldHint: 'Dung dịch là hỗn hợp đồng nhất giữa chất tan (đường) và dung môi (nước), trong suốt và không phân lớp!',
    funFact: 'Nước biển mặn chính là một dung dịch muối khoáng tự nhiên khổng lồ của Trái Đất!'
  },
  {
    id: 's_adv23', stage: 23, difficulty: 'hard', title: 'Phương pháp Tách Chất', opponentName: 'Chiếc Phễu Lọc Thần Kỳ', opponentAvatar: '🧪📜',
    questionText: 'Để tách riêng những hạt cát không tan ra khỏi hỗn hợp nước cát, người ta dùng phương pháp nào đơn giản nhất?',
    visual: '🏖️ Tách cát khỏi nước', options: ['Đun sôi cho nước bay hơi hết', 'Chiết rót bằng dầu ăn', 'Để ra ngoài ánh nắng', 'Lọc qua giấy lọc hoặc màng lọc mịn'], correctAnswer: 'Lọc qua giấy lọc hoặc màng lọc mịn',
    scaffoldHint: 'Hạt cát to bị giữ lại trên màng lọc, nước trong suốt chảy qua phễu thu được nước sạch!',
    funFact: 'Hệ thống máy lọc nước RO trong gia đình cũng hoạt động dựa trên nguyên lý lọc qua màng siêu mịn!'
  },
  {
    id: 's_adv24', stage: 24, difficulty: 'hard', title: 'Năng lượng Xanh Tái Tạo', opponentName: 'Cối Xay Gió Khổng Lồ', opponentAvatar: '🌬️⚡☀️',
    questionText: 'Nguồn năng lượng nào dưới đây là NĂNG LƯỢNG TÁI TẠO vô tận không thải khí độc ô nhiễm môi trường?',
    visual: '☀️ Nắng Mặt Trời & 💨 Gió', options: ['Năng lượng từ đốt than đá', 'Năng lượng gió và năng lượng ánh sáng mặt trời', 'Năng lượng từ dầu mỏ và xăng', 'Năng lượng từ đốt rác thải cao su'], correctAnswer: 'Năng lượng gió và năng lượng ánh sáng mặt trời',
    scaffoldHint: 'Ánh nắng mặt trời và gió tự nhiên không bao giờ cạn kiệt, không sinh ra khí thải nhà kính bảo vệ hành tinh!',
    funFact: 'Việt Nam với bờ biển dài và nhiều nắng là quốc gia có tiềm năng điện gió và điện mặt trời rất lớn!'
  },
  {
    id: 's_adv25', stage: 25, difficulty: 'hard', title: 'Sinh sản vô tính ở thực vật', opponentName: 'Cây Sống Đời Thần Kỳ', opponentAvatar: '🌱🪴',
    questionText: 'Cây con có thể mọc lên từ bộ phận nào của cây mẹ ngoài hạt giống?',
    visual: '🪴 Mọc từ lá, cành, củ', options: ['Chỉ có thể mọc từ hạt', 'Chỉ mọc từ phấn hoa', 'Mọc từ thân, cành, lá hoặc rễ củ của cây mẹ', 'Mọc từ cánh hoa khô'], correctAnswer: 'Mọc từ thân, cành, lá hoặc rễ củ của cây mẹ',
    scaffoldHint: 'Cây mía mọc từ thân, cây khoai lang mọc từ củ, cây sống đời mọc cây con ngay từ mép lá!',
    funFact: 'Khả năng sinh sản sinh dưỡng giúp nhà nông nhân giống cây ăn quả quý cực kỳ nhanh chóng!'
  },
  {
    id: 's_adv26', stage: 26, difficulty: 'hard', title: 'Động vật đẻ con và nuôi con bằng sữa', opponentName: 'Cá Voi Mẹ & Con', opponentAvatar: '🐋🤱',
    questionText: 'Loài động vật nào dưới đây sinh sản bằng hình thức ĐẺ CON và nuôi con bằng dòng sữa mẹ ấm áp?',
    visual: '🐋 Cá voi sinh con', options: ['Cá chép, chim bồ câu, cá vàng', 'Cá voi xanh, cá heo, chó, mèo, bò sữa', 'Con ếch, con thằn lằn, con rùa', 'Chim cánh cụt, đà điểu, gà'], correctAnswer: 'Cá voi xanh, cá heo, chó, mèo, bò sữa',
    scaffoldHint: 'Cá voi và cá heo tuy bơi dưới nước nhưng là thú có vú thở bằng phổi, đẻ con và nuôi con bằng sữa mẹ!',
    funFact: 'Sữa cá voi mẹ rất đặc và giàu chất béo giúp cá voi con tăng cân nhanh chóng tới 90 kg mỗi ngày!'
  },
  {
    id: 's_adv27', stage: 27, difficulty: 'hard', title: 'Hậu quả của việc phá rừng', opponentName: 'Thần Rừng Xanh Buồn Bã', opponentAvatar: '🌲🪓',
    questionText: 'Hành động chặt phá rừng đầu nguồn bừa bãi sẽ gây ra những hậu quả thiên tai khủng khiếp nào?',
    visual: '🌧️ Lũ lụt và sạt lở đất', options: ['Xói mòn đất, lũ lụt, lũ quét, hạn hán và mất đa dạng sinh học', 'Làm cho đất đai màu mỡ hơn', 'Tăng lượng mưa mát lành', 'Làm mát dịu nhiệt độ Trái Đất'], correctAnswer: 'Xói mòn đất, lũ lụt, lũ quét, hạn hán và mất đa dạng sinh học',
    scaffoldHint: 'Rễ cây giữ đất, tán rừng giữ nước; mất rừng khiến nước mưa tuôn xối xả gây lũ bùn tàn phá xóm làng!',
    funFact: 'Mỗi bạn nhỏ trồng và chăm sóc một cây xanh là đang góp phần cứu lấy mái nhà Trái Đất thân yêu!'
  },
  {
    id: 's_adv28', stage: 28, difficulty: 'hard', title: 'Hiệu ứng nhà kính nóng lên toàn cầu', opponentName: 'Trái Đất Sốt Nóng', opponentAvatar: '🌍🌡️🔥',
    questionText: 'Khí CO₂ (Cacbonic) thải ra quá nhiều từ các nhà máy nhiệt điện và khói xe cộ là thủ phạm chính gây ra:',
    visual: '🌡️ Trái Đất nóng lên', options: ['Bầu trời mát mẻ hơn', 'Tăng lượng băng tuyết ở hai cực', 'Làm sạch không khí đô thị', 'Hiện tượng hiệu ứng nhà kính làm Trái Đất nóng lên toàn cầu'], correctAnswer: 'Hiện tượng hiệu ứng nhà kính làm Trái Đất nóng lên toàn cầu',
    scaffoldHint: 'Khí nhà kính giữ nhiệt của Mặt Trời không thoát ra vũ trụ được, làm băng tan ở hai cực và thời tiết cực đoan!',
    funFact: 'Đi xe đạp, đi bộ hoặc dùng xe buýt điện giúp giảm bớt khí thải bảo vệ bầu trời trong xanh!'
  },
  {
    id: 's_adv29', stage: 29, difficulty: 'boss', title: 'Cấu tạo sinh sản của Bông Hoa', opponentName: 'Hoa Sen Hoàng Gia', opponentAvatar: '🪷👑',
    questionText: 'Sau khi được hạt phấn thụ phấn và thụ tinh thành công, bộ phận nào của bông hoa sẽ phát triển thành QUẢ chứa hạt?',
    visual: '🌺 Bầu nhụy ➔ Quả ngọt', options: ['Cánh hoa rực rỡ', 'Bầu nhụy của hoa', 'Đài hoa màu xanh', 'Cuống hoa'], correctAnswer: 'Bầu nhụy của hoa',
    scaffoldHint: 'Noãn trong bầu nhụy phát triển thành hạt giống, còn bầu nhụy dày lên phát triển thành thịt quả thơm ngon!',
    funFact: 'Quả ngọt là món quà tuyệt vời của cây xanh để bảo vệ và phát tán hạt giống đi muôn nơi!'
  },
  {
    id: 's_adv30', stage: 30, difficulty: 'boss', title: 'Quy tắc 3R bảo vệ môi trường (TRÙM KHOA HỌC)', opponentName: 'Thần Đất Mẹ Toàn Năng', opponentAvatar: '👑🌍🌱',
    questionText: 'Khẩu hiệu môi trường toàn cầu "Quy tắc 3R" (Reduce - Reuse - Recycle) có nghĩa là gì?',
    visual: '♻️ Reduce - Reuse - Recycle', options: ['Rửa tay - Rửa mặt - Rửa chân', 'Rừng xanh - Rừng vàng - Rừng bạc', 'Rộng lớn - Rực rỡ - Rộn ràng', 'Giảm thiểu rác thải - Tái sử dụng đồ cũ - Tái chế rác thành sản phẩm mới'], correctAnswer: 'Giảm thiểu rác thải - Tái sử dụng đồ cũ - Tái chế rác thành sản phẩm mới',
    scaffoldHint: 'Reduce: Giảm dùng túi nilon/nhựa 1 lần; Reuse: Tận dụng đồ cũ; Recycle: Phân loại rác để nhà máy tái chế!',
    funFact: 'Chúc mừng bé đã trở thành Viện Sĩ Khoa Học Tí Hon Toàn Năng! Trí tuệ của bé đã tỏa sáng muôn nơi!'
  }
];

// Dữ liệu 30 Ải Non Sông & Sử Ký Việt Nam (Lớp 4 - 5)
const historyGeoLessons = [
  {
    id: 'hg1', stage: 1, difficulty: 'easy', title: 'Hình dáng dải đất Việt Nam', opponentName: 'Bản Đồ Non Sông', opponentAvatar: '🗺️🇻🇳',
    questionText: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam có dải đất liền uốn lượn mang hình chữ cái nào?',
    visual: '🇻🇳 Dải đất hình chữ S', options: ['Hình chữ V', 'Hình chữ C', 'Hình chữ L', 'Hình chữ S'], correctAnswer: 'Hình chữ S',
    scaffoldHint: 'Đất nước Việt Nam thân yêu trải dài từ địa đầu Móng Cái đến mũi Cà Mau uốn lượn như hình chữ S kiêu hãnh!',
    funFact: 'Việt Nam có đường bờ biển dài hơn 3.260 km tiếp giáp với Biển Đông giàu đẹp!'
  },
  {
    id: 'hg2', stage: 2, difficulty: 'easy', title: 'Thủ đô ngàn năm văn hiến', opponentName: 'Tháp Rùa Hồ Gươm', opponentAvatar: '🐢🏯',
    questionText: 'Thủ đô ngàn năm văn hiến, trái tim của cả nước Việt Nam là thành phố nào?',
    visual: '🏯 Hồ Gươm & Tháp Rùa', options: ['Thành phố Hồ Chí Minh', 'Thủ đô Hà Nội', 'Thành phố Đà Nẵng', 'Cố đô Huế'], correctAnswer: 'Thủ đô Hà Nội',
    scaffoldHint: 'Hà Nội - mảnh đất Thăng Long rồng bay ngàn năm lịch sử, nơi đặt lăng Chủ tịch Hồ Chí Minh vĩ đại!',
    funFact: 'Hà Nội từng mang nhiều tên gọi cổ kính như Thăng Long, Đông Đô, Đông Kinh, Tràng An!'
  },
  {
    id: 'hg3', stage: 3, difficulty: 'easy', title: 'Nóc nhà Đông Dương Fansipan', opponentName: 'Đỉnh Núi Mây Ngàn', opponentAvatar: '🏔️☁️',
    questionText: 'Đỉnh núi cao nhất Việt Nam (cao 3.143 mét) và được mệnh danh là "Nóc nhà Đông Dương" là đỉnh núi nào?',
    visual: '🏔️ 3.143 m Fansipan', options: ['Đỉnh Mẫu Sơn', 'Đỉnh Bạch Mộc Lương Tử', 'Đỉnh Phan-xi-păng (Fansipan)', 'Đỉnh Bà Nà'], correctAnswer: 'Đỉnh Phan-xi-păng (Fansipan)',
    scaffoldHint: 'Đỉnh Phan-xi-păng nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc thị xã Sa Pa, tỉnh Lào Cai!',
    funFact: 'Đứng trên đỉnh Fansipan quanh năm mây mù bao phủ, bé sẽ cảm thấy như chạm tay vào cổng trời!'
  },
  {
    id: 'hg4', stage: 4, difficulty: 'easy', title: 'Dòng Sông Hồng phù sa đỏ', opponentName: 'Sông Mẹ Miền Bắc', opponentAvatar: '🌊🌾',
    questionText: 'Con sông lớn nhất miền Bắc mang nặng phù sa màu mỡ bồi đắp nên Đồng bằng Bắc Bộ trù phú là sông nào?',
    visual: '🌊 Phù sa màu mỡ', options: ['Sông Hồng', 'Sông Đà', 'Sông Mã', 'Sông Lam'], correctAnswer: 'Sông Hồng',
    scaffoldHint: 'Sông Hồng (còn gọi là sông Cái) đỏ nặng phù sa, là chiếc nôi của nền văn minh lúa nước ngàn đời!',
    funFact: 'Hệ thống đê sông Hồng dài hàng ngàn cây số là kỳ tích đắp đê ngăn lũ vĩ đại của cha ông ta!'
  },
  {
    id: 'hg5', stage: 5, difficulty: 'easy', title: 'Ruộng bậc thang kỳ vĩ', opponentName: 'Bản Làng Vùng Cao', opponentAvatar: '🌾🏡',
    questionText: 'Những thửa ruộng bậc thang uốn lượn vàng rực mùa lúa chín là nét văn hóa nông nghiệp độc đáo của vùng nào?',
    visual: '🌾 Ruộng bậc thang Sa Pa, Mù Cang Chải', options: ['Vùng Đồng bằng Nam Bộ', 'Vùng Duyên hải miền Trung', 'Vùng đồng bằng sông Cửu Long', 'Vùng Trung du và miền núi Bắc Bộ'], correctAnswer: 'Vùng Trung du và miền núi Bắc Bộ',
    scaffoldHint: 'Đồng bào các dân tộc Tày, Nùng, H\'Mông, Dao xẻ sườn núi dốc thành các bậc thang để giữ nước trồng lúa!',
    funFact: 'Ruộng bậc thang Mù Cang Chải và Sa Pa được bình chọn là một trong những cảnh quan kỳ vĩ nhất hành tinh!'
  },
  {
    id: 'hg6', stage: 6, difficulty: 'easy', title: 'Đất đỏ bazan và Tiếng cồng chiêng', opponentName: 'Voi Rừng Tây Nguyên', opponentAvatar: '🐘🥁',
    questionText: 'Vùng đất nào ở nước ta có các cao nguyên đất đỏ bazan rộng lớn, nổi tiếng với đồn điền cà phê và Không gian văn hóa Cồng chiêng?',
    visual: '☕ Đất đỏ bazan & Cồng chiêng', options: ['Vùng Tây Nguyên', 'Vùng Đồng bằng Bắc Bộ', 'Vùng Duyên hải miền Trung', 'Vùng Nam Bộ'], correctAnswer: 'Vùng Tây Nguyên',
    scaffoldHint: 'Tây Nguyên với các tỉnh Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng là thủ phủ cà phê của thế giới!',
    funFact: 'Không gian văn hóa Cồng chiêng Tây Nguyên đã được UNESCO vinh danh là Di sản văn hóa phi vật thể của nhân loại!'
  },
  {
    id: 'hg7', stage: 7, difficulty: 'easy', title: 'Vựa lúa lớn nhất nước Nam Bộ', opponentName: 'Chợ Nổi Miền Tây', opponentAvatar: '🛶🍍🍉',
    questionText: 'Đồng bằng nào do phù sa của dòng sông Mê Kông (sông Tiền và sông Hậu) bồi đắp, được mệnh danh là vựa lúa và trái cây lớn nhất cả nước?',
    visual: '🌾 Sông Cửu Long 9 nhánh', options: ['Đồng bằng sông Hồng', 'Đồng bằng sông Cửu Long', 'Đồng bằng Thanh Hóa', 'Đồng bằng Bình Trị Thiên'], correctAnswer: 'Đồng bằng sông Cửu Long',
    scaffoldHint: 'Đồng bằng sông Cửu Long với đất đai màu mỡ và kênh rạch chằng chịt sản xuất lúa gạo xuất khẩu hàng đầu thế giới!',
    funFact: 'Chợ nổi Cái Răng, Ngã Bảy là nét sinh hoạt buôn bán trên sông nước vô cùng độc đáo của bà con miền Tây!'
  },
  {
    id: 'hg8', stage: 8, difficulty: 'easy', title: 'Hoàng Sa và Trường Sa thiêng liêng', opponentName: 'Hải Đăng Đảo Xa', opponentAvatar: '🗼🌊🇻🇳',
    questionText: 'Hai quần đảo ngoài khơi Biển Đông thuộc chủ quyền thiêng liêng đời đời của Tổ quốc Việt Nam là:',
    visual: '🌊 🇻🇳 Hoàng Sa & Trường Sa', options: ['Quần đảo Cát Bà và Côn Đảo', 'Đảo Phú Quốc và đảo Lý Sơn', 'Quần đảo Hoàng Sa và quần đảo Trường Sa', 'Đảo Cô Tô và đảo Phú Quý'], correctAnswer: 'Quần đảo Hoàng Sa và quần đảo Trường Sa',
    scaffoldHint: 'Hoàng Sa (thuộc TP Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hòa) là máu thịt ngàn đời không thể tách rời của Tổ quốc!',
    funFact: 'Từ thời các chúa Nguyễn, các Hải đội Hoàng Sa đã vâng lệnh giong buồm ra biển cắm mốc chủ quyền!'
  },
  {
    id: 'hg9', stage: 9, difficulty: 'easy', title: 'Bờ biển Duyên hải miền Trung', opponentName: 'Cầu Rồng Đà Nẵng', opponentAvatar: '🌉🌊',
    questionText: 'Vùng Duyên hải miền Trung có đường bờ biển dài, với các bãi biển cát trắng tuyệt đẹp và vịnh biển nổi tiếng như:',
    visual: '🏖️ Vịnh biển miền Trung', options: ['Biển Đồ Sơn', 'Vịnh Nha Trang, biển Đà Nẵng, biển Mỹ Khê', 'Hồ Ba Bể', 'Hồ Thác Bà'], correctAnswer: 'Vịnh Nha Trang, biển Đà Nẵng, biển Mỹ Khê',
    scaffoldHint: 'Miền Trung có bờ biển thoai thoải, nước biển trong xanh như ngọc bích thu hút hàng triệu khách quốc tế!',
    funFact: 'Miền Trung còn có nhiều cảng biển nước sâu và hải sản tôm cá vô cùng phong phú!'
  },
  {
    id: 'hg10', stage: 10, difficulty: 'easy', title: 'Địa đầu cực Bắc Lũng Cú', opponentName: 'Cột Cờ Kiêu Hãnh', opponentAvatar: '🚩🏔️',
    questionText: 'Cột cờ Lũng Cú - điểm địa đầu cực Bắc thiêng liêng của Tổ quốc, nơi lá cờ đỏ sao vàng 54m² tung bay, thuộc tỉnh nào?',
    visual: '🚩 Cột cờ Lũng Cú (Hà Giang)', options: ['Tỉnh Cao Bằng', 'Tỉnh Lạng Sơn', 'Tỉnh Hà Giang', 'Tỉnh Lào Cai'], correctAnswer: 'Tỉnh Hà Giang',
    scaffoldHint: 'Cao nguyên đá Đồng Văn và Cột cờ Lũng Cú nằm kiêu hãnh trên đỉnh núi rồng của tỉnh Hà Giang!',
    funFact: 'Lá cờ Tổ quốc tại Lũng Cú rộng 54 m² tượng trưng cho tình đoàn kết của 54 dân tộc anh em trên dải đất hình chữ S!'
  },
  {
    id: 'hg11', stage: 11, difficulty: 'medium', title: 'Nhà nước Văn Lang thời các Vua Hùng', opponentName: 'Trống Đồng Đông Sơn', opponentAvatar: '🥁👑',
    questionText: 'Theo truyền thuyết lịch sử, nhà nước đầu tiên của dân tộc ta do các Vua Hùng dựng nên có tên là gì?',
    visual: '👑 Hùng Vương dựng nước', options: ['Nhà nước Âu Lạc', 'Nước Đại Việt', 'Nước Đại Nam', 'Nhà nước Văn Lang'], correctAnswer: 'Nhà nước Văn Lang',
    scaffoldHint: 'Các Vua Hùng đóng đô tại Phong Châu (Phú Thọ ngày nay), đặt tên nước là Văn Lang!',
    funFact: 'Ngày Giỗ Tổ Hùng Vương mùng 10 tháng 3 âm lịch là ngày lễ lớn để toàn dân tưởng nhớ cội nguồn dân tộc!'
  },
  {
    id: 'hg12', stage: 12, difficulty: 'medium', title: 'Lời thề dựng nước và giữ nước', opponentName: 'Đền Hùng Bát Ngát', opponentAvatar: '🏛️🌸',
    questionText: 'Câu nói bất hủ của Chủ tịch Hồ Chí Minh tại Đền Hùng: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau ..."',
    visual: 'Bác Hồ thăm Đền Hùng năm 1954', options: ['giữ lấy nước', 'xây nhà cao', 'làm giàu nhanh', 'đi thật xa'], correctAnswer: 'giữ lấy nước',
    scaffoldHint: '"Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước" là lời căn dặn thiêng liêng của Bác!',
    funFact: 'Lời dạy của Bác nhắc nhở mỗi thế hệ người Việt Nam luôn biết ơn và tiếp bước truyền thống bảo vệ giang sơn!'
  },
  {
    id: 'hg13', stage: 13, difficulty: 'medium', title: 'Khởi nghĩa Hai Bà Trưng (Năm 40)', opponentName: 'Hai Nữ Tướng Cưỡi Voi', opponentAvatar: '🐘⚔️👩',
    questionText: 'Mùa xuân năm 40 sau Công nguyên, hai vị nữ anh hùng dân tộc nào đã cưỡi voi xuất trận đánh đuổi quân đô hộ nhà Hán?',
    visual: '🐘 Hai Bà Trưng cưỡi voi ra trận', options: ['Bà Triệu (Triệu Thị Trinh)', 'Hai Bà Trưng (Trưng Trắc và Trưng Nhị)', 'Thái hậu Dương Vân Nga', 'Nguyên phi Ỷ Lan'], correctAnswer: 'Hai Bà Trưng (Trưng Trắc và Trưng Nhị)',
    scaffoldHint: 'Hai Bà Trưng phất cờ khởi nghĩa ở Hát Môn: "Một xin rửa sạch nước thù / Hai xin dựng lại nghiệp xưa họ Hùng"!',
    funFact: 'Khởi nghĩa Hai Bà Trưng là cuộc khởi nghĩa đầu tiên trong lịch sử chứng minh khí phách anh hùng bất khuất của phụ nữ Việt Nam!'
  },
  {
    id: 'hg14', stage: 14, difficulty: 'medium', title: 'Bạch Đằng giang dậy sóng năm 938', opponentName: 'Cọc Gỗ Sông Bạch Đằng', opponentAvatar: '🪵🌊⚔️',
    questionText: 'Ai là người đã chỉ huy quân dân ta cắm cọc gỗ bịt sắt nhọn trên sông Bạch Đằng, đánh tan quân Nam Hán năm 938 kết thúc hơn 1000 năm Bắc thuộc?',
    visual: '🪵 Chiến thắng Bạch Đằng 938', options: ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Hoàn', 'Lý Thường Kiệt'], correctAnswer: 'Ngô Quyền',
    scaffoldHint: 'Ngô Quyền lợi dụng thủy triều lên xuống để nhử thuyền giặc vào bãi cọc nhọn, mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc!',
    funFact: 'Chiến thắng Bạch Đằng năm 938 là mốc son chói lọi nhất chấm dứt đêm trường Bắc thuộc kéo dài hơn một thiên niên kỷ!'
  },
  {
    id: 'hg15', stage: 15, difficulty: 'medium', title: 'Cờ lau tập trận Đinh Bộ Lĩnh', opponentName: 'Cậu Bé Cờ Lau Hoa Lư', opponentAvatar: '🌾👦👑',
    questionText: 'Vị anh hùng thuở nhỏ chăn trâu lấy hoa lau làm cờ tập trận, sau này lớn lên dẹp loạn 12 sứ quân thống nhất giang sơn là ai?',
    visual: '🌾 Cờ lau tập trận', options: ['Lê Đại Hành', 'Trần Hưng Đạo', 'Quang Trung', 'Đinh Bộ Lĩnh (Đinh Tiên Hoàng)'], correctAnswer: 'Đinh Bộ Lĩnh (Đinh Tiên Hoàng)',
    scaffoldHint: 'Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt tên nước là Đại Cồ Việt và đóng đô ở vùng núi non hiểm trở Hoa Lư (Ninh Bình)!',
    funFact: 'Đinh Tiên Hoàng là vị hoàng đế đầu tiên đặt nền móng cho triều đình phong kiến tập quyền của nước ta!'
  },
  {
    id: 'hg16', stage: 16, difficulty: 'medium', title: 'Chiếu dời đô Thăng Long năm 1010', opponentName: 'Rồng Vàng Bay Lên', opponentAvatar: '🐉📜',
    questionText: 'Mùa thu năm 1010, vị vua anh minh nào đã ban "Chiếu dời đô" chuyển kinh đô từ Hoa Lư về thành Đại La và đổi tên là Thăng Long?',
    visual: '🐉 Chiếu dời đô năm 1010', options: ['Vua Lý Thánh Tông', 'Vua Trần Nhân Tông', 'Vua Lý Thái Tổ (Lý Công Uẩn)', 'Vua Lê Thánh Tông'], correctAnswer: 'Vua Lý Thái Tổ (Lý Công Uẩn)',
    scaffoldHint: 'Khi thuyền vua cập bến thành Đại La, thấy rồng vàng bay lên nên đặt tên kinh thành là Thăng Long (Rồng bay lên)!',
    funFact: 'Năm 2010, nhân dân cả nước đã tưng bừng kỷ niệm Đại lễ 1000 năm Thăng Long - Hà Nội!'
  },
  {
    id: 'hg17', stage: 17, difficulty: 'medium', title: 'Nam quốc sơn hà bên sông Như Nguyệt', opponentName: 'Bài Thơ Thần Sông Cầu', opponentAvatar: '📜⚔️🛡️',
    questionText: 'Bài thơ thần "Nam quốc sơn hà" ("Sông núi nước Nam vua Nam ở...") vang lên trên phòng tuyến sông Như Nguyệt gắn liền với tên tuổi vị danh tướng nào?',
    visual: '📜 Nam quốc sơn hà Nam đế cư', options: ['Trần Hưng Đạo', 'Phạm Ngũ Lão', 'Yết Kiêu', 'Lý Thường Kiệt'], correctAnswer: 'Lý Thường Kiệt',
    scaffoldHint: 'Lý Thường Kiệt đã cho người ngâm thơ trong đền thờ ban đêm làm quân xâm lược nhà Tống khiếp vía kinh hồn!',
    funFact: '"Nam quốc sơn hà" được xem là bản Tuyên ngôn Độc lập đầu tiên khẳng định chủ quyền lãnh thổ của nước Đại Việt!'
  },
  {
    id: 'hg18', stage: 18, difficulty: 'medium', title: 'Hội nghị Diên Hồng thời Trần', opponentName: 'Tiếng Hô Đánh Diên Hồng', opponentAvatar: '🏛️✊🔥',
    questionText: 'Tại Hội nghị Diên Hồng thời nhà Trần, khi Thượng hoàng hỏi các bậc bô lão "Nên hòa hay nên đánh giặc Nguyên Mông?", các cụ bô lão đã đồng thanh hô vang điều gì?',
    visual: '✊ Vạn người hô một tiếng', options: ['HÒA!', 'ĐẦU HÀNG!', 'ĐÁNH!', 'CHẠY TRỐN!'], correctAnswer: 'ĐÁNH!',
    scaffoldHint: 'Tiếng hô "ĐÁNH!" rung chuyển điện Diên Hồng thể hiện ý chí quyết chiến bảo vệ giang sơn của toàn thể nhân dân Đại Việt!',
    funFact: 'Hội nghị Diên Hồng là biểu tượng sáng ngời cho tinh thần dân chủ và sức mạnh đại đoàn kết dân tộc!'
  },
  {
    id: 'hg19', stage: 19, difficulty: 'medium', title: 'Lá cờ thêu sáu chữ vàng', opponentName: 'Thiếu Niên Trần Quốc Toản', opponentAvatar: '👦🍊🚩',
    questionText: 'Người anh hùng thiếu niên bóp nát quả cam vì hờn căm không được vào dự bàn việc nước, sau đó tự chiêu mộ nghĩa quân với lá cờ "Phá cường địch, báo hoàng ân" là ai?',
    visual: '🚩 Phá cường địch, báo hoàng ân', options: ['Trần Quốc Toản', 'Trần Khánh Dư', 'Trần Bình Trọng', 'Trần Thủ Độ'], correctAnswer: 'Trần Quốc Toản',
    scaffoldHint: 'Hoài Văn Hầu Trần Quốc Toản tuổi nhỏ chí lớn, dũng cảm xung trận khiến quân giặc Nguyên Mông bạt vía!',
    funFact: 'Trần Quốc Toản là tấm gương sáng ngời muôn đời cho tuổi trẻ Việt Nam yêu nước nồng nàn!'
  },
  {
    id: 'hg20', stage: 20, difficulty: 'medium', title: 'Hưng Đạo Đại Vương Trần Quốc Tuấn', opponentName: 'Bình Thư Yếu Lược', opponentAvatar: '👑⚔️🌊',
    questionText: 'Vị Quốc công Tiết chế tài ba lãnh đạo quân dân nhà Trần ba lần đại thắng quân xâm lược Nguyên Mông hung hãn bậc nhất thế giới là ai?',
    visual: '⚔️ Ba lần đại thắng quân Nguyên Mông', options: ['Trần Quang Khải', 'Trần Hưng Đạo (Trần Quốc Tuấn)', 'Trần Nhật Duật', 'Trần Cảnh'], correctAnswer: 'Trần Hưng Đạo (Trần Quốc Tuấn)',
    scaffoldHint: 'Trần Hưng Đạo với tác phẩm "Hịch tướng sĩ" bất hủ được tôn vinh là một trong những vị tướng tài ba lỗi lạc nhất thế giới!',
    funFact: 'Câu nói bất hủ của ngài dâng lên vua: "Nếu Bệ hạ muốn hàng, xin hãy chém đầu thần trước đã!"'
  },
  {
    id: 'hg21', stage: 21, difficulty: 'hard', title: 'Khởi nghĩa Lam Sơn và Vua Lê Lợi', opponentName: 'Gươm Thần Thuận Thiên', opponentAvatar: '🗡️🐢👑',
    questionText: 'Cuộc khởi nghĩa Lam Sơn gian khổ kéo dài 10 năm đánh đuổi hoàn toàn quân Minh xâm lược do vị anh hùng nào lãnh đạo?',
    visual: '🗡️ Khởi nghĩa Lam Sơn', options: ['Nguyễn Trãi', 'Trần Nguyên Hãn', 'Lê Lai', 'Lê Lợi'], correctAnswer: 'Lê Lợi',
    scaffoldHint: 'Lê Lợi cùng Nguyễn Trãi viết "Bình Ngô đại cáo", lập nên triều Hậu Lê và trả lại gươm thần cho Rùa Vàng ở Hồ Gươm!',
    funFact: 'Hồ Hoàn Kiếm (Hồ Gươm) ở Hà Nội gắn liền với truyền thuyết vua Lê Lợi trả gươm báu cho Rùa Thần!'
  },
  {
    id: 'hg22', stage: 22, difficulty: 'hard', title: 'Quang Trung đại phá quân Thanh 1789', opponentName: 'Áo Vải Cờ Đào Quang Trung', opponentAvatar: '👑🐎🔥',
    questionText: 'Mùa xuân Kỷ Dậu 1789, người anh hùng áo vải cờ đào Quang Trung (Nguyễn Huệ) đã hành quân thần tốc đánh tan 29 vạn quân giặc nào tại trận Ngọc Hồi - Đống Đa?',
    visual: '🐎 Thần tốc mùa xuân Kỷ Dậu 1789', options: ['Quân Xiêm', 'Quân Thanh', 'Quân Minh', 'Quân Tống'], correctAnswer: 'Quân Thanh',
    scaffoldHint: 'Quang Trung hành quân thần tốc từ Phú Xuân ra Thăng Long, đánh tan tác quân giặc vào đúng mùng 5 Tết Kỷ Dậu!',
    funFact: 'Sau chiến thắng Đống Đa, vua Quang Trung đã gửi cành đào thắm vào Phú Xuân tặng hoàng hậu Ngọc Hân báo tin thắng trận!'
  },
  {
    id: 'hg23', stage: 23, difficulty: 'hard', title: 'Bác Hồ ra đi tìm đường cứu nước', opponentName: 'Tàu Amiral Latouche-Tréville', opponentAvatar: '🚢🇻🇳',
    questionText: 'Ngày 5 tháng 6 năm 1911, người thanh niên yêu nước Nguyễn Tất Thành (Bác Hồ) đã rời Tổ quốc ra đi tìm đường cứu nước tại địa danh nào?',
    visual: '⚓ Bến cảng Nhà Rồng (Sài Gòn)', options: ['Bến cảng Nhà Rồng (Sài Gòn)', 'Cảng Hải Phòng', 'Bến Ninh Kiều (Cần Thơ)', 'Cửa khẩu Móng Cái'], correctAnswer: 'Bến cảng Nhà Rồng (Sài Gòn)',
    scaffoldHint: 'Với đôi bàn tay trắng và lòng yêu nước nồng nàn, người thanh niên 21 tuổi đã làm phụ bếp trên con tàu buôn để vượt đại dương!',
    funFact: 'Bác Hồ đã bôn ba qua gần 30 quốc gia trên khắp thế giới trong suốt 30 năm trước khi trở về lãnh đạo cách mạng Việt Nam!'
  },
  {
    id: 'hg24', stage: 24, difficulty: 'hard', title: 'Thành lập Đảng Cộng sản Việt Nam', opponentName: 'Ngôi Sao Búa Liềm', opponentAvatar: '⭐🚩',
    questionText: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào tại Hương Cảng (Trung Quốc) dưới sự chủ trì của lãnh tụ Nguyễn Ái Quốc?',
    visual: '🚩 Mùa xuân năm 1930', options: ['Ngày 2 tháng 9 năm 1945', 'Ngày 19 tháng 5 năm 1890', 'Ngày 3 tháng 2 năm 1930', 'Ngày 30 tháng 4 năm 1975'], correctAnswer: 'Ngày 3 tháng 2 năm 1930',
    scaffoldHint: 'Sự ra đời của Đảng vào ngày 3/2/1930 là bước ngoặt vô cùng vĩ đại đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác!',
    funFact: 'Ngày 3 tháng 2 hàng năm là ngày thành lập Đảng Cộng sản Việt Nam vinh quang!'
  },
  {
    id: 'hg25', stage: 25, difficulty: 'hard', title: 'Tuyên ngôn Độc lập ngày 2/9/1945', opponentName: 'Quảng Trường Ba Đình Lịch Sử', opponentAvatar: '🏛️🎙️🇻🇳',
    questionText: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đã đọc văn kiện vĩ đại nào?',
    visual: '🎙️ Tuyên ngôn Độc lập 2/9/1945', options: ['Lời kêu gọi toàn quốc kháng chiến', 'Di chúc của Bác Hồ', 'Hịch tướng sĩ', 'Bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa'], correctAnswer: 'Bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa',
    scaffoldHint: 'Câu hỏi ấm áp của Bác: "Tôi nói đồng bào nghe rõ không?" đã khắc sâu vào trái tim hàng triệu người dân Việt Nam!',
    funFact: 'Ngày 2 tháng 9 là ngày Tết Độc lập - Quốc khánh của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam!'
  },
  {
    id: 'hg26', stage: 26, difficulty: 'hard', title: 'Điện Biên Phủ lừng lẫy năm châu 1954', opponentName: 'Hầm Tướng Đờ-cát', opponentAvatar: '🪖💣🚩',
    questionText: 'Chiến dịch lịch sử vang dội "Lừng lẫy năm châu, chấn động địa cầu" kết thúc toàn thắng vào ngày 7 tháng 5 năm 1954 là chiến dịch nào?',
    visual: '🚩 Lá cờ Quyết chiến Quyết thắng', options: ['Chiến dịch Điện Biên Phủ', 'Chiến dịch Biên giới 1950', 'Chiến dịch Tây Bắc 1952', 'Chiến dịch Hồ Chí Minh'], correctAnswer: 'Chiến dịch Điện Biên Phủ',
    scaffoldHint: 'Quân và dân ta dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp đã đào hào bao vây và cắm cờ Quyết chiến Quyết thắng lên nóc hầm Đờ-cát!',
    funFact: 'Chiến thắng Điện Biên Phủ đã cổ vũ mạnh mẽ phong trào giải phóng dân tộc của các nước thuộc địa trên toàn thế giới!'
  },
  {
    id: 'hg27', stage: 27, difficulty: 'hard', title: 'Đường Trường Sơn huyền thoại', opponentName: 'Đoàn Xe Không Kính', opponentAvatar: '🚚🏔️🌿',
    questionText: 'Con đường huyết mạch xẻ dọc Trường Sơn vận chuyển quân lương chi viện cho chiến trường miền Nam mang tên Bác là đường gì?',
    visual: '🚚 Đường mòn Hồ Chí Minh', options: ['Quốc lộ 1A', 'Đường Hồ Chí Minh trên biển', 'Đường Trường Sơn (Đường mòn Hồ Chí Minh)', 'Đường cao tốc Bắc Nam'], correctAnswer: 'Đường Trường Sơn (Đường mòn Hồ Chí Minh)',
    scaffoldHint: '"Xẻ dọc Trường Sơn đi cứu nước / Mà lòng phơi phới dậy tương lai" (nhà thơ Tố Hữu)!',
    funFact: 'Đường Trường Sơn là biểu tượng bất diệt cho ý chí kiên cường và lòng quả cảm của tuổi trẻ Việt Nam!'
  },
  {
    id: 'hg28', stage: 28, difficulty: 'hard', title: 'Đại thắng Mùa Xuân ngày 30/4/1975', opponentName: 'Xe Tăng Húc Đổ Cổng Dinh Độc Lập', opponentAvatar: '🚜🚩🕊️',
    questionText: 'Ngày giải phóng hoàn toàn miền Nam, non sông thu về một mối, đất nước trọn niềm vui thống nhất là ngày nào?',
    visual: '🚩 Xe tăng 390 tiến vào Dinh Độc Lập', options: ['Ngày 1 tháng 5 năm 1975', 'Ngày 30 tháng 4 năm 1975', 'Ngày 2 tháng 9 năm 1975', 'Ngày 19 tháng 8 năm 1945'], correctAnswer: 'Ngày 30 tháng 4 năm 1975',
    scaffoldHint: 'Đúng 11 giờ 30 phút ngày 30/4/1975, lá cờ Mặt trận Dân tộc Giải phóng đã tung bay trên nóc Dinh Độc Lập!',
    funFact: 'Ngày 30/4 là Ngày Giải phóng miền Nam, Thống nhất đất nước - ngày hội non sông toàn thắng!'
  },
  {
    id: 'hg29', stage: 29, difficulty: 'boss', title: 'Di sản thế giới Vịnh Hạ Long', opponentName: 'Kỳ Quan Rồng Hạ Cánh', opponentAvatar: '🐉🏝️💎',
    questionText: 'Di sản thiên nhiên thế giới tại tỉnh Quảng Ninh nổi tiếng với gần 2.000 hòn đảo đá vôi kỳ vĩ trên làn nước ngọc bích là:',
    visual: '🏝️ Di sản thiên nhiên thế giới', options: ['Vịnh Hạ Long', 'Vườn quốc gia Phong Nha - Kẻ Bàng', 'Cố đô Huế', 'Phố cổ Hội An'], correctAnswer: 'Vịnh Hạ Long',
    scaffoldHint: 'Vịnh Hạ Long (nơi rồng đáp xuống) hai lần được UNESCO công nhận là Di sản thiên nhiên thế giới về cảnh quan và địa chất!',
    funFact: 'Vịnh Hạ Long là một trong 7 Kỳ quan thiên nhiên mới của thế giới được bạn bè năm châu ngưỡng mộ!'
  },
  {
    id: 'hg30', stage: 30, difficulty: 'boss', title: 'Trống Đồng & Tinh Hoa Việt Nam (TRÙM SỬ KÝ)', opponentName: 'Hồn Thiêng Sông Núi Việt Nam', opponentAvatar: '👑🇻🇳✨',
    questionText: 'Hình ảnh đàn chim Lạc bay quanh ngôi sao Mặt Trời trên mặt Trống đồng Đông Sơn thể hiện điều gì thiêng liêng nhất của dân tộc ta?',
    visual: '🥁 Trống đồng Đông Sơn bất diệt', options: ['Chỉ là hình vẽ trang trí ngẫu nhiên', 'Một trò chơi cổ xưa', 'Khát vọng vươn lên, tinh thần yêu chuộng hòa bình và sức sống trường tồn ngàn đời của non sông Việt Nam', 'Hình ảnh các loài động vật hoang dã'], correctAnswer: 'Khát vọng vươn lên, tinh thần yêu chuộng hòa bình và sức sống trường tồn ngàn đời của non sông Việt Nam',
    scaffoldHint: 'Ngôi sao mặt trời soi sáng sự sống, đàn chim Lạc sải cánh bay cao chở che cho nền văn minh lúa nước trường tồn muôn thuở!',
    funFact: 'Chúc mừng bé đã trở thành Nhà Thám Hiểm Non Sông & Sử Ký Toàn Năng! Tự hào là người con đất Việt tài năng!'
  }
];

export const LESSONS = {
  math: mathLessons,
  vietnamese: vietnameseLessons,
  english: englishLessons,
  science: scienceLessons,
  ethics: ethicsLessons,
  informatics_tech: informaticsTechLessons,
  arts_music: artsMusicLessons,
  life_skills: lifeSkillsLessons,
  math_adv: mathAdvLessons,
  vietnamese_adv: vietnameseAdvLessons,
  english_adv: englishAdvLessons,
  science_adv: scienceAdvLessons,
  history_geo: historyGeoLessons,
  informatics_adv: informaticsAdvLessons,
  technology_adv: technologyAdvLessons,
  ethics_adv: ethicsAdvLessons,
  arts_music_adv: artsMusicAdvLessons
};
