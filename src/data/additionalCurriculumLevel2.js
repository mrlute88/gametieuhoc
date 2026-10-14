// Ngân hàng câu đố bổ sung Mức 2 (Khối 3 - 4 - 5) - Chuẩn GDPT 2018
// Gồm 4 môn: Tin Học Thuật Toán (30 ải), Công Nghệ Sáng Chế (30 ải), Đạo Đức & Công Dân (30 ải), Âm Nhạc & Mĩ Thuật Nâng Cao (30 ải)
// Tổng cộng: 120 ải thử thách chất lượng cao cho Mức 2

// ==========================================
// 1. THÀNH PHỐ TIN HỌC & THUẬT TOÁN (30 ẢI)
// ==========================================
export const informaticsAdvLessons = [
  {
    id: 'it_adv1', stage: 1, difficulty: 'easy', title: 'Thông Tin & Dữ Liệu Số', opponentName: 'Chip Vi Xử Lý Siêu Tốc', opponentAvatar: '💽',
    questionText: 'Trong tin học, thông tin được thu nhận qua các giác quan của con người có thể biểu diễn dưới những dạng cơ bản nào?',
    visual: '📊 Văn bản, hình ảnh và âm thanh sống động', options: ['Dạng văn bản (chữ, số), dạng hình ảnh, dạng âm thanh', 'Chỉ có dạng số đếm', 'Chỉ có dạng hình vẽ tĩnh', 'Chỉ có dạng giọng nói'], correctAnswer: 'Dạng văn bản (chữ, số), dạng hình ảnh, dạng âm thanh',
    scaffoldHint: 'Máy tính xử lý thông tin dưới 3 dạng phổ biến nhất: văn bản (sách báo), hình ảnh (ảnh chụp, video) và âm thanh (bài hát, tiếng nói)!',
    funFact: 'Trong máy tính, mọi hình ảnh, âm thanh và văn bản đều được chuyển đổi thành dãy bit chỉ gồm hai chữ số 0 và 1 kỳ diệu!'
  },
  {
    id: 'it_adv2', stage: 2, difficulty: 'easy', title: 'Mạng Toàn Cầu Internet', opponentName: 'Vệ Tinh Kết Nối Toàn Cầu', opponentAvatar: '🛰️',
    questionText: 'Mạng Internet là gì và mang lại lợi ích to lớn nào cho việc học tập của học sinh?',
    visual: '🌐 Mạng lưới kết nối toàn cầu', options: ['Mạng kết nối hàng triệu máy tính khắp hành tinh, giúp tra cứu tài liệu học tập và kết nối tri thức', 'Một trò chơi điện tử đơn thuần', 'Một chiếc máy tính duy nhất đặt ở Mỹ', 'Công cụ chỉ để xem phim giải trí'], correctAnswer: 'Mạng kết nối hàng triệu máy tính khắp hành tinh, giúp tra cứu tài liệu học tập và kết nối tri thức',
    scaffoldHint: 'Internet là kho tàng tri thức khổng lồ của nhân loại, mở ra cánh cửa học tập không giới hạn cho mọi học sinh!',
    funFact: 'Hiện nay có hơn 5 tỷ người trên khắp địa cầu đang sử dụng Internet mỗi ngày để học tập và làm việc!'
  },
  {
    id: 'it_adv3', stage: 3, difficulty: 'easy', title: 'Bảo Mật An Toàn Số', opponentName: 'Khiên Lửa Tường Lửa Cyber', opponentAvatar: '🛡️',
    questionText: 'Quy tắc an toàn mạng nào học sinh TUYỆT ĐỐI PHẢI TUÂN THỦ khi sử dụng Internet?',
    visual: '🔒 Ổ khóa mật khẩu bảo mật', options: ['Không chia sẻ mật khẩu, địa chỉ nhà riêng, số điện thoại hay trường học cho người lạ trên mạng', 'Công khai mật khẩu cho cả lớp biết', 'Hẹn gặp riêng người lạ quen qua mạng xã hội', 'Bấm vào mọi đường link trúng thưởng lạ'], correctAnswer: 'Không chia sẻ mật khẩu, địa chỉ nhà riêng, số điện thoại hay trường học cho người lạ trên mạng',
    scaffoldHint: 'Thông tin cá nhân trên mạng nếu bị kẻ xấu lợi dụng có thể gây nguy hiểm cho gia đình em. Hãy giữ kín như chìa khóa nhà!',
    funFact: 'Mật khẩu mạnh nên có ít nhất 8 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (ví dụ: HocTot@2026)!'
  },
  {
    id: 'it_adv4', stage: 4, difficulty: 'easy', title: 'Bản Quyền & Văn Hóa Số', opponentName: 'Thẩm Phán Không Gian Mạng', opponentAvatar: '⚖️',
    questionText: 'Khi lấy hình ảnh, bài văn hoặc đoạn nhạc của người khác trên mạng Internet để làm bài thuyết trình, em cần làm gì?',
    visual: '©️ Bản quyền quyền tác giả văn minh', options: ['Ghi rõ nguồn tác giả và xin phép sử dụng nếu có thể', 'Tự nhận là tác phẩm do chính mình vẽ và sáng tác', 'Xóa tên tác giả gốc để không ai biết', 'Đem bán cho người khác lấy tiền'], correctAnswer: 'Ghi rõ nguồn tác giả và xin phép sử dụng nếu có thể',
    scaffoldHint: 'Tôn trọng quyền tác giả là hành vi văn minh và tuân thủ pháp luật sở hữu trí tuệ trong thời đại số!',
    funFact: 'Công dân số văn minh luôn biết nói lời cảm ơn và trích dẫn nguồn tài liệu trung thực!'
  },
  {
    id: 'it_adv5', stage: 5, difficulty: 'easy', title: 'Kỹ Năng Tìm Kiếm Google', opponentName: 'Kính Lúp Siêu Dò Tìm', opponentAvatar: '🔍',
    questionText: 'Để tìm thông tin về "di tích Cố đô Huế" nhanh và chính xác nhất trên công cụ tìm kiếm, từ khóa nào tối ưu nhất?',
    visual: '🔎 Thanh tìm kiếm thông minh', options: ['"Cố đô Huế" hoặc "di tích lịch sử Cố đô Huế"', 'Tìm cho em xem cái thành phố ở miền Trung có vua ở hồi xưa', 'Một nơi rất đẹp có sông Hương hoa sen', 'Bấm chữ Huế chung chung'], correctAnswer: '"Cố đô Huế" hoặc "di tích lịch sử Cố đô Huế"',
    scaffoldHint: 'Từ khóa tìm kiếm cần ngắn gọn, cô đọng, chứa đúng danh từ trọng tâm của vấn đề cần tìm!',
    funFact: 'Đặt từ khóa trong dấu ngoặc kép "" giúp công cụ tìm kiếm lọc ra chính xác cụm từ nguyên vẹn mà em yêu cầu!'
  },
  {
    id: 'it_adv6', stage: 6, difficulty: 'easy', title: 'Sơ Đồ Tư Duy Mindmap', opponentName: 'Bộ Não Sáng Tạo Toàn Năng', opponentAvatar: '🧠',
    questionText: 'Sơ đồ tư duy (Mindmap) giúp học sinh học tập hiệu quả nhờ cơ chế nào?',
    visual: '🌳 Cây tri thức tỏa nhánh sum suê', options: ['Dùng từ khóa, màu sắc và hình ảnh kết nối theo các nhánh như tế bào não giúp ghi nhớ sâu', 'Chỉ chép lại nguyên văn từng câu chữ trong sách', 'Chỉ vẽ hình không có chữ', 'Làm cho bài học dài dòng hơn'], correctAnswer: 'Dùng từ khóa, màu sắc và hình ảnh kết nối theo các nhánh như tế bào não giúp ghi nhớ sâu',
    scaffoldHint: 'Mindmap do Tony Buzan sáng chế, mô phỏng cách các nơ-ron não bộ liên kết thông tin bằng hình ảnh và màu sắc sinh động!',
    funFact: 'Một sơ đồ tư duy tóm tắt cả một chương sách có thể giúp em ôn tập chỉ trong 5 phút trước giờ kiểm tra!'
  },
  {
    id: 'it_adv7', stage: 7, difficulty: 'easy', title: 'Khái Niệm Thuật Toán', opponentName: 'Kỹ Sư Lập Trình logic', opponentAvatar: '⚙️',
    questionText: 'Thuật toán trong tin học được định nghĩa chính xác là gì?',
    visual: '📝 Từng bước hướng dẫn rõ ràng', options: ['Dãy các chỉ dẫn rõ ràng, tuần tự từng bước để giải quyết một nhiệm vụ từ dữ liệu đầu vào thành kết quả', 'Một linh kiện điện tử trong máy tính', 'Một loại virus máy tính', 'Trò chơi giải trí trên điện thoại'], correctAnswer: 'Dãy các chỉ dẫn rõ ràng, tuần tự từng bước để giải quyết một nhiệm vụ từ dữ liệu đầu vào thành kết quả',
    scaffoldHint: 'Mọi công thức nấu ăn, hướng dẫn lắp ráp Lego hay giải toán đều là một dạng thuật toán từng bước!',
    funFact: 'Từ "Algorithm" (Thuật toán) bắt nguồn từ tên nhà toán học Ba Tư vĩ đại Al-Khwarizmi ở thế kỷ thứ 9!'
  },
  {
    id: 'it_adv8', stage: 8, difficulty: 'easy', title: 'Cấu Trúc Lặp Thuật Toán', opponentName: 'Vòng Xoay Bất Tận', opponentAvatar: '🔄',
    questionText: 'Để chú rùa vẽ một hình vuông (gồm 4 cạnh bằng nhau và 4 góc vuông 90 độ), lệnh lặp nào tối ưu nhất?',
    visual: '🟩 Hình vuông vẽ từ chuyển động', options: ['Lặp lại 4 lần: [Đi thẳng 100 bước, Quay phải 90 độ]', 'Lặp lại 100 lần không ngừng', 'Chỉ đi thẳng 1 lần 400 bước', 'Lặp lại 3 lần góc 60 độ'], correctAnswer: 'Lặp lại 4 lần: [Đi thẳng 100 bước, Quay phải 90 độ]',
    scaffoldHint: 'Hình vuông có 4 cạnh và 4 góc quay, do đó ta lặp lại đúng 4 lần khối lệnh di chuyển và xoay góc!',
    funFact: 'Cấu trúc lặp giúp các lập trình viên rút ngắn hàng nghìn dòng mã lệnh trùng lặp chỉ với một khối lệnh duy nhất!'
  },
  {
    id: 'it_adv9', stage: 9, difficulty: 'medium', title: 'Khối Lệnh Sự Kiện Scratch', opponentName: 'Mèo Vàng Lập Trình Scratch', opponentAvatar: '🐱💻',
    questionText: 'Trong ngôn ngữ Scratch, khối lệnh màu vàng "Khi bấm vào lá cờ xanh" thuộc nhóm lệnh nào?',
    visual: '🚩 Lá cờ xanh bắt đầu chương trình', options: ['Nhóm lệnh Sự kiện (Events) - Dùng để kích hoạt chương trình bắt đầu chạy', 'Nhóm lệnh Chuyển động (Motion)', 'Nhóm lệnh Cảm biến (Sensing)', 'Nhóm lệnh Âm thanh (Sound)'], correctAnswer: 'Nhóm lệnh Sự kiện (Events) - Dùng để kích hoạt chương trình bắt đầu chạy',
    scaffoldHint: 'Sự kiện là ngòi nổ phát động: khi người chơi bấm vào lá cờ xanh, toàn bộ các khối lệnh gắn bên dưới sẽ bắt đầu thực thi!',
    funFact: 'Scratch được phát triển bởi viện đại học công nghệ hàng đầu thế giới MIT, giúp hàng chục triệu trẻ em trở thành nhà sáng tạo game!'
  },
  {
    id: 'it_adv10', stage: 10, difficulty: 'medium', title: 'Trình Duyệt Web & Địa Chỉ URL', opponentName: 'Quả Cầu World Wide Web', opponentAvatar: '🌐',
    questionText: 'Phần mềm nào sau đây là trình duyệt web giúp em truy cập vào các trang thông tin trên mạng Internet?',
    visual: '💻 Các biểu tượng Chrome, Edge, Firefox', options: ['Google Chrome, Microsoft Edge, Cốc Cốc', 'Phần mềm Paint vẽ tranh', 'Phần mềm Calculator tính nhẩm', 'Bộ gõ Unikey'], correctAnswer: 'Google Chrome, Microsoft Edge, Cốc Cốc',
    scaffoldHint: 'Trình duyệt web dịch các mã lệnh HTML thành các trang web đầy đủ hình ảnh, video và văn bản sống động!',
    funFact: 'Trang web đầu tiên trên thế giới được nhà khoa học Tim Berners-Lee tạo ra vào năm 1991 tại viện nghiên cứu CERN!'
  },
  {
    id: 'it_adv11', stage: 11, difficulty: 'medium', title: 'Thư Điện Tử (Email) Học Đường', opponentName: 'Cánh Thư Điện Tử', opponentAvatar: '📧',
    questionText: 'Trong địa chỉ thư điện tử "hocsinh@truongtieuhoc.edu.vn", ký hiệu đặc trưng bắt buộc phải có là gì?',
    visual: '✉️ Ký hiệu @ kết nối thư tín', options: ['Ký hiệu @ (A còng)', 'Dấu chấm than !', 'Dấu hoa thị *', 'Dấu thăng #'], correctAnswer: 'Ký hiệu @ (A còng)',
    scaffoldHint: 'Ký hiệu @ dùng để phân tách tên người dùng (hocsinh) và tên miền của dịch vụ thư tín (truongtieuhoc.edu.vn)!',
    funFact: 'Bức thư điện tử đầu tiên được gửi vào năm 1971 bởi kỹ sư Ray Tomlinson, ông chính là người chọn ký hiệu @ lịch sử!'
  },
  {
    id: 'it_adv12', stage: 12, difficulty: 'medium', title: 'Đơn Vị Đo Dung Lượng Byte', opponentName: 'Kho Chứa Dữ Liệu Byte', opponentAvatar: '📦',
    questionText: 'Đơn vị đo dung lượng bộ nhớ nào sau đây tương đương với 1.024 Kilobyte (KB)?',
    visual: '💽 Bậc thang dung lượng dữ liệu', options: ['1 Megabyte (MB)', '1 Byte (B)', '1 Bit', '1 Gigabyte (GB)'], correctAnswer: '1 Megabyte (MB)',
    scaffoldHint: 'Thứ tự từ nhỏ đến lớn: Bit ➔ Byte ➔ KB (Kilobyte) ➔ MB (Megabyte) ➔ GB (Gigabyte) ➔ TB (Terabyte)! 1 MB = 1024 KB!',
    funFact: 'Một bức ảnh chụp điện thoại chất lượng cao ngày nay thường có dung lượng từ 3 đến 5 MB!'
  },
  {
    id: 'it_adv13', stage: 13, difficulty: 'medium', title: 'Phần Cứng & Phần Mềm', opponentName: 'Bộ Đôi Hoàn Hảo PC', opponentAvatar: '🖥️💿',
    questionText: 'Khác với Phần cứng (có thể sờ chạm được), Phần mềm máy tính (Software) là gì?',
    visual: '💻 Hệ điều hành và các ứng dụng thông minh', options: ['Các chương trình và câu lệnh hướng dẫn phần cứng hoạt động', 'Vỏ case máy tính bằng nhôm', 'Bàn di chuột bằng cao su', 'Dây cáp nguồn điện'], correctAnswer: 'Các chương trình và câu lệnh hướng dẫn phần cứng hoạt động',
    scaffoldHint: 'Phần cứng là thể xác (màn hình, chuột, bàn phím), phần mềm là linh hồn và trí tuệ (Windows, Word, game học tập)!',
    funFact: 'Nếu không có phần mềm, chiếc máy tính hiện đại nhất thế giới cũng chỉ là một khối kim loại bất động!'
  },
  {
    id: 'it_adv14', stage: 14, difficulty: 'medium', title: 'Tệp Tin & Thư Mục (Folder)', opponentName: 'Ngăn Kéo Thư Mục Vàng', opponentAvatar: '📁',
    questionText: 'Trong hệ điều hành máy tính, Thư mục (Folder) có công dụng cốt lõi nào?',
    visual: '📂 Cây thư mục ngăn nắp khoa học', options: ['Chứa và sắp xếp các tệp tin bài học ngăn nắp, dễ tìm kiếm', 'Xóa vĩnh viễn dữ liệu máy tính', 'Chặn sóng wifi internet', 'Thay thế màn hình máy tính'], correctAnswer: 'Chứa và sắp xếp các tệp tin bài học ngăn nắp, dễ tìm kiếm',
    scaffoldHint: 'Thư mục giống như các ngăn kéo trong chiếc tủ sách: chia ngăn Toán, Tiếng Việt, Khoa học để sách không bị lẫn lộn!',
    funFact: 'Tổ chức cây thư mục khoa học giúp các chuyên gia máy tính tiết kiệm hàng trăm giờ tìm kiếm tài liệu mỗi năm!'
  },
  {
    id: 'it_adv15', stage: 15, difficulty: 'medium', title: 'Cấu Trúc Rẽ Nhánh (If - Else)', opponentName: 'Ngã Ba Đường Logic', opponentAvatar: '🔀',
    questionText: 'Mệnh đề: "NẾU trời mưa THÌ mang áo mưa, NẾU KHÔNG THÌ đội mũ che nắng" thể hiện cấu trúc nào trong thuật toán?',
    visual: '☔ Quyết định theo điều kiện thực tế', options: ['Cấu trúc rẽ nhánh điều kiện (If - Else)', 'Cấu trúc lặp vô tận', 'Cấu trúc tuần tự thẳng hàng', 'Cấu trúc hỗn loạn'], correctAnswer: 'Cấu trúc rẽ nhánh điều kiện (If - Else)',
    scaffoldHint: 'Cấu trúc rẽ nhánh kiểm tra một điều kiện (Đúng hoặc Sai) để quyết định hành động tương ứng phù hợp!',
    funFact: 'Cấu trúc rẽ nhánh là trái tim của mọi trí tuệ nhân tạo: giúp máy móc tự động đưa ra quyết định thông minh như con người!'
  },
  {
    id: 'it_adv16', stage: 16, difficulty: 'hard', title: 'Phòng Chống Virus & Mã Độc', opponentName: 'Bác Sĩ Diệt Virus Cyber', opponentAvatar: '🛡️🦠',
    questionText: 'Để bảo vệ máy tính khỏi virus phá hoại và mã độc tống tiền, hành động nào sau đây là đúng đắn?',
    visual: '💻 Phần mềm quét virus bảo vệ máy', options: ['Cài đặt phần mềm diệt virus bản quyền và không bấm vào đường link lạ có nguy cơ lừa đảo', 'Tải và cài đặt mọi phần mềm không rõ nguồn gốc', 'Tắt tường lửa bảo vệ máy tính', 'Dùng chung USB lạ không quét virus'], correctAnswer: 'Cài đặt phần mềm diệt virus bản quyền và không bấm vào đường link lạ có nguy cơ lừa đảo',
    scaffoldHint: 'Virus máy tính là các đoạn mã xấu lây lan qua Internet hoặc USB; phần mềm diệt virus giống như kháng thể bảo vệ máy tính!',
    funFact: 'Virus máy tính đầu tiên trên thế giới mang tên "Creeper" xuất hiện vào năm 1971 trên mạng tiền thân ARPANET!'
  },
  {
    id: 'it_adv17', stage: 17, difficulty: 'hard', title: 'Biến Số Trong Lập Trình (Variable)', opponentName: 'Hộp Chứa Biến Số', opponentAvatar: '📦🔢',
    questionText: 'Trong trò chơi điện tử, nơi lưu trữ và liên tục thay đổi điểm số của người chơi (Score) được gọi là gì trong lập trình?',
    visual: '🏆 Điểm số tăng dần khi ghi bàn', options: ['Biến số (Variable) - Vùng nhớ lưu giá trị có thể thay đổi', 'Hằng số cố định bất biến', 'Khối lệnh âm thanh', 'Hình nền sân khấu'], correctAnswer: 'Biến số (Variable) - Vùng nhớ lưu giá trị có thể thay đổi',
    scaffoldHint: 'Biến số giống như chiếc hộp có tên (ví dụ: Điểm Số); mỗi khi trả lời đúng, giá trị trong chiếc hộp được cộng thêm điểm!',
    funFact: 'Nhờ có biến số, máy tính có thể ghi nhớ máu của nhân vật, thời gian đếm ngược và cấp độ của người chơi!'
  },
  {
    id: 'it_adv18', stage: 18, difficulty: 'hard', title: 'Soạn Thảo Văn Bản Microsoft Word', opponentName: 'Trang Giấy Word Xanh', opponentAvatar: '📝',
    questionText: 'Tổ hợp phím tắt kinh điển Ctrl + C và Ctrl + V trong soạn thảo văn bản dùng để làm gì?',
    visual: '⌨️ Phím tắt sao chép và dán nhanh', options: ['Ctrl + C: Sao chép (Copy) và Ctrl + V: Dán (Paste)', 'Ctrl + C: Đóng máy và Ctrl + V: Mở máy', 'Ctrl + C: Xóa chữ và Ctrl + V: Phóng to', 'Ctrl + C: In tài liệu'], correctAnswer: 'Ctrl + C: Sao chép (Copy) và Ctrl + V: Dán (Paste)',
    scaffoldHint: 'Nhớ phím tắt: C = Copy (Sao chép), V giống mũi tên cắm xuống = Paste (Dán tài liệu ra trang mới)!',
    funFact: 'Phím tắt Ctrl + C và Ctrl + V do nhà khoa học máy tính Larry Tesler phát minh đã thay đổi năng suất làm việc của toàn nhân loại!'
  },
  {
    id: 'it_adv19', stage: 19, difficulty: 'hard', title: 'Bộ Gõ Tiếng Việt Telex', opponentName: 'Bảng Mã Unikey Tiếng Việt', opponentAvatar: '🇻🇳⌨️',
    questionText: 'Theo kiểu gõ Telex phổ biến nhất Việt Nam, để gõ được chữ "Ê", em gõ liên tiếp hai phím nào?',
    visual: '🔤 Quy tắc gõ dấu tiếng Việt chuẩn', options: ['Gõ hai chữ "e" liên tiếp (ee = ê)', 'Gõ chữ e và số 6', 'Gõ chữ e và chữ s', 'Gõ chữ e và chữ w'], correctAnswer: 'Gõ hai chữ "e" liên tiếp (ee = ê)',
    scaffoldHint: 'Quy tắc Telex: aa = â, aw = ă, oo = ô, ow = ơ, ee = ê, uw = ư, dd = đ; s = sắc, f = huyền, r = hỏi, x = ngã, j = nặng!',
    funFact: 'Bộ gõ Unikey của kỹ sư Phan Anh Dũng là phần mềm nguồn mở miễn phí gắn bó với hơn 90 triệu người dân Việt Nam!'
  },
  {
    id: 'it_adv20', stage: 20, difficulty: 'hard', title: 'Trình Chiếu PowerPoint Sinh Động', opponentName: 'Trang Chiếu Slide Sắc Màu', opponentAvatar: '📽️',
    questionText: 'Phần mềm trình chiếu PowerPoint giúp học sinh tạo ra bài thuyết trình hấp dẫn nhờ yếu tố nào?',
    visual: '📊 Bài thuyết trình đa phương tiện', options: ['Kết hợp văn bản cô đọng, hình ảnh minh họa, video và hiệu ứng chuyển động sinh động', 'Chỉ chứa toàn chữ dài kín màn hình', 'Không chèn được hình ảnh', 'Chỉ dùng để nghe nhạc'], correctAnswer: 'Kết hợp văn bản cô đọng, hình ảnh minh họa, video và hiệu ứng chuyển động sinh động',
    scaffoldHint: 'Một trang trình chiếu tốt tuân thủ quy tắc ít chữ, nhiều hình ảnh trực quan giúp người nghe dễ hiểu và nhớ lâu!',
    funFact: 'Kỹ năng thuyết trình trước đám đông kết hợp PowerPoint là một trong những kỹ năng thế kỷ 21 quan trọng nhất!'
  },
  {
    id: 'it_adv21', stage: 21, difficulty: 'hard', title: 'Khái Niệm Bảng Tính Excel', opponentName: 'Trang Tính Xanh Lá', opponentAvatar: '📈',
    questionText: 'Trong phần mềm bảng tính Excel, giao điểm giữa một Hàng (đánh số 1, 2, 3...) và một Cột (chữ cái A, B, C...) được gọi là gì?',
    visual: '📊 Ô tính chứa dữ liệu số', options: ['Ô tính (Cell) - Ví dụ ô A1, B5', 'Một bức tranh', 'Một trang web', 'Một đoạn văn'], correctAnswer: 'Ô tính (Cell) - Ví dụ ô A1, B5',
    scaffoldHint: 'Ô tính là đơn vị nhỏ nhất để nhập số liệu và tính toán công thức (như tính tổng SUM, tính trung bình AVERAGE)!',
    funFact: 'Excel có thể tự động tính toán tổng hàng triệu con số chỉ trong một cái chớp mắt chính xác tuyệt đối!'
  },
  {
    id: 'it_adv22', stage: 22, difficulty: 'hard', title: 'Tọa Độ Sân Khấu Trong Scratch (X, Y)', opponentName: 'Trục Tọa Độ Đồ Họa', opponentAvatar: '📐',
    questionText: 'Trên sân khấu Scratch, nhân vật đứng chính giữa trung tâm màn hình có tọa độ (x, y) là bao nhiêu?',
    visual: '🎯 Tâm điểm sân khấu (0, 0)', options: ['x = 0, y = 0', 'x = 100, y = 100', 'x = 240, y = 180', 'x = -240, y = -180'], correctAnswer: 'x = 0, y = 0',
    scaffoldHint: 'Tâm sân khấu là (0, 0); trục x nằm ngang (từ -240 sang phải +240); trục y thẳng đứng (từ -180 lên trên +180)!',
    funFact: 'Hệ tọa độ Descartes vuông góc này được áp dụng trong mọi trò chơi 2D và 3D trên thế giới!'
  },
  {
    id: 'it_adv23', stage: 23, difficulty: 'hard', title: 'Điện Toán Đám Mây (Cloud Computing)', opponentName: 'Đám Mây Lưu Trữ Vô Tận', opponentAvatar: '☁️💾',
    questionText: 'Lưu trữ tệp tin trên "Đám mây" (như Google Drive, OneDrive) mang lại ưu điểm vượt trội nào?',
    visual: '🌐 Dữ liệu đồng bộ mọi thiết bị', options: ['Dữ liệu được lưu trên mạng an toàn, truy cập học tập từ bất kỳ máy tính hay điện thoại nào có Internet', 'Chỉ mở được trên một chiếc máy tính ở nhà', 'Dễ bị mưa ướt làm hỏng dữ liệu', 'Không thể chia sẻ cho ai'], correctAnswer: 'Dữ liệu được lưu trên mạng an toàn, truy cập học tập từ bất kỳ máy tính hay điện thoại nào có Internet',
    scaffoldHint: 'Điện toán đám mây giải phóng người dùng khỏi nỗi lo quên USB hay hỏng ổ cứng máy tính cá nhân!',
    funFact: 'Các "đám mây" thực chất là những trung tâm dữ liệu khổng lồ chứa hàng vạn máy chủ cực mạnh đặt khắp các châu lục!'
  },
  {
    id: 'it_adv24', stage: 24, difficulty: 'hard', title: 'Lỗi Lập Trình & Sửa Lỗi (Bug & Debug)', opponentName: 'Chú Bọ Sâu Róm Bug', opponentAvatar: '🐛',
    questionText: 'Trong lập trình, khi chương trình chạy sai kết quả hoặc bị đứng hình, hành động tìm và sửa lỗi được gọi là gì?',
    visual: '🔍 Kính lúp săn tìm lỗi bọ', options: ['Gỡ lỗi (Debug)', 'Tải lại hệ điều hành', 'Đập vỡ bàn phím', 'Tắt màn hình đi ngủ'], correctAnswer: 'Gỡ lỗi (Debug)',
    scaffoldHint: 'Từ "Bug" (con bọ) bắt nguồn từ năm 1947 khi một con bướm đêm mắc kẹt trong rơ-le máy tính làm máy bị chập mạch!',
    funFact: 'Kỹ năng gỡ lỗi (Debugging) rèn luyện cho các nhà khoa học tính kiên trì, tỉ mỉ và tư duy phản biện sắc bén!'
  },
  {
    id: 'it_adv25', stage: 25, difficulty: 'hard', title: 'Nhận Diện Tin Giả Trên Mạng (Fake News)', opponentName: 'Tấm Gương Sự Thật', opponentAvatar: '🪞',
    questionText: 'Khi đọc được một tin giật gân, giật tít kỳ lạ trên mạng xã hội, cách kiểm chứng thông tin thông minh nhất là gì?',
    visual: '📰 Nguồn báo chí chính thống uy tín', options: ['Tra cứu lại trên các trang báo điện tử chính thống của Nhà nước hoặc hỏi thầy cô, cha mẹ xác thực', 'Vội vàng chia sẻ ngay cho cả lớp cùng xem', 'Tin tưởng tuyệt đối 100%', 'Bình luận chửi bới theo đám đông'], correctAnswer: 'Tra cứu lại trên các trang báo điện tử chính thống của Nhà nước hoặc hỏi thầy cô, cha mẹ xác thực',
    scaffoldHint: 'Tin giả thường giật gân, kích động cảm xúc để câu lượt xem (view); người thông minh luôn biết kiểm chứng nguồn tin uy tín!',
    funFact: 'Quy tắc "Dừng lại - Kiểm tra nguồn tin - Hỏi người lớn" là vũ khí miễn dịch số giúp em không bị kẻ xấu dắt mũi!'
  },
  {
    id: 'it_adv26', stage: 26, difficulty: 'hard', title: 'Cảm Biến Trong Robot Tự Hành', opponentName: 'Mắt Thần Cảm Biến Siêu Âm', opponentAvatar: '📡',
    questionText: 'Cảm biến siêu âm gắn trên đầu robot tự hành hoạt động dựa trên nguyên lý tương tự như loài động vật nào?',
    visual: '🦇 Chú dơi bay lượn định vị trong đêm', options: ['Loài dơi (phát sóng siêu âm và thu sóng dội lại để né vật cản)', 'Loài ốc sên bò chậm chạp', 'Loài giun đất trong lòng đất', 'Loài sâu bướm'], correctAnswer: 'Loài dơi (phát sóng siêu âm và thu sóng dội lại để né vật cản)',
    scaffoldHint: 'Dơi phát ra sóng âm thanh tần số cao không nghe thấy được, sóng chạm vật cản dội lại giúp dơi định vị đường bay chính xác!',
    funFact: 'Xe tự lái hiện đại ngày nay sử dụng tổ hợp cảm biến siêu âm, radar và camera AI để tự động dừng lại khi có người băng qua đường!'
  },
  {
    id: 'it_adv27', stage: 27, difficulty: 'hard', title: 'Thuật Toán Tìm Kiếm Nhị Phân', opponentName: 'Cuốn Từ Điển Dày Cộp', opponentAvatar: '📖🔍',
    questionText: 'Để tìm từ "Hoa" trong cuốn từ điển đã xếp theo bảng chữ cái A-Z, mở ngay giữa cuốn từ điển rồi loại bỏ nửa không chứa từ gọi là gì?',
    visual: '⚖️ Chia đôi cuốn sách tìm kiếm thần tốc', options: ['Thuật toán tìm kiếm nhị phân (chia đôi)', 'Tìm kiếm tuần tự lật từng trang từ trang 1', 'Đoán mò ngẫu nhiên', 'Lật ngược từ trang cuối lên'], correctAnswer: 'Thuật toán tìm kiếm nhị phân (chia đôi)',
    scaffoldHint: 'Tìm kiếm nhị phân chia đôi danh sách sau mỗi lần so sánh; trong 1.000 trang từ điển chỉ cần tối đa 10 lần lật là tìm thấy!',
    funFact: 'Tìm kiếm nhị phân là một trong những thuật toán kinh điển giúp máy chủ Google tìm kiếm hàng triệu tài liệu trong chớp mắt!'
  },
  {
    id: 'it_adv28', stage: 28, difficulty: 'hard', title: 'Âm Thanh Kỹ Thuật Số & Bản Thu', opponentName: 'Micro Thu Âm Phòng Thu', opponentAvatar: '🎙️',
    questionText: 'Khi ghi âm giọng nói vào máy tính làm bài thuyết trình, thiết bị phần cứng nào chuyển giọng nói thành tín hiệu điện tử?',
    visual: '🎤 Chiếc mic thu âm giọng hát trong trẻo', options: ['Microphone (Micro)', 'Bàn phím máy tính', 'Máy in màu', 'Cục pin dự phòng'], correctAnswer: 'Microphone (Micro)',
    scaffoldHint: 'Màng rung của micro dao động theo sóng âm thanh từ thanh quản, biến đổi cơ năng thành tín hiệu điện tử số!',
    funFact: 'Các phần mềm học tiếng Anh hiện đại dùng micro thu âm và trí tuệ nhân tạo để chấm điểm độ chuẩn phát âm của từng từ!'
  },
  {
    id: 'it_adv29', stage: 29, difficulty: 'hard', title: 'Dấu Chân Kỹ Thuật Số (Digital Footprint)', opponentName: 'Vết Chân Trên Cát Số', opponentAvatar: '👣💻',
    questionText: '"Dấu chân kỹ thuật số" nhắc nhở em bài học quý giá nào khi tham gia thế giới Internet?',
    visual: '🌐 Dấu vết lưu lại trên không gian mạng', options: ['Mọi bình luận, bài đăng hay hình ảnh em chia sẻ trên mạng đều lưu lại vĩnh viễn, vì vậy hãy luôn ứng xử tử tế và văn minh', 'Có thể xóa sạch mọi dấu vết chỉ bằng nút Delete', 'Không ai biết mình làm gì trên mạng', 'Cứ thoải mái nói xấu người khác vì ẩn danh'], correctAnswer: 'Mọi bình luận, bài đăng hay hình ảnh em chia sẻ trên mạng đều lưu lại vĩnh viễn, vì vậy hãy luôn ứng xử tử tế và văn minh',
    scaffoldHint: 'Những gì đã đăng lên Internet rất khó xóa bỏ hoàn toàn; hãy để dấu chân số của em là những chia sẻ đẹp đẽ và hữu ích!',
    funFact: 'Một hồ sơ công dân số văn minh, tử tế sẽ là tấm vé thông hành danh giá giúp em bước vào các trường đại học hàng đầu sau này!'
  },
  {
    id: 'it_adv30', stage: 30, difficulty: 'boss', title: 'Siêu Trí Tuệ Nhân Tạo AI (TRÙM THUẬT TOÁN 3-4-5)', opponentName: 'Siêu Não Bộ AI Lượng Tử', opponentAvatar: '🤖🌐🔮👑',
    questionText: 'Trí tuệ nhân tạo (AI) học hỏi từ khối lượng dữ liệu khổng lồ nhằm mục tiêu cao cả nào?',
    visual: '✨ Mạng nơ-ron nhân tạo kết nối toàn diện', options: ['Trở thành trợ thủ đắc lực hỗ trợ con người giải quyết các bài toán lớn về y tế, giáo dục và bảo vệ Trái Đất', 'Chiếm đoạt thế giới của con người', 'Chỉ để viết bài tập hộ học sinh lười biếng', 'Làm cho con người quên hết tri thức'], correctAnswer: 'Trở thành trợ thủ đắc lực hỗ trợ con người giải quyết các bài toán lớn về y tế, giáo dục và bảo vệ Trái Đất',
    scaffoldHint: 'AI là phát minh vĩ đại của con người, nhưng trái tim nhân hậu, tình yêu thương và đạo đức luôn là đặc quyền của nhân loại!',
    funFact: 'Chúc mừng bé đã chinh phục thành công "Thành Phố Thuật Toán"! Tương lai công nghệ và trí tuệ nhân tạo đang chờ đón bước chân em!'
  }
];

// ==========================================
// 2. THUNG LŨNG CÔNG NGHỆ & SÁNG CHẾ KỸ THUẬT (30 ẢI)
// ==========================================
export const technologyAdvLessons = [
  {
    id: 'tech_adv1', stage: 1, difficulty: 'easy', title: 'Tự Nhiên & Công Nghệ', opponentName: 'Cây Cổ Thụ & Cỗ Máy', opponentAvatar: '🌳⚙️',
    questionText: 'Sự khác biệt bản chất giữa đối tượng Tự nhiên và đối tượng Công nghệ là gì?',
    visual: '🌿 Rừng cây xanh đối chiếu với chiếc cầu treo hiện đại', options: ['Đối tượng tự nhiên có sẵn trong tự nhiên; đối tượng công nghệ do con người sáng tạo ra', 'Cả hai đều do con người đúc khuôn tạo ra', 'Đối tượng công nghệ có trước tự nhiên hàng triệu năm', 'Tự nhiên luôn làm bằng sắt thép'], correctAnswer: 'Đối tượng tự nhiên có sẵn trong tự nhiên; đối tượng công nghệ do con người sáng tạo ra',
    scaffoldHint: 'Cây cối, đồi núi, sông ngòi là quà tặng của Tự nhiên; điện thoại, ô tô, cầu cống là sản phẩm của Công nghệ!',
    funFact: 'Rất nhiều phát minh công nghệ vĩ đại được lấy cảm hứng từ tự nhiên (máy bay phỏng theo cánh chim, tàu ngầm phỏng theo cá voi)!'
  },
  {
    id: 'tech_adv2', stage: 2, difficulty: 'easy', title: 'Đèn Học Để Bàn Chuẩn Thị Lực', opponentName: 'Đèn Bàn Sáng Rọi', opponentAvatar: '💡',
    questionText: 'Khi ngồi học vào ban đêm, cách bố trí đèn bàn học nào sau đây giúp chống lóa và bảo vệ thị lực tốt nhất?',
    visual: '📖 Góc học tập đầy đủ ánh sáng chan hòa', options: ['Đặt đèn chiếu từ phía đối diện với tay thuận để bóng tay không che khuất chữ viết', 'Chiếu thẳng bóng đèn vào mắt người ngồi', 'Học trong bóng tối chỉ bật mỗi đèn pin nhỏ', 'Bật đèn nhấp nháy liên tục'], correctAnswer: 'Đặt đèn chiếu từ phía đối diện với tay thuận để bóng tay không che khuất chữ viết',
    scaffoldHint: 'Nếu viết tay phải, hãy đặt đèn học ở phía trước bên trái; ánh sáng chiếu nghiêng xuống trang sách không gây bóng mờ!',
    funFact: 'Đèn LED hiện đại có ánh sáng liên tục không nhấp nháy, tiết kiệm đến 80% điện năng so với bóng đèn dây tóc xưa kia!'
  },
  {
    id: 'tech_adv3', stage: 3, difficulty: 'easy', title: 'Thiết Bị Điện Tiết Kiệm Năng Lượng', opponentName: 'Tủ Lạnh Tiết Kiệm Điện', opponentAvatar: '🧊',
    questionText: 'Hành động nào giúp gia đình em vừa sử dụng thiết bị điện an toàn, vừa tiết kiệm năng lượng điện?',
    visual: '🔌 Tắt các thiết bị khi không sử dụng', options: ['Tắt đèn, quạt khi rời khỏi phòng và không mở cửa tủ lạnh quá lâu', 'Mở tủ lạnh đứng hóng mát cho đỡ nóng', 'Bật tivi suốt ngày đêm không ai xem', 'Cắm sạc điện thoại cả tuần không rút'], correctAnswer: 'Tắt đèn, quạt khi rời khỏi phòng và không mở cửa tủ lạnh quá lâu',
    scaffoldHint: 'Tiết kiệm điện vừa giảm chi phí cho cha mẹ, vừa bảo vệ nguồn tài nguyên thiên nhiên của quốc gia!',
    funFact: 'Nếu mỗi gia đình tắt bớt 1 bóng đèn trong 1 giờ, cả nước sẽ tiết kiệm được hàng triệu kilowatt điện mỗi ngày!'
  },
  {
    id: 'tech_adv4', stage: 4, difficulty: 'easy', title: 'Kỹ Thuật Chăm Sóc Cây Cảnh', opponentName: 'Chậu Hoa Rực Rỡ', opponentAvatar: '🌺',
    questionText: 'Để cây cảnh trong chậu sinh trưởng xanh tốt, quy trình chăm sóc cơ bản hàng ngày gồm những việc gì?',
    visual: '🪴 Chậu cây xanh mướt trước ban công', options: ['Tưới đủ ẩm vào sáng sớm hoặc chiều mát, tỉa lá vàng và đặt nơi có ánh sáng phù hợp', 'Tưới nước ngập úng quanh gốc suốt ngày', 'Bón thật nhiều phân hóa học một lúc', 'Để cây trong tủ kín không có ánh sáng'], correctAnswer: 'Tưới đủ ẩm vào sáng sớm hoặc chiều mát, tỉa lá vàng và đặt nơi có ánh sáng phù hợp',
    scaffoldHint: 'Cây xanh cần nước, chất dinh dưỡng trong đất và ánh sáng mặt trời để quang hợp tạo chất nuôi cây!',
    funFact: 'Trồng cây cảnh trong lớp học và gia đình giúp lọc sạch bụi mịn và cung cấp nguồn oxy tươi mát cho lá phổi của em!'
  },
  {
    id: 'tech_adv5', stage: 5, difficulty: 'easy', title: 'Dụng Cụ Cơ Khí Cờ-Lê', opponentName: 'Cờ-Lê Mỏ-Lết Bạc', opponentAvatar: '🔧',
    questionText: 'Trong bộ lắp ghép mô hình kỹ thuật lớp 4 - 5, dụng cụ nào dùng để vặn chặt hoặc tháo rời đai ốc (tán)?',
    visual: '🔩 Bu-lông và đai ốc gắn kết vững chắc', options: ['Cờ-lê (hoặc mỏ-lết)', 'Bút chì màu', 'Cây kéo thủ công', 'Thước kẻ nhựa'], correctAnswer: 'Cờ-lê (hoặc mỏ-lết)',
    scaffoldHint: 'Cờ-lê có miệng kẹp vừa khít các cạnh của đai ốc lục giác, giúp truyền lực xoay vặn chặt bu-lông dễ dàng!',
    funFact: 'Mối ghép ren giữa bu-lông và đai ốc là phát minh cơ khí vĩ đại, giữ vững các tòa nhà chọc trời và cầu cống hiện đại!'
  },
  {
    id: 'tech_adv6', stage: 6, difficulty: 'easy', title: 'Bộ Truyền Động Xích Líp', opponentName: 'Bánh Răng Khớp Nối', opponentAvatar: '⚙️',
    questionText: 'Xích xe đạp và dây đai máy may là ví dụ tiêu biểu của cơ cấu truyền động nào?',
    visual: '🚲 Bộ xích líp xe đạp quay đều', options: ['Truyền động đai và truyền động xích', 'Truyền động sóng điện từ', 'Truyền động bằng tia laser', 'Truyền động bằng nam châm vĩnh cửu'], correctAnswer: 'Truyền động đai và truyền động xích',
    scaffoldHint: 'Khi em đạp bàn đạp, đĩa xích quay truyền lực qua xích kéo líp bánh sau quay theo, đẩy xe tiến lên phía trước!',
    funFact: 'Cơ chế xích xe đạp có hiệu suất truyền lực cơ học lên tới 98%, là phương tiện giao thông xanh hiệu quả nhất thế giới!'
  },
  {
    id: 'tech_adv7', stage: 7, difficulty: 'easy', title: 'Mạch Điện Đơn Giản', opponentName: 'Bóng Đèn Phát Sáng', opponentAvatar: '💡⚡',
    questionText: 'Một mạch điện thắp sáng bóng đèn LED cơ bản gồm có những thành phần thiết yếu nào?',
    visual: '🔋 Mạch điện pin - dây dẫn - công tắc - bóng đèn', options: ['Nguồn điện (Pin), dây dẫn điện, công tắc và bóng đèn LED', 'Chỉ cần một đoạn dây kim loại', 'Chỉ cần bóng đèn không cần pin', 'Cục tẩy và thước kẻ nối với nhau'], correctAnswer: 'Nguồn điện (Pin), dây dẫn điện, công tắc và bóng đèn LED',
    scaffoldHint: 'Mạch điện phải khép kín: dòng điện đi từ cực dương của pin, qua công tắc đóng, qua bóng đèn làm đèn phát sáng rồi về cực âm!',
    funFact: 'Thomas Edison đã thử nghiệm hơn 1.000 loại vật liệu khác nhau trước khi phát minh thành công sợi đốt bóng đèn thương mại đầu tiên!'
  },
  {
    id: 'tech_adv8', stage: 8, difficulty: 'easy', title: 'Năng Lượng Sạch Tái Tạo', opponentName: 'Cối Xay Gió Khổng Lồ', opponentAvatar: '🌬️⚡',
    questionText: 'Nguồn năng lượng tái tạo nào khai thác từ tự nhiên vô tận, không thải khí nhà kính và bảo vệ bầu khí quyển Trái Đất?',
    visual: '🌞 Pin mặt trời và cánh đồng quạt gió', options: ['Năng lượng mặt trời và năng lượng gió', 'Đốt than đá gây khói mù', 'Đốt dầu mỏ và khí đốt hóa thạch', 'Đốt rác thải nhựa bừa bãi'], correctAnswer: 'Năng lượng mặt trời và năng lượng gió',
    scaffoldHint: 'Năng lượng mặt trời (quang điện) và năng lượng gió chuyển hóa sức gió và ánh nắng thành điện năng xanh sạch!',
    funFact: 'Việt Nam là một trong những quốc gia có tiềm năng điện mặt trời và điện gió ngoài khơi lớn hàng đầu khu vực Đông Nam Á!'
  },
  {
    id: 'tech_adv9', stage: 9, difficulty: 'medium', title: 'An Toàn Pin Sạc Đồ Chơi', opponentName: 'Cục Pin Thông Minh', opponentAvatar: '🔋',
    questionText: 'Khi sử dụng các đồ chơi công nghệ dùng pin sạc (flycam, xe điều khiển), điều nào em cần tuyệt đối tránh để ngừa cháy nổ?',
    visual: '⚠️ Cảnh báo an toàn pin sạc', options: ['Không sạc qua đêm không người trông coi, không đập dẹp hay để pin gần nguồn nhiệt cao', 'Sạc pin đúng điện áp cho phép', 'Rút dây sạc khi pin đã đầy', 'Bảo quản pin ở nơi khô ráo thoáng mát'], correctAnswer: 'Không sạc qua đêm không người trông coi, không đập dẹp hay để pin gần nguồn nhiệt cao',
    scaffoldHint: 'Pin Lithium-ion hiện đại chứa nhiều năng lượng; nếu bị va đập thủng hoặc sạc quá áp có thể chập cháy nguy hiểm!',
    funFact: 'Pin cũ sau khi sử dụng cần được thu gom tại các điểm tái chế rác điện tử, tuyệt đối không vứt vào sọt rác sinh hoạt thông thường!'
  },
  {
    id: 'tech_adv10', stage: 10, difficulty: 'medium', title: 'Nguyên Lý Chiếc Cần Cẩu', opponentName: 'Cần Cẩu Xây Dựng', opponentAvatar: '🏗️',
    questionText: 'Chiếc cần cẩu trên công trường có thể nâng những khối bê tông nặng hàng chục tấn lên cao nhờ ứng dụng cơ học nào?',
    visual: '⚙️ Hệ thống ròng rọc nâng vật nặng', options: ['Hệ thống ròng rọc động và động cơ tời thủy lực', 'Một sợi dây cao su', 'Sức đẩy của gió', 'Nam châm hút bê tông'], correctAnswer: 'Hệ thống ròng rọc động và động cơ tời thủy lực',
    scaffoldHint: 'Ròng rọc động giúp giảm một nửa lực kéo cần thiết, kết hợp động cơ thủy lực tạo nên sức nâng phi thường!',
    funFact: 'Nhà bác học vĩ đại Archimedes từng tuyên bố: "Hãy cho tôi một điểm tựa, tôi sẽ nhấc bổng cả Trái Đất lên"!'
  },
  {
    id: 'tech_adv11', stage: 11, difficulty: 'medium', title: 'Cấu Tạo Chiếc Quạt Điện', opponentName: 'Cánh Quạt Ba Cánh', opponentAvatar: '🌀',
    questionText: 'Bộ phận nào của chiếc quạt điện có chức năng chuyển đổi trực tiếp điện năng thành chuyển động quay tròn của cánh quạt?',
    visual: '⚡ Động cơ điện (Mô-tơ) bên trong bầu quạt', options: ['Động cơ điện (Mô-tơ điện)', 'Lồng bảo vệ quạt', 'Tuốt-năng đổi hướng', 'Chân đế quạt'], correctAnswer: 'Động cơ điện (Mô-tơ điện)',
    scaffoldHint: 'Mô-tơ điện gồm cuộn dây đồng và nam châm; khi có dòng điện chạy qua, từ trường sinh ra làm quay trục rô-to!',
    funFact: 'Động cơ điện có mặt trong hầu hết thiết bị gia đình: từ máy giặt, máy xay sinh tố đến chiếc quạt mát!'
  },
  {
    id: 'tech_adv12', stage: 12, difficulty: 'medium', title: 'Máy Thu Thanh (Radio)', opponentName: 'Chiếc Đài Radio Cổ Điển', opponentAvatar: '📻',
    questionText: 'Máy thu thanh (Radio) thu nhận tín hiệu thông tin từ đài phát thanh truyền đi trong không gian thông qua dạng sóng nào?',
    visual: '📡 Sóng vô tuyến điện lan tỏa trong không gian', options: ['Sóng vô tuyến điện (Sóng radio)', 'Sóng nước biển', 'Sóng âm thanh trực tiếp trong không khí', 'Tia sáng laser đỏ'], correctAnswer: 'Sóng vô tuyến điện (Sóng radio)',
    scaffoldHint: 'Đài phát thanh phát sóng điện từ mang tín hiệu âm thanh; ăng-ten của radio bắt sóng và giải mã phát ra loa!',
    funFact: 'Đài Tiếng nói Việt Nam (VOV) phát sóng buổi đầu tiên vào ngày 7/9/1945, là tiếng nói thiêng liêng của non sông đất Việt!'
  },
  {
    id: 'tech_adv13', stage: 13, difficulty: 'medium', title: 'Cấu Tạo Phích Cắm & Ổ Cắm Điện', opponentName: 'Phích Cắm Cách Điện', opponentAvatar: '🔌',
    questionText: 'Vỏ ngoài của phích cắm và ổ cắm điện luôn được bọc bằng chất liệu nhựa dẻo nhằm mục đích gì?',
    visual: '🛑 Nhựa cách điện bảo vệ an toàn', options: ['Cách điện hoàn toàn để bảo vệ người sử dụng không bị điện giật', 'Làm cho phích cắm nhẹ hơn', 'Làm cho phích cắm có mùi thơm', 'Dẫn điện tốt hơn'], correctAnswer: 'Cách điện hoàn toàn để bảo vệ người sử dụng không bị điện giật',
    scaffoldHint: 'Kim loại (đồng, nhôm) dẫn điện tốt để truyền tải điện; nhựa, cao su cách điện ngăn không cho dòng điện rò ra ngoài!',
    funFact: 'Nhựa Bakelite phát minh năm 1907 là chất dẻo tổng hợp cách điện đầu tiên mở ra kỷ nguyên thiết bị điện an toàn!'
  },
  {
    id: 'tech_adv14', stage: 14, difficulty: 'medium', title: 'Phương Pháp Thủy Canh Rau Sạch', opponentName: 'Giàn Rau Xanh Thủy Canh', opponentAvatar: '🥬💧',
    questionText: 'Trồng rau bằng phương pháp "Thủy canh" là một công nghệ nông nghiệp hiện đại có đặc điểm cốt lõi nào?',
    visual: '🌱 Rau lớn lên trong dung dịch dinh dưỡng không cần đất', options: ['Trồng rau trực tiếp trong dung dịch dinh dưỡng hòa tan mà không cần đất', 'Trồng rau dưới đáy biển sâu', 'Tưới rau bằng nước ngọt có ga', 'Trồng rau trong bóng tối hoàn toàn'], correctAnswer: 'Trồng rau trực tiếp trong dung dịch dinh dưỡng hòa tan mà không cần đất',
    scaffoldHint: 'Rễ cây hút trực tiếp các khoáng chất cần thiết hòa tan trong nước, giúp rau lớn nhanh, sạch khuẩn và không tốn đất canh tác!',
    funFact: 'Các phi hành gia trên trạm vũ trụ không gian ISS cũng trồng xà lách tươi bằng phương pháp thủy canh không trọng lực!'
  },
  {
    id: 'tech_adv15', stage: 15, difficulty: 'medium', title: 'Tua-vít & Các Dạng Đầu Vít', opponentName: 'Tua-vít Đầu Bốn Cạnh', opponentAvatar: '🪛',
    questionText: 'Để vặn chặt một con ốc vít có rãnh hình chữ thập (+), em cần chọn loại tua-vít nào tương ứng?',
    visual: '➕ Đầu vít hình chữ thập bốn cạnh', options: ['Tua-vít đầu bốn cạnh (ba-kê / Phillips)', 'Tua-vít đầu dẹt hai cạnh', 'Chiếc búa đinh', 'Kìm bấm chết'], correctAnswer: 'Tua-vít đầu bốn cạnh (ba-kê / Phillips)',
    scaffoldHint: 'Đầu tua-vít phải khớp hoàn toàn với rãnh của đầu ốc vít thì mới truyền được lực xoay và không làm toét ốc!',
    funFact: 'Vít đầu bốn cạnh Phillips được phát minh nhằm giúp lực vặn phân bố đều, chống trượt khi lắp ráp dây chuyền tự động!'
  },
  {
    id: 'tech_adv16', stage: 16, difficulty: 'hard', title: 'Mô Hình Xe Có Động Cơ', opponentName: 'Chiếc Xe Đua Mô Hình', opponentAvatar: '🏎️⚡',
    questionText: 'Trong mô hình ô tô chạy bằng pin, năng lượng điện từ pin được động cơ điện biến đổi thành dạng năng lượng nào?',
    visual: '🔄 Bánh xe quay tròn lao nhanh về phía trước', options: ['Cơ năng (chuyển động quay tròn làm xe chạy)', 'Quang năng làm sáng xe', 'Hóa năng tích tụ', 'Nhiệt năng làm nóng xe'], correctAnswer: 'Cơ năng (chuyển động quay tròn làm xe chạy)',
    scaffoldHint: 'Động cơ điện (Mô-tơ) biến đổi điện năng thành cơ năng làm trục bánh xe quay tròn đưa xe tiến lên!',
    funFact: 'Định luật bảo toàn năng lượng khẳng định: Năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác!'
  },
  {
    id: 'tech_adv17', stage: 17, difficulty: 'hard', title: 'Bàn Là (Bàn Ủi) Nhiệt', opponentName: 'Bàn Là Hơi Nước', opponentAvatar: '👔',
    questionText: 'Bộ phận rơ-le nhiệt lưỡng kim trong chiếc bàn là điện có công dụng an toàn tự động nào?',
    visual: '🌡️ Tự động ngắt khi đủ nhiệt độ', options: ['Tự động ngắt điện khi bàn là đạt nhiệt độ cài đặt để chống cháy quần áo', 'Tự động là phẳng quần áo mà không cần người ủi', 'Làm cho bàn là mát lạnh như đá', 'Tự phát ra tiếng nhạc'], correctAnswer: 'Tự động ngắt điện khi bàn là đạt nhiệt độ cài đặt để chống cháy quần áo',
    scaffoldHint: 'Hai thanh kim loại giãn nở vì nhiệt khác nhau uốn cong ngắt mạch điện khi quá nóng, giúp giữ nhiệt độ ổn định an toàn!',
    funFact: 'Rơ-le nhiệt lưỡng kim do John Harrison phát minh từ thế kỷ 18 là nền tảng của các thiết bị tự ngắt thông minh ngày nay!'
  },
  {
    id: 'tech_adv18', stage: 18, difficulty: 'hard', title: 'Hệ Thống Nhà Kính Nông Nghiệp', opponentName: 'Ngôi Nhà Kính Công Nghệ Cao', opponentAvatar: '🏡🌿',
    questionText: 'Mô hình nhà kính công nghệ cao (Greenhouse) giúp người nông dân điều khiển những yếu tố môi trường nào?',
    visual: '🍅 Vườn cà chua trĩu quả trong nhà kính', options: ['Điều chỉnh nhiệt độ, độ ẩm, ánh sáng và ngăn chặn sâu bọ gây hại', 'Ngăn chặn hoàn toàn ánh sáng mặt trời', 'Biến ngày thành đêm', 'Làm cây ngừng phát triển'], correctAnswer: 'Điều chỉnh nhiệt độ, độ ẩm, ánh sáng và ngăn chặn sâu bọ gây hại',
    scaffoldHint: 'Nhà kính che chắn bão gió, giữ nhiệt độ tối ưu và hệ thống tưới nhỏ giọt tự động giúp rau quả đạt năng suất kỷ lục!',
    funFact: 'Thành phố Đà Lạt là thủ phủ nông nghiệp công nghệ cao của Việt Nam với hàng ngàn hecta nhà kính trồng hoa và dâu tây xuất khẩu!'
  },
  {
    id: 'tech_adv19', stage: 19, difficulty: 'hard', title: 'Công Tắc Điện & An Toàn Mạch', opponentName: 'Cầu Dao Chống Giật Aptomat', opponentAvatar: '⚡🛑',
    questionText: 'Chiếc cầu dao tự động Aptomat (CB) gắn trên tường phòng có chức năng bảo vệ tối thượng nào?',
    visual: '🔌 Tự động dập cầu dao ngắt điện tức thì', options: ['Tự động ngắt điện tức thì khi mạch điện bị chập cháy hoặc quá tải để ngăn hỏa hoạn', 'Tăng gấp đôi lượng điện tiêu thụ', 'Biến điện xoay chiều thành pin', 'Làm bóng đèn sáng chói hơn'], correctAnswer: 'Tự động ngắt điện tức thì khi mạch điện bị chập cháy hoặc quá tải để ngăn hỏa hoạn',
    scaffoldHint: 'Khi dòng điện tăng vọt bất thường do chập dây, cơ chế điện từ của Aptomat lập tức nhả lẫy ngắt mạch an toàn trong 0.01 giây!',
    funFact: 'Aptomat chống rò điện (ELCB) có thể phát hiện dòng điện rò siêu nhỏ và ngắt điện trước khi con người bị điện giật nguy hiểm!'
  },
  {
    id: 'tech_adv20', stage: 20, difficulty: 'hard', title: 'Vật Liệu Kim Loại Dẫn Điện Tốt', opponentName: 'Sợi Dây Đồng Đỏ', opponentAvatar: '🥉',
    questionText: 'Lõi của dây dẫn điện trong gia đình thường được làm bằng kim loại nào có khả năng dẫn điện xuất sắc và độ bền dẻo cao?',
    visual: '🔌 Sợi lõi đồng sáng lấp lánh', options: ['Đồng (hoặc nhôm)', 'Sắt gỉ sét', 'Gỗ khô', 'Thủy tinh'], correctAnswer: 'Đồng (hoặc nhôm)',
    scaffoldHint: 'Bạc dẫn điện tốt nhất nhưng quá đắt; Đồng dẫn điện tốt thứ hai, dẻo dai, dễ uốn gập và giá thành hợp lý!',
    funFact: 'Chỉ 1 gram vàng có thể kéo thành sợi dây dẫn điện mảnh dài tới hơn 2 km được dùng trong các vi mạch điện tử siêu nhỏ!'
  },
  {
    id: 'tech_adv21', stage: 21, difficulty: 'hard', title: 'Công Nghệ Máy Bay Không Người Lái (Drone)', opponentName: 'Chiếc Drone Bốn Cánh Quạt', opponentAvatar: '🛸',
    questionText: 'Trong nông nghiệp hiện đại, máy bay không người lái (Drone) được ứng dụng hiệu quả vào công việc gì?',
    visual: '🌾 Drone phun thuốc và gieo hạt trên cánh đồng', options: ['Gieo hạt giống, phun phân bón vi sinh chính xác và quét bản đồ sức khỏe cây trồng', 'Chỉ để bay lượn chụp ảnh giải trí', 'Để chở máy cày bay lên trời', 'Dùng làm chiếc quạt mát cho ruộng lúa'], correctAnswer: 'Gieo hạt giống, phun phân bón vi sinh chính xác và quét bản đồ sức khỏe cây trồng',
    scaffoldHint: 'Drone bay theo định vị GPS, phun thuốc đều mịn gấp 20 lần con người làm thủ công và giúp nông dân không phải tiếp xúc hóa chất!',
    funFact: 'Một chiếc máy bay không người lái nông nghiệp có thể chăm sóc cánh đồng rộng 50 hecta chỉ trong một ngày làm việc!'
  },
  {
    id: 'tech_adv22', stage: 22, difficulty: 'hard', title: 'Đèn LED Siêu Tiết Kiệm Năng Lượng', opponentName: 'Bóng Đèn LED Búp Bê', opponentAvatar: '💡🌱',
    questionText: 'Vì sao bóng đèn LED ngày nay thay thế hoàn toàn bóng đèn sợi đốt truyền thống ở khắp mọi nơi?',
    visual: '💡 Ánh sáng mát dịu không tỏa nhiệt nóng', options: ['Tiết kiệm đến 85% điện năng, tuổi thọ bền gấp 25 lần và không tỏa nhiệt nóng', 'Vì đèn sợi đốt phát ra tia laser', 'Vì đèn LED đắt hơn nên dùng cho sang', 'Vì đèn LED dùng pin không cần điện'], correctAnswer: 'Tiết kiệm đến 85% điện năng, tuổi thọ bền gấp 25 lần và không tỏa nhiệt nóng',
    scaffoldHint: 'Đèn sợi đốt biến 95% điện thành nhiệt nóng lãng phí; đèn LED (Diode phát quang) chuyển thẳng điện năng thành ánh sáng mát mẻ!',
    funFact: 'Ba nhà khoa học Nhật Bản phát minh ra đèn LED xanh lam đã được trao giải thưởng Nobel Vật lý danh giá năm 2014!'
  },
  {
    id: 'tech_adv23', stage: 23, difficulty: 'hard', title: 'Kỹ Thuật Chiết Cành & Ghép Cây', opponentName: 'Chồi Cây Ghép Xanh', opponentAvatar: '🌿✂️',
    questionText: 'Kỹ thuật chiết cành và ghép cành trong nhân giống cây ăn quả mang lại ưu điểm vượt trội nào so với gieo hạt?',
    visual: '🍊 Cây cam ghép trĩu quả ngọt lịm', options: ['Cây nhanh ra hoa kết trái và giữ nguyên 100% phẩm chất ngọt ngon của cây mẹ', 'Làm cho quả bị biến thành màu đen', 'Cây không bao giờ ra hoa', 'Cây biến thành giống cỏ dại'], correctAnswer: 'Cây nhanh ra hoa kết trái và giữ nguyên 100% phẩm chất ngọt ngon của cây mẹ',
    scaffoldHint: 'Gieo hạt mất nhiều năm mới ra quả và dễ bị thoái hóa; cây ghép mang gen cành mẹ năng suất cao và rễ cây con khỏe mạnh!',
    funFact: 'Nhờ kỹ thuật ghép cây, các nghệ nhân Việt Nam có thể tạo ra cây bưởi ngũ quả cho ra 5 loại quả khác nhau trên cùng một thân cây!'
  },
  {
    id: 'tech_adv24', stage: 24, difficulty: 'hard', title: 'Kìm Mỏ Nhọn Cơ Khí', opponentName: 'Chiếc Kìm Thép Bền Bỉ', opponentAvatar: '🛠️',
    questionText: 'Chiếc kìm mỏ nhọn trong bộ dụng cụ kỹ thuật hữu ích nhất khi thực hiện thao tác nào?',
    visual: '📏 Uốn cong sợi dây thép mảnh', options: ['Kẹp giữ chi tiết nhỏ, uốn cong dây kim loại và gắp bu-lông ở khe hẹp', 'Dùng thay thế chiếc búa đập đá', 'Dùng làm thước đo chiều dài', 'Dùng để gọt bút chì'], correctAnswer: 'Kẹp giữ chi tiết nhỏ, uốn cong dây kim loại và gắp bu-lông ở khe hẹp',
    scaffoldHint: 'Mũi kìm thon dài và có răng cưa chống trượt, cho phép ngón tay vươn vào những vị trí hẹp mà tay người không thể thò vào được!',
    funFact: 'Kìm hoạt động dựa trên nguyên lý đòn bẩy kép, giúp nhân lực bóp của bàn tay lên gấp hàng chục lần!'
  },
  {
    id: 'tech_adv25', stage: 25, difficulty: 'hard', title: 'Robot Phẫu Thuật Y Học Hiện Đại', opponentName: 'Cánh Tay Robot Y Khoa', opponentAvatar: '🦾🩺',
    questionText: 'Cánh tay robot phẫu thuật điều khiển từ xa hỗ trợ các bác sĩ trong phòng mổ đạt được điều kỳ diệu nào?',
    visual: '🏥 Ca mổ phẫu thuật chính xác từng micromet', options: ['Thực hiện những đường mổ siêu nhỏ chuẩn xác từng micromet, hạn chế tối đa đau đớn cho người bệnh', 'Thay thế hoàn toàn trí tuệ của bác sĩ', 'Tự động chữa bách bệnh trong 1 giây', 'Làm cho vết thương to hơn'], correctAnswer: 'Thực hiện những đường mổ siêu nhỏ chuẩn xác từng micromet, hạn chế tối đa đau đớn cho người bệnh',
    scaffoldHint: 'Robot có khớp xoay 360 độ linh hoạt hơn bàn tay người và hoàn toàn không bị run tay, giúp các ca mổ tim não an toàn tuyệt đối!',
    funFact: 'Bác sĩ ở Việt Nam có thể điều khiển robot phẫu thuật cứu sống bệnh nhân đang ở cách xa hàng ngàn cây số qua mạng 5G siêu tốc!'
  },
  {
    id: 'tech_adv26', stage: 26, difficulty: 'hard', title: 'Quy Trình Tái Chế Nhựa Thông Minh', opponentName: 'Hạt Nhựa Tái Sinh', opponentAvatar: '♻️🏭',
    questionText: 'Quy trình công nghệ tái chế rác thải nhựa thành đồ dùng mới gồm những bước cơ bản nào?',
    visual: '🔄 Phân loại ➔ Rửa sạch ➔ Nghiền nhỏ ➔ Nấu chảy đúc khuôn', options: ['Thu gom, phân loại ➔ Rửa sạch ➔ Nghiền mảnh nhỏ ➔ Nấu chảy đùn hạt nhựa mới', 'Đốt cháy thành tro xỉ', 'Chôn vùi sâu dưới đáy biển', 'Đập nát rồi đem vứt đi'], correctAnswer: 'Thu gom, phân loại ➔ Rửa sạch ➔ Nghiền mảnh nhỏ ➔ Nấu chảy đùn hạt nhựa mới',
    scaffoldHint: 'Hạt nhựa tái sinh có thể ép khuôn thành chậu hoa, bàn ghế sân vườn hay thậm chí dệt thành sợi vải may áo quần thể thao!',
    funFact: 'Khoảng 5 chiếc chai nhựa PET tái chế có thể dệt nên một chiếc áo thun thể thao nhẹ và thoáng mát!'
  },
  {
    id: 'tech_adv27', stage: 27, difficulty: 'hard', title: 'Pin Mặt Trời & Nguyên Lý Quang Điện', opponentName: 'Tấm Pin Silicon Lấp Lánh', opponentAvatar: '☀️🔋',
    questionText: 'Tấm pin năng lượng mặt trời (Solar Panel) lắp trên mái nhà hấp thụ ánh sáng và chuyển hóa thành gì?',
    visual: '⚡ Dòng điện thắp sáng các bóng đèn trong nhà', options: ['Chuyển trực tiếp quang năng của ánh sáng mặt trời thành dòng điện một chiều', 'Chuyển ánh nắng thành dòng nước mát', 'Hút hết không khí xung quanh', 'Phát ra tia phóng xạ'], correctAnswer: 'Chuyển trực tiếp quang năng của ánh sáng mặt trời thành dòng điện một chiều',
    scaffoldHint: 'Các hạt photon ánh sáng mặt trời va đập vào lớp bán dẫn Silicon giải phóng các electron tự do tạo thành dòng điện quang điện!',
    funFact: 'Lượng ánh sáng mặt trời chiếu xuống Trái Đất trong 1 giờ đủ cung cấp năng lượng cho toàn nhân loại sử dụng trong cả 1 năm ròng!'
  },
  {
    id: 'tech_adv28', stage: 28, difficulty: 'hard', title: 'Nguyên Lý Xe Ô Tô Điện', opponentName: 'Chiếc Ô Tô Điện Tương Lai', opponentAvatar: '🚗⚡',
    questionText: 'Xe ô tô điện (Electric Vehicle) khác biệt lớn nhất với xe chạy xăng dầu truyền thống ở điểm tiến bộ nào?',
    visual: '🌿 Xe chạy êm ru không khói xả', options: ['Chạy bằng động cơ điện và cụm pin sạc, không phát thải khói ô nhiễm môi trường và vận hành cực êm', 'Phải đổ xăng hàng ngày', 'Chạy chậm như rùa bò', 'Gây tiếng ồn gầm rú nhức tai'], correctAnswer: 'Chạy bằng động cơ điện và cụm pin sạc, không phát thải khói ô nhiễm môi trường và vận hành cực êm',
    scaffoldHint: 'Ô tô điện sử dụng điện năng xanh, hiệu suất chuyển đổi năng lượng lên tới 90% (gấp 3 lần động cơ đốt trong chạy xăng)!',
    funFact: 'Việt Nam hiện đã chế tạo và xuất khẩu những chiếc ô tô điện thông minh mang thương hiệu Việt đi khắp thị trường Mỹ và thế giới!'
  },
  {
    id: 'tech_adv29', stage: 29, difficulty: 'hard', title: 'In 3D & Chế Tạo Kỹ Thuật Số', opponentName: 'Đầu Phun Máy In 3D', opponentAvatar: '🖨️🧊',
    questionText: 'Công nghệ in 3D (Sản xuất đắp dần) tạo ra một món đồ vật thực tế bằng cách nào?',
    visual: '🗿 Chiếc bình hoa hình thành từng lớp nhựa', options: ['Đùn vật liệu nóng chảy đắp chồng từng lớp siêu mỏng từ dưới lên trên theo mô hình 3D trên máy tính', 'Lấy kéo cắt gọt từ một khối đá lớn', 'Dùng búa đập dẹp', 'Vẽ mực lên một mặt giấy phẳng'], correctAnswer: 'Đùn vật liệu nóng chảy đắp chồng từng lớp siêu mỏng từ dưới lên trên theo mô hình 3D trên máy tính',
    scaffoldHint: 'Từ bản vẽ thiết kế trên máy tính, đầu phun in 3D xếp chồng hàng nghìn lớp nhựa mỏng tạo thành đồ vật có hình khối thực tế!',
    funFact: 'Các nhà khoa học hiện nay đã có thể dùng máy in 3D sinh học để in ra sụn tai, mạch máu nhân tạo cứu sống nhiều bệnh nhân!'
  },
  {
    id: 'tech_adv30', stage: 30, difficulty: 'boss', title: 'Nhà Sáng Chế Tương Lai (TRÙM KỸ THUẬT 3-4-5)', opponentName: 'Tổng Công Trình Sư Vĩ Đại', opponentAvatar: '📐🔧🤖👑',
    questionText: 'Mục đích cao đẹp nhất của các kỹ sư và nhà sáng chế công nghệ là gì?',
    visual: '🚀 Tàu không gian hướng tới các vì sao', options: ['Sáng tạo ra các giải pháp kỹ thuật hữu ích, nâng cao chất lượng cuộc sống con người và bảo vệ Trái Đất xanh', 'Chế tạo vũ khí phá hoại thiên nhiên', 'Chỉ để kiếm tiền cá nhân bất chấp hậu quả', 'Thay thế hoàn toàn vẻ đẹp của tự nhiên'], correctAnswer: 'Sáng tạo ra các giải pháp kỹ thuật hữu ích, nâng cao chất lượng cuộc sống con người và bảo vệ Trái Đất xanh',
    scaffoldHint: 'Công nghệ chân chính luôn song hành cùng đạo đức và tình yêu thương, phụng sự cuộc sống bình yên của muôn loài!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Bậc Thầy Sáng Chế Kỹ Thuật"! Đôi bàn tay khéo léo và khối óc sáng tạo của em sẽ xây dựng đất nước phồn vinh!'
  }
];

// ==========================================
// 3. VƯƠNG QUỐC ĐẠO ĐỨC & CÔNG DÂN TOÀN CẦU (30 ẢI)
// ==========================================
export const ethicsAdvLessons = [
  {
    id: 'eth_adv1', stage: 1, difficulty: 'easy', title: 'Tôn Trọng Sự Khác Biệt', opponentName: 'Vòng Tay Nối Rộng', opponentAvatar: '🤝',
    questionText: 'Mỗi bạn trong lớp có thể có ngoại hình, giọng nói, sở thích hoặc hoàn cảnh gia đình khác nhau. Thái độ đúng đắn là gì?',
    visual: '🌍 Bạn bè khắp nơi nắm tay nhau đoàn kết', options: ['Tôn trọng, lắng nghe và đối xử hòa nhã, bình đẳng với tất cả bạn bè', 'Chế giễu bạn vì bạn có giọng nói địa phương khác biệt', 'Tẩy chay bạn có hoàn cảnh khó khăn', 'Bắt bạn phải có sở thích giống hệt mình'], correctAnswer: 'Tôn trọng, lắng nghe và đối xử hòa nhã, bình đẳng với tất cả bạn bè',
    scaffoldHint: 'Sự đa dạng làm nên vẻ đẹp phong phú của thế giới! Tôn trọng sự khác biệt là biểu hiện của người có văn hóa cao!',
    funFact: 'Trên Trái Đất có hơn 8 tỷ người và không có ai hoàn toàn giống hệt ai; mỗi cá nhân là một điều kỳ diệu độc nhất vô nhị!'
  },
  {
    id: 'eth_adv2', stage: 2, difficulty: 'easy', title: 'Giữ Chữ Tín & Trách Nhiệm', opponentName: 'Thước Ngay Cán Thẳng', opponentAvatar: '📏',
    questionText: 'Khi em được cả lớp tin tưởng giao nhiệm vụ làm Trưởng nhóm hoặc lớp phó, em cần làm gì để xứng đáng niềm tin ấy?',
    visual: '⭐ Niềm tin và tinh thần trách nhiệm', options: ['Chủ động, gương mẫu, tận tụy hoàn thành nhiệm vụ và hỗ trợ các bạn cùng tiến bộ', 'Dùng quyền hạn để ra lệnh và quát nạt bạn', 'Đẩy hết việc cho các bạn làm còn mình đi chơi', 'Bao che cho những khuyết điểm của bạn thân'], correctAnswer: 'Chủ động, gương mẫu, tận tụy hoàn thành nhiệm vụ và hỗ trợ các bạn cùng tiến bộ',
    scaffoldHint: 'Trách nhiệm đi liền với chữ tín. Người gương mẫu luôn làm việc bằng cái tâm và sự công bằng!',
    funFact: '"Một lần bất tín, vạn lần bất tin". Giữ chữ tín là tài sản danh dự quý báu nhất của một công dân chân chính!'
  },
  {
    id: 'eth_adv3', stage: 3, difficulty: 'easy', title: 'Lòng Biết Ơn Sâu Sắc', opponentName: 'Búp Sen Dâng Bác', opponentAvatar: '🪷',
    questionText: 'Ngày 27 tháng 7 hàng năm tại Việt Nam là ngày kỷ niệm thiêng liêng nào thể hiện truyền thống "Uống nước nhớ nguồn"?',
    visual: '🕯️ Ngọn nến tri ân các anh hùng', options: ['Ngày Thương binh - Liệt sĩ', 'Ngày Nhà giáo Việt Nam', 'Ngày Quốc tế Thiếu nhi', 'Ngày Phụ nữ Việt Nam'], correctAnswer: 'Ngày Thương binh - Liệt sĩ',
    scaffoldHint: 'Ngày 27/7 toàn dân tưởng nhớ, tri ân sâu sắc công lao của các anh hùng liệt sĩ đã hy sinh xương máu vì độc lập của Tổ quốc!',
    funFact: 'Chúng ta được sống trong hòa bình, cắp sách tới trường hôm nay là nhờ sự hy sinh vô bờ bến của các thế hệ cha anh đi trước!'
  },
  {
    id: 'eth_adv4', stage: 4, difficulty: 'easy', title: 'Yêu Quý Người Lao Động', opponentName: 'Hạt Gạo Làng Ta', opponentAvatar: '🌾',
    questionText: 'Thái độ đúng đắn đối với những người làm công việc quét rác vệ sinh đường phố, bác nông dân hay chú thợ xây là gì?',
    visual: '👷‍♂️ Đôi bàn tay lao động cần mẫn', options: ['Tôn trọng, biết ơn vì họ đã làm ra hạt gạo và giữ gìn phố phường sạch đẹp', 'Coi thường vì họ lấm lem bùn đất', 'Vứt rác bừa bãi để họ phải dọn thêm', 'Chê bai công việc chân tay'], correctAnswer: 'Tôn trọng, biết ơn vì họ đã làm ra hạt gạo và giữ gìn phố phường sạch đẹp',
    scaffoldHint: 'Mọi nghề nghiệp lao động chân chính đều đáng quý và đáng trân trọng! "Bàn tay ta làm nên tất cả"!',
    funFact: 'Hạt cơm em ăn mỗi ngày đã trải qua "Một nắng hai sương / Muôn phần đắng cay" của người nông dân trên cánh đồng!'
  },
  {
    id: 'eth_adv5', stage: 5, difficulty: 'easy', title: 'Nói Không Với Bạo Lực Học Đường', opponentName: 'Hiệp Sĩ Hòa Bình', opponentAvatar: '🕊️',
    questionText: 'Khi chứng kiến một bạn trong trường bị nhóm bạn khác trêu chọc ác ý hoặc đe dọa đánh bạn, em nên làm gì?',
    visual: '🛑 Ngăn chặn hành vi xấu trong trường học', options: ['Báo ngay cho thầy cô giáo, bác bảo vệ hoặc ban giám hiệu để can thiệp kịp thời', 'Đứng xem và quay video reo hò', 'Hùa vào cùng trêu chọc bạn cho vui', 'Lặng lẽ bỏ đi coi như không biết'], correctAnswer: 'Báo ngay cho thầy cô giáo, bác bảo vệ hoặc ban giám hiệu để can thiệp kịp thời',
    scaffoldHint: 'Lên tiếng bảo vệ kẻ yếu là hành động dũng cảm! Không bao giờ im lặng trước cái xấu và bạo lực học đường!',
    funFact: 'Trường học hạnh phúc là nơi tràn ngập tiếng cười, sự thấu hiểu và tình bạn chân thành giữa tất cả học sinh!'
  },
  {
    id: 'eth_adv6', stage: 6, difficulty: 'easy', title: 'Quản Lý Tài Chính Nhí Thông Minh', opponentName: 'Chú Heo Đất Tiết Kiệm', opponentAvatar: '🐷💰',
    questionText: 'Khi được ông bà mừng tuổi hoặc có tiền thưởng thành tích học tập, cách quản lý tài chính thông minh nhất là gì?',
    visual: '🪙 Hũ tiết kiệm vun đắp ước mơ', options: ['Trích một phần nuôi heo đất tiết kiệm cho việc học, phần còn lại chi tiêu có kế hoạch', 'Mua đồ ăn vặt và nạp game hết ngay trong ngày', 'Làm mất hoặc để lung tung', 'Đòi mua điện thoại xịn đắt tiền'], correctAnswer: 'Trích một phần nuôi heo đất tiết kiệm cho việc học, phần còn lại chi tiêu có kế hoạch',
    scaffoldHint: 'Biết tiết kiệm và chi tiêu thông minh từ nhỏ giúp em làm chủ đồng tiền, không phụ thuộc và biết trân trọng mồ hôi của cha mẹ!',
    funFact: 'Quy tắc quản lý tiền bạc "6 chiếc hũ" được các triệu phú thế giới áp dụng ngay từ khi còn ngồi trên ghế nhà trường!'
  },
  {
    id: 'eth_adv7', stage: 7, difficulty: 'easy', title: 'Quyền & Bổn Phận Trẻ Em', opponentName: 'Luật Trẻ Em Thiêng Liêng', opponentAvatar: '📜',
    questionText: 'Theo Luật Trẻ em Việt Nam, bên cạnh quyền được bảo vệ và học tập, trẻ em có BỔN PHẬN cốt lõi nào?',
    visual: '👨‍👩‍👧‍👦 Gia đình và xã hội nâng niu trẻ thơ', options: ['Yêu quý kính trọng ông bà cha mẹ, chăm chỉ học tập và rèn luyện đạo đức', 'Chỉ đòi hỏi quyền lợi mà không cần làm gì', 'Không cần nghe lời thầy cô giáo', 'Không cần tuân theo pháp luật'], correctAnswer: 'Yêu quý kính trọng ông bà cha mẹ, chăm chỉ học tập và rèn luyện đạo đức',
    scaffoldHint: 'Quyền lợi luôn đi đôi với bổn phận. Trẻ em ngoan là người biết đền đáp công ơn sinh thành bằng sự chăm chỉ và lễ phép!',
    funFact: 'Việt Nam là quốc gia đầu tiên ở châu Á và thứ hai trên thế giới phê chuẩn Công ước của Liên Hợp Quốc về Quyền Trẻ em!'
  },
  {
    id: 'eth_adv8', stage: 8, difficulty: 'easy', title: 'Bảo Vệ Di Sản Văn Hóa', opponentName: 'Di Tích Cổ Kính', opponentAvatar: '🏛️',
    questionText: 'Khi đi tham quan các di tích lịch sử, chùa cổ hoặc danh lam thắng cảnh, hành động nào là CẤM KỴ?',
    visual: '🚩 Khu di tích lịch sử ngàn năm văn hiến', options: ['Dùng bút, dao khắc tên bậy bạ lên tường gạch, cột đá hay thân cây cổ thụ', 'Bỏ rác đúng nơi quy định', 'Đi nhẹ nói khẽ và tuân theo hướng dẫn viên', 'Ăn mặc trang nghiêm lịch sự'], correctAnswer: 'Dùng bút, dao khắc tên bậy bạ lên tường gạch, cột đá hay thân cây cổ thụ',
    scaffoldHint: 'Di tích lịch sử là báu vật nghìn năm của tổ tiên để lại; viết vẽ bậy là hành vi phá hoại di sản văn hóa không thể chấp nhận!',
    funFact: 'Giữ gìn từng viên gạch, mái ngói cổ kính là em đang bảo vệ hồn thiêng sông núi của dân tộc Việt Nam cho muôn đời sau!'
  },
  {
    id: 'eth_adv9', stage: 9, difficulty: 'medium', title: 'Ý Thức Công Dân Toàn Cầu', opponentName: 'Trái Đất Xanh Mướt', opponentAvatar: '🌏',
    questionText: 'Để cùng nhân loại ứng phó với Biến đổi khí hậu toàn cầu, hành động nhỏ mang ý nghĩa lớn của mỗi học sinh là gì?',
    visual: '🌱 Trồng cây xanh bảo vệ lá phổi Trái Đất', options: ['Giảm rác thải nhựa một lần, tiết kiệm điện nước, trồng thêm cây xanh và đi bộ/xe đạp', 'Xả rác thải bừa bãi ra sông ngòi', 'Chặt phá cây xanh bẻ cành hái hoa', 'Mở vòi nước chảy lãng phí không khóa'], correctAnswer: 'Giảm rác thải nhựa một lần, tiết kiệm điện nước, trồng thêm cây xanh và đi bộ/xe đạp',
    scaffoldHint: 'Một người làm việc nhỏ, hàng triệu người cùng chung tay sẽ tạo nên cuộc cách mạng xanh cứu lấy Trái Đất thân yêu!',
    funFact: 'Một chiếc túi ni-lông mất từ 500 đến 1.000 năm mới có thể phân hủy trong đất; hãy sử dụng túi vải bảo vệ thiên nhiên nhé!'
  },
  {
    id: 'eth_adv10', stage: 10, difficulty: 'medium', title: 'Bảo Vệ Chủ Quyền Biển Đảo', opponentName: 'Hải Đăng Trường Sa', opponentAvatar: '🗼🌊',
    questionText: 'Hai quần đảo thiêng liêng Hoàng Sa và Trường Sa là một phần máu thịt không thể tách rời của quốc gia nào?',
    visual: '🇻🇳 Lá cờ đỏ sao vàng tung bay trên đảo Trường Sa', options: ['Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam', 'Một vùng biển quốc tế vô chủ', 'Không thuộc về quốc gia nào', 'Chỉ là bãi cát hoang vu'], correctAnswer: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    scaffoldHint: 'Việt Nam có đầy đủ bằng chứng lịch sử và cơ sở pháp lý khẳng định chủ quyền không thể chối cãi đối với hai quần đảo Hoàng Sa và Trường Sa!',
    funFact: 'Mỗi hòn đảo, rạn san hô nơi đầu sóng ngọn gió đều có các chú bộ đội hải quân ngày đêm canh giữ bình yên cho Tổ quốc!'
  },
  {
    id: 'eth_adv11', stage: 11, difficulty: 'medium', title: 'Trung Thực Trong Kiểm Tra & Thi Cử', opponentName: 'Cây Bút Chân Thật', opponentAvatar: '✒️',
    questionText: 'Trong giờ làm bài kiểm tra học kỳ, hành động nào thể hiện lòng tự trọng và tính trung thực của người học sinh?',
    visual: '📝 Tự giác làm bài bằng năng lực chính mình', options: ['Tự mình suy nghĩ làm bài, không quay cóp và không nhìn bài của bạn bên cạnh', 'Chép tài liệu mang lén vào phòng thi', 'Nhìn bài bạn để chép cho điểm cao', 'Hỏi bài bạn khi thầy cô không để ý'], correctAnswer: 'Tự mình suy nghĩ làm bài, không quay cóp và không nhìn bài của bạn bên cạnh',
    scaffoldHint: 'Điểm số thực chất phản ánh đúng năng lực; gian lận chỉ đem lại sự giả dối và làm thui chột ý chí học tập của chính mình!',
    funFact: 'Trung thực trong thi cử là viên gạch đầu tiên xây dựng nên nhân cách đàng hoàng, tự tin của người thành công!'
  },
  {
    id: 'eth_adv12', stage: 12, difficulty: 'medium', title: 'Lòng Nhân Ái & Hiến Máu Cứu Người', opponentName: 'Giọt Máu Nghĩa Tình', opponentAvatar: '🩸❤️',
    questionText: 'Khẩu hiệu nhân đạo "Một giọt máu cho đi - Một cuộc đời ở lại" thể hiện giá trị cao đẹp nào của dân tộc?',
    visual: '🏥 Trái tim nhân ái sẻ chia sự sống', options: ['Lòng nhân ái, tình thương yêu đồng loại và tinh thần sẻ chia sự sống cao cả', 'Chỉ là phong trào bình thường', 'Bắt buộc mọi người phải làm', 'Không có ý nghĩa gì đối với xã hội'], correctAnswer: 'Lòng nhân ái, tình thương yêu đồng loại và tinh thần sẻ chia sự sống cao cả',
    scaffoldHint: 'Những giọt máu tình nguyện đã kịp thời cứu sống hàng vạn bệnh nhân trong cơn thập tử nhất sinh!',
    funFact: 'Phong trào "Hiến máu nhân đạo" tại Việt Nam thu hút hàng triệu tình nguyện viên tham gia mỗi năm bằng cả tấm lòng!'
  },
  {
    id: 'eth_adv13', stage: 13, difficulty: 'medium', title: 'Bảo Vệ Động Vật Hoang Dã', opponentName: 'Chú Voi Rừng Đôn Dũng Mãnh', opponentAvatar: '🐘',
    questionText: 'Hành động nào của con người góp phần trực tiếp bảo vệ các loài động vật hoang dã nguy cấp khỏi nguy cơ tuyệt chủng?',
    visual: '🐅 Chú hổ trong rừng sâu nguyên sinh', options: ['Không mua bán, không sử dụng các sản phẩm từ ngà voi, sừng tê giác hay thịt thú rừng', 'Săn bắt thú rừng quý hiếm đem bán lấy tiền', 'Chặt phá rừng phòng hộ làm nương rẫy', 'Mua chim hoang dã nhốt vào lồng'], correctAnswer: 'Không mua bán, không sử dụng các sản phẩm từ ngà voi, sừng tê giác hay thịt thú rừng',
    scaffoldHint: '"Không có người mua, sẽ không có kẻ giết hại"! Hãy bảo vệ muôn loài để giữ gìn cân bằng sinh thái trên Trái Đất!',
    funFact: 'Việt Nam có Vườn quốc gia Cúc Phương, Phong Nha - Kẻ Bàng, Cát Tiên là nơi bảo tồn những loài động vật quý hiếm bậc nhất hành tinh!'
  },
  {
    id: 'eth_adv14', stage: 14, difficulty: 'medium', title: 'Kính Trọng Người Khuyết Tật', opponentName: 'Bông Sen Vươn Lên', opponentAvatar: '🪷',
    questionText: 'Khi gặp một người bị khiếm thị (mù mắt) đang ngập ngừng muốn sang đường, hành động nhân văn của em là gì?',
    visual: '🦯 Chiếc gậy trắng của người khiếm thị', options: ['Đến gần chào hỏi lễ phép, xin phép dắt tay hỗ trợ bác sang đường an toàn', 'Đứng nhìn trêu chọc', 'Cười nhạo cách bước đi của người khiếm thị', 'Bỏ chạy làm lơ'], correctAnswer: 'Đến gần chào hỏi lễ phép, xin phép dắt tay hỗ trợ bác sang đường an toàn',
    scaffoldHint: 'Mỗi sự sẻ chia, giúp đỡ nhỏ bé bằng sự chân thành đều thắp lên ngọn lửa niềm tin ấm áp trong lòng người khó khăn!',
    funFact: 'Hội người mù Việt Nam có bảng chữ nổi Braille kỳ diệu giúp người khiếm thị đọc sách và viết văn bằng đôi bàn tay cảm nhận!'
  },
  {
    id: 'eth_adv15', stage: 15, difficulty: 'medium', title: 'Ý Thức Tiết Kiệm Thời Gian', opponentName: 'Thời Gian Vàng Ngọc', opponentAvatar: '⏳',
    questionText: 'Người xưa đúc kết: "Thời gian là vàng bạc". Em cần quản lý thời gian mỗi ngày như thế nào cho hiệu quả?',
    visual: '📅 Thời gian biểu khoa học mỗi ngày', options: ['Lập thời gian biểu khoa học: giờ nào việc nấy, hoàn thành bài tập trước khi giải trí', 'Để nước đến chân mới nhảy', 'Dành cả ngày lướt mạng xã hội vô bổ', 'Trì hoãn mọi việc sang ngày mai'], correctAnswer: 'Lập thời gian biểu khoa học: giờ nào việc nấy, hoàn thành bài tập trước khi giải trí',
    scaffoldHint: 'Thời gian đã trôi qua sẽ không bao giờ lấy lại được; người biết trân quý thời gian sẽ gặt hái được nhiều thành công rực rỡ!',
    funFact: 'Phương pháp quả cà chua Pomodoro (học tập tập trung 25 phút, nghỉ ngơi 5 phút) giúp tăng gấp đôi khả năng ghi nhớ của não bộ!'
  },
  {
    id: 'eth_adv16', stage: 16, difficulty: 'hard', title: 'Trách Nhiệm Khi Tham Gia Không Gian Số', opponentName: 'Bàn Phím Văn Minh', opponentAvatar: '⌨️🕊️',
    questionText: 'Khi tham gia các hội nhóm học tập trên mạng Internet, thái độ bình luận văn minh nào em cần giữ gìn?',
    visual: '💬 Bình luận tử tế, mang tính xây dựng', options: ['Dùng lời lẽ lịch sự, mang tính đóng góp, khích lệ bạn bè và không xúc phạm ai', 'Dùng từ ngữ thô tục chửi bới người khác', 'Lan truyền tin đồn ác ý bôi nhọ danh dự bạn', 'Công kích cá nhân khi bất đồng ý kiến'], correctAnswer: 'Dùng lời lẽ lịch sự, mang tính đóng góp, khích lệ bạn bè và không xúc phạm ai',
    scaffoldHint: 'Bàn phím không che giấu được nhân cách; một lời nói tử tế trên mạng có thể cứu rỗi tâm hồn của một người bạn đang buồn tủi!',
    funFact: 'Văn hóa mạng là tấm gương phản chiếu đạo đức đời thực; hãy là một công dân số có trách nhiệm và giàu lòng nhân ái!'
  },
  {
    id: 'eth_adv17', stage: 17, difficulty: 'hard', title: 'Bình Đẳng Giới Trong Học Đường', opponentName: 'Cán Cân Công Lý & Bình Đẳng', opponentAvatar: '⚖️👫',
    questionText: 'Quan niệm nào sau đây thể hiện đúng tinh thần Bình đẳng giới tiến bộ giữa các bạn nam và bạn nữ?',
    visual: '👫 Bạn nam và bạn nữ cùng nỗ lực học giỏi', options: ['Mọi bạn nam và bạn nữ đều có quyền được học tập, ước mơ và phát triển tài năng bình đẳng như nhau', 'Con gái thì không cần học môn Khoa học hay Tin học', 'Chỉ có bạn nam mới được làm lớp trưởng', 'Con trai thì không được giúp đỡ việc nhà'], correctAnswer: 'Mọi bạn nam và bạn nữ đều có quyền được học tập, ước mơ và phát triển tài năng bình đẳng như nhau',
    scaffoldHint: 'Tài năng và phẩm chất không phân biệt giới tính; sự bình đẳng giúp cả nam và nữ cùng tự tin cống hiến cho xã hội!',
    funFact: 'Hai Bà Trưng, Bà Triệu là những nữ anh hùng kiệt xuất trong lịch sử đã đứng lên lãnh đạo khởi nghĩa đánh đuổi giặc ngoại xâm!'
  },
  {
    id: 'eth_adv18', stage: 18, difficulty: 'hard', title: 'Lòng Dũng Cảm Đấu Tranh Với Cái Xấu', opponentName: 'Ngọn Lửa Chính Trực', opponentAvatar: '🔥',
    questionText: 'Khi phát hiện một bạn cùng lớp mang đồ vật nguy hiểm vào trường hoặc có hành vi trộm cắp, em nên làm gì?',
    visual: '🛡️ Bảo vệ sự an toàn của lớp học', options: ['Báo ngay cho thầy cô giáo chủ nhiệm hoặc bác bảo vệ để ngăn chặn kịp thời', 'Im lặng bao che cho bạn vì bạn cho kẹo', 'Cùng bạn tham gia hành vi sai trái', 'Đe dọa bạn để tống tiền'], correctAnswer: 'Báo ngay cho thầy cô giáo chủ nhiệm hoặc bác bảo vệ để ngăn chặn kịp thời',
    scaffoldHint: 'Dũng cảm lên tiếng báo cáo điều xấu không phải là "mách lẻo", mà là bảo vệ an toàn cho cả tập thể và giúp bạn sửa chữa lỗi lầm!',
    funFact: 'Sự im lặng trước cái sai nguy hại không kém gì chính hành động sai trái; hãy dũng cảm đứng về phía lẽ phải!'
  },
  {
    id: 'eth_adv19', stage: 19, difficulty: 'hard', title: 'Ý Thức Tiết Kiệm Năng Lượng Đất Nước', opponentName: 'Nhà Máy Thủy Điện Hòa Bình', opponentAvatar: '🌊⚡',
    questionText: 'Sự kiện môi trường quốc tế "Giờ Trái Đất" (Earth Hour) tổ chức hàng năm kêu gọi nhân loại hành động gì?',
    visual: '🌍 Tắt đèn thắp sáng tương lai Trái Đất', options: ['Tắt các thiết bị điện và bóng đèn không cần thiết trong vòng 60 phút để nâng cao ý thức tiết kiệm năng lượng', 'Bật sáng tất cả bóng đèn trong thành phố', 'Bắn pháo hoa suốt đêm', 'Chạy xe máy liên tục ngoài đường'], correctAnswer: 'Tắt các thiết bị điện và bóng đèn không cần thiết trong vòng 60 phút để nâng cao ý thức tiết kiệm năng lượng',
    scaffoldHint: 'Giờ Trái Đất nhắc nhở chúng ta: năng lượng điện không phải là vô tận; tiết kiệm điện là hành động sống còn để bảo vệ khí hậu!',
    funFact: 'Hàng trăm triệu người tại hơn 190 quốc gia trên thế giới cùng tắt đèn trong Giờ Trái Đất tạo nên thông điệp đoàn kết mạnh mẽ!'
  },
  {
    id: 'eth_adv20', stage: 20, difficulty: 'hard', title: 'Đoàn Kết 54 Dân Tộc Anh Em', opponentName: 'Cây Một Gốc, Con Một Nhà', opponentAvatar: '🤝🇻🇳',
    questionText: 'Trên dải đất hình chữ S Việt Nam có bao nhiêu dân tộc anh em cùng chung sống hòa thuận, đoàn kết keo sơn?',
    visual: '👥 54 dân tộc anh em muôn sắc màu', options: ['54 dân tộc anh em', '10 dân tộc', '100 dân tộc', 'Chỉ có 1 dân tộc'], correctAnswer: '54 dân tộc anh em',
    scaffoldHint: 'Người Kinh, Tày, Thái, Mường, H’Mông, Dao, Ê Đê, Ba Na, Khmer, Chăm... 54 dân tộc anh em như con một nhà cùng chung dòng máu Việt!',
    funFact: 'Bác Hồ từng căn dặn: "Sông có thể cạn, núi có thể mòn, song tình đoàn kết của 54 dân tộc anh em chúng ta không bao giờ phai nhạt"!'
  },
  {
    id: 'eth_adv21', stage: 21, difficulty: 'hard', title: 'Tôn Trọng Luật Giao Thông Khi Đi Xe Đạp', opponentName: 'Chiếc Xe Đạp An Toàn', opponentAvatar: '🚲',
    questionText: 'Khi học sinh lớp 4 - 5 tự đi xe đạp đến trường, hành vi nào sau đây là VI PHẠM NGUY HIỂM cần nghiêm cấm?',
    visual: '⚠️ Đi xe đạp dàn hàng ngang lạng lách', options: ['Đi dàn hàng 3 hàng 4, buông cả hai tay hoặc đùa nghịch lạng lách trước đầu ô tô', 'Đi sát lề đường bên phải', 'Đội mũ bảo hiểm khi đi xe đạp điện', 'Dừng xe quan sát khi qua ngã tư'], correctAnswer: 'Đi dàn hàng 3 hàng 4, buông cả hai tay hoặc đùa nghịch lạng lách trước đầu ô tô',
    scaffoldHint: 'Dàn hàng ngang và lạng lách cản trở giao thông và rất dễ bị ô tô cuốn vào gầm xe; hãy tuân thủ luật để bảo vệ tính mạng!',
    funFact: 'Độ tuổi quy định được tự điều khiển xe đạp điện tại Việt Nam là từ đủ 16 tuổi trở lên và bắt buộc phải đội mũ bảo hiểm!'
  },
  {
    id: 'eth_adv22', stage: 22, difficulty: 'hard', title: 'Tinh Thần Tự Học & Vượt Khó', opponentName: 'Thầy Giáo Chu Văn An', opponentAvatar: '📜✨',
    questionText: 'Tấm gương thầy giáo Chu Văn An và nhà bác học Lê Quý Đôn để lại bài học sáng ngời nào cho thế hệ trẻ?',
    visual: '📚 Ánh đèn dầu học tập đêm khuya', options: ['Tinh thần hiếu học phi thường, kiên trì tự học suốt đời và giữ khí tiết thanh cao', 'Chỉ học để kiếm nhiều tiền bạc', 'Học vẹt không chịu suy nghĩ', 'Bỏ học đi buôn bán sớm'], correctAnswer: 'Tinh thần hiếu học phi thường, kiên trì tự học suốt đời và giữ khí tiết thanh cao',
    scaffoldHint: '"Học vấn không có con đường nào bằng phẳng". Chỉ có sự kiên trì tự học mới mở ra cánh cửa trở thành nhân tài đất nước!',
    funFact: 'Văn Miếu - Quốc Tử Giám tại Hà Nội là trường đại học đầu tiên của Việt Nam, nơi tôn vinh truyền thống hiếu học ngàn năm văn hiến!'
  },
  {
    id: 'eth_adv23', stage: 23, difficulty: 'hard', title: 'Tự Giác Tiết Kiệm Giấy Viết', opponentName: 'Trang Giấy Trắng Tinh', opponentAvatar: '📄',
    questionText: 'Tại sao việc dùng hết từng trang vở học sinh, không xé giấy gấp máy bay bừa bãi là hành động bảo vệ rừng sâu?',
    visual: '🌲 Những cánh rừng nguyên sinh xanh ngát', options: ['Vì giấy viết được sản xuất từ bột gỗ cây rừng; tiết kiệm giấy chính là cứu lấy hàng triệu cây xanh', 'Vì giấy rất nặng', 'Vì giấy không thể đốt cháy', 'Vì xé giấy làm máy tính hỏng'], correctAnswer: 'Vì giấy viết được sản xuất từ bột gỗ cây rừng; tiết kiệm giấy chính là cứu lấy hàng triệu cây xanh',
    scaffoldHint: 'Mỗi cuốn vở viết cẩn thận, không bỏ phí trang giấy trắng là một hành động thiết thực bảo vệ những cánh rừng xanh đại ngàn!',
    funFact: 'Để sản xuất ra 1 tấn giấy viết trắng, nhà máy phải đốn hạ khoảng 17 - 20 cây gỗ lớn và tiêu tốn hàng vạn lít nước sạch!'
  },
  {
    id: 'eth_adv24', stage: 24, difficulty: 'hard', title: 'Lòng Tự Trọng Của Người Học Trò', opponentName: 'Ngọn Nến Thẳng Ngay', opponentAvatar: '🕯️',
    questionText: 'Biểu hiện nào sau đây thể hiện rõ nét LÒNG TỰ TRỌNG của một người học sinh chăm ngoan?',
    visual: '⭐ Danh dự và lòng tự trọng cao quý', options: ['Không tham của rơi, biết xấu hổ khi làm điều sai trái và luôn giữ gìn danh dự trong sáng', 'Luôn đổ lỗi cho người khác khi bị phạt', 'Thích khoe khoang quần áo hàng hiệu', 'Bắt nạt các bạn yếu hơn để chứng tỏ mình'], correctAnswer: 'Không tham của rơi, biết xấu hổ khi làm điều sai trái và luôn giữ gìn danh dự trong sáng',
    scaffoldHint: '"Đói cho sạch, rách cho thơm" - lòng tự trọng là ngọn đèn soi sáng tâm hồn, giúp em không bao giờ sa ngã trước cám dỗ!',
    funFact: 'Người có lòng tự trọng luôn biết giữ lời hứa, tôn trọng người khác và được xã hội kính nể ở bất cứ nơi đâu!'
  },
  {
    id: 'eth_adv25', stage: 25, difficulty: 'hard', title: 'Trách Nhiệm Với Môi Trường Biển Đảo', opponentName: 'Chú Rùa Biển Đại Dương', opponentAvatar: '🐢🌊',
    questionText: 'Khi đi du lịch tắm biển cùng gia đình, hành động bảo vệ sinh thái biển quan trọng nhất của em là gì?',
    visual: '🏖️ Bãi biển trong xanh không rác thải', options: ['Không xả rác hay túi ni-lông xuống biển và tham gia nhặt rác dọn sạch bãi cát', 'Ném túi ni-lông xuống biển cho rùa ăn', 'Bẻ cành san hô dưới đáy biển mang về làm kỷ niệm', 'Đổ nước thải bẩn ra bãi tắm'], correctAnswer: 'Không xả rác hay túi ni-lông xuống biển và tham gia nhặt rác dọn sạch bãi cát',
    scaffoldHint: 'Rùa biển thường nhầm túi ni-lông là con sứa biển và nuốt phải dẫn đến nghẹt thở chết; giữ sạch biển là cứu lấy sinh vật biển!',
    funFact: 'Hàng năm có hơn 8 triệu tấn rác thải nhựa đổ ra đại dương; hành động bỏ rác đúng nơi của em góp phần bảo vệ hành tinh xanh!'
  },
  {
    id: 'eth_adv26', stage: 26, difficulty: 'hard', title: 'Bảo Vệ Động Vật Nuôi & Thú Cưng', opponentName: 'Bác Sĩ Thú Y Tận Tâm', opponentAvatar: '🐕‍🦺🩺',
    questionText: 'Khi nuôi chó mèo trong nhà, nghĩa vụ y tế bắt buộc của gia đình để bảo vệ an toàn cho cộng đồng xung quanh là gì?',
    visual: '💉 Tiêm phòng vắc-xin cho vật nuôi', options: ['Tiêm vắc-xin phòng bệnh dại định kỳ và đeo rọ mõm khi dắt chó ra nơi công cộng', 'Thả rông chó chạy rông ngoài đường cắn người', 'Không bao giờ tiêm phòng thuốc thú y', 'Bỏ đói thú cưng ngoài trời mưa rét'], correctAnswer: 'Tiêm vắc-xin phòng bệnh dại định kỳ và đeo rọ mõm khi dắt chó ra nơi công cộng',
    scaffoldHint: 'Tiêm phòng dại định kỳ hàng năm và đeo rọ mõm là quy định pháp luật bắt buộc để bảo vệ tính mạng người đi đường!',
    funFact: 'Yêu thương thú cưng đi liền với trách nhiệm bảo vệ sự an toàn cho xóm làng và cộng đồng văn minh!'
  },
  {
    id: 'eth_adv27', stage: 27, difficulty: 'hard', title: 'Lòng Yêu Nước Từ Những Việc Nhỏ', opponentName: 'Bản Đồ Tổ Quốc Việt Nam', opponentAvatar: '🗺️🇻🇳',
    questionText: 'Đối với học sinh tiểu học, lòng yêu quê hương đất nước được thể hiện thiết thực nhất qua hành động nào?',
    visual: '🌟 Học tập tốt, rèn luyện chăm chỉ', options: ['Chăm chỉ học tập, rèn luyện đạo đức, yêu thương gia đình, giữ gìn tiếng Việt trong sáng và bảo vệ môi trường', 'Chỉ nói những lời sáo rỗng to tát mà lười biếng', 'Chê bai lịch sử nước nhà', 'Chỉ thích hàng ngoại chê hàng Việt'], correctAnswer: 'Chăm chỉ học tập, rèn luyện đạo đức, yêu thương gia đình, giữ gìn tiếng Việt trong sáng và bảo vệ môi trường',
    scaffoldHint: 'Bác Hồ dạy: "Tuổi nhỏ làm việc nhỏ, tùy theo sức của mình". Lòng yêu nước bắt đầu từ tình yêu mái trường, góc phố và trang sách!',
    funFact: 'Mỗi bông hoa điểm mười của em hôm nay là một viên gạch hồng xây đắp tương lai đất nước Việt Nam rạng rỡ mai sau!'
  },
  {
    id: 'eth_adv28', stage: 28, difficulty: 'hard', title: 'Ứng Xử Văn Hóa Khi Đi Xe Buýt Công Cộng', opponentName: 'Chuyến Xe Buýt Thân Thiện', opponentAvatar: '🚌',
    questionText: 'Khi đi xe buýt đông người mà thấy một cụ già, phụ nữ mang thai hoặc em nhỏ bước lên xe, em nên làm gì?',
    visual: '💺 Nhường ghế cho người già trên xe buýt', options: ['Chủ động đứng dậy mỉm cười nhường ghế ngồi của mình cho người cần ưu tiên', 'Giả vờ ngủ say để không phải nhường chỗ', 'Quay mặt ra cửa sổ coi như không thấy', 'Gác chân lên ghế bên cạnh để giữ chỗ'], correctAnswer: 'Chủ động đứng dậy mỉm cười nhường ghế ngồi của mình cho người cần ưu tiên',
    scaffoldHint: 'Nhường ghế trên phương tiện công cộng là nét đẹp văn minh giao thông, thể hiện sự kính trên nhường dưới của học sinh chăm ngoan!',
    funFact: 'Hành động nhường ghế tuy nhỏ bé nhưng lan tỏa hơi ấm tình người và sự ấm áp khắp khoang xe buýt!'
  },
  {
    id: 'eth_adv29', stage: 29, difficulty: 'hard', title: 'Ý Chí Vươn Lên Vượt Khó', opponentName: 'Cây Tre Bất Khuất', opponentAvatar: '🎋',
    questionText: 'Hình ảnh cây tre Việt Nam mộc mạc mà dẻo dai kiên cường bão gió không quật ngã tượng trưng cho phẩm chất gì của dân tộc?',
    visual: '🎋 Rặng tre xanh đứng thẳng kiên cường', options: ['Ý chí kiên cường, bất khuất, tinh thần đoàn kết và sức sống mãnh liệt vượt qua mọi gian khổ', 'Sự yếu đuối dễ bị bẻ gãy', 'Tính lười biếng không chịu vươn lên', 'Sống cô độc một mình'], correctAnswer: 'Ý chí kiên cường, bất khuất, tinh thần đoàn kết và sức sống mãnh liệt vượt qua mọi gian khổ',
    scaffoldHint: '"Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín" - cây tre là biểu tượng linh hồn bất tử của dân tộc Việt Nam!',
    funFact: 'Cây tre măng non luôn mọc thẳng tắp, cũng giống như thế hệ măng non thiếu nhi Việt Nam dũng cảm tiến bước về tương lai!'
  },
  {
    id: 'eth_adv30', stage: 30, difficulty: 'boss', title: 'Đại Sứ Công Dân Toàn Cầu (TRÙM ĐẠO ĐỨC 3-4-5)', opponentName: 'Thần Trí Tuệ & Nhân Cách Việt Nam', opponentAvatar: '👑🕊️🌟🇻🇳',
    questionText: 'Phẩm chất nào giúp người học sinh Việt Nam tự tin hội nhập cùng bạn bè năm châu bốn biển?',
    visual: '🌟 Tinh thần yêu nước và hội nhập toàn cầu', options: ['Yêu quê hương đất nước, giàu lòng nhân ái, trung thực, tinh thần hiếu học và tự hào bản sắc dân tộc', 'Chỉ sùng bái văn hóa nước ngoài bỏ quên cội nguồn', 'Sống ích kỷ chỉ biết đến bản thân', 'Kiêu ngạo và coi thường người khác'], correctAnswer: 'Yêu quê hương đất nước, giàu lòng nhân ái, trung thực, tinh thần hiếu học và tự hào bản sắc dân tộc',
    scaffoldHint: 'Gốc rễ vững chắc ở lòng yêu nước và đạo lý cha ông, ngọn vươn cao đón ánh sáng tri thức thế giới!',
    funFact: 'Chúc mừng bé đã trở thành "Đại Sứ Trí Tuệ & Nhân Cách Toàn Cầu"! Tương lai non sông gấm vóc Việt Nam đặt trọn niềm tin nơi em!'
  }
];

// ==========================================
// 4. CUNG ĐIỆN ÂM NHẠC & MĨ THUẬT SÁNG TẠO (30 ẢI)
// ==========================================
export const artsMusicAdvLessons = [
  {
    id: 'am_adv1', stage: 1, difficulty: 'easy', title: 'Khuông Nhạc & Khóa Sol', opponentName: 'Khóa Sol Hoàng Kim', opponentAvatar: '🎼',
    questionText: 'Khuông nhạc tiêu chuẩn trong âm nhạc quốc tế gồm có bao nhiêu dòng kẻ song song và bao nhiêu khe nhạc?',
    visual: '🎶 Năm dòng kẻ thẳng tắp', options: ['5 dòng kẻ và 4 khe nhạc', '4 dòng kẻ và 5 khe nhạc', '7 dòng kẻ và 6 khe nhạc', '3 dòng kẻ và 2 khe nhạc'], correctAnswer: '5 dòng kẻ và 4 khe nhạc',
    scaffoldHint: 'Khuông nhạc gồm 5 dòng kẻ nằm ngang song song đều nhau, tạo thành 4 khe nhạc được tính từ dưới lên trên!',
    funFact: 'Khóa Sol bắt đầu uốn lượn từ dòng kẻ thứ hai của khuông nhạc, xác định vị trí chính xác của nốt Son!'
  },
  {
    id: 'am_adv2', stage: 2, difficulty: 'easy', title: 'Hình Nốt & Trường Độ', opponentName: 'Nốt Tròn Ngân Dài', opponentAvatar: '🎵',
    questionText: 'Trong các hình nốt nhạc, hình nốt Trắng có giá trị độ dài thời gian (trường độ) bằng mấy phách?',
    visual: '⚪ Nốt trắng thanh lịch', options: ['2 phách', '1 phách', '4 phách', 'Nửa phách (0.5 phách)'], correctAnswer: '2 phách',
    scaffoldHint: 'Nốt tròn = 4 phách, nốt trắng = 2 phách, nốt đen = 1 phách và nốt móc đơn = 1/2 phách!',
    funFact: 'Trường độ và cao độ kết hợp nhịp nhàng tạo nên linh hồn của mỗi bản giao hưởng vĩ đại!'
  },
  {
    id: 'am_adv3', stage: 3, difficulty: 'easy', title: 'Dân Ca Ba Miền', opponentName: 'Liền Chị Quan Họ', opponentAvatar: '🪕',
    questionText: 'Làn điệu dân ca mượt mà, đằm thắm với hình ảnh áo tứ thân, nón quai thao và miếng trầu cánh phượng thuộc vùng miền nào?',
    visual: '🌾 Sông Cầu nước chảy lơ thơ', options: ['Dân ca Quan họ Bắc Ninh (miền Bắc)', 'Hò mái nhì sông Hương (miền Trung)', 'Đờn ca tài tử Nam Bộ (miền Nam)', 'Hát Then vùng Tây Bắc'], correctAnswer: 'Dân ca Quan họ Bắc Ninh (miền Bắc)',
    scaffoldHint: 'Dân ca Quan họ Bắc Ninh là Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO vinh danh!',
    funFact: 'Những câu hát giao duyên "Người ơi người ở đừng về" chứa chan tình nghĩa mộc mạc thủy chung của người Việt!'
  },
  {
    id: 'am_adv4', stage: 4, difficulty: 'easy', title: 'Nhạc Sĩ Văn Cao & Quốc Ca', opponentName: 'Lá Cờ Đỏ Sao Vàng', opponentAvatar: '🇻🇳',
    questionText: 'Bài hát thiêng liêng "Tiến quân ca" - Quốc ca chính thức của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam do nhạc sĩ tài hoa nào sáng tác?',
    visual: '⭐ Đoàn quân Việt Nam đi chung lòng cứu quốc', options: ['Nhạc sĩ Văn Cao', 'Nhạc sĩ Trịnh Công Sơn', 'Nhạc sĩ Phong Nhã', 'Nhạc sĩ Hoàng Vân'], correctAnswer: 'Nhạc sĩ Văn Cao',
    scaffoldHint: 'Nhạc sĩ Văn Cao sáng tác "Tiến quân ca" vào năm 1944; giai điệu hào hùng đã thôi thúc triệu con tim đứng lên giành độc lập!',
    funFact: 'Mỗi khi giai điệu Quốc ca vang lên, hàng triệu học sinh trên cả nước đều đứng nghiêm trang, hướng về cờ Tổ quốc với niềm tự hào khôn xiết!'
  },
  {
    id: 'am_adv5', stage: 5, difficulty: 'easy', title: 'Tranh Dân Gian Đông Hồ', opponentName: 'Nghệ Nhân Khắc Gỗ', opponentAvatar: '🖼️',
    questionText: 'Tranh dân gian Đông Hồ (Bắc Ninh) nổi tiếng với bức tranh "Đám cưới chuột" và "Lợn đàn" được in trên chất liệu đặc biệt nào?',
    visual: '🐷 Chú lợn có xoáy âm dương ngộ nghĩnh', options: ['Giấy điệp quét vỏ sò lấp lánh và màu sắc từ thiên nhiên', 'Vải lụa tơ tằm dệt kim', 'Giấy xi măng công nghiệp', 'Tấm nhựa mica tổng hợp'], correctAnswer: 'Giấy điệp quét vỏ sò lấp lánh và màu sắc từ thiên nhiên',
    scaffoldHint: 'Giấy điệp làm từ vỏ con điệp ở biển giã mịn trộn hồ nếp, quét lên giấy dó tạo ánh sáng lấp lánh như dát bạc!',
    funFact: 'Màu đỏ từ sỏi son, màu vàng từ hoa hòe, màu đen từ than lá tre, màu trắng từ vỏ điệp - 100% tinh hoa đất trời Việt Nam!'
  },
  {
    id: 'am_adv6', stage: 6, difficulty: 'easy', title: 'Luật Phối Cảnh Xa Gần', opponentName: 'Con Đường Hút Tầm Mắt', opponentAvatar: '🛣️',
    questionText: 'Trong mĩ thuật, luật phối cảnh xa gần (thấu thị) giúp tạo chiều sâu không gian như thế nào?',
    visual: '🌲 Hàng cây bên đường xa dần nhỏ lại', options: ['Vật ở gần nhìn to, rõ ràng; vật ở càng xa nhìn càng nhỏ và mờ nhạt dần', 'Vật ở xa vẽ to hơn vật ở gần', 'Tất cả các vật đều vẽ kích thước bằng nhau', 'Vật ở gần vẽ trong suốt'], correctAnswer: 'Vật ở gần nhìn to, rõ ràng; vật ở càng xa nhìn càng nhỏ và mờ nhạt dần',
    scaffoldHint: 'Quy tắc cơ bản: "Gần to - Xa nhỏ, Gần rõ - Xa mờ, Gần đậm - Xa nhạt" giúp bức tranh 2D sống động như không gian thực!',
    funFact: 'Luật phối cảnh được hoàn thiện từ thời kỳ Phục Hưng đã biến hội họa thành một môn khoa học thị giác đỉnh cao!'
  },
  {
    id: 'am_adv7', stage: 7, difficulty: 'easy', title: 'Hòa Sắc Tương Phản', opponentName: 'Vòng Thuần Sắc Mĩ Thuật', opponentAvatar: '🎡',
    questionText: 'Cặp màu nào sau đây là cặp màu TƯƠNG PHẢN bổ túc trực tiếp trên vòng thuần sắc, khi đặt cạnh nhau tạo ấn tượng thị giác mạnh mẽ?',
    visual: '🔴 🟢 Sắc hoa đỏ rực giữa vòm lá xanh', options: ['Đỏ và Xanh lá cây', 'Đỏ và Cam', 'Xanh lam và Xanh tím', 'Vàng và Vàng cam'], correctAnswer: 'Đỏ và Xanh lá cây',
    scaffoldHint: '3 cặp màu tương phản kinh điển đối diện nhau: Đỏ - Xanh lá, Vàng - Tím, Da cam - Xanh lam!',
    funFact: 'Tự nhiên sử dụng hòa sắc tương phản tuyệt đẹp: quả dâu tây đỏ giữa vòm lá xanh, hoa cúc vàng rực rỡ dưới bầu trời tím hoàng hôn!'
  },
  {
    id: 'am_adv8', stage: 8, difficulty: 'easy', title: 'Điêu Khắc & Nghệ Thuật 3D', opponentName: 'Tượng Điêu Khắc Bằng Đá', opponentAvatar: '🗿',
    questionText: 'Tác phẩm điêu khắc hoặc nặn tượng đất sét khác với bức tranh vẽ phẳng ở đặc điểm cốt lõi nào?',
    visual: '🏺 Chiếc bình gốm và bức tượng tròn', options: ['Có khối 3 chiều (chiều cao, chiều rộng, chiều sâu) và có thể ngắm nhìn từ mọi hướng', 'Chỉ nhìn được từ một mặt phẳng phía trước', 'Không có thể tích khối', 'Chỉ làm bằng giấy mỏng'], correctAnswer: 'Có khối 3 chiều (chiều cao, chiều rộng, chiều sâu) và có thể ngắm nhìn từ mọi hướng',
    scaffoldHint: 'Tranh vẽ là không gian 2D trên mặt phẳng; tượng điêu khắc là không gian 3D chiếm lĩnh thể tích thực trong đời sống!',
    funFact: 'Nghề gốm Bát Tràng (Hà Nội) với lịch sử hơn 700 năm là minh chứng rực rỡ cho nghệ thuật tạo hình đất nung Việt Nam!'
  },
  {
    id: 'am_adv9', stage: 9, difficulty: 'medium', title: 'Danh Nhân Âm Nhạc Cổ Điển', opponentName: 'Đàn Dương Cầm Hoàng Gia', opponentAvatar: '🎹',
    questionText: 'Nhà soạn nhạc thiên tài người Đức - tác giả bản giao hưởng số 5 định mệnh và bản Sonate Ánh Trăng là ai?',
    visual: '🎼 Giai điệu bất hủ của thế giới', options: ['Ludwig van Beethoven', 'Walt Disney', 'Leonardo da Vinci', 'Isaac Newton'], correctAnswer: 'Ludwig van Beethoven',
    scaffoldHint: 'Dù bị khiếm thính vào những năm cuối đời, Beethoven vẫn sáng tác nên những bản giao hưởng vĩ đại nhất lịch sử nhân loại!',
    funFact: 'Âm nhạc cổ điển của Mozart và Beethoven được khoa học chứng minh giúp kích thích tư duy logic và sóng não sáng tạo của trẻ em!'
  },
  {
    id: 'am_adv10', stage: 10, difficulty: 'medium', title: 'Di Sản Nhã Nhạc Cung Đình Huế', opponentName: 'Dàn Nhạc Cung Đình Trầm Hùng', opponentAvatar: '🏯🎶',
    questionText: 'Nhã nhạc Cung đình Huế - Di sản văn hóa phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh từng được biểu diễn ở đâu?',
    visual: '👑 Hoàng thành Huế cổ kính nguy nga', options: ['Trong các đại lễ cung đình triều Nguyễn uy nghiêm', 'Ở các lễ hội chợ quê thông thường', 'Trên các thuyền chài đánh cá', 'Ở rạp xiếc ngoài trời'], correctAnswer: 'Trong các đại lễ cung đình triều Nguyễn uy nghiêm',
    scaffoldHint: 'Nhã nhạc là thể loại âm nhạc cung đình tao nhã, chuẩn mực, sử dụng dàn nhạc lớn với biên chế kèn bóp, đàn tỳ bà, trống bản!',
    funFact: 'Nhã nhạc Cung đình Huế là đỉnh cao của nền âm nhạc cổ truyền bác học Việt Nam, kết tinh tinh hoa văn hóa ngàn năm!'
  },
  {
    id: 'am_adv11', stage: 11, difficulty: 'medium', title: 'Không Gian Văn Hóa Cồng Chiêng Tây Nguyên', opponentName: 'Ngọn Lửa Sử Thi Ba Na', opponentAvatar: '🔥🥁',
    questionText: 'Không gian văn hóa Cồng chiêng Tây Nguyên gắn liền với đời sống tâm linh và lễ hội nào của đồng bào Tây Nguyên?',
    visual: '🌲 Cồng chiêng ngân vang bên bếp lửa nhà rông', options: ['Lễ đâm trâu, Lễ mừng lúa mới và Lễ bỏ mả bên mái nhà rông', 'Lễ hội đua thuyền rồng trên sông Hồng', 'Lễ hội chọi trâu Đồ Sơn', 'Hội Lim Bắc Ninh'], correctAnswer: 'Lễ đâm trâu, Lễ mừng lúa mới và Lễ bỏ mả bên mái nhà rông',
    scaffoldHint: 'Tiếng cồng chiêng là ngôn ngữ kết nối con người với thần linh, đất trời và tổ tiên của đồng bào Tây Nguyên!',
    funFact: 'Mỗi chiếc chiêng, cồng đều được nghệ nhân gõ chỉnh âm chuẩn xác; bộ chiêng hoàn chỉnh là tài sản quý giá nhất của cả buôn làng!'
  },
  {
    id: 'am_adv12', stage: 12, difficulty: 'medium', title: 'Nốt Đen & Nốt Móc Đơn', opponentName: 'Phách Nhịp Đều Đặn', opponentAvatar: '🎵',
    questionText: 'Trong nhịp 2/4, một nốt Đen có giá trị trường độ bằng bao nhiêu nốt Móc đơn?',
    visual: '♩ = ♪ + ♪', options: ['Bằng 2 nốt Móc đơn (1 phách = 1/2 + 1/2 phách)', 'Bằng 4 nốt Móc đơn', 'Bằng 1 nốt Móc đơn', 'Bằng 8 nốt Móc đơn'], correctAnswer: 'Bằng 2 nốt Móc đơn (1 phách = 1/2 + 1/2 phách)',
    scaffoldHint: 'Nốt đen ngân dài 1 phách, mỗi nốt móc đơn ngân dài 1/2 phách; do đó 1 nốt đen có trường độ bằng đúng 2 nốt móc đơn!',
    funFact: 'Phép tính trường độ trong âm nhạc hoàn toàn tuân theo phép cộng phân số toán học: 1/2 + 1/2 = 1!'
  },
  {
    id: 'am_adv13', stage: 13, difficulty: 'medium', title: 'Tranh Sơn Mài Việt Nam Độc Bản', opponentName: 'Họa Sĩ Sơn Mài Truyền Thống', opponentAvatar: '🖌️✨',
    questionText: 'Nghệ thuật tranh sơn mài đỉnh cao của Việt Nam sử dụng chất liệu nhựa cây sơn tự nhiên kết hợp với gì để dát sáng lấp lánh?',
    visual: '🖼️ Bức tranh sơn mài óng ánh sắc vàng son', options: ['Vàng quỳ, bạc thếp, vỏ trứng và vỏ trai ốc', 'Sơn tường công nghiệp', 'Màu nước pha loãng', 'Phấn viết bảng'], correctAnswer: 'Vàng quỳ, bạc thếp, vỏ trứng và vỏ trai ốc',
    scaffoldHint: 'Họa sĩ mài tranh dưới làn nước sạch để các lớp vàng, bạc, vỏ trứng phát lộ vẻ đẹp huyền ảo lộng lẫy dưới ánh sáng!',
    funFact: 'Tranh sơn mài Việt Nam là một trong những đóng góp độc đáo nhất của hội họa nước ta cho nền mỹ thuật thế giới!'
  },
  {
    id: 'am_adv14', stage: 14, difficulty: 'medium', title: 'Đàn Tranh Mười Sáu Dây', opponentName: 'Tiếng Đàn Tranh Trong Trẻo', opponentAvatar: '🪕',
    questionText: 'Đàn Tranh (Thập lục cầm) cổ truyền của Việt Nam có bao nhiêu dây đàn và người chơi dùng ngón tay đeo gì để gảy?',
    visual: '🎋 Cây đàn tranh mộc mạc thanh thoát', options: ['16 dây đàn và người chơi đeo móng gảy giả ở ngón tay', 'Chỉ có 2 dây đàn', 'Có 88 phím bấm', 'Dùng dùi gỗ gõ vào dây'], correctAnswer: '16 dây đàn và người chơi đeo móng gảy giả ở ngón tay',
    scaffoldHint: 'Móng gảy bằng mai rùa hoặc kim loại giúp gảy nên những nốt nhạc rung, nhấn, vuốt lả lướt ngọt ngào!',
    funFact: 'Đàn Tranh có các nhạn đàn (con nhạn) bằng gỗ nâng đỡ từng dây đàn, có thể xê dịch để đổi cung bậc thang âm ngũ cung!'
  },
  {
    id: 'am_adv15', stage: 15, difficulty: 'medium', title: 'Tranh Hàng Trống & Tranh Kim Hoàng', opponentName: 'Bức Tranh Dân Gian Thăng Long', opponentAvatar: '📜🎨',
    questionText: 'Bức tranh dân gian Hàng Trống (Hà Nội) nổi tiếng với kỹ thuật tô màu "vờn màu" độc đáo nhất là bức tranh nào?',
    visual: '🐅 Tranh Ngũ Hổ uy nghi lẫm liệt', options: ['Bức tranh "Ngũ Hổ" (Năm ông hổ uy nghi năm sắc màu)', 'Tranh Chăn trâu thổi sáo', 'Tranh Đám cưới chuột', 'Tranh Hứng dừa'], correctAnswer: 'Bức tranh "Ngũ Hổ" (Năm ông hổ uy nghi năm sắc màu)',
    scaffoldHint: 'Kỹ thuật vờn màu bút lông: một nửa ngọn bút chấm màu, một nửa ngọn bút chấm nước lã tạo độ chuyển đậm nhạt kỳ ảo!',
    funFact: 'Bức tranh Ngũ Hổ thể hiện 5 vị thần hổ cai quản năm phương trời theo thuyết Ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ)!'
  },
  {
    id: 'am_adv16', stage: 16, difficulty: 'hard', title: 'Dấu Lặng Trong Âm Nhạc', opponentName: 'Khoảng Lặng Bình Yên', opponentAvatar: '𝄽',
    questionText: 'Trong bản nhạc, dấu lặng (như dấu lặng đen, dấu lặng trắng) có ý nghĩa bắt buộc nào?',
    visual: '🤫 Khoảng lặng tạm dừng âm thanh', options: ['Tạm ngừng phát ra âm thanh trong khoảng thời gian bằng trường độ tương ứng', 'Hát to hơn gấp đôi', 'Hát thật nhanh lướt qua', 'Bỏ qua không cần quan tâm'], correctAnswer: 'Tạm ngừng phát ra âm thanh trong khoảng thời gian bằng trường độ tương ứng',
    scaffoldHint: 'Dấu lặng là khoảng im lặng nghệ thuật: im lặng để tạo điểm nhấn hồi hộp hoặc chuẩn bị cho giai điệu bùng nổ tiếp theo!',
    funFact: 'Nhạc sĩ Mozart từng nói: "Âm nhạc không chỉ nằm trong các nốt nhạc, mà còn nằm trong những khoảng lặng giữa chúng"!'
  },
  {
    id: 'am_adv17', stage: 17, difficulty: 'hard', title: 'Điêu Khắc Gỗ Dân Gian Đình Làng', opponentName: 'Mái Đình Cổ Kính', opponentAvatar: '🏯',
    questionText: 'Nghệ thuật chạm khắc gỗ đình làng cổ Việt Nam (thế kỷ 16 - 18) miêu tả những cảnh sinh hoạt dân dã nào?',
    visual: '🪵 Bức chạm rồng và người cưỡi ngựa tinh xảo', options: ['Cảnh đấu vật, đi cày, chèo thuyền, mẹ bồng con và cảnh hội làng tưng bừng', 'Cảnh chiến tranh tàn khốc', 'Hình ảnh các cỗ máy hiện đại', 'Chỉ chạm khắc chữ nho'], correctAnswer: 'Cảnh đấu vật, đi cày, chèo thuyền, mẹ bồng con và cảnh hội làng tưng bừng',
    scaffoldHint: 'Nghệ nhân xưa đã thổi hồn người nông dân chân lấm tay bùn vào từng thớ gỗ mít, tạo nên những kiệt tác điêu khắc dân gian sống động!',
    funFact: 'Hình tượng con rồng thời Lê Trung Hưng trong đình làng Việt Nam rất gần gũi, vui nhộn và thân thiện với nhân dân lao động!'
  },
  {
    id: 'am_adv18', stage: 18, difficulty: 'hard', title: 'Thần Đồng Âm Nhạc W. A. Mozart', opponentName: 'Cây Đàn Harpsichord Cổ Điển', opponentAvatar: '🎹✨',
    questionText: 'Nhà soạn nhạc người Áo Wolfgang Amadeus Mozart nổi tiếng với tài năng thần đồng biểu diễn và sáng tác từ mấy tuổi?',
    visual: '🧒 Cậu bé Mozart bên cây đàn dương cầm', options: ['Từ khi mới 5 tuổi đã sáng tác những khúc nhạc đầu tiên', 'Từ năm 30 tuổi mới bắt đầu học đàn', 'Khi về già mới biết chơi nhạc', 'Từ năm 20 tuổi'], correctAnswer: 'Từ khi mới 5 tuổi đã sáng tác những khúc nhạc đầu tiên',
    scaffoldHint: 'Mozart có đôi tai cảm âm hoàn hảo tuyệt đối; ông đã để lại cho nhân loại hơn 600 kiệt tác giao hưởng và opera lừng danh thế giới!',
    funFact: 'Hiệu ứng âm nhạc Mozart (Mozart Effect) giúp tăng cường khả năng tư duy không gian và sự tập trung của học sinh!'
  },
  {
    id: 'am_adv19', stage: 19, difficulty: 'hard', title: 'Chất Liệu Tranh Màu Nước (Watercolor)', opponentName: 'Hộp Màu Nước Trong Trẻo', opponentAvatar: '🎨💧',
    questionText: 'Đặc tính nghệ thuật nổi bật nhất của tranh vẽ bằng chất liệu Màu nước là gì?',
    visual: '🖌️ Vệt màu nước loang mềm mại trong veo', options: ['Màu sắc trong trẻo, mỏng nhẹ, có độ loang mềm mại và hòa quyện cùng nước', 'Màu dày đặc như bột trét tường', 'Màu không tan trong nước', 'Màu chỉ có duy nhất màu đen'], correctAnswer: 'Màu sắc trong trẻo, mỏng nhẹ, có độ loang mềm mại và hòa quyện cùng nước',
    scaffoldHint: 'Màu nước khai thác ánh sáng phản chiếu từ bề mặt giấy trắng xuyên qua các lớp màu trong veo lung linh!',
    funFact: 'Vẽ màu nước đòi hỏi sự dứt khoát và nhanh tay vì vệt nước trên giấy khô rất nhanh tạo thành những đường loang kỳ ảo!'
  },
  {
    id: 'am_adv20', stage: 20, difficulty: 'hard', title: 'Đờn Ca Tài Tử Nam Bộ', opponentName: 'Nghệ Nhân Đờn Kìm', opponentAvatar: '🌴🪕',
    questionText: 'Loại hình nghệ thuật âm nhạc dân gian đặc sắc của vùng sông nước miền Tây Nam Bộ được UNESCO vinh danh là gì?',
    visual: '🛶 Khúc đờn ca tài tử trên sông nước Cửu Long', options: ['Đờn ca tài tử Nam Bộ', 'Ca trù thăng trầm', 'Hát Xoan Phú Thọ', 'Hát Then Tày Nùng'], correctAnswer: 'Đờn ca tài tử Nam Bộ',
    scaffoldHint: 'Dàn nhạc gồm đờn kìm (kìm kìm), đờn tranh, đờn cò, đờn bầu hòa tấu bản Dạ cổ hoài lang da diết!',
    funFact: 'Đờn ca tài tử ra đời từ cuối thế kỷ 19, là thú vui tao nhã của người dân Nam Bộ sau những giờ lao động trên sông nước miệt vườn!'
  },
  {
    id: 'am_adv21', stage: 21, difficulty: 'hard', title: 'Màu Bổ Túc & Màu Tương Đồng', opponentName: 'Vòng Màu Sắc Sảo', opponentAvatar: '🎡',
    questionText: 'Nhóm các màu đứng liền kề cạnh nhau trên vòng tròn màu sắc (như Vàng - Vàng cam - Cam) được gọi là gì?',
    visual: '🌈 Chuyển sắc êm dịu hài hòa', options: ['Màu tương đồng (Màu hài hòa êm dịu)', 'Màu tương phản chói gắt', 'Màu đối lập gay gắt', 'Màu trung tính'], correctAnswer: 'Màu tương đồng (Màu hài hòa êm dịu)',
    scaffoldHint: 'Màu tương đồng đứng cạnh nhau nên có chung một sắc thái màu gốc, tạo cảm giác chuyển tiếp êm ả và dễ chịu cho mắt!',
    funFact: 'Thiên nhiên lúc hoàng hôn sử dụng hòa sắc tương đồng tuyệt mỹ từ vàng, cam đến đỏ rực rỡ chân trời!'
  },
  {
    id: 'am_adv22', stage: 22, difficulty: 'hard', title: 'Nhịp Điệu Valse (Văn-xơ) 3/4', opponentName: 'Vũ Điệu Khiêu Vũ Hoàng Gia', opponentAvatar: '💃🕺',
    questionText: 'Điệu nhảy Valse (Van-xơ) nổi tiếng với nhịp điệu 3/4 có tính chất chuyển động như thế nào?',
    visual: '🎶 Nhịp phách [Mạnh - Nhẹ - Nhẹ]', options: ['Nhịp điệu dập dềnh, uyển chuyển, xoay tròn theo chu kỳ [1 Mạnh - 2 Nhẹ - 3 Nhẹ]', 'Nhịp dồn dập như hành quân', 'Nhịp giật cục gãy gọn', 'Nhịp đứt đoạn không đều'], correctAnswer: 'Nhịp điệu dập dềnh, uyển chuyển, xoay tròn theo chu kỳ [1 Mạnh - 2 Nhẹ - 3 Nhẹ]',
    scaffoldHint: 'Bản nhạc Valse nổi tiếng "Dòng sông Danube xanh" của Johann Strauss mang âm hưởng bồng bềnh như sóng nước xoay tròn!',
    funFact: 'Nhịp 3/4 được ví như bước chân khiêu vũ tao nhã của các hoàng tử và công chúa trong dạ hội hoàng gia châu Âu xưa!'
  },
  {
    id: 'am_adv23', stage: 23, difficulty: 'hard', title: 'Nghệ Thuật Gốm Sứ Bát Tràng', opponentName: 'Bàn Xoay Gốm Cổ Truyền', opponentAvatar: '🏺',
    questionText: 'Quy trình cơ bản để người thợ gốm Bát Tràng tạo ra một chiếc bình gốm hoa văn tinh xảo gồm những công đoạn nào?',
    visual: '🔥 Lò nung gốm rực lửa ngàn độ', options: ['Chuốt đất trên bàn xoay ➔ Tạo hình ➔ Vẽ men hoa văn ➔ Nung trong lò nhiệt độ cao', 'Đổ khuôn nhựa tổng hợp', 'Gọt đẽo từ khối đá vôi', 'Đúc bằng máy in kim loại'], correctAnswer: 'Chuốt đất trên bàn xoay ➔ Tạo hình ➔ Vẽ men hoa văn ➔ Nung trong lò nhiệt độ cao',
    scaffoldHint: 'Đất sét trắng qua bàn tay tài hoa trên bàn xoay, vẽ men lam truyền thống rồi nung ở 1.200°C tạo nên lớp men sứ bóng bẩy vĩnh cửu!',
    funFact: 'Làng gốm Bát Tràng bên bờ sông Hồng đã đỏ lửa hơn 700 năm, sản phẩm gốm men rạn, men lam nức tiếng năm châu!'
  },
  {
    id: 'am_adv24', stage: 24, difficulty: 'hard', title: 'Dàn Nhạc Giao Hưởng (Symphony Orchestra)', opponentName: 'Cây Đậy Chỉ Huy Nhạc Trưởng', opponentAvatar: '🎻🎺🥁',
    questionText: 'Dàn nhạc giao hưởng lớn nhất thế giới gồm có 4 bộ nhạc cụ chính nào hòa tấu cùng nhau?',
    visual: '🎼 Đại hòa tấu với hơn 80 nhạc công', options: ['Bộ dây (Violon), Bộ gỗ (Sáo, Kèn Oboe), Bộ đồng (Kèn Trumpet) và Bộ gõ (Trống Timpani)', 'Chỉ có đàn piano và ca sĩ', 'Chỉ toàn kèn đồng thổi to', 'Chỉ có trống gõ nhịp'], correctAnswer: 'Bộ dây (Violon), Bộ gỗ (Sáo, Kèn Oboe), Bộ đồng (Kèn Trumpet) và Bộ gõ (Trống Timpani)',
    scaffoldHint: 'Sự hòa quyện giữa tiếng êm dịu của bộ dây, trong trẻo của bộ gỗ, rực lửa của bộ đồng và vang rền của bộ gõ dưới sự chỉ huy của Nhạc trưởng!',
    funFact: 'Một dàn nhạc giao hưởng chuẩn quốc tế có thể quy tụ hơn 100 nhạc công biểu diễn hòa hợp chính xác đến từng phần trăm giây!'
  },
  {
    id: 'am_adv25', stage: 25, difficulty: 'hard', title: 'Bức Tranh "Thiếu Nữ Bên Hoa Huệ"', opponentName: 'Bảng Màu Sơn Dầu Việt Nam', opponentAvatar: '🖼️🪷',
    questionText: 'Kiệt tác tranh sơn dầu "Thiếu nữ bên hoa huệ" miêu tả nét đẹp thanh tao của người phụ nữ Việt Nam do danh họa nào vẽ?',
    visual: '👩 Tà áo dài trắng bên đóa hoa huệ trắng ngần', options: ['Họa sĩ Tô Ngọc Vân', 'Họa sĩ Bùi Xuân Phái', 'Họa sĩ Trần Văn Cẩn', 'Họa sĩ Nguyễn Phan Chánh'], correctAnswer: 'Họa sĩ Tô Ngọc Vân',
    scaffoldHint: 'Họa sĩ Tô Ngọc Vân vẽ bức tranh vào năm 1943; dáng ngồi nghiêng duyên dáng bên bình hoa huệ trắng là biểu tượng bất hủ của mỹ thuật Việt Nam!',
    funFact: 'Tác phẩm được công nhận là Bảo vật quốc gia của Việt Nam, tiêu biểu cho trường phái Mỹ thuật Đông Dương!'
  },
  {
    id: 'am_adv26', stage: 26, difficulty: 'hard', title: 'Hát Ca Trù - Di Sản Bác Học', opponentName: 'Phách Nhịp Ca Nương', opponentAvatar: '🎤🎋',
    questionText: 'Nghệ thuật ca hát cổ truyền thăng trầm với ca nương gõ phách, quan viên đánh trống chầu và kép đàn đáy gọi là gì?',
    visual: '🎶 Tiếng đàn đáy và tiếng gõ phách giòn tan', options: ['Nghệ thuật Hát Ca trù', 'Hát Chèo đồng bằng Bắc Bộ', 'Cải lương Nam Bộ', 'Hát bội Bình Định'], correctAnswer: 'Nghệ thuật Hát Ca trù',
    scaffoldHint: 'Ca trù là thể loại hát thơ đỉnh cao của tầng lớp trí thức xưa, đòi hỏi kỹ thuật lấy hơi, nhả chữ và gõ phách cực kỳ điêu luyện!',
    funFact: 'Cây đàn đáy của kép đàn trong Ca trù có cần đàn dài tới 1.6 mét với 3 dây tơ mềm mại phát ra âm thanh trầm ấm độc đáo!'
  },
  {
    id: 'am_adv27', stage: 27, difficulty: 'hard', title: 'Phố Phái Trong Hội Họa Việt Nam', opponentName: 'Mái Phố Cổ Rêu Phong', opponentAvatar: '🏘️',
    questionText: 'Danh họa Bùi Xuân Phái nổi tiếng trong lịch sử hội họa với những bức tranh vẽ đề tài gì làm say đắm lòng người?',
    visual: '🎨 Phố cổ Hà Nội với mái ngói thâm nâu rêu phong', options: ['Phố cổ Hà Nội (thường được gọi thân thương là "Phố Phái")', 'Cảnh núi rừng Tây Bắc hiểm trở', 'Cảnh sa mạc cát bỏng', 'Cảnh biển đảo hiện đại'], correctAnswer: 'Phố cổ Hà Nội (thường được gọi thân thương là "Phố Phái")',
    scaffoldHint: 'Những mái ngói rêu phong, bức tường loang lổ và dáng người gầy guộc trên con phố nhỏ Hà Nội qua nét cọ Bùi Xuân Phái đã trở thành huyền thoại!',
    funFact: 'Tên tuổi của ông gắn liền với thủ đô đến mức người dân quen gọi những góc phố cổ kính trầm mặc là "Phố Phái"!'
  },
  {
    id: 'am_adv28', stage: 28, difficulty: 'hard', title: 'Bài Hát "Bụi Phấn" Ơn Thầy Cô', opponentName: 'Bụi Phấn Rơi Vương Tóc Thầy', opponentAvatar: '👨‍🏫',
    questionText: 'Lời bài hát xúc động: "Khi thầy viết bảng, bụi phấn rơi rơi. Có hạt bụi nào, rơi trên bục giảng..." do hai nhạc sĩ nào sáng tác?',
    visual: '📝 Bục giảng thân thương và mái tóc thầy bạc', options: ['Nhạc sĩ Vũ Hoàng và Lê Văn Lộc', 'Nhạc sĩ Phạm Tuyên', 'Nhạc sĩ Văn Cao', 'Nhạc sĩ Hoàng Long'], correctAnswer: 'Nhạc sĩ Vũ Hoàng và Lê Văn Lộc',
    scaffoldHint: 'Bài hát "Bụi phấn" ra đời năm 1982, trở thành khúc ca tri ân bất hủ của hàng triệu thế hệ học trò Việt Nam gửi tới thầy cô giáo!',
    funFact: 'Mỗi dịp 20/11, giai điệu da diết của "Bụi phấn" lại ngân vang khắp các sân trường trên mọi miền Tổ quốc!'
  },
  {
    id: 'am_adv29', stage: 29, difficulty: 'hard', title: 'Nghệ Thuật Trúc Chỉ Việt Nam', opponentName: 'Giấy Trúc Chỉ Ánh Sáng', opponentAvatar: '🎍💡',
    questionText: 'Nghệ thuật đồ họa Trúc Chỉ (Huế) là sự kết hợp sáng tạo độc đáo giữa nghề làm giấy truyền thống từ tre trúc với yếu tố nào?',
    visual: '🖼️ Hoa sen Trúc Chỉ phát sáng huyền ảo dưới ánh đèn', options: ['Ánh sáng xuyên thấu qua các lớp xơ sợi tre tạo hiệu ứng tranh phát sáng lung linh', 'Dùng máy in kỹ thuật số', 'Dùng mực dạ quang hóa học', 'Khắc laser trên kim loại'], correctAnswer: 'Ánh sáng xuyên thấu qua các lớp xơ sợi tre tạo hiệu ứng tranh phát sáng lung linh',
    scaffoldHint: 'Dùng áp lực nước vẽ lên lớp bột tre còn ướt; khi khô và đặt dưới ánh đèn, các họa tiết hoa sen tỏa sáng rực rỡ huyền ảo!',
    funFact: 'Trúc Chỉ là dòng nghệ thuật giấy đương đại thuần Việt, mang hồn cốt của cây tre và tinh thần thanh cao của dân tộc Việt Nam!'
  },
  {
    id: 'am_adv30', stage: 30, difficulty: 'boss', title: 'Bậc Thầy Nghệ Thuật & Âm Nhạc (TRÙM VĂN HÓA NGHỆ THUẬT 3-4-5)', opponentName: 'Nhạc Trưởng Đại Hòa Tấu Vũ Trụ', opponentAvatar: '🎻🎭🎨👑✨',
    questionText: 'Nghệ thuật âm nhạc và mĩ thuật đỉnh cao đóng góp sứ mệnh vĩ đại nào cho nền văn minh nhân loại?',
    visual: '🌟 Tinh hoa di sản nghệ thuật ngàn năm', options: ['Kết nối trái tim con người vượt qua mọi ranh giới ngôn ngữ, lưu giữ hồn thiêng văn hóa và thắp sáng cái đẹp bất diệt', 'Chỉ để giải trí thoáng qua rồi quên', 'Chỉ dành riêng cho giới quý tộc giàu có', 'Làm cho con người xa rời thực tế'], correctAnswer: 'Kết nối trái tim con người vượt qua mọi ranh giới ngôn ngữ, lưu giữ hồn thiêng văn hóa và thắp sáng cái đẹp bất diệt',
    scaffoldHint: 'Âm nhạc và hội họa là ngôn ngữ chung của cả nhân loại; nơi nào có cái đẹp và âm thanh réo rắt, nơi đó có sự sống diệu kỳ!',
    funFact: 'Chúc mừng bé đã trở thành "Đại Sứ Nghệ Thuật Toàn Năng"! Hãy để tâm hồn em luôn ngân vang những giai điệu yêu thương và rực rỡ sắc màu cuộc sống!'
  }
];
