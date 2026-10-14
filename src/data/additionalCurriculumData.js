// Ngân hàng câu đố bổ sung chuẩn GDPT 2018 (Tiểu Học Lớp 1 - 5)
// Mức 1: Đạo Đức, Tin Học & Công Nghệ Nhí, Âm Nhạc & Mĩ Thuật, Kỹ Năng Trải Nghiệm (40 Ải)
// Mức 2: Tin Học Thuật Toán, Công Nghệ Sáng Chế, Đạo Đức Công Dân, Âm Nhạc & Mĩ Thuật Nâng Cao (40 Ải)

// ==========================================
// 1. VƯỜN ƯƠM ĐẠO ĐỨC & KỸ NĂNG SỐNG (LỚP 1 - 2)
// ==========================================
export const ethicsLessons = [
  {
    id: 'eth1', stage: 1, difficulty: 'easy', title: 'Lời Chào Lễ Phép', opponentName: 'Gấu Bông Chăm Ngoan', opponentAvatar: '🧸',
    questionText: 'Khi gặp thầy cô giáo hoặc người lớn tuổi trong trường, em nên làm gì?',
    visual: '🏫 Gặp thầy cô giáo ở sân trường', options: ['Khoanh tay lễ phép cúi đầu chào', 'Chạy thật nhanh qua mặt', 'Giả vờ không nhìn thấy', 'Đứng im nhìn không nói gì'], correctAnswer: 'Khoanh tay lễ phép cúi đầu chào',
    scaffoldHint: 'Lời chào lễ phép thể hiện sự tôn trọng, lòng biết ơn và nét đẹp thanh lịch của học sinh chăm ngoan!',
    funFact: 'Lời chào như bông hoa thơm, giúp mọi người đều cảm thấy ấm áp và yêu quý em nhiều hơn!'
  },
  {
    id: 'eth2', stage: 2, difficulty: 'easy', title: 'Cảm Ơn & Xin Lỗi', opponentName: 'Mèo Con Dễ Thương', opponentAvatar: '🐱',
    questionText: 'Khi vô tình va phải bạn làm rơi hộp bút, hành động đúng đắn nhất của em là gì?',
    visual: '✏️ Hộp bút của bạn bị rơi xuống sàn', options: ['Nói lời xin lỗi chân thành và nhặt bút giúp bạn', 'Bỏ chạy thật nhanh', 'Đổ lỗi tại bạn đứng chắn đường', 'Cười lớn rồi bỏ đi'], correctAnswer: 'Nói lời xin lỗi chân thành và nhặt bút giúp bạn',
    scaffoldHint: 'Dũng cảm nhận lỗi và nói lời xin lỗi giúp tình bạn luôn gắn kết và bền chặt!',
    funFact: '"Cảm ơn" và "Xin lỗi" là hai chìa khóa vàng giúp em mở cửa trái tim của tất cả mọi người!'
  },
  {
    id: 'eth3', stage: 3, difficulty: 'easy', title: 'Hiếu Thảo Với Ông Bà Cha Mẹ', opponentName: 'Thỏ Con Chăm Chỉ', opponentAvatar: '🐰',
    questionText: 'Để thể hiện lòng hiếu thảo, khi ở nhà em nên giúp đỡ cha mẹ việc gì phù hợp với lứa tuổi?',
    visual: '🏡 Gia đình quây quần ấm cúng', options: ['Gấp quần áo, nhặt rau và dọn dẹp đồ chơi', 'Ngồi chơi game cả ngày không giúp gì', 'Đòi bố mẹ mua đồ chơi đắt tiền', 'Vứt rác bừa bãi ra sàn nhà'], correctAnswer: 'Gấp quần áo, nhặt rau và dọn dẹp đồ chơi',
    scaffoldHint: 'Làm những việc nhỏ vừa sức giúp đỡ cha mẹ là cách tuyệt vời nhất để bày tỏ lòng hiếu thảo!',
    funFact: 'Mỗi nụ cười của cha mẹ khi thấy con tự giác làm việc nhà là món quà vô giá nhất!'
  },
  {
    id: 'eth4', stage: 4, difficulty: 'easy', title: 'Nhường Nhịn & Chia Sẻ', opponentName: 'Cún Con Thân Thiện', opponentAvatar: '🐶',
    questionText: 'Khi em có đồ chơi đẹp và bạn muốn chơi cùng, em nên ứng xử thế nào?',
    visual: '🧩 Bộ đồ chơi xếp hình rực rỡ', options: ['Vui vẻ rủ bạn cùng chơi chung', 'Giấu đồ chơi đi không cho ai mượn', 'Hét to đuổi bạn đi chỗ khác', 'Đòi bạn phải cho kẹo mới cho chơi'], correctAnswer: 'Vui vẻ rủ bạn cùng chơi chung',
    scaffoldHint: 'Chia sẻ niềm vui sẽ nhân đôi niềm vui, chơi cùng bạn bè sẽ giúp em có thêm nhiều kỷ niệm đẹp!',
    funFact: 'Học sinh biết chia sẻ đồ chơi luôn là những người bạn được yêu mến nhất trong lớp học!'
  },
  {
    id: 'eth5', stage: 5, difficulty: 'medium', title: 'Giữ Trật Tự Nơi Công Cộng', opponentName: 'Sóc Nâu Tỉ Mỉ', opponentAvatar: '🐿️',
    questionText: 'Khi đang ở trong thư viện trường hoặc bệnh viện, em cần tuân thủ quy tắc nào?',
    visual: '📚 Góc đọc sách yên tĩnh tại thư viện', options: ['Đi nhẹ, nói khẽ và giữ trật tự', 'Hò hét và rượt đuổi nhau', 'Bật nhạc điện thoại to hết cỡ', 'Vứt vỏ kẹo ra bàn đọc sách'], correctAnswer: 'Đi nhẹ, nói khẽ và giữ trật tự',
    scaffoldHint: 'Giữ trật tự nơi công cộng thể hiện sự tôn trọng không gian chung và quyền được yên tĩnh của người khác!',
    funFact: 'Hành vi văn minh "Đi nhẹ, nói khẽ" là nét đẹp của học sinh thế hệ mới!'
  },
  {
    id: 'eth6', stage: 6, difficulty: 'medium', title: 'Đức Tính Thật Thà', opponentName: 'Hươu Con Lương Thiện', opponentAvatar: '🦌',
    questionText: 'Nhặt được chiếc ví tiền hoặc đồ dùng của bạn rơi trên sân trường, em sẽ làm gì?',
    visual: '👛 Chiếc ví tiền ai đó đánh rơi', options: ['Báo ngay và gửi lại cho thầy cô giáo hoặc bác bảo vệ', 'Bỏ vào túi áo mang về nhà', 'Chia tiền cho bạn bè tiêu xài', 'Lặng lẽ vứt vào sọt rác'], correctAnswer: 'Báo ngay và gửi lại cho thầy cô giáo hoặc bác bảo vệ',
    scaffoldHint: 'Thật thà, trung thực là đức tính quý giá nhất của con người. "Nhặt được của rơi, trả người đánh mất"!',
    funFact: 'Người trung thực luôn nhận được sự tin cậy, tôn trọng và yêu quý từ tất cả thầy cô và bạn bè!'
  },
  {
    id: 'eth7', stage: 7, difficulty: 'medium', title: 'Giữ Lời Hứa', opponentName: 'Họa Mi Nhỏ Nhẹ', opponentAvatar: '🐦',
    questionText: 'Em đã hứa với bạn chiều nay cùng nhau đến thư viện đọc sách, em nên làm gì?',
    visual: '⏰ Đồng hồ điểm giờ hẹn', options: ['Đến đúng giờ theo lời đã hứa', 'Ngủ quên và không cần báo cho bạn', 'Đi chơi chỗ khác bỏ mặc bạn chờ', 'Hẹn cho vui chứ không đi'], correctAnswer: 'Đến đúng giờ theo lời đã hứa',
    scaffoldHint: 'Giữ lời hứa chứng tỏ em là người đáng tin cậy và biết tôn trọng thời gian của người khác!',
    funFact: 'Người xưa có câu "Chữ tín quý hơn vàng", giữ lời hứa giúp em xây dựng tình bạn bền vững!'
  },
  {
    id: 'eth8', stage: 8, difficulty: 'hard', title: 'Tự Giác Học Tập', opponentName: 'Cú Thông Thái Nhí', opponentAvatar: '🦉',
    questionText: 'Buổi tối trước khi đi ngủ, việc làm nào thể hiện tinh thần tự giác chuẩn bị cho ngày học mới?',
    visual: '🎒 Chiếc cặp sách ngay ngắn trên bàn', options: ['Xem thời khóa biểu và tự sắp xếp sách vở, bút thước vào cặp', 'Để mẹ phải nhắc nhở và chuẩn bị hộ', 'Cứ đi ngủ sáng mai tính sau', 'Chơi điện tử đến khuya quên cả soạn bài'], correctAnswer: 'Xem thời khóa biểu và tự sắp xếp sách vở, bút thước vào cặp',
    scaffoldHint: 'Tự giác chuẩn bị đồ dùng học tập giúp em rèn luyện tính tự lập, không bao giờ lo quên sách vở!',
    funFact: 'Thói quen tự lập từ nhỏ chính là bệ phóng giúp em trở thành người thành công trong tương lai!'
  },
  {
    id: 'eth9', stage: 9, difficulty: 'hard', title: 'An Toàn Giao Thông Cho Bé', opponentName: 'Chú Cảnh Sát Giao Thông Nhí', opponentAvatar: '👮‍♂️',
    questionText: 'Khi được bố mẹ chở đi học bằng xe máy, quy định an toàn bắt buộc dành cho em là gì?',
    visual: '🛵 Chiếc xe máy trên đường phố', options: ['Đội mũ bảo hiểm cài quai đúng cách và ôm chặt người lái', 'Không cần đội mũ bảo hiểm vì gần nhà', 'Đứng nhún nhảy trên yên xe', 'Thò tay đùa nghịch với xe bên cạnh'], correctAnswer: 'Đội mũ bảo hiểm cài quai đúng cách và ôm chặt người lái',
    scaffoldHint: 'Mũ bảo hiểm bảo vệ bộ não quý giá của em trước những va chạm bất ngờ khi tham gia giao thông!',
    funFact: 'Thông điệp "Đội mũ bảo hiểm - Trọn tình cha mẹ" là hành động bảo vệ sự sống thân yêu của bé!'
  },
  {
    id: 'eth10', stage: 10, difficulty: 'boss', title: 'Trái Tim Yêu Thương & Lễ Phép (TRÙM ĐẠO ĐỨC NHÍ)', opponentName: 'Thần Nhân Ái & Lễ Kính', opponentAvatar: '👑💖✨',
    questionText: 'Điều gì tạo nên một người học sinh gương mẫu, được thầy yêu bạn mến nhất?',
    visual: '🌟 Ngôi sao Đạo Đức sáng ngời', options: ['Lễ phép, hiếu thảo, trung thực, chăm chỉ và luôn yêu thương giúp đỡ mọi người', 'Chỉ cần học giỏi điểm cao nhưng hay kiêu ngạo', 'Chỉ chơi với bạn giàu có', 'Thích bắt nạt bạn bè yếu hơn'], correctAnswer: 'Lễ phép, hiếu thảo, trung thực, chăm chỉ và luôn yêu thương giúp đỡ mọi người',
    scaffoldHint: 'Bác Hồ dạy: "Có tài mà không có đức là người vô dụng". Đạo đức tốt là nền tảng của mọi tài năng!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Bé Ngoan Toàn Năng"! Trái tim nhân ái của bé làm bừng sáng cả thế giới!'
  }
];

// ==========================================
// 2. ĐẢO TIN HỌC & CÔNG NGHỆ NHÍ (LỚP 1 - 2)
// ==========================================
export const informaticsTechLessons = [
  {
    id: 'it1', stage: 1, difficulty: 'easy', title: 'Bốn Bộ Phận Máy Tính', opponentName: 'Chuột Máy Tính Vui Vẻ', opponentAvatar: '🖱️',
    questionText: 'Máy tính để bàn gồm có 4 bộ phận chính nào?',
    visual: '🖥️ Bộ máy tính để bàn thân thuộc', options: ['Màn hình, thân máy, bàn phím, chuột', 'Màn hình, bàn là, quạt, bút chì', 'Bàn phím, chuột, ti vi, ấm nước', 'Thân máy, cục tẩy, sách giáo khoa, loa'], correctAnswer: 'Màn hình, thân máy, bàn phím, chuột',
    scaffoldHint: 'Màn hình để xem, thân máy (CPU) để xử lý, bàn phím để gõ chữ và chuột để bấm chọn!',
    funFact: 'Thân máy tính được ví như bộ não thông minh, chứa các bộ vi xử lý siêu tốc độ!'
  },
  {
    id: 'it2', stage: 2, difficulty: 'easy', title: 'Cách Cầm Chuột Đúng Chuẩn', opponentName: 'Bàn Phím Gõ Nhanh', opponentAvatar: '⌨️',
    questionText: 'Khi sử dụng chuột máy tính bằng tay phải, ngón tay nào dùng để bấm nút chuột trái?',
    visual: '🖐️ Bàn tay đặt trên chuột máy tính', options: ['Ngón trỏ', 'Ngón cái', 'Ngón út', 'Ngón áp út'], correctAnswer: 'Ngón trỏ',
    scaffoldHint: 'Ngón trỏ đặt lên nút chuột trái, ngón giữa đặt lên nút chuột phải, lòng bàn tay ôm nhẹ lưng chuột!',
    funFact: 'Con chuột máy tính đầu tiên trên thế giới được làm bằng... gỗ và chỉ có đúng một nút bấm!'
  },
  {
    id: 'it3', stage: 3, difficulty: 'easy', title: 'Tư Thế Ngồi Học Máy Tính', opponentName: 'Ghế Công Thái Học Nhí', opponentAvatar: '🪑',
    questionText: 'Tư thế ngồi trước máy tính nào sau đây là chuẩn khoa học giúp bé không bị mỏi lưng và cong vẹo cột sống?',
    visual: '🧍 Bé ngồi học ngay ngắn', options: ['Lưng thẳng, mắt nhìn ngang tầm màn hình, chân chạm đất', 'Nằm trườn ra bàn khi gõ phím', 'Ngồi cong lưng ghé sát mắt vào màn hình', 'Vắt chân lên bàn khi xem video'], correctAnswer: 'Lưng thẳng, mắt nhìn ngang tầm màn hình, chân chạm đất',
    scaffoldHint: 'Giữ lưng thẳng tựa vào thành ghế, khoảng cách từ mắt đến màn hình khoảng 50 - 70 cm!',
    funFact: 'Ngồi đúng tư thế không chỉ bảo vệ cột sống mà còn giúp hơi thở đều đặn và não bộ sáng suốt hơn!'
  },
  {
    id: 'it4', stage: 4, difficulty: 'easy', title: 'Quy Tắc 20-20-20 Bảo Vệ Mắt', opponentName: 'Kính Mắt Thần Kỳ', opponentAvatar: '👓',
    questionText: 'Quy tắc 20-20-20 bảo vệ mắt khi xem màn hình điện tử khuyên em điều gì?',
    visual: '👁️ Đôi mắt sáng khỏe của bé', options: ['Cứ sau 20 phút nhìn màn hình, hãy nhìn xa 20 feet (6 mét) trong 20 giây', 'Xem liên tục 20 tiếng không nghỉ', 'Nhắm mắt ngủ 20 phút rồi xem tiếp', 'Chớp mắt 20 lần thật mạnh'], correctAnswer: 'Cứ sau 20 phút nhìn màn hình, hãy nhìn xa 20 feet (6 mét) trong 20 giây',
    scaffoldHint: 'Quy tắc 20-20-20 là tiêu chuẩn quốc tế giúp cơ mắt được thư giãn, chống khô mắt và cận thị học đường!',
    funFact: 'Nhìn ra cây xanh ngoài cửa sổ trong 20 giây giúp mắt bé tươi mát và giảm căng thẳng tức thì!'
  },
  {
    id: 'it5', stage: 5, difficulty: 'medium', title: 'An Toàn Điện Cho Bé', opponentName: 'Tia Chớp Cảnh Báo', opponentAvatar: '⚡',
    questionText: 'Để phòng tránh điện giật nguy hiểm, điều nào sau đây em TUYỆT ĐỐI KHÔNG được làm?',
    visual: '🔌 Ổ cắm điện trong nhà', options: ['Dùng tay ướt cắm phích điện hoặc chọc vật nhọn vào ổ điện', 'Nhờ người lớn cắm hộ dây sạc máy tính', 'Tránh xa các cột điện khi trời mưa bão', 'Không kéo giật dây điện khi rút phích cắm'], correctAnswer: 'Dùng tay ướt cắm phích điện hoặc chọc vật nhọn vào ổ điện',
    scaffoldHint: 'Nước dẫn điện rất mạnh! Tuyệt đối không chạm vào thiết bị điện khi tay ướt hoặc chọc que kim loại vào ổ điện!',
    funFact: 'Dòng điện dân dụng 220V rất mạnh. Luôn luôn nhờ cha mẹ hoặc thầy cô cắm điện giúp nhé!'
  },
  {
    id: 'it6', stage: 6, difficulty: 'medium', title: 'Đồ Dùng Công Nghệ Quanh Em', opponentName: 'Quạt Máy Mát Lành', opponentAvatar: '🌀',
    questionText: 'Thiết bị nào trong gia đình sử dụng điện để tạo ra luồng gió mát xua tan cơn nóng?',
    visual: '💨 Làn gió mát lành ngày hè', options: ['Chiếc quạt điện', 'Chiếc tủ lạnh', 'Chiếc nồi cơm điện', 'Chiếc bàn là'], correctAnswer: 'Chiếc quạt điện',
    scaffoldHint: 'Cánh quạt quay nhanh nhờ động cơ điện biến đổi điện năng thành cơ năng tạo gió mát!',
    funFact: 'Quạt điện được phát minh từ thế kỷ 19 và trở thành người bạn thân thiết của mọi gia đình Việt Nam!'
  },
  {
    id: 'it7', stage: 7, difficulty: 'medium', title: 'Dụng Cụ Thủ Công An Toàn', opponentName: 'Kéo Thủ Công Nhí', opponentAvatar: '✂️',
    questionText: 'Khi làm thủ công cắt dán giấy màu, em nên dùng loại kéo nào để đảm bảo an toàn tuyệt đối?',
    visual: '📄 Giấy màu và hồ dán thủ công', options: ['Kéo học sinh đầu bo tròn an toàn', 'Kéo cắt tỉa cành cây sắc nhọn', 'Dao rọc giấy cỡ lớn', 'Kéo cắt kim loại'], correctAnswer: 'Kéo học sinh đầu bo tròn an toàn',
    scaffoldHint: 'Kéo đầu tròn được thiết kế riêng cho học sinh tiểu học, giúp bé cắt giấy dễ dàng mà không sợ đâm vào tay!',
    funFact: 'Gấp giấy Origami Nhật Bản kết hợp cắt dán thủ công giúp rèn luyện đôi bàn tay khéo léo và trí tưởng tượng không gian!'
  },
  {
    id: 'it8', stage: 8, difficulty: 'hard', title: 'Tư Duy Thuật Toán Hình Ảnh', opponentName: 'Chú Thỏ Lạc Đường', opponentAvatar: '🐇',
    questionText: 'Chú thỏ muốn đến củ cà rốt: thỏ đang đứng nhìn về phía trước, củ cà rốt ở bên phải thỏ 2 bước. Lệnh nào đúng?',
    visual: '🥕 Củ cà rốt ngon lành phía bên phải', options: ['Quay phải ➔ Đi thẳng 2 bước', 'Đi lùi 2 bước ➔ Quay trái', 'Đi thẳng 5 bước ➔ Nhảy cao', 'Quay trái ➔ Đi lùi 1 bước'], correctAnswer: 'Quay phải ➔ Đi thẳng 2 bước',
    scaffoldHint: 'Thuật toán là chuỗi các bước rõ ràng theo thứ tự: trước tiên quay đúng hướng, sau đó bước đi đến đích!',
    funFact: 'Đây chính là bước khởi đầu của lập trình robot: hướng dẫn máy móc thực hiện từng bước chính xác!'
  },
  {
    id: 'it9', stage: 9, difficulty: 'hard', title: 'Phương Tiện Giao Thông', opponentName: 'Máy Bay Tàu Lượn', opponentAvatar: '✈️',
    questionText: 'Phương tiện công nghệ nào di chuyển trên đường hàng không giúp con người đi vòng quanh thế giới nhanh nhất?',
    visual: '☁️ Bầu trời xanh bao la', options: ['Máy bay', 'Tàu hỏa chạy trên đường ray', 'Tàu thủy vượt sóng biển', 'Xe buýt công cộng'], correctAnswer: 'Máy bay',
    scaffoldHint: 'Máy bay có động cơ phản lực cực mạnh và cánh khí động học nâng đỡ phi cơ bay vút trên những tầng mây!',
    funFact: 'Máy bay thương mại hiện đại có thể bay với tốc độ hơn 900 km/h, nhanh gấp 20 lần xe đạp!'
  },
  {
    id: 'it10', stage: 10, difficulty: 'boss', title: 'Robot Thông Thái (TRÙM CÔNG NGHỆ NHÍ)', opponentName: 'Robot Titan AI Nhí', opponentAvatar: '🤖⚡👑',
    questionText: 'Công nghệ thông tin và máy tính được sinh ra với sứ mệnh thiêng liêng nhất là gì?',
    visual: '🌐 Thế giới công nghệ kết nối yêu thương', options: ['Giúp con người học tập, làm việc hiệu quả và kết nối tình yêu thương toàn cầu', 'Để trẻ em cày game suốt ngày đêm', 'Để thay thế hoàn toàn tình cảm gia đình', 'Làm cho con người lười biếng vận động'], correctAnswer: 'Giúp con người học tập, làm việc hiệu quả và kết nối tình yêu thương toàn cầu',
    scaffoldHint: 'Công nghệ là công cụ hỗ trợ tuyệt vời để học tập mở mang tri thức, chứ không phải để nghiện game quên đời thực!',
    funFact: 'Chúc mừng bé đã trở thành "Hiệp Sĩ Công Nghệ Nhí 4.0"! Dùng máy tính thông minh, tương lai nằm trong tay bé!'
  }
];

// ==========================================
// 3. ỐC ĐẢO ÂM NHẠC & SẮC MÀU MĨ THUẬT (LỚP 1 - 2)
// ==========================================
export const artsMusicLessons = [
  {
    id: 'am1', stage: 1, difficulty: 'easy', title: 'Bảy Nốt Nhạc Thần Tiên', opponentName: 'Nốt Nhạc Son Đáng Yêu', opponentAvatar: '🎵',
    questionText: 'Trong âm nhạc, 7 nốt nhạc cơ bản theo thứ tự từ thấp đến cao là gì?',
    visual: '🎼 Khuông nhạc ngân vang giai điệu', options: ['Đồ - Rê - Mi - Pha - Son - La - Si', 'Một - Hai - Ba - Bốn - Năm - Sáu - Bảy', 'A - B - C - D - E - F - G', 'Đỏ - Vàng - Xanh - Tím - Hồng - Cam - Nâu'], correctAnswer: 'Đồ - Rê - Mi - Pha - Son - La - Si',
    scaffoldHint: 'Bắt đầu từ nốt Đồ trầm ấm, ngân vang qua Rê, Mi, Pha, Son, La rồi vút cao ở nốt Si trong trẻo!',
    funFact: 'Chỉ từ 7 nốt nhạc cơ bản này, các nhạc sĩ đã sáng tác ra hàng triệu bài hát tuyệt diệu làm say đắm lòng người!'
  },
  {
    id: 'am2', stage: 2, difficulty: 'easy', title: 'Nhạc Cụ Gõ Vui Nhộn', opponentName: 'Thanh Phách Gõ Nhịp', opponentAvatar: '🥁',
    questionText: 'Nhạc cụ gõ bằng gỗ quen thuộc trong giờ học hát lớp 1 gồm 2 thanh tre hoặc gỗ gõ vào nhau kêu "cách cách" gọi là gì?',
    visual: '🪵 Đôi thanh gỗ nhỏ nhắn gõ nhịp', options: ['Thanh phách', 'Cây đàn piano', 'Kèn đồng saxophone', 'Trống đồng'], correctAnswer: 'Thanh phách',
    scaffoldHint: 'Thanh phách là nhạc cụ gõ dân gian làm từ tre hoặc gỗ, dùng để gõ đệm theo nhịp và phách bài hát!',
    funFact: 'Tiếng gõ thanh phách giòn giã giúp các bạn nhỏ giữ nhịp bài hát chuẩn xác và hào hứng hơn!'
  },
  {
    id: 'am3', stage: 3, difficulty: 'easy', title: 'Bài Ca Thiếu Nhi', opponentName: 'Chú Mèo Con Ca Sĩ', opponentAvatar: '🎤',
    questionText: 'Trong bài hát "Tập tầm vông", câu hát tiếp theo sau câu "Tập tầm vông, tay không tay có" là gì?',
    visual: '👧 Trò chơi chuyền tay đoán đồ vật', options: ['Tập tầm vó, tay có tay không', 'Tập tầm vông, con chim chích chòe', 'Tập tầm vông, đi học về vui ghê', 'Tập tầm vông, mẹ đi làm xa'], correctAnswer: 'Tập tầm vó, tay có tay không',
    scaffoldHint: 'Bài đồng dao trò chơi dân gian quen thuộc: "Tập tầm vông, tay không tay có. Tập tầm vó, tay có tay không..."!',
    funFact: 'Đồng dao dân gian Việt Nam gắn liền với những trò chơi vận động hồn nhiên của bao thế hệ tuổi thơ!'
  },
  {
    id: 'am4', stage: 4, difficulty: 'easy', title: 'Ba Màu Sắc Cơ Bản', opponentName: 'Cọ Vẽ Xinh Xắn', opponentAvatar: '🖌️',
    questionText: 'Trong mĩ thuật, 3 màu sắc cơ bản (màu gốc) không thể tạo ra bằng cách pha trộn là những màu nào?',
    visual: '🎨 Bảng pha màu rực rỡ', options: ['Đỏ, Vàng, Xanh lam (Xanh dương)', 'Đen, Trắng, Xám', 'Cam, Tím, Hồng', 'Xanh lá, Nâu, Vàng'], correctAnswer: 'Đỏ, Vàng, Xanh lam (Xanh dương)',
    scaffoldHint: 'Từ 3 màu gốc Đỏ, Vàng và Xanh lam, em có thể pha trộn ra hàng trăm sắc màu kỳ diệu khác trên thế giới!',
    funFact: 'Màu sắc cơ bản là ánh sáng diệu kỳ của tự nhiên, có mặt trên lá cờ, hoa thơm và cầu vồng sau mưa!'
  },
  {
    id: 'am5', stage: 5, difficulty: 'medium', title: 'Phép Thuật Pha Màu', opponentName: 'Giọt Sơn Biến Hình', opponentAvatar: '💧',
    questionText: 'Khi em pha trộn giọt màu ĐỎ với giọt màu VÀNG, em sẽ thu được màu sắc kỳ diệu nào?',
    visual: '🔴 + 🟡 = ?', options: ['Màu Cam', 'Màu Tím', 'Màu Đen', 'Màu Xanh lá cây'], correctAnswer: 'Màu Cam',
    scaffoldHint: 'Đỏ rực rỡ hòa quyện với Vàng tươi sáng sẽ tạo ra màu Cam ấm áp như quả cam chín mọng!',
    funFact: 'Nếu pha Vàng với Xanh lam ta được màu Xanh lá; pha Đỏ với Xanh lam ta sẽ được màu Tím thủy chung!'
  },
  {
    id: 'am6', stage: 6, difficulty: 'medium', title: 'Nhận Diện Gam Màu Nóng', opponentName: 'Mặt Trời Tỏa Nắng', opponentAvatar: '☀️',
    questionText: 'Nhóm màu nào sau đây thuộc gam màu NÓNG, gợi cảm giác ấm áp, tràn đầy năng lượng và nhiệt huyết?',
    visual: '🔥 Ánh lửa bập bùng và ánh nắng chói chang', options: ['Đỏ, Cam, Vàng', 'Xanh dương, Xanh lá, Tím nhạt', 'Trắng, Xám, Đen', 'Xanh ngọc, Xanh rêu, Xanh đá'], correctAnswer: 'Đỏ, Cam, Vàng',
    scaffoldHint: 'Gam màu nóng giống như ánh lửa và ánh mặt trời: đỏ tươi, cam ấm và vàng rực rỡ!',
    funFact: 'Các họa sĩ thường dùng gam màu nóng để vẽ bình minh rực rỡ, mùa thu lá vàng hay những ngày lễ hội vui tươi!'
  },
  {
    id: 'am7', stage: 7, difficulty: 'medium', title: 'Nhận Diện Gam Màu Lạnh', opponentName: 'Bông Tuyết Dịu Mát', opponentAvatar: '❄️',
    questionText: 'Nhóm màu nào thuộc gam màu LẠNH, gợi cảm giác mát mẻ, yên bình như bầu trời và dòng nước mát?',
    visual: '🌊 Đại dương bao la và rừng cây xanh mướt', options: ['Xanh lam, Xanh lá cây, Tím', 'Đỏ tươi, Cam đậm, Vàng chanh', 'Đỏ gạch, Hồng phấn, Nâu đất', 'Vàng cam, Đỏ cờ, Huyết dụ'], correctAnswer: 'Xanh lam, Xanh lá cây, Tím',
    scaffoldHint: 'Gam màu lạnh mang hơi thở của nước biển, mây trời và bóng râm của rừng cây xanh mát!',
    funFact: 'Ngắm nhìn tranh vẽ có gam màu lạnh giúp tâm hồn em cảm thấy thư thái, dễ chịu và dịu bớt căng thẳng!'
  },
  {
    id: 'am8', stage: 8, difficulty: 'hard', title: 'Các Nét Vẽ Cơ Bản', opponentName: 'Bút Chì Nhanh Trí', opponentAvatar: '✏️',
    questionText: 'Nét vẽ nào uốn lượn nhấp nhô như sóng biển dập dềnh được gọi là gì?',
    visual: '〰️ Đường nét uốn lượn mềm mại', options: ['Nét lượn sóng', 'Nét thẳng đứng', 'Nét đứt đoạn', 'Nét chấm tròn'], correctAnswer: 'Nét lượn sóng',
    scaffoldHint: 'Nét lượn sóng uốn cong nhịp nhàng lên xuống, thường được dùng để vẽ sóng biển, ngọn khói hay mái tóc bồng bềnh!',
    funFact: 'Họa tiết nét lượn sóng đã xuất hiện trên hoa văn gốm sứ cổ truyền của người Việt Nam từ hàng nghìn năm trước!'
  },
  {
    id: 'am9', stage: 9, difficulty: 'hard', title: 'Hình Khối Trong Mĩ Thuật', opponentName: 'Khối Vuông Sáng Tạo', opponentAvatar: '🟧',
    questionText: 'Mặt trời chiếu sáng, bánh xe quay tròn và đĩa bay UFO đều mang hình học cơ bản nào?',
    visual: '☀️ 🛞 🛸 Những đồ vật thân quen', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctAnswer: 'Hình tròn',
    scaffoldHint: 'Hình tròn không có góc cạnh, đường cong khép kín hoàn hảo tượng trưng cho sự trọn vẹn và viên mãn!',
    funFact: 'Vạn vật quanh ta đều có thể phân tích thành các hình khối cơ bản: hình tròn, vuông, tam giác và chữ nhật!'
  },
  {
    id: 'am10', stage: 10, difficulty: 'boss', title: 'Nàng Tiên Nghệ Thuật (TRÙM ÂM NHẠC & MĨ THUẬT)', opponentName: 'Nữ Thần Giai Điệu & Sắc Màu', opponentAvatar: '🎭🎶🎨👑',
    questionText: 'Âm nhạc và Mĩ thuật đem lại giá trị kỳ diệu nhất nào cho tâm hồn của mỗi bạn nhỏ?',
    visual: '🌈 Cầu vồng nghệ thuật thắp sáng ước mơ', options: ['Bồi dưỡng tâm hồn trong sáng, khơi dậy trí sáng tạo và tình yêu thương cái đẹp cuộc sống', 'Chỉ để thi thố điểm số học hành', 'Để trở nên nổi tiếng trên mạng xã hội', 'Không có tác dụng gì cho việc học'], correctAnswer: 'Bồi dưỡng tâm hồn trong sáng, khơi dậy trí sáng tạo và tình yêu thương cái đẹp cuộc sống',
    scaffoldHint: 'Nghệ thuật chắp cánh cho ước mơ bay cao, giúp trẻ thơ biết yêu cái đẹp, sống nhân hậu và chan hòa với vạn vật!',
    funFact: 'Chúc mừng bé đã trở thành "Nghệ Sĩ Nhí Toàn Năng"! Hãy tiếp tục vẽ nên cuộc đời bằng những sắc màu rực rỡ nhất!'
  }
];

// ==========================================
// 4. THUNG LŨNG TRẢI NGHIỆM & KỸ NĂNG SINH TỒN (LỚP 1 - 2)
// ==========================================
export const lifeSkillsLessons = [
  {
    id: 'ls1', stage: 1, difficulty: 'easy', title: 'Sáu Bước Rửa Tay Chuẩn Y Tế', opponentName: 'Bọt Xà Phòng Thần Kỳ', opponentAvatar: '🧼',
    questionText: 'Thời gian tối thiểu bé cần xoa xà phòng rửa tay để sạch hết vi khuẩn gây bệnh là bao lâu?',
    visual: '🚿 Rửa tay sạch sẽ dưới vòi nước chảy', options: ['Ít nhất 30 giây (khoảng thời gian hát bài Chúc mừng sinh nhật 2 lần)', 'Chỉ cần nhúng tay 2 giây vào nước', 'Rửa 1 tiếng đồng hồ', 'Không cần dùng xà phòng'], correctAnswer: 'Ít nhất 30 giây (khoảng thời gian hát bài Chúc mừng sinh nhật 2 lần)',
    scaffoldHint: 'Rửa tay đủ 6 bước với xà phòng trong ít nhất 30 giây giúp đánh bay 99% vi khuẩn gây hại đường ruột!',
    funFact: 'Đôi bàn tay sạch là "lá chắn thép" bảo vệ bé khỏi cảm cúm, đau bụng và các bệnh truyền nhiễm học đường!'
  },
  {
    id: 'ls2', stage: 2, difficulty: 'easy', title: 'Số Khẩn Cấp Báo Cháy 114', opponentName: 'Chú Lính Cứu Hỏa Quả Cảm', opponentAvatar: '🚒',
    questionText: 'Khi phát hiện có đám cháy lớn hoặc có người mắc kẹt trong hỏa hoạn, em cần gọi ngay số điện thoại nào?',
    visual: '🔥 Ngọn lửa bùng phát nguy hiểm', options: ['114', '113', '115', '111'], correctAnswer: '114',
    scaffoldHint: 'Nhớ kỹ: 114 là số tổng đài Cảnh sát Phòng cháy chữa cháy và Cứu nạn cứu hộ toàn quốc (miễn phí cước gọi)!',
    funFact: 'Các chú lính cứu hỏa luôn túc trực 24/24 và có mặt chỉ sau vài phút nhận được cuộc gọi khẩn cấp 114!'
  },
  {
    id: 'ls3', stage: 3, difficulty: 'easy', title: 'Cảnh Sát 113 & Cứu Thương 115', opponentName: 'Bác Sĩ Áo Trắng Nhân Ái', opponentAvatar: '🚑',
    questionText: 'Khi có người bị ngất xỉu hoặc tai nạn cần gọi xe cấp cứu y tế gấp, số điện thoại cần gọi là gì?',
    visual: '🏥 Xe cứu thương cấp cứu người bệnh', options: ['115', '113', '114', '1080'], correctAnswer: '115',
    scaffoldHint: 'Ghi nhớ bộ 3 số sinh mệnh: 113 (Cảnh sát), 114 (Cứu hỏa), 115 (Cấp cứu y tế)!',
    funFact: 'Ở Việt Nam, còn có tổng đài 111 là Tổng đài Quốc gia Bảo vệ Trẻ em hoạt động 24/7 hoàn toàn miễn phí!'
  },
  {
    id: 'ls4', stage: 4, difficulty: 'easy', title: 'Quy Tắc An Toàn 5 Ngón Tay', opponentName: 'Bàn Tay Che Chở', opponentAvatar: '🖐️',
    questionText: 'Theo quy tắc 5 ngón tay phòng chống xâm hại, ngón út nhắc em điều gì đối với người lạ mặt?',
    visual: '🛑 Dấu hiệu dừng lại bảo vệ bản thân', options: ['Tuyệt đối không để người lạ chạm vào người, lùi lại và hét to cầu cứu nếu bị đụng chạm', 'Cho người lạ ôm hôn thoải mái', 'Đi theo người lạ khi được cho kẹo', 'Lên xe người lạ rủ đi chơi'], correctAnswer: 'Tuyệt đối không để người lạ chạm vào người, lùi lại và hét to cầu cứu nếu bị đụng chạm',
    scaffoldHint: 'Vùng đồ bơi là vùng riêng tư của cơ thể, tuyệt đối không ai được phép nhìn hay chạm vào, trừ bác sĩ khi khám bệnh có cha mẹ!',
    funFact: 'Em có toàn quyền làm chủ cơ thể mình! Hãy dũng cảm nói "KHÔNG" và chạy ngay đến người tin cậy khi cảm thấy bất an!'
  },
  {
    id: 'ls5', stage: 5, difficulty: 'medium', title: 'Khi Ở Nhà Một Mình', opponentName: 'Khóa Cửa Thông Minh', opponentAvatar: '🔐',
    questionText: 'Khi em ở nhà một mình, có người lạ bấm chuông tự xưng là bạn của bố mẹ muốn vào nhà, em nên làm gì?',
    visual: '🚪 Cánh cửa khóa an toàn', options: ['Không mở cửa, khóa chốt cẩn thận và gọi điện ngay cho bố mẹ xác nhận', 'Mở toang cửa mời vào nhà uống nước', 'Ra mở cửa rồi cho người lạ vào phòng ngủ', 'Đi theo người lạ ra xe'], correctAnswer: 'Không mở cửa, khóa chốt cẩn thận và gọi điện ngay cho bố mẹ xác nhận',
    scaffoldHint: 'Kẻ xấu có thể đóng giả người quen để lừa gạt. Tuyệt đối không mở cửa cho bất kỳ ai khi chưa có sự đồng ý của cha mẹ!',
    funFact: 'Học sinh thông minh luôn có "mật khẩu an toàn" chỉ có cha mẹ và con mới biết!'
  },
  {
    id: 'ls6', stage: 6, difficulty: 'medium', title: 'Kỹ Năng Thoát Hiểm Khói Lửa', opponentName: 'Khăn Ướt Thần Tốc', opponentAvatar: '🧣',
    questionText: 'Khi có chuông báo cháy và khói đen tràn vào hành lang, cách di chuyển thoát hiểm đúng nhất là gì?',
    visual: '🌫️ Khói đen bốc lên cao', options: ['Lấy khăn ướt bịt mũi miệng, khom lưng hoặc bò sát sàn nhà men theo tường ra lối thoát hiểm', 'Đứng thẳng chạy thật nhanh', 'Đi vào thang máy để xuống tầng trệt', 'Núp vào gầm giường hoặc tủ quần áo'], correctAnswer: 'Lấy khăn ướt bịt mũi miệng, khom lưng hoặc bò sát sàn nhà men theo tường ra lối thoát hiểm',
    scaffoldHint: 'Khói độc nhẹ hơn không khí nên bốc lên cao, không khí sạch ở sát sàn nhà! Khăn ướt giúp lọc bớt khí độc CO2!',
    funFact: 'Tuyệt đối KHÔNG dùng thang máy khi có hỏa hoạn vì mất điện sẽ bị kẹt thang máy nguy hiểm!'
  },
  {
    id: 'ls7', stage: 7, difficulty: 'medium', title: 'Phòng Tránh Đuối Nước', opponentName: 'Phao Cứu Sinh Vàng', opponentAvatar: '🛟',
    questionText: 'Điều cấm kỵ quan trọng nhất để phòng chống tai nạn đuối nước thương tâm ở lứa tuổi học sinh là gì?',
    visual: '🌊 Dòng sông nước sâu cuồn cuộn', options: ['Tuyệt đối không tự ý rủ nhau đi tắm ao, hồ, sông, suối khi không có người lớn đi cùng', 'Nhảy xuống sông sâu thi bơi', 'Đi bắt cá ở mương nước sâu một mình', 'Bơi ở bãi biển có cắm cờ đỏ cảnh báo nguy hiểm'], correctAnswer: 'Tuyệt đối không tự ý rủ nhau đi tắm ao, hồ, sông, suối khi không có người lớn đi cùng',
    scaffoldHint: 'Chỉ tắm bơi ở bể bơi có nhân viên cứu hộ hoặc đi cùng cha mẹ và luôn mặc áo phao cứu sinh an toàn!',
    funFact: 'Khi thấy bạn bị ngã xuống nước, KHÔNG được nhảy xuống cứu nếu không biết bơi; hãy hô to cầu cứu và ném phao hoặc cành cây cho bạn!'
  },
  {
    id: 'ls8', stage: 8, difficulty: 'hard', title: 'Phân Loại Rác Xanh', opponentName: 'Thùng Rác Tự Động', opponentAvatar: '🗑️',
    questionText: 'Vỏ chai nhựa, lon nước ngọt bằng nhôm và giấy bìa carton cũ thuộc loại rác thải nào?',
    visual: '♻️ Biểu tượng tái chế bảo vệ Trái Đất', options: ['Rác tái chế (có thể gom lại để sản xuất đồ dùng mới)', 'Rác thải nguy hại', 'Rác hữu cơ dễ phân hủy', 'Rác thải y tế'], correctAnswer: 'Rác tái chế (có thể gom lại để sản xuất đồ dùng mới)',
    scaffoldHint: 'Rác tái chế gồm giấy, nhựa, kim loại sạch có thể tái sinh thành sản phẩm mới, giảm bớt ô nhiễm môi trường!',
    funFact: 'Tái chế 1 tấn giấy phế liệu giúp cứu sống được 17 cây xanh to lớn trong rừng nguyên sinh!'
  },
  {
    id: 'ls9', stage: 9, difficulty: 'hard', title: 'Kỹ Năng Khi Bị Lạc', opponentName: 'Ngọn Hải Đăng Dẫn Lối', opponentAvatar: '🗼',
    questionText: 'Khi đi chơi ở siêu thị hoặc công viên đông đúc mà vô tình bị lạc bố mẹ, em cần làm gì đầu tiên?',
    visual: '🛒 Siêu thị đông người qua lại', options: ['Đứng yên tại chỗ hoặc tìm chú bảo vệ, cô nhân viên thu ngân nhờ thông báo loa', 'Khóc thét và chạy lung tung khắp nơi', 'Nhận kẹo và đi theo người lạ rủ ra ngoài tìm mẹ', 'Lên xe của một người lạ mặt'], correctAnswer: 'Đứng yên tại chỗ hoặc tìm chú bảo vệ, cô nhân viên thu ngân nhờ thông báo loa',
    scaffoldHint: 'Hãy học thuộc số điện thoại của cha mẹ từ nhỏ và chỉ tìm người mặc đồng phục (bảo vệ, công an, nhân viên siêu thị) nhờ gọi điện!',
    funFact: 'Học thuộc số điện thoại của bố mẹ và địa chỉ nhà là "tấm bùa hộ mệnh" giúp bé luôn an toàn tìm về tổ ấm!'
  },
  {
    id: 'ls10', stage: 10, difficulty: 'boss', title: 'Thần Hộ Mệnh Kỹ Năng (TRÙM SINH TỒN NHÍ)', opponentName: 'Hiệp Sĩ Sao Vàng Dũng Cảm', opponentAvatar: '🛡️🌟👑✨',
    questionText: 'Vũ khí mạnh mẽ nhất giúp em luôn bình an, mạnh khỏe và tự tin vượt qua mọi hoàn cảnh hiểm nguy là gì?',
    visual: '💪 Tinh thần dũng cảm và trí tuệ sáng suốt', options: ['Kiến thức an toàn, sự bình tĩnh, kỹ năng sinh tồn và lòng dũng cảm biết tìm kiếm sự giúp đỡ đúng lúc', 'Sự liều lĩnh không sợ gì', 'Trông chờ hoàn toàn vào may mắn', 'Khóc lóc đầu hàng số phận'], correctAnswer: 'Kiến thức an toàn, sự bình tĩnh, kỹ năng sinh tồn và lòng dũng cảm biết tìm kiếm sự giúp đỡ đúng lúc',
    scaffoldHint: 'Bình tĩnh là chìa khóa của sự sống sót! Học kỹ năng sống giúp em tự bảo vệ bản thân và giúp đỡ mọi người xung quanh!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Hiệp Sĩ Kỹ Năng Sống Toàn Diện"! Bản lĩnh vững vàng, tự tin khám phá thế giới rộng lớn!'
  }
];

// ==========================================
// 5. THÀNH PHỐ TIN HỌC & THUẬT TOÁN (KHỐI 3 - 4 - 5)
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
    id: 'it_adv4', stage: 4, difficulty: 'medium', title: 'Bản Quyền & Văn Hóa Ứng Xử Số', opponentName: 'Thẩm Phán Không Gian Mạng', opponentAvatar: '⚖️',
    questionText: 'Khi lấy hình ảnh, bài văn hoặc đoạn nhạc của người khác trên mạng Internet để làm bài thuyết trình, em cần làm gì?',
    visual: '©️ Bản quyền quyền tác giả văn minh', options: ['Ghi rõ nguồn tác giả và xin phép sử dụng nếu có thể', 'Tự nhận là tác phẩm do chính mình vẽ và sáng tác', 'Xóa tên tác giả gốc để không ai biết', 'Đem bán cho người khác lấy tiền'], correctAnswer: 'Ghi rõ nguồn tác giả và xin phép sử dụng nếu có thể',
    scaffoldHint: 'Tôn trọng quyền tác giả là hành vi văn minh và tuân thủ pháp luật sở hữu trí tuệ trong thời đại số!',
    funFact: 'Công dân số văn minh luôn biết nói lời cảm ơn và trích dẫn nguồn tài liệu trung thực!'
  },
  {
    id: 'it_adv5', stage: 5, difficulty: 'medium', title: 'Kỹ Năng Tìm Kiếm Google Thông Minh', opponentName: 'Kính Lúp Siêu Dò Tìm', opponentAvatar: '🔍',
    questionText: 'Để tìm thông tin về "di tích Cố đô Huế" nhanh và chính xác nhất trên công cụ tìm kiếm, từ khóa nào tối ưu nhất?',
    visual: '🔎 Thanh tìm kiếm thông minh', options: ['"Cố đô Huế" hoặc "di tích lịch sử Cố đô Huế"', 'Tìm cho em xem cái thành phố ở miền Trung có vua ở hồi xưa', 'Một nơi rất đẹp có sông Hương hoa sen', 'Bấm chữ Huế chung chung'], correctAnswer: '"Cố đô Huế" hoặc "di tích lịch sử Cố đô Huế"',
    scaffoldHint: 'Từ khóa tìm kiếm cần ngắn gọn, cô đọng, chứa đúng danh từ trọng tâm của vấn đề cần tìm!',
    funFact: 'Đặt từ khóa trong dấu ngoặc kép "" giúp công cụ tìm kiếm lọc ra chính xác cụm từ nguyên vẹn mà em yêu cầu!'
  },
  {
    id: 'it_adv6', stage: 6, difficulty: 'medium', title: 'Sơ Đồ Tư Duy Mindmap', opponentName: 'Bộ Não Sáng Tạo Toàn Năng', opponentAvatar: '🧠',
    questionText: 'Sơ đồ tư duy (Mindmap) giúp học sinh học tập hiệu quả nhờ cơ chế nào?',
    visual: '🌳 Cây tri thức tỏa nhánh sum suê', options: ['Dùng từ khóa, màu sắc và hình ảnh kết nối theo các nhánh như tế bào não giúp ghi nhớ sâu', 'Chỉ chép lại nguyên văn từng câu chữ trong sách', 'Chỉ vẽ hình không có chữ', 'Làm cho bài học dài dòng hơn'], correctAnswer: 'Dùng từ khóa, màu sắc và hình ảnh kết nối theo các nhánh như tế bào não giúp ghi nhớ sâu',
    scaffoldHint: 'Mindmap do Tony Buzan sáng chế, mô phỏng cách các nơ-ron não bộ liên kết thông tin bằng hình ảnh và màu sắc sinh động!',
    funFact: 'Một sơ đồ tư duy tóm tắt cả một chương sách có thể giúp em ôn tập chỉ trong 5 phút trước giờ kiểm tra!'
  },
  {
    id: 'it_adv7', stage: 7, difficulty: 'hard', title: 'Khái Niệm Thuật Toán (Algorithm)', opponentName: 'Kỹ Sư Lập Trình logic', opponentAvatar: '⚙️',
    questionText: 'Thuật toán trong tin học được định nghĩa chính xác là gì?',
    visual: '📝 Từng bước hướng dẫn rõ ràng', options: ['Dãy các chỉ dẫn rõ ràng, tuần tự từng bước để giải quyết một nhiệm vụ từ dữ liệu đầu vào thành kết quả', 'Một linh kiện điện tử trong máy tính', 'Một loại virus máy tính', 'Trò chơi giải trí trên điện thoại'], correctAnswer: 'Dãy các chỉ dẫn rõ ràng, tuần tự từng bước để giải quyết một nhiệm vụ từ dữ liệu đầu vào thành kết quả',
    scaffoldHint: 'Mọi công thức nấu ăn, hướng dẫn lắp ráp Lego hay giải toán đều là một dạng thuật toán từng bước!',
    funFact: 'Từ "Algorithm" (Thuật toán) bắt nguồn từ tên nhà toán học Ba Tư vĩ đại Al-Khwarizmi ở thế kỷ thứ 9!'
  },
  {
    id: 'it_adv8', stage: 8, difficulty: 'hard', title: 'Cấu Trúc Lặp Trong Lập Trình', opponentName: 'Vòng Xoay Bất Tận', opponentAvatar: '🔄',
    questionText: 'Để chú rùa vẽ một hình vuông (gồm 4 cạnh bằng nhau và 4 góc vuông 90 độ), lệnh lặp nào tối ưu nhất?',
    visual: '🟩 Hình vuông vẽ từ chuyển động', options: ['Lặp lại 4 lần: [Đi thẳng 100 bước, Quay phải 90 độ]', 'Lặp lại 100 lần không ngừng', 'Chỉ đi thẳng 1 lần 400 bước', 'Lặp lại 3 lần góc 60 độ'], correctAnswer: 'Lặp lại 4 lần: [Đi thẳng 100 bước, Quay phải 90 độ]',
    scaffoldHint: 'Hình vuông có 4 cạnh và 4 góc quay, do đó ta lặp lại đúng 4 lần khối lệnh di chuyển và xoay góc!',
    funFact: 'Cấu trúc lặp giúp các lập trình viên rút ngắn hàng nghìn dòng mã lệnh trùng lặp chỉ với một khối lệnh duy nhất!'
  },
  {
    id: 'it_adv9', stage: 9, difficulty: 'hard', title: 'Lập Trình Khối Trực Quan Scratch', opponentName: 'Mèo Vàng Lập Trình Scratch', opponentAvatar: '🐱💻',
    questionText: 'Trong ngôn ngữ Scratch, khối lệnh màu vàng "Khi bấm vào lá cờ xanh" thuộc nhóm lệnh nào?',
    visual: '🚩 Lá cờ xanh bắt đầu chương trình', options: ['Nhóm lệnh Sự kiện (Events) - Dùng để kích hoạt chương trình bắt đầu chạy', 'Nhóm lệnh Chuyển động (Motion)', 'Nhóm lệnh Cảm biến (Sensing)', 'Nhóm lệnh Âm thanh (Sound)'], correctAnswer: 'Nhóm lệnh Sự kiện (Events) - Dùng để kích hoạt chương trình bắt đầu chạy',
    scaffoldHint: 'Sự kiện là ngòi nổ phát động: khi người chơi bấm vào lá cờ xanh, toàn bộ các khối lệnh gắn bên dưới sẽ bắt đầu thực thi!',
    funFact: 'Scratch được phát triển bởi viện đại học công nghệ hàng đầu thế giới MIT, giúp hàng chục triệu trẻ em trở thành nhà sáng tạo game!'
  },
  {
    id: 'it_adv10', stage: 10, difficulty: 'boss', title: 'Siêu Trí Tuệ Nhân Tạo AI (TRÙM THUẬT TOÁN)', opponentName: 'Siêu Não Bộ AI Lượng Tử', opponentAvatar: '🤖🌐🔮👑',
    questionText: 'Trí tuệ nhân tạo (AI) học hỏi từ khối lượng dữ liệu khổng lồ nhằm mục tiêu cao cả nào?',
    visual: '✨ Mạng nơ-ron nhân tạo kết nối toàn diện', options: ['Trở thành trợ thủ đắc lực hỗ trợ con người giải quyết các bài toán lớn về y tế, giáo dục và bảo vệ Trái Đất', 'Chiếm đoạt thế giới của con người', 'Chỉ để viết bài tập hộ học sinh lười biếng', 'Làm cho con người quên hết tri thức'], correctAnswer: 'Trở thành trợ thủ đắc lực hỗ trợ con người giải quyết các bài toán lớn về y tế, giáo dục và bảo vệ Trái Đất',
    scaffoldHint: 'AI là phát minh vĩ đại của con người, nhưng trái tim nhân hậu, tình yêu thương và đạo đức luôn là đặc quyền của nhân loại!',
    funFact: 'Chúc mừng bé đã chinh phục thành công "Thành Phố Thuật Toán"! Tương lai công nghệ và trí tuệ nhân tạo đang chờ đón bước chân em!'
  }
];

// ==========================================
// 6. THUNG LŨNG CÔNG NGHỆ & SÁNG CHẾ KỸ THUẬT (KHỐI 3 - 4 - 5)
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
    id: 'tech_adv3', stage: 3, difficulty: 'easy', title: 'Thiết Bị Điện Trong Gia Đình', opponentName: 'Tủ Lạnh Tiết Kiệm Điện', opponentAvatar: '🧊',
    questionText: 'Hành động nào giúp gia đình em vừa sử dụng thiết bị điện an toàn, vừa tiết kiệm năng lượng điện?',
    visual: '🔌 Tắt các thiết bị khi không sử dụng', options: ['Tắt đèn, quạt khi rời khỏi phòng và không mở cửa tủ lạnh quá lâu', 'Mở tủ lạnh đứng hóng mát cho đỡ nóng', 'Bật tivi suốt ngày đêm không ai xem', 'Cắm sạc điện thoại cả tuần không rút'], correctAnswer: 'Tắt đèn, quạt khi rời khỏi phòng và không mở cửa tủ lạnh quá lâu',
    scaffoldHint: 'Tiết kiệm điện vừa giảm chi phí cho cha mẹ, vừa bảo vệ nguồn tài nguyên thiên nhiên của quốc gia!',
    funFact: 'Nếu mỗi gia đình tắt bớt 1 bóng đèn trong 1 giờ, cả nước sẽ tiết kiệm được hàng triệu kilowatt điện mỗi ngày!'
  },
  {
    id: 'tech_adv4', stage: 4, difficulty: 'medium', title: 'Kỹ Thuật Chăm Sóc Cây Cảnh', opponentName: 'Chậu Hoa Rực Rỡ', opponentAvatar: '🌺',
    questionText: 'Để cây cảnh trong chậu sinh trưởng xanh tốt, quy trình chăm sóc cơ bản hàng ngày gồm những việc gì?',
    visual: '🪴 Chậu cây xanh mướt trước ban công', options: ['Tưới đủ ẩm vào sáng sớm hoặc chiều mát, tỉa lá vàng và đặt nơi có ánh sáng phù hợp', 'Tưới nước ngập úng quanh gốc suốt ngày', 'Bón thật nhiều phân hóa học một lúc', 'Để cây trong tủ kín không có ánh sáng'], correctAnswer: 'Tưới đủ ẩm vào sáng sớm hoặc chiều mát, tỉa lá vàng và đặt nơi có ánh sáng phù hợp',
    scaffoldHint: 'Cây xanh cần nước, chất dinh dưỡng trong đất và ánh sáng mặt trời để quang hợp tạo chất nuôi cây!',
    funFact: 'Trồng cây cảnh trong lớp học và gia đình giúp lọc sạch bụi mịn và cung cấp nguồn oxy tươi mát cho lá phổi của em!'
  },
  {
    id: 'tech_adv5', stage: 5, difficulty: 'medium', title: 'Dụng Cụ Cơ Khí Lắp Ráp', opponentName: 'Cờ-Lê Mỏ-Lết Bạc', opponentAvatar: '🔧',
    questionText: 'Trong bộ lắp ghép mô hình kỹ thuật lớp 4 - 5, dụng cụ nào dùng để vặn chặt hoặc tháo rời đai ốc (tán)?',
    visual: '🔩 Bu-lông và đai ốc gắn kết vững chắc', options: ['Cờ-lê (hoặc mỏ-lết)', 'Bút chì màu', 'Cây kéo thủ công', 'Thước kẻ nhựa'], correctAnswer: 'Cờ-lê (hoặc mỏ-lết)',
    scaffoldHint: 'Cờ-lê có miệng kẹp vừa khít các cạnh của đai ốc lục giác, giúp truyền lực xoay vặn chặt bu-lông dễ dàng!',
    funFact: 'Mối ghép ren giữa bu-lông và đai ốc là phát minh cơ khí vĩ đại, giữ vững các tòa nhà chọc trời và cầu cống hiện đại!'
  },
  {
    id: 'tech_adv6', stage: 6, difficulty: 'medium', title: 'Bộ Truyền Động Cơ Học', opponentName: 'Bánh Răng Khớp Nối', opponentAvatar: '⚙️',
    questionText: 'Xích xe đạp và dây đai máy may là ví dụ tiêu biểu của cơ cấu truyền động nào?',
    visual: '🚲 Bộ xích líp xe đạp quay đều', options: ['Truyền động đai và truyền động xích', 'Truyền động sóng điện từ', 'Truyền động bằng tia laser', 'Truyền động bằng nam châm vĩnh cửu'], correctAnswer: 'Truyền động đai và truyền động xích',
    scaffoldHint: 'Khi em đạp bàn đạp, đĩa xích quay truyền lực qua xích kéo líp bánh sau quay theo, đẩy xe tiến lên phía trước!',
    funFact: 'Cơ chế xích xe đạp có hiệu suất truyền lực cơ học lên tới 98%, là phương tiện giao thông xanh hiệu quả nhất thế giới!'
  },
  {
    id: 'tech_adv7', stage: 7, difficulty: 'hard', title: 'Mạch Điện Đơn Giản', opponentName: 'Bóng Đèn Phát Sáng', opponentAvatar: '💡⚡',
    questionText: 'Một mạch điện thắp sáng bóng đèn LED cơ bản gồm có những thành phần thiết yếu nào?',
    visual: '🔋 Mạch điện pin - dây dẫn - công tắc - bóng đèn', options: ['Nguồn điện (Pin), dây dẫn điện, công tắc và bóng đèn LED', 'Chỉ cần một đoạn dây kim loại', 'Chỉ cần bóng đèn không cần pin', 'Cục tẩy và thước kẻ nối với nhau'], correctAnswer: 'Nguồn điện (Pin), dây dẫn điện, công tắc và bóng đèn LED',
    scaffoldHint: 'Mạch điện phải khép kín: dòng điện đi từ cực dương của pin, qua công tắc đóng, qua bóng đèn làm đèn phát sáng rồi về cực âm!',
    funFact: 'Thomas Edison đã thử nghiệm hơn 1.000 loại vật liệu khác nhau trước khi phát minh thành công sợi đốt bóng đèn thương mại đầu tiên!'
  },
  {
    id: 'tech_adv8', stage: 8, difficulty: 'hard', title: 'Năng Lượng Sạch Tương Lai', opponentName: 'Cối Xay Gió Khổng Lồ', opponentAvatar: '🌬️⚡',
    questionText: 'Nguồn năng lượng tái tạo nào khai thác từ tự nhiên vô tận, không thải khí nhà kính và bảo vệ bầu khí quyển Trái Đất?',
    visual: '🌞 Pin mặt trời và cánh đồng quạt gió', options: ['Năng lượng mặt trời và năng lượng gió', 'Đốt than đá gây khói mù', 'Đốt dầu mỏ và khí đốt hóa thạch', 'Đốt rác thải nhựa bừa bãi'], correctAnswer: 'Năng lượng mặt trời và năng lượng gió',
    scaffoldHint: 'Năng lượng mặt trời (quang điện) và năng lượng gió chuyển hóa sức gió và ánh nắng thành điện năng xanh sạch!',
    funFact: 'Việt Nam là một trong những quốc gia có tiềm năng điện mặt trời và điện gió ngoài khơi lớn hàng đầu khu vực Đông Nam Á!'
  },
  {
    id: 'tech_adv9', stage: 9, difficulty: 'hard', title: 'An Toàn Pin Sạc & Đồ Chơi Công Nghệ', opponentName: 'Cục Pin Thông Minh', opponentAvatar: '🔋',
    questionText: 'Khi sử dụng các đồ chơi công nghệ dùng pin sạc (flycam, xe điều khiển), điều nào em cần tuyệt đối tránh để ngừa cháy nổ?',
    visual: '⚠️ Cảnh báo an toàn pin sạc', options: ['Không sạc qua đêm không người trông coi, không đập dẹp hay để pin gần nguồn nhiệt cao', 'Sạc pin đúng điện áp cho phép', 'Rút dây sạc khi pin đã đầy', 'Bảo quản pin ở nơi khô ráo thoáng mát'], correctAnswer: 'Không sạc qua đêm không người trông coi, không đập dẹp hay để pin gần nguồn nhiệt cao',
    scaffoldHint: 'Pin Lithium-ion hiện đại chứa nhiều năng lượng; nếu bị va đập thủng hoặc sạc quá áp có thể chập cháy nguy hiểm!',
    funFact: 'Pin cũ sau khi sử dụng cần được thu gom tại các điểm tái chế rác điện tử, tuyệt đối không vứt vào sọt rác sinh hoạt thông thường!'
  },
  {
    id: 'tech_adv10', stage: 10, difficulty: 'boss', title: 'Nhà Sáng Chế Tương Lai (TRÙM KỸ THUẬT CÔNG NGHỆ)', opponentName: 'Tổng Công Trình Sư Vĩ Đại', opponentAvatar: '📐🔧🤖👑',
    questionText: 'Mục đích cao đẹp nhất của các kỹ sư và nhà sáng chế công nghệ là gì?',
    visual: '🚀 Tàu không gian hướng tới các vì sao', options: ['Sáng tạo ra các giải pháp kỹ thuật hữu ích, nâng cao chất lượng cuộc sống con người và bảo vệ Trái Đất xanh', 'Chế tạo vũ khí phá hoại thiên nhiên', 'Chỉ để kiếm tiền cá nhân bất chấp hậu quả', 'Thay thế hoàn toàn vẻ đẹp của tự nhiên'], correctAnswer: 'Sáng tạo ra các giải pháp kỹ thuật hữu ích, nâng cao chất lượng cuộc sống con người và bảo vệ Trái Đất xanh',
    scaffoldHint: 'Công nghệ chân chính luôn song hành cùng đạo đức và tình yêu thương, phụng sự cuộc sống bình yên của muôn loài!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Bậc Thầy Sáng Chế Kỹ Thuật"! Đôi bàn tay khéo léo và khối óc sáng tạo của em sẽ xây dựng đất nước phồn vinh!'
  }
];

// ==========================================
// 7. VƯƠNG QUỐC ĐẠO ĐỨC & CÔNG DÂN TOÀN CẦU (KHỐI 3 - 4 - 5)
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
    id: 'eth_adv4', stage: 4, difficulty: 'medium', title: 'Yêu Quý Người Lao Động', opponentName: 'Hạt Gạo Làng Ta', opponentAvatar: '🌾',
    questionText: 'Thái độ đúng đắn đối với những người làm công việc quét rác vệ sinh đường phố, bác nông dân hay chú thợ xây là gì?',
    visual: '👷‍♂️ Đôi bàn tay lao động cần mẫn', options: ['Tôn trọng, biết ơn vì họ đã làm ra hạt gạo và giữ gìn phố phường sạch đẹp', 'Coi thường vì họ lấm lem bùn đất', 'Vứt rác bừa bãi để họ phải dọn thêm', 'Chê bai công việc chân tay'], correctAnswer: 'Tôn trọng, biết ơn vì họ đã làm ra hạt gạo và giữ gìn phố phường sạch đẹp',
    scaffoldHint: 'Mọi nghề nghiệp lao động chân chính đều đáng quý và đáng trân trọng! "Bàn tay ta làm nên tất cả"!',
    funFact: 'Hạt cơm em ăn mỗi ngày đã trải qua "Một nắng hai sương / Muôn phần đắng cay" của người nông dân trên cánh đồng!'
  },
  {
    id: 'eth_adv5', stage: 5, difficulty: 'medium', title: 'Nói Không Với Bạo Lực Học Đường', opponentName: 'Hiệp Sĩ Hòa Bình', opponentAvatar: '🕊️',
    questionText: 'Khi chứng kiến một bạn trong trường bị nhóm bạn khác trêu chọc ác ý hoặc đe dọa đánh bạn, em nên làm gì?',
    visual: '🛑 Ngăn chặn hành vi xấu trong trường học', options: ['Báo ngay cho thầy cô giáo, bác bảo vệ hoặc ban giám hiệu để can thiệp kịp thời', 'Đứng xem và quay video reo hò', 'Hùa vào cùng trêu chọc bạn cho vui', 'Lặng lẽ bỏ đi coi như không biết'], correctAnswer: 'Báo ngay cho thầy cô giáo, bác bảo vệ hoặc ban giám hiệu để can thiệp kịp thời',
    scaffoldHint: 'Lên tiếng bảo vệ kẻ yếu là hành động dũng cảm! Không bao giờ im lặng trước cái xấu và bạo lực học đường!',
    funFact: 'Trường học hạnh phúc là nơi tràn ngập tiếng cười, sự thấu hiểu và tình bạn chân thành giữa tất cả học sinh!'
  },
  {
    id: 'eth_adv6', stage: 6, difficulty: 'medium', title: 'Quản Lý Tài Chính Nhí Thông Minh', opponentName: 'Chú Heo Đất Tiết Kiệm', opponentAvatar: '🐷💰',
    questionText: 'Khi được ông bà mừng tuổi hoặc có tiền thưởng thành tích học tập, cách quản lý tài chính thông minh nhất là gì?',
    visual: '🪙 Hũ tiết kiệm vun đắp ước mơ', options: ['Trích một phần nuôi heo đất tiết kiệm cho việc học, phần còn lại chi tiêu có kế hoạch', 'Mua đồ ăn vặt và nạp game hết ngay trong ngày', 'Làm mất hoặc để lung tung', 'Đòi mua điện thoại xịn đắt tiền'], correctAnswer: 'Trích một phần nuôi heo đất tiết kiệm cho việc học, phần còn lại chi tiêu có kế hoạch',
    scaffoldHint: 'Biết tiết kiệm và chi tiêu thông minh từ nhỏ giúp em làm chủ đồng tiền, không phụ thuộc và biết trân trọng mồ hôi của cha mẹ!',
    funFact: 'Quy tắc quản lý tiền bạc "6 chiếc hũ" được các triệu phú thế giới áp dụng ngay từ khi còn ngồi trên ghế nhà trường!'
  },
  {
    id: 'eth_adv7', stage: 7, difficulty: 'hard', title: 'Quyền & Bổn Phận Của Trẻ Em', opponentName: 'Luật Trẻ Em Thiêng Liêng', opponentAvatar: '📜',
    questionText: 'Theo Luật Trẻ em Việt Nam, bên cạnh quyền được bảo vệ và học tập, trẻ em có BỔN PHẬN cốt lõi nào?',
    visual: '👨‍👩‍👧‍👦 Gia đình và xã hội nâng niu trẻ thơ', options: ['Yêu quý kính trọng ông bà cha mẹ, chăm chỉ học tập và rèn luyện đạo đức', 'Chỉ đòi hỏi quyền lợi mà không cần làm gì', 'Không cần nghe lời thầy cô giáo', 'Không cần tuân theo pháp luật'], correctAnswer: 'Yêu quý kính trọng ông bà cha mẹ, chăm chỉ học tập và rèn luyện đạo đức',
    scaffoldHint: 'Quyền lợi luôn đi đôi với bổn phận. Trẻ em ngoan là người biết đền đáp công ơn sinh thành bằng sự chăm chỉ và lễ phép!',
    funFact: 'Việt Nam là quốc gia đầu tiên ở châu Á và thứ hai trên thế giới phê chuẩn Công ước của Liên Hợp Quốc về Quyền Trẻ em!'
  },
  {
    id: 'eth_adv8', stage: 8, difficulty: 'hard', title: 'Bảo Vệ Di Sản Văn Hóa', opponentName: 'Di Tích Cổ Kính', opponentAvatar: '🏛️',
    questionText: 'Khi đi tham quan các di tích lịch sử, chùa cổ hoặc danh lam thắng cảnh, hành động nào là CẤM KỴ?',
    visual: '🚩 Khu di tích lịch sử ngàn năm văn hiến', options: ['Dùng bút, dao khắc tên bậy bạ lên tường gạch, cột đá hay thân cây cổ thụ', 'Bỏ rác đúng nơi quy định', 'Đi nhẹ nói khẽ và tuân theo hướng dẫn viên', 'Ăn mặc trang nghiêm lịch sự'], correctAnswer: 'Dùng bút, dao khắc tên bậy bạ lên tường gạch, cột đá hay thân cây cổ thụ',
    scaffoldHint: 'Di tích lịch sử là báu vật nghìn năm của tổ tiên để lại; viết vẽ bậy là hành vi phá hoại di sản văn hóa không thể chấp nhận!',
    funFact: 'Giữ gìn từng viên gạch, mái ngói cổ kính là em đang bảo vệ hồn thiêng sông núi của dân tộc Việt Nam cho muôn đời sau!'
  },
  {
    id: 'eth_adv9', stage: 9, difficulty: 'hard', title: 'Ý Thức Công Dân Toàn Cầu', opponentName: 'Trái Đất Xanh Mướt', opponentAvatar: '🌏',
    questionText: 'Để cùng nhân loại ứng phó với Biến đổi khí hậu toàn cầu, hành động nhỏ mang ý nghĩa lớn của mỗi học sinh là gì?',
    visual: '🌱 Trồng cây xanh bảo vệ lá phổi Trái Đất', options: ['Giảm rác thải nhựa một lần, tiết kiệm điện nước, trồng thêm cây xanh và đi bộ/xe đạp', 'Xả rác thải bừa bãi ra sông ngòi', 'Chặt phá cây xanh bẻ cành hái hoa', 'Mở vòi nước chảy lãng phí không khóa'], correctAnswer: 'Giảm rác thải nhựa một lần, tiết kiệm điện nước, trồng thêm cây xanh và đi bộ/xe đạp',
    scaffoldHint: 'Một người làm việc nhỏ, hàng triệu người cùng chung tay sẽ tạo nên cuộc cách mạng xanh cứu lấy Trái Đất thân yêu!',
    funFact: 'Một chiếc túi ni-lông mất từ 500 đến 1.000 năm mới có thể phân hủy trong đất; hãy sử dụng túi vải bảo vệ thiên nhiên nhé!'
  },
  {
    id: 'eth_adv10', stage: 10, difficulty: 'boss', title: 'Đại Sứ Công Dân Toàn Cầu (TRÙM ĐẠO ĐỨC 3-4-5)', opponentName: 'Thần Trí Tuệ & Nhân Cách Việt Nam', opponentAvatar: '👑🕊️🌟🇻🇳',
    questionText: 'Phẩm chất nào giúp người học sinh Việt Nam tự tin hội nhập cùng bạn bè năm châu bốn biển?',
    visual: '🌟 Tinh thần yêu nước và hội nhập toàn cầu', options: ['Yêu quê hương đất nước, giàu lòng nhân ái, trung thực, tinh thần hiếu học và tự hào bản sắc dân tộc', 'Chỉ sùng bái văn hóa nước ngoài bỏ quên cội nguồn', 'Sống ích kỷ chỉ biết đến bản thân', 'Kiêu ngạo và coi thường người khác'], correctAnswer: 'Yêu quê hương đất nước, giàu lòng nhân ái, trung thực, tinh thần hiếu học và tự hào bản sắc dân tộc',
    scaffoldHint: 'Gốc rễ vững chắc ở lòng yêu nước và đạo lý cha ông, ngọn vươn cao đón ánh sáng tri thức thế giới!',
    funFact: 'Chúc mừng bé đã trở thành "Đại Sứ Trí Tuệ & Nhân Cách Toàn Cầu"! Tương lai non sông gấm vóc Việt Nam đặt trọn niềm tin nơi em!'
  }
];

// ==========================================
// 8. CUNG ĐIỆN ÂM NHẠC & MĨ THUẬT SÁNG TẠO (KHỐI 3 - 4 - 5)
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
    id: 'am_adv4', stage: 4, difficulty: 'medium', title: 'Nhạc Sĩ Văn Cao & Quốc Ca', opponentName: 'Lá Cờ Đỏ Sao Vàng', opponentAvatar: '🇻🇳',
    questionText: 'Bài hát thiêng liêng "Tiến quân ca" - Quốc ca chính thức của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam do nhạc sĩ tài hoa nào sáng tác?',
    visual: '⭐ Đoàn quân Việt Nam đi chung lòng cứu quốc', options: ['Nhạc sĩ Văn Cao', 'Nhạc sĩ Trịnh Công Sơn', 'Nhạc sĩ Phong Nhã', 'Nhạc sĩ Hoàng Vân'], correctAnswer: 'Nhạc sĩ Văn Cao',
    scaffoldHint: 'Nhạc sĩ Văn Cao sáng tác "Tiến quân ca" vào năm 1944; giai điệu hào hùng đã thôi thúc triệu con tim đứng lên giành độc lập!',
    funFact: 'Mỗi khi giai điệu Quốc ca vang lên, hàng triệu học sinh trên cả nước đều đứng nghiêm trang, hướng về cờ Tổ quốc với niềm tự hào khôn xiết!'
  },
  {
    id: 'am_adv5', stage: 5, difficulty: 'medium', title: 'Tranh Dân Gian Đông Hồ', opponentName: 'Nghệ Nhân Khắc Gỗ', opponentAvatar: '🖼️',
    questionText: 'Tranh dân gian Đông Hồ (Bắc Ninh) nổi tiếng với bức tranh "Đám cưới chuột" và "Lợn đàn" được in trên chất liệu đặc biệt nào?',
    visual: '🐷 Chú lợn có xoáy âm dương ngộ nghĩnh', options: ['Giấy điệp quét vỏ sò lấp lánh và màu sắc từ thiên nhiên', 'Vải lụa tơ tằm dệt kim', 'Giấy xi măng công nghiệp', 'Tấm nhựa mica tổng hợp'], correctAnswer: 'Giấy điệp quét vỏ sò lấp lánh và màu sắc từ thiên nhiên',
    scaffoldHint: 'Giấy điệp làm từ vỏ con điệp ở biển giã mịn trộn hồ nếp, quét lên giấy dó tạo ánh sáng lấp lánh như dát bạc!',
    funFact: 'Màu đỏ từ sỏi son, màu vàng từ hoa hòe, màu đen từ than lá tre, màu trắng từ vỏ điệp - 100% tinh hoa đất trời Việt Nam!'
  },
  {
    id: 'am_adv6', stage: 6, difficulty: 'medium', title: 'Luật Phối Cảnh Xa Gần', opponentName: 'Con Đường Hút Tầm Mắt', opponentAvatar: '🛣️',
    questionText: 'Trong mĩ thuật, luật phối cảnh xa gần (thấu thị) giúp tạo chiều sâu không gian như thế nào?',
    visual: '🌲 Hàng cây bên đường xa dần nhỏ lại', options: ['Vật ở gần nhìn to, rõ ràng; vật ở càng xa nhìn càng nhỏ và mờ nhạt dần', 'Vật ở xa vẽ to hơn vật ở gần', 'Tất cả các vật đều vẽ kích thước bằng nhau', 'Vật ở gần vẽ trong suốt'], correctAnswer: 'Vật ở gần nhìn to, rõ ràng; vật ở càng xa nhìn càng nhỏ và mờ nhạt dần',
    scaffoldHint: 'Quy tắc cơ bản: "Gần to - Xa nhỏ, Gần rõ - Xa mờ, Gần đậm - Xa nhạt" giúp bức tranh 2D sống động như không gian thực!',
    funFact: 'Luật phối cảnh được hoàn thiện từ thời kỳ Phục Hưng đã biến hội họa thành một môn khoa học thị giác đỉnh cao!'
  },
  {
    id: 'am_adv7', stage: 7, difficulty: 'hard', title: 'Hòa Sắc Tương Phản', opponentName: 'Vòng Thuần Sắc Mĩ Thuật', opponentAvatar: '🎡',
    questionText: 'Cặp màu nào sau đây là cặp màu TƯƠNG PHẢN bổ túc trực tiếp trên vòng thuần sắc, khi đặt cạnh nhau tạo ấn tượng thị giác mạnh mẽ?',
    visual: '🔴 🟢 Sắc hoa đỏ rực giữa vòm lá xanh', options: ['Đỏ và Xanh lá cây', 'Đỏ và Cam', 'Xanh lam và Xanh tím', 'Vàng và Vàng cam'], correctAnswer: 'Đỏ và Xanh lá cây',
    scaffoldHint: '3 cặp màu tương phản kinh điển đối diện nhau: Đỏ - Xanh lá, Vàng - Tím, Da cam - Xanh lam!',
    funFact: 'Tự nhiên sử dụng hòa sắc tương phản tuyệt đẹp: quả dâu tây đỏ giữa vòm lá xanh, hoa cúc vàng rực rỡ dưới bầu trời tím hoàng hôn!'
  },
  {
    id: 'am_adv8', stage: 8, difficulty: 'hard', title: 'Điêu Khắc & Nghệ Thuật Tạo Hình 3D', opponentName: 'Tượng Điêu Khắc Bằng Đá', opponentAvatar: '🗿',
    questionText: 'Tác phẩm điêu khắc hoặc nặn tượng đất sét khác với bức tranh vẽ phẳng ở đặc điểm cốt lõi nào?',
    visual: '🏺 Chiếc bình gốm và bức tượng tròn', options: ['Có khối 3 chiều (chiều cao, chiều rộng, chiều sâu) và có thể ngắm nhìn từ mọi hướng', 'Chỉ nhìn được từ một mặt phẳng phía trước', 'Không có thể tích khối', 'Chỉ làm bằng giấy mỏng'], correctAnswer: 'Có khối 3 chiều (chiều cao, chiều rộng, chiều sâu) và có thể ngắm nhìn từ mọi hướng',
    scaffoldHint: 'Tranh vẽ là không gian 2D trên mặt phẳng; tượng điêu khắc là không gian 3D chiếm lĩnh thể tích thực trong đời sống!',
    funFact: 'Nghề gốm Bát Tràng (Hà Nội) với lịch sử hơn 700 năm là minh chứng rực rỡ cho nghệ thuật tạo hình đất nung Việt Nam!'
  },
  {
    id: 'am_adv9', stage: 9, difficulty: 'hard', title: 'Danh Nhân Âm Nhạc Cổ Điển Thế Giới', opponentName: 'Đàn Dương Cầm Hoàng Gia', opponentAvatar: '🎹',
    questionText: 'Nhà soạn nhạc thiên tài người Đức - tác giả bản giao hưởng số 5 định mệnh và bản Sonate Ánh Trăng là ai?',
    visual: '🎼 Giai điệu bất hủ của thế giới', options: ['Ludwig van Beethoven', 'Walt Disney', 'Leonardo da Vinci', 'Isaac Newton'], correctAnswer: 'Ludwig van Beethoven',
    scaffoldHint: 'Dù bị khiếm thính vào những năm cuối đời, Beethoven vẫn sáng tác nên những bản giao hưởng vĩ đại nhất lịch sử nhân loại!',
    funFact: 'Âm nhạc cổ điển của Mozart và Beethoven được khoa học chứng minh giúp kích thích tư duy logic và sóng não sáng tạo của trẻ em!'
  },
  {
    id: 'am_adv10', stage: 10, difficulty: 'boss', title: 'Bậc Thầy Nghệ Thuật & Âm Nhạc (TRÙM VĂN HÓA NGHỆ THUẬT)', opponentName: 'Nhạc Trưởng Đại Hòa Tấu Vũ Trụ', opponentAvatar: '🎻🎭🎨👑✨',
    questionText: 'Nghệ thuật âm nhạc và mĩ thuật đỉnh cao đóng góp sứ mệnh vĩ đại nào cho nền văn minh nhân loại?',
    visual: '🌟 Tinh hoa di sản nghệ thuật ngàn năm', options: ['Kết nối trái tim con người vượt qua mọi ranh giới ngôn ngữ, lưu giữ hồn thiêng văn hóa và thắp sáng cái đẹp bất diệt', 'Chỉ để giải trí thoáng qua rồi quên', 'Chỉ dành riêng cho giới quý tộc giàu có', 'Làm cho con người xa rời thực tế'], correctAnswer: 'Kết nối trái tim con người vượt qua mọi ranh giới ngôn ngữ, lưu giữ hồn thiêng văn hóa và thắp sáng cái đẹp bất diệt',
    scaffoldHint: 'Âm nhạc và hội họa là ngôn ngữ chung của cả nhân loại; nơi nào có cái đẹp và âm thanh réo rắt, nơi đó có sự sống diệu kỳ!',
    funFact: 'Chúc mừng bé đã trở thành "Đại Sứ Nghệ Thuật Toàn Năng"! Hãy để tâm hồn em luôn ngân vang những giai điệu yêu thương và rực rỡ sắc màu cuộc sống!'
  }
];
