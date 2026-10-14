// Ngân hàng câu đố bổ sung Mức 1 (Lớp 1 - 2) - Chuẩn GDPT 2018
// Gồm 4 môn: Đạo Đức (30 ải), Tin Học & Công Nghệ Nhí (30 ải), Âm Nhạc & Mĩ Thuật (30 ải), Kỹ Năng Sinh Tồn (30 ải)
// Tổng cộng: 120 ải thử thách chất lượng cao cho Mức 1

// ==========================================
// 1. VƯỜN ƯƠM ĐẠO ĐỨC & KỸ NĂNG SỐNG (30 ẢI)
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
    id: 'eth3', stage: 3, difficulty: 'easy', title: 'Hiếu Thảo Với Cha Mẹ', opponentName: 'Thỏ Con Chăm Chỉ', opponentAvatar: '🐰',
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
    id: 'eth5', stage: 5, difficulty: 'easy', title: 'Giữ Trật Tự Nơi Công Cộng', opponentName: 'Sóc Nâu Tỉ Mỉ', opponentAvatar: '🐿️',
    questionText: 'Khi đang ở trong thư viện trường hoặc bệnh viện, em cần tuân thủ quy tắc nào?',
    visual: '📚 Góc đọc sách yên tĩnh tại thư viện', options: ['Đi nhẹ, nói khẽ và giữ trật tự', 'Hò hét và rượt đuổi nhau', 'Bật nhạc điện thoại to hết cỡ', 'Vứt vỏ kẹo ra bàn đọc sách'], correctAnswer: 'Đi nhẹ, nói khẽ và giữ trật tự',
    scaffoldHint: 'Giữ trật tự nơi công cộng thể hiện sự tôn trọng không gian chung và quyền được yên tĩnh của người khác!',
    funFact: 'Hành vi văn minh "Đi nhẹ, nói khẽ" là nét đẹp của học sinh thế hệ mới!'
  },
  {
    id: 'eth6', stage: 6, difficulty: 'easy', title: 'Đức Tính Thật Thà', opponentName: 'Hươu Con Lương Thiện', opponentAvatar: '🦌',
    questionText: 'Nhặt được chiếc ví tiền hoặc đồ dùng của bạn rơi trên sân trường, em sẽ làm gì?',
    visual: '👛 Chiếc ví tiền ai đó đánh rơi', options: ['Báo ngay và gửi lại cho thầy cô giáo hoặc bác bảo vệ', 'Bỏ vào túi áo mang về nhà', 'Chia tiền cho bạn bè tiêu xài', 'Lặng lẽ vứt vào sọt rác'], correctAnswer: 'Báo ngay và gửi lại cho thầy cô giáo hoặc bác bảo vệ',
    scaffoldHint: 'Thật thà, trung thực là đức tính quý giá nhất của con người. "Nhặt được của rơi, trả người đánh mất"!',
    funFact: 'Người trung thực luôn nhận được sự tin cậy, tôn trọng và yêu quý từ tất cả thầy cô và bạn bè!'
  },
  {
    id: 'eth7', stage: 7, difficulty: 'easy', title: 'Giữ Lời Hứa', opponentName: 'Họa Mi Nhỏ Nhẹ', opponentAvatar: '🐦',
    questionText: 'Em đã hứa với bạn chiều nay cùng nhau đến thư viện đọc sách, em nên làm gì?',
    visual: '⏰ Đồng hồ điểm giờ hẹn', options: ['Đến đúng giờ theo lời đã hứa', 'Ngủ quên và không cần báo cho bạn', 'Đi chơi chỗ khác bỏ mặc bạn chờ', 'Hẹn cho vui chứ không đi'], correctAnswer: 'Đến đúng giờ theo lời đã hứa',
    scaffoldHint: 'Giữ lời hứa chứng tỏ em là người đáng tin cậy và biết tôn trọng thời gian của người khác!',
    funFact: 'Người xưa có câu "Chữ tín quý hơn vàng", giữ lời hứa giúp em xây dựng tình bạn bền vững!'
  },
  {
    id: 'eth8', stage: 8, difficulty: 'easy', title: 'Tự Giác Học Tập', opponentName: 'Cú Thông Thái Nhí', opponentAvatar: '🦉',
    questionText: 'Buổi tối trước khi đi ngủ, việc làm nào thể hiện tinh thần tự giác chuẩn bị cho ngày học mới?',
    visual: '🎒 Chiếc cặp sách ngay ngắn trên bàn', options: ['Xem thời khóa biểu và tự sắp xếp sách vở, bút thước vào cặp', 'Để mẹ phải nhắc nhở và chuẩn bị hộ', 'Cứ đi ngủ sáng mai tính sau', 'Chơi điện tử đến khuya quên cả soạn bài'], correctAnswer: 'Xem thời khóa biểu và tự sắp xếp sách vở, bút thước vào cặp',
    scaffoldHint: 'Tự giác chuẩn bị đồ dùng học tập giúp em rèn luyện tính tự lập, không bao giờ lo quên sách vở!',
    funFact: 'Thói quen tự lập từ nhỏ chính là bệ phóng giúp em trở thành người thành công trong tương lai!'
  },
  {
    id: 'eth9', stage: 9, difficulty: 'medium', title: 'Đội Mũ Bảo Hiểm An Toàn', opponentName: 'Chú Cảnh Sát Giao Thông Nhí', opponentAvatar: '👮‍♂️',
    questionText: 'Khi được bố mẹ chở đi học bằng xe máy, quy định an toàn bắt buộc dành cho em là gì?',
    visual: '🛵 Chiếc xe máy trên đường phố', options: ['Đội mũ bảo hiểm cài quai đúng cách và ôm chặt người lái', 'Không cần đội mũ bảo hiểm vì gần nhà', 'Đứng nhún nhảy trên yên xe', 'Thò tay đùa nghịch với xe bên cạnh'], correctAnswer: 'Đội mũ bảo hiểm cài quai đúng cách và ôm chặt người lái',
    scaffoldHint: 'Mũ bảo hiểm bảo vệ bộ não quý giá của em trước những va chạm bất ngờ khi tham gia giao thông!',
    funFact: 'Thông điệp "Đội mũ bảo hiểm - Trọn tình cha mẹ" là hành động bảo vệ sự sống thân yêu của bé!'
  },
  {
    id: 'eth10', stage: 10, difficulty: 'medium', title: 'Giữ Gìn Vệ Sinh Trường Lớp', opponentName: 'Bác Lao Công Tận Tụy', opponentAvatar: '🧹',
    questionText: 'Sau giờ ra chơi ăn bánh kẹo ở sân trường, em nên vứt vỏ bánh kẹo ở đâu?',
    visual: '🏫 Sân trường xanh sạch đẹp', options: ['Bỏ vào thùng rác đúng nơi quy định', 'Vứt ngay dưới chân ghế đá', 'Nhét vào ngăn bàn học', 'Ném qua cửa sổ lớp học'], correctAnswer: 'Bỏ vào thùng rác đúng nơi quy định',
    scaffoldHint: 'Vứt rác đúng nơi quy định giữ cho trường lớp luôn sạch đẹp và thể hiện nếp sống văn minh!',
    funFact: 'Trường học xanh - sạch - đẹp giúp chúng ta có bầu không khí trong lành để học tập vui tươi mỗi ngày!'
  },
  {
    id: 'eth11', stage: 11, difficulty: 'medium', title: 'Đi Bộ An Toàn', opponentName: 'Đèn Tín Hiệu Giao Thông', opponentAvatar: '🚦',
    questionText: 'Khi đi bộ trên đường giao thông, em phải đi ở phần đường nào để đảm bảo an toàn?',
    visual: '🚶 Bé đi bộ trên vỉa hè', options: ['Đi trên vỉa hè, lề đường bên phải; sang đường ở vạch kẻ dành cho người đi bộ', 'Chạy nhảy đùa giỡn giữa lòng đường', 'Đi dưới lòng đường ngược chiều xe chạy', 'Băng qua đường khi đèn đỏ bật sáng'], correctAnswer: 'Đi trên vỉa hè, lề đường bên phải; sang đường ở vạch kẻ dành cho người đi bộ',
    scaffoldHint: 'Vỉa hè và vạch kẻ trắng sang đường là lối đi an toàn tuyệt đối dành riêng cho người đi bộ!',
    funFact: 'Luôn quan sát hai bên đường cẩn thận và đi cùng người lớn khi sang đường phố đông đúc nhé!'
  },
  {
    id: 'eth12', stage: 12, difficulty: 'medium', title: 'Tôn Trọng Bạn Bè', opponentName: 'Búp Bê Xinh Xắn', opponentAvatar: '🎎',
    questionText: 'Khi bạn trong lớp trả lời câu hỏi của cô giáo chưa chính xác, em nên làm gì?',
    visual: '👩‍🏫 Giờ học phát biểu sôi nổi', options: ['Lắng nghe, động viên bạn và giơ tay xin phép cô bổ sung ý kiến', 'Cười to giễu cợt bạn', 'Chê bai bạn trước cả lớp', 'Hò hét trêu chọc bạn bè'], correctAnswer: 'Lắng nghe, động viên bạn và giơ tay xin phép cô bổ sung ý kiến',
    scaffoldHint: 'Ai cũng có thể mắc sai lầm khi học tập. Giúp đỡ bạn cùng tiến bộ mới là tinh thần đồng đội cao đẹp!',
    funFact: 'Khích lệ một người bạn khi họ vấp ngã sẽ tiếp thêm cho bạn sức mạnh to lớn để tự tin hơn!'
  },
  {
    id: 'eth13', stage: 13, difficulty: 'medium', title: 'Chăm Sóc Ông Bà', opponentName: 'Bà Ngoại Dịu Hiền', opponentAvatar: '👵',
    questionText: 'Khi thấy bà đi lại khó khăn hoặc bị đau lưng, việc làm hiếu nghĩa nào em có thể làm ngay?',
    visual: '🍵 Tách trà thơm dâng bà', options: ['Dắt tay bà cẩn thận, bóp vai và rót nước mời bà uống', 'Chạy nhảy ầm ĩ trước mặt bà', 'Bật tivi thật to mặc bà mệt', 'Đòi bà dắt đi mua đồ chơi'], correctAnswer: 'Dắt tay bà cẩn thận, bóp vai và rót nước mời bà uống',
    scaffoldHint: 'Chăm sóc và hỏi han ông bà khi mệt mỏi thể hiện tình yêu thương sâu sắc của con cháu!',
    funFact: 'Ông bà đã dành cả cuộc đời nuôi nấng cha mẹ; sự quan tâm của em là liều thuốc bổ ngọt ngào nhất đối với ông bà!'
  },
  {
    id: 'eth14', stage: 14, difficulty: 'medium', title: 'Xếp Hàng Văn Minh', opponentName: 'Hàng Ngũ Ngay Ngắn', opponentAvatar: '🧍‍♂️🧍‍♀️',
    questionText: 'Khi mua đồ ở căng-tin trường hoặc chờ lên xe buýt, em cần ứng xử văn minh như thế nào?',
    visual: '🚌 Xếp hàng ngay ngắn chờ lên xe', options: ['Xếp hàng lần lượt theo thứ tự, không chen lấn xô đẩy', 'Chen ngang lên đầu hàng cướp chỗ', 'Xô đẩy người phía trước để nhanh hơn', 'Đứng chặn cửa xe không cho ai vào'], correctAnswer: 'Xếp hàng lần lượt theo thứ tự, không chen lấn xô đẩy',
    scaffoldHint: 'Văn hóa xếp hàng thể hiện sự công bằng, tôn trọng người đến trước và giữ an toàn cho chính mình!',
    funFact: 'Xếp hàng văn minh là thói quen chuẩn mực quốc tế của các công dân văn minh trên khắp thế giới!'
  },
  {
    id: 'eth15', stage: 15, difficulty: 'medium', title: 'Yêu Quý Động Vật Nhỏ', opponentName: 'Mèo Mướp Tinh Nghịch', opponentAvatar: '🐈',
    questionText: 'Đối với thú cưng nuôi trong nhà (chó, mèo, chim nhỏ), thái độ đúng đắn của bé là gì?',
    visual: '🐕 Chú cún trung thành vẫy đuôi', options: ['Yêu thương, cho ăn uống đầy đủ và không đánh đập trêu chọc', 'Lấy gậy đuổi đánh thú cưng', 'Bỏ đói thú cưng cả ngày', 'Bắt giam vào xó tối không cho ra ngoài'], correctAnswer: 'Yêu thương, cho ăn uống đầy đủ và không đánh đập trêu chọc',
    scaffoldHint: 'Động vật cũng biết đau và cảm nhận tình yêu thương. Hãy chăm sóc chúng bằng trái tim nhân hậu!',
    funFact: 'Nuôi dưỡng và chăm sóc thú cưng giúp các bạn nhỏ hình thành lòng trắc ẩn và tinh thần trách nhiệm từ sớm!'
  },
  {
    id: 'eth16', stage: 16, difficulty: 'hard', title: 'Bảo Vệ Của Công', opponentName: 'Chiếc Bàn Học Thân Thương', opponentAvatar: '🪑',
    questionText: 'Bàn ghế trong lớp học và đồ chơi ngoài sân trường là tài sản chung, em cần giữ gìn thế nào?',
    visual: '🏫 Bàn ghế lớp học tinh tươm', options: ['Không vẽ bậy, không khắc chữ lên mặt bàn và không dẫm đạp lên ghế', 'Dùng bút xóa vẽ hình bừa bãi lên bàn', 'Dùng dao khắc tên mình lên mặt bàn', 'Đứng lên bàn nhún nhảy'], correctAnswer: 'Không vẽ bậy, không khắc chữ lên mặt bàn và không dẫm đạp lên ghế',
    scaffoldHint: 'Bảo vệ của công là trách nhiệm chung của học sinh để các bạn khóa sau vẫn có bàn ghế đẹp để học tập!',
    funFact: 'Bàn ghế sạch sẽ, ngay ngắn tạo cảm hứng học tập sáng tạo và tinh thần sảng khoái mỗi ngày!'
  },
  {
    id: 'eth17', stage: 17, difficulty: 'hard', title: 'Biết Ơn Thầy Cô', opponentName: 'Bông Hoa Điểm Mười', opponentAvatar: '🌸',
    questionText: 'Cách tốt nhất để bày tỏ lòng biết ơn sâu sắc đối với công ơn dạy dỗ của thầy cô giáo là gì?',
    visual: '💐 Đóa hoa tri ân thầy cô giáo', options: ['Chăm ngoan, học giỏi, lễ phép và vâng lời thầy cô chỉ dạy', 'Chỉ tặng quà đắt tiền vào ngày lễ', 'Lười học nhưng khéo nịnh nọt', 'Nói chuyện riêng trong giờ học của thầy cô'], correctAnswer: 'Chăm ngoan, học giỏi, lễ phép và vâng lời thầy cô chỉ dạy',
    scaffoldHint: 'Sự tiến bộ, trưởng thành và nụ cười chăm ngoan của học sinh là món quà quý giá nhất đối với thầy cô!',
    funFact: 'Ngày Nhà giáo Việt Nam 20/11 là ngày lễ hội truyền thống tôn vinh nghề dạy học cao quý nhất!'
  },
  {
    id: 'eth18', stage: 18, difficulty: 'hard', title: 'Không Nói Dối', opponentName: 'Cây Cầu Thật Thà', opponentAvatar: '🌉',
    questionText: 'Khi em lỡ tay làm vỡ chiếc cốc của mẹ, hành động dũng cảm và chân thật nhất là gì?',
    visual: '🥛 Chiếc cốc thủy tinh bị vỡ', options: ['Chạy đến nhận lỗi với mẹ và cùng mẹ dọn dẹp cẩn thận', 'Đổ tội cho con mèo làm vỡ', 'Nói dối là không biết ai làm', 'Giấu mảnh vỡ vào gầm ghế'], correctAnswer: 'Chạy đến nhận lỗi với mẹ và cùng mẹ dọn dẹp cẩn thận',
    scaffoldHint: 'Thật thà nhận lỗi luôn được tha thứ và khen ngợi. Nói dối chỉ làm mất niềm tin của cha mẹ!',
    funFact: 'Dũng cảm nhận lỗi là bước đi đầu tiên của sự trưởng thành và bản lĩnh đích thực!'
  },
  {
    id: 'eth19', stage: 19, difficulty: 'hard', title: 'Giúp Đỡ Bạn Khuyết Tật', opponentName: 'Vòng Tay Ấm Áp', opponentAvatar: '🧑‍🦽',
    questionText: 'Khi trong lớp có một bạn bị khuyết tật vận động phải ngồi xe lăn, em và các bạn nên làm gì?',
    visual: '🤝 Tình bạn gắn kết chan hòa', options: ['Nhiệt tình giúp bạn đẩy xe, xách cặp và vui vẻ rủ bạn cùng tham gia trò chơi', 'Tránh xa không chơi cùng', 'Nhìn bạn bằng ánh mắt soi mói chê cười', 'Bỏ mặc bạn một mình trong góc lớp'], correctAnswer: 'Nhiệt tình giúp bạn đẩy xe, xách cặp và vui vẻ rủ bạn cùng tham gia trò chơi',
    scaffoldHint: 'Tất cả bạn bè đều bình đẳng và xứng đáng được yêu thương; sự sẻ chia giúp bạn vượt qua mặc cảm để hòa nhập!',
    funFact: 'Giúp đỡ bạn có hoàn cảnh khó khăn làm tâm hồn em nở hoa và xây dựng một tập thể lớp đoàn kết vững mạnh!'
  },
  {
    id: 'eth20', stage: 20, difficulty: 'hard', title: 'Tiết Kiệm Nước Sạch', opponentName: 'Giọt Nước Tinh Khiết', opponentAvatar: '💧',
    questionText: 'Khi đánh răng hoặc rửa tay ở trường, hành động nào thể hiện đức tính tiết kiệm nước sạch?',
    visual: '🚰 Vòi nước chảy róc rách', options: ['Khóa chặt vòi nước khi đang xát xà phòng và hứng vừa đủ nước vào cốc để súc miệng', 'Mở vòi nước xả tràn lan không cần tắt', 'Vừa đánh răng vừa mở nước xối xả', 'Nghịch nước tạt vào bạn bè'], correctAnswer: 'Khóa chặt vòi nước khi đang xát xà phòng và hứng vừa đủ nước vào cốc để súc miệng',
    scaffoldHint: 'Nước sạch là tài nguyên quý giá, tiết kiệm từng giọt nước là góp phần bảo vệ sự sống trên Trái Đất!',
    funFact: 'Trên thế giới có hàng triệu trẻ em thiếu nước sạch sinh hoạt; tiết kiệm nước là hành động nhân đạo thiết thực!'
  },
  {
    id: 'eth21', stage: 21, difficulty: 'hard', title: 'Biết Lắng Nghe Ý Kiến', opponentName: 'Đôi Tai Thấu Cảm', opponentAvatar: '👂',
    questionText: 'Trong giờ thảo luận nhóm, khi bạn khác đang phát biểu ý kiến, em nên làm gì?',
    visual: '👥 Các bạn nhỏ thảo luận nhóm sôi nổi', options: ['Chăm chú lắng nghe, không ngắt lời và tôn trọng quan điểm của bạn', 'Nói chen ngang cướp lời bạn', 'Quay sang nói chuyện riêng với bạn khác', 'Bịt tai lại không muốn nghe'], correctAnswer: 'Chăm chú lắng nghe, không ngắt lời và tôn trọng quan điểm của bạn',
    scaffoldHint: 'Lắng nghe là nghệ thuật giao tiếp tôn trọng người đối diện và giúp em học hỏi thêm nhiều ý tưởng mới!',
    funFact: 'Người biết lắng nghe luôn là người được bạn bè yêu quý và tin tưởng tâm sự những điều thầm kín nhất!'
  },
  {
    id: 'eth22', stage: 22, difficulty: 'hard', title: 'Tự Lập Trong Sinh Hoạt', opponentName: 'Chiếc Đồng Hồ Báo Thức', opponentAvatar: '⏰',
    questionText: 'Buổi sáng thức dậy, việc nào em có thể tự làm ngay mà không cần bố mẹ phải làm hộ?',
    visual: '🛏️ Chiếc giường ngủ ngăn nắp', options: ['Tự gấp chăn màn gọn gàng, đánh răng rửa mặt và thay đồng phục', 'Nằm lười khóc nhè đợi mẹ bế dậy', 'Bắt mẹ đánh răng xúc cơm hộ', 'Chờ bố mẹ mặc quần áo cho'], correctAnswer: 'Tự gấp chăn màn gọn gàng, đánh răng rửa mặt và thay đồng phục',
    scaffoldHint: 'Tự phục vụ bản thân từ những việc nhỏ giúp em rèn luyện tính độc lập, sẵn sàng bước vào đời!',
    funFact: 'Các bạn nhỏ lớp 1 ở Nhật Bản đã tự giác xách cặp, gấp chăn và tự đi bộ đến trường từ rất sớm!'
  },
  {
    id: 'eth23', stage: 23, difficulty: 'hard', title: 'Bảo Vệ Cây Xanh Trường Em', opponentName: 'Chồi Non Biếc Xanh', opponentAvatar: '🌱',
    questionText: 'Khi vui chơi dưới bóng mát sân trường, hành động đúng đắn đối với cây hoa và cây bóng mát là gì?',
    visual: '🌳 Hàng cây bóng mát rợp sân trường', options: ['Tưới nước, chăm sóc và không bẻ cành hái hoa', 'Bẻ cành cây làm kiếm đánh nhau', 'Hái hoa dẫm đạp lên luống cỏ non', 'Khắc tên lên thân cây cổ thụ'], correctAnswer: 'Tưới nước, chăm sóc và không bẻ cành hái hoa',
    scaffoldHint: 'Cây xanh cho bóng mát, lọc không khí và điểm tô sắc hoa cho sân trường. Hãy nâng niu từng chồi non!',
    funFact: 'Trồng thêm một cây xanh là em đã tặng cho Trái Đất một lá phổi tươi mát lọc sạch bụi bẩn!'
  },
  {
    id: 'eth24', stage: 24, difficulty: 'hard', title: 'Chia Sẻ Với Người Nghèo', opponentName: 'Tấm Lòng Vàng Nhỏ', opponentAvatar: '💛',
    questionText: 'Khi trường phát động phong trào "Nuôi heo đất giúp bạn nghèo vượt khó", em có thể tham gia thế nào?',
    visual: '🐷 Chú heo đất đựng tiền tiết kiệm', options: ['Tiết kiệm tiền ăn vặt để ủng hộ sách vở, quần áo ấm cho các bạn vùng cao', 'Thờ ơ không quan tâm', 'Chê bai các bạn nghèo khó', 'Đòi bố mẹ cho nhiều tiền để khoe mẽ'], correctAnswer: 'Tiết kiệm tiền ăn vặt để ủng hộ sách vở, quần áo ấm cho các bạn vùng cao',
    scaffoldHint: '"Lá lành đùm lá rách" là truyền thống nhân ái ngàn đời của dân tộc Việt Nam ta!',
    funFact: 'Mỗi cuốn sách cũ hay bộ quần áo ấm em trao đi đều mang lại nụ cười rạng rỡ cho các bạn nhỏ khó khăn!'
  },
  {
    id: 'eth25', stage: 25, difficulty: 'hard', title: 'Lời Nói Nhã Nhặn', opponentName: 'Bông Hoa Ngọt Ngào', opponentAvatar: '🌺',
    questionText: 'Khi giao tiếp với bạn bè trong lớp, em nên xưng hô như thế nào cho văn minh, lịch sự?',
    visual: '🗣️ Lời nói dịu dàng thân thiện', options: ['Xưng hô "bạn - mình" hoặc gọi tên nhau thân mật, không nói tục chửi bậy', 'Xưng hô mày - tao thô lỗ', 'Dùng những từ ngữ lăng mạ xúc phạm bạn', 'Đặt biệt danh xấu xí trêu chọc bạn'], correctAnswer: 'Xưng hô "bạn - mình" hoặc gọi tên nhau thân mật, không nói tục chửi bậy',
    scaffoldHint: '"Lời nói chẳng mất tiền mua, Lựa lời mà nói cho vừa lòng nhau". Lời nói nhã nhặn tạo nên môi trường thân thiện!',
    funFact: 'Lời nói hay, cử chỉ đẹp là tấm gương phản chiếu nhân cách cao quý của một học sinh văn minh!'
  },
  {
    id: 'eth26', stage: 26, difficulty: 'hard', title: 'Tôn Trọng Sự Riêng Tư', opponentName: 'Chiếc Cặp Khóa Kín', opponentAvatar: '🎒',
    questionText: 'Khi thấy cặp sách hoặc ngăn bàn của bạn bên cạnh để mở, em nên làm gì?',
    visual: '🔒 Tôn trọng đồ đạc của bạn', options: ['Không tự ý lục lọi, xem trộm nhật ký hay lấy đồ khi chưa được bạn đồng ý', 'Tự ý thò tay lấy đồ chơi của bạn ra xem', 'Đọc trộm thư từ và bài thi của bạn', 'Lấy bút của bạn mang về nhà dùng'], correctAnswer: 'Không tự ý lục lọi, xem trộm nhật ký hay lấy đồ khi chưa được bạn đồng ý',
    scaffoldHint: 'Tôn trọng đồ dùng và sự riêng tư của người khác là quy tắc ứng xử lịch sự tối thiểu trong xã hội!',
    funFact: 'Muốn mượn đồ của ai, luôn luôn phải hỏi xin phép lịch sự và giữ gìn cẩn thận trước khi trả lại!'
  },
  {
    id: 'eth27', stage: 27, difficulty: 'hard', title: 'Bình Tĩnh Khi Tức Giận', opponentName: 'Trái Tim Bình Yên', opponentAvatar: '💙',
    questionText: 'Khi bất đồng ý kiến hoặc cảm thấy tức giận với bạn, cách kiềm chế cảm xúc tốt nhất là gì?',
    visual: '🧘 Hít thở sâu lấy lại bình tĩnh', options: ['Hít thở thật sâu, đếm chậm từ 1 đến 10 và bình tĩnh nói chuyện giải quyết', 'Lao vào đánh nhau với bạn', 'Ném đồ đạc phá phách', 'Gào thét chửi bới ầm ĩ'], correctAnswer: 'Hít thở thật sâu, đếm chậm từ 1 đến 10 và bình tĩnh nói chuyện giải quyết',
    scaffoldHint: 'Tức giận là kẻ thù của lý trí. Hít một hơi thật sâu giúp nhịp tim chậm lại và trí não sáng suốt hơn!',
    funFact: 'Học cách làm chủ cảm xúc là kỹ năng sống quan trọng giúp em giải quyết mọi xung đột trong hòa bình!'
  },
  {
    id: 'eth28', stage: 28, difficulty: 'hard', title: 'Tự Hào Cờ Đỏ Sao Vàng', opponentName: 'Lá Cờ Tổ Quốc Thân Thương', opponentAvatar: '🇻🇳',
    questionText: 'Trong lễ Chào cờ đầu tuần, tư thế đứng trang nghiêm của người học sinh là gì?',
    visual: '🚩 Lễ chào cờ trang trọng dưới sân trường', options: ['Đứng thẳng nghiêm trang, mắt hướng lên Quốc kỳ, cùng hát vang bài Quốc ca hào hùng', 'Nói chuyện đùa nghịch quay qua quay lại', 'Ngồi thụp xuống đất nghịch cát', 'Đút tay vào túi quần nghêu ngao'], correctAnswer: 'Đứng thẳng nghiêm trang, mắt hướng lên Quốc kỳ, cùng hát vang bài Quốc ca hào hùng',
    scaffoldHint: 'Chào cờ Tổ quốc thể hiện lòng yêu nước nồng nàn và niềm tự hào vô bờ bến đối với non sông đất Việt!',
    funFact: 'Lá cờ đỏ sao vàng là biểu tượng thiêng liêng của độc lập, tự do và tinh thần đại đoàn kết dân tộc Việt Nam!'
  },
  {
    id: 'eth29', stage: 29, difficulty: 'hard', title: 'Nuôi Dưỡng Ước Mơ Đẹp', opponentName: 'Ngôi Sao Hy Vọng', opponentAvatar: '⭐',
    questionText: 'Mỗi học sinh chúng ta cần nuôi dưỡng ước mơ đẹp và nỗ lực rèn luyện để làm gì?',
    visual: '🚀 Ước mơ bay cao bay xa', options: ['Học tập thật tốt, rèn luyện nhân cách để sau này trở thành người có ích xây dựng quê hương', 'Chỉ ước mơ có thật nhiều tiền chơi bời', 'Không cần ước mơ gì cả', 'Ước mơ làm việc xấu hại người'], correctAnswer: 'Học tập thật tốt, rèn luyện nhân cách để sau này trở thành người có ích xây dựng quê hương',
    scaffoldHint: 'Ước mơ là ngọn hải đăng soi sáng bước đường học tập, thôi thúc em không ngừng phấn đấu vươn lên!',
    funFact: 'Tất cả các nhà bác học, bác sĩ, phi hành gia vĩ đại đều bắt đầu từ những ước mơ hồn nhiên thuở ấu thơ!'
  },
  {
    id: 'eth30', stage: 30, difficulty: 'boss', title: 'Trái Tim Yêu Thương & Lễ Phép (TRÙM ĐẠO ĐỨC NHÍ)', opponentName: 'Thần Nhân Ái & Lễ Kính', opponentAvatar: '👑💖✨',
    questionText: 'Điều gì tạo nên một người học sinh gương mẫu, được thầy yêu bạn mến nhất?',
    visual: '🌟 Ngôi sao Đạo Đức sáng ngời', options: ['Lễ phép, hiếu thảo, trung thực, chăm chỉ và luôn yêu thương giúp đỡ mọi người', 'Chỉ cần học giỏi điểm cao nhưng hay kiêu ngạo', 'Chỉ chơi với bạn giàu có', 'Thích bắt nạt bạn bè yếu hơn'], correctAnswer: 'Lễ phép, hiếu thảo, trung thực, chăm chỉ và luôn yêu thương giúp đỡ mọi người',
    scaffoldHint: 'Bác Hồ dạy: "Có tài mà không có đức là người vô dụng". Đạo đức tốt là nền tảng của mọi tài năng!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Bé Ngoan Toàn Năng"! Trái tim nhân ái của bé làm bừng sáng cả thế giới!'
  }
];

// ==========================================
// 2. ĐẢO TIN HỌC & CÔNG NGHỆ NHÍ (30 ẢI)
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
    id: 'it5', stage: 5, difficulty: 'easy', title: 'An Toàn Điện Cho Bé', opponentName: 'Tia Chớp Cảnh Báo', opponentAvatar: '⚡',
    questionText: 'Để phòng tránh điện giật nguy hiểm, điều nào sau đây em TUYỆT ĐỐI KHÔNG được làm?',
    visual: '🔌 Ổ cắm điện trong nhà', options: ['Dùng tay ướt cắm phích điện hoặc chọc vật nhọn vào ổ điện', 'Nhờ người lớn cắm hộ dây sạc máy tính', 'Tránh xa các cột điện khi trời mưa bão', 'Không kéo giật dây điện khi rút phích cắm'], correctAnswer: 'Dùng tay ướt cắm phích điện hoặc chọc vật nhọn vào ổ điện',
    scaffoldHint: 'Nước dẫn điện rất mạnh! Tuyệt đối không chạm vào thiết bị điện khi tay ướt hoặc chọc que kim loại vào ổ điện!',
    funFact: 'Dòng điện dân dụng 220V rất mạnh. Luôn luôn nhờ cha mẹ hoặc thầy cô cắm điện giúp nhé!'
  },
  {
    id: 'it6', stage: 6, difficulty: 'easy', title: 'Đồ Dùng Công Nghệ Quanh Em', opponentName: 'Quạt Máy Mát Lành', opponentAvatar: '🌀',
    questionText: 'Thiết bị nào trong gia đình sử dụng điện để tạo ra luồng gió mát xua tan cơn nóng?',
    visual: '💨 Làn gió mát lành ngày hè', options: ['Chiếc quạt điện', 'Chiếc tủ lạnh', 'Chiếc nồi cơm điện', 'Chiếc bàn là'], correctAnswer: 'Chiếc quạt điện',
    scaffoldHint: 'Cánh quạt quay nhanh nhờ động cơ điện biến đổi điện năng thành cơ năng tạo gió mát!',
    funFact: 'Quạt điện được phát minh từ thế kỷ 19 và trở thành người bạn thân thiết của mọi gia đình Việt Nam!'
  },
  {
    id: 'it7', stage: 7, difficulty: 'easy', title: 'Dụng Cụ Thủ Công An Toàn', opponentName: 'Kéo Thủ Công Nhí', opponentAvatar: '✂️',
    questionText: 'Khi làm thủ công cắt dán giấy màu, em nên dùng loại kéo nào để đảm bảo an toàn tuyệt đối?',
    visual: '📄 Giấy màu và hồ dán thủ công', options: ['Kéo học sinh đầu bo tròn an toàn', 'Kéo cắt tỉa cành cây sắc nhọn', 'Dao rọc giấy cỡ lớn', 'Kéo cắt kim loại'], correctAnswer: 'Kéo học sinh đầu bo tròn an toàn',
    scaffoldHint: 'Kéo đầu tròn được thiết kế riêng cho học sinh tiểu học, giúp bé cắt giấy dễ dàng mà không sợ đâm vào tay!',
    funFact: 'Gấp giấy Origami Nhật Bản kết hợp cắt dán thủ công giúp rèn luyện đôi bàn tay khéo léo và trí tưởng tượng không gian!'
  },
  {
    id: 'it8', stage: 8, difficulty: 'easy', title: 'Tư Duy Thuật Toán Hình Ảnh', opponentName: 'Chú Thỏ Lạc Đường', opponentAvatar: '🐇',
    questionText: 'Chú thỏ muốn đến củ cà rốt: thỏ đang đứng nhìn về phía trước, củ cà rốt ở bên phải thỏ 2 bước. Lệnh nào đúng?',
    visual: '🥕 Củ cà rốt ngon lành phía bên phải', options: ['Quay phải ➔ Đi thẳng 2 bước', 'Đi lùi 2 bước ➔ Quay trái', 'Đi thẳng 5 bước ➔ Nhảy cao', 'Quay trái ➔ Đi lùi 1 bước'], correctAnswer: 'Quay phải ➔ Đi thẳng 2 bước',
    scaffoldHint: 'Thuật toán là chuỗi các bước rõ ràng theo thứ tự: trước tiên quay đúng hướng, sau đó bước đi đến đích!',
    funFact: 'Đây chính là bước khởi đầu của lập trình robot: hướng dẫn máy móc thực hiện từng bước chính xác!'
  },
  {
    id: 'it9', stage: 9, difficulty: 'medium', title: 'Phương Tiện Giao Thông', opponentName: 'Máy Bay Tàu Lượn', opponentAvatar: '✈️',
    questionText: 'Phương tiện công nghệ nào di chuyển trên đường hàng không giúp con người đi vòng quanh thế giới nhanh nhất?',
    visual: '☁️ Bầu trời xanh bao la', options: ['Máy bay', 'Tàu hỏa chạy trên đường ray', 'Tàu thủy vượt sóng biển', 'Xe buýt công cộng'], correctAnswer: 'Máy bay',
    scaffoldHint: 'Máy bay có động cơ phản lực cực mạnh và cánh khí động học nâng đỡ phi cơ bay vút trên những tầng mây!',
    funFact: 'Máy bay thương mại hiện đại có thể bay với tốc độ hơn 900 km/h, nhanh gấp 20 lần xe đạp!'
  },
  {
    id: 'it10', stage: 10, difficulty: 'medium', title: 'Bàn Phím & Phím Dài Nhất', opponentName: 'Phím Space Rộng Lượng', opponentAvatar: '⌨️',
    questionText: 'Phím dài nhất nằm ở hàng dưới cùng của bàn phím máy tính dùng để tạo khoảng cách giữa các chữ là phím gì?',
    visual: '⌨️ Hàng phím dưới cùng', options: ['Phím cách (Space bar)', 'Phím Enter', 'Phím Shift', 'Phím Caps Lock'], correctAnswer: 'Phím cách (Space bar)',
    scaffoldHint: 'Phím Space bar có hình dạng thanh ngang dài nhất, dùng ngón cái nhấn để cách rời từng từ khi gõ văn bản!',
    funFact: 'Phím Space bar là phím được người dùng máy tính gõ nhiều nhất trên toàn thế giới!'
  },
  {
    id: 'it11', stage: 11, difficulty: 'medium', title: 'Thao Tác Nháy Đúp Chuột', opponentName: 'Chú Chuột Nhanh Nhảu', opponentAvatar: '🖱️⚡',
    questionText: 'Để mở một tệp bài học hoặc trò chơi trên màn hình nền máy tính, em thực hiện thao tác chuột nào?',
    visual: '📁 Biểu tượng thư mục trên màn hình', options: ['Nháy đúp chuột trái (bấm nhanh 2 lần liên tiếp)', 'Bấm chuột phải 1 lần', 'Kéo chuột vòng tròn', 'Nhấc chuột lên khỏi bàn'], correctAnswer: 'Nháy đúp chuột trái (bấm nhanh 2 lần liên tiếp)',
    scaffoldHint: 'Nháy đúp chuột (Double click) là bấm nút chuột trái 2 lần thật nhanh mà không làm xê dịch thân chuột!',
    funFact: 'Luyện nháy đúp chuột khéo léo giúp phản xạ ngón tay của bé nhanh nhẹn hơn gấp nhiều lần!'
  },
  {
    id: 'it12', stage: 12, difficulty: 'medium', title: 'Khái Niệm Màn Hình Cảm Ứng', opponentName: 'Máy Tính Bảng Thông Minh', opponentAvatar: '📱',
    questionText: 'Trên máy tính bảng (tablet) hoặc điện thoại thông minh, em tương tác điều khiển bằng cách nào thay cho chuột?',
    visual: '👆 Đầu ngón tay chạm nhẹ lên màn hình', options: ['Chạm, vuốt trực tiếp ngón tay lên màn hình cảm ứng', 'Phải dùng bút chì vẽ lên', 'Gõ thật mạnh bằng búa nhựa', 'Thổi hơi vào màn hình'], correctAnswer: 'Chạm, vuốt trực tiếp ngón tay lên màn hình cảm ứng',
    scaffoldHint: 'Màn hình cảm ứng nhận diện dòng điện tĩnh từ đầu ngón tay của em để thực hiện các lệnh chạm vuốt mượt mà!',
    funFact: 'Màn hình cảm ứng đa điểm cho phép em phóng to, thu nhỏ bản đồ chỉ bằng 2 ngón tay chụm lại và mở ra!'
  },
  {
    id: 'it13', stage: 13, difficulty: 'medium', title: 'Đèn Giao Thông Thông Minh', opponentName: 'Cột Đèn Ba Màu', opponentAvatar: '🚦',
    questionText: 'Đèn tín hiệu giao thông tự động đổi màu theo chu kỳ thời gian được điều khiển bằng công nghệ gì?',
    visual: '🔴 🟡 🟢 Ba màu đèn quen thuộc', options: ['Bộ vi điều khiển và mạch vi xử lý thời gian tự động', 'Có người ngồi bên trong kéo dây', 'Gió thổi đổi màu', 'Tự nhiên đổi màu theo nắng mưa'], correctAnswer: 'Bộ vi điều khiển và mạch vi xử lý thời gian tự động',
    scaffoldHint: 'Cột đèn giao thông chứa máy tính mini được lập trình sẵn để đếm lùi giây và chuyển đổi màu chính xác!',
    funFact: 'Hệ thống đèn giao thông thông minh thời nay có cảm biến đo lưu lượng xe để tự kéo dài đèn xanh chống kẹt xe!'
  },
  {
    id: 'it14', stage: 14, difficulty: 'medium', title: 'Ngôi Nhà Thông Minh (Smart Home)', opponentName: 'Ngôi Nhà Tương Lai', opponentAvatar: '🏡⚡',
    questionText: 'Trong một ngôi nhà thông minh, thiết bị công nghệ hiện đại nào giúp đèn tự bật sáng khi có người bước vào phòng?',
    visual: '💡 Đèn tự bật sáng kỳ diệu', options: ['Cảm biến chuyển động tự động', 'Chiếc chìa khóa sắt cũ', 'Ngọn nến sáp', 'Bức rèm cửa sổ'], correctAnswer: 'Cảm biến chuyển động tự động',
    scaffoldHint: 'Cảm biến chuyển động quét hồng ngoại phát hiện có người đến gần và tự đóng mạch điện bật sáng bóng đèn!',
    funFact: 'Nhà thông minh giúp tiết kiệm điện năng đáng kể vì đèn sẽ tự tắt khi không có người trong phòng!'
  },
  {
    id: 'it15', stage: 15, difficulty: 'medium', title: 'An Toàn Với Nồi Cơm Điện', opponentName: 'Nồi Cơm Bốc Khói Thơm', opponentAvatar: '🍚',
    questionText: 'Khi nồi cơm điện đang sôi bốc hơi nghi ngút, điều nào sau đây em TUYỆT ĐỐI KHÔNG được làm?',
    visual: '💨 Làn hơi nước sôi nóng bỏng', options: ['Ghé mặt hoặc áp bàn tay sát vào lỗ thoát hơi nóng trên nắp nồi', 'Để nồi cơm trên mặt bàn vững chắc', 'Nhờ mẹ xới cơm giúp', 'Rút phích điện cẩn thận khi cơm chín'], correctAnswer: 'Ghé mặt hoặc áp bàn tay sát vào lỗ thoát hơi nóng trên nắp nồi',
    scaffoldHint: 'Hơi nước sôi từ nồi cơm điện có nhiệt độ 100°C rất nóng, có thể gây bỏng nặng nếu chạm trực tiếp!',
    funFact: 'Nồi cơm điện tự động chuyển từ nút "Cook" (Nấu) sang nút "Warm" (Ủ ấm) nhờ rơ-le nhiệt nam châm thông minh!'
  },
  {
    id: 'it16', stage: 16, difficulty: 'hard', title: 'Bàn Phím & Phím Enter Thần Thánh', opponentName: 'Phím Enter Quyền Năng', opponentAvatar: '↵',
    questionText: 'Khi đang gõ một dòng chữ, phím ENTER trên bàn phím có tác dụng gì?',
    visual: '⏎ Phím bấm xuống dòng mới', options: ['Xuống dòng mới hoặc xác nhận thực hiện một lệnh', 'Xóa sạch cả trang văn bản', 'Tắt máy tính ngay lập tức', 'Phóng to màn hình'], correctAnswer: 'Xuống dòng mới hoặc xác nhận thực hiện một lệnh',
    scaffoldHint: 'Phím Enter giống như dấu gật đầu đồng ý: xuống dòng văn bản mới hoặc xác nhận gửi dữ liệu!',
    funFact: 'Tên "Enter" bắt nguồn từ tiếng Anh có nghĩa là "Đi vào" hoặc "Nhập dữ liệu vào hệ thống"!'
  },
  {
    id: 'it17', stage: 17, difficulty: 'hard', title: 'Tư Duy Lập Trình Chú Ong Hút Mật', opponentName: 'Chú Ong Chăm Chỉ', opponentAvatar: '🐝',
    questionText: 'Chú ong muốn bay đến bông hoa: tiến 2 ô ➔ quay trái ➔ tiến 1 ô. Đây là ví dụ của khái niệm gì?',
    visual: '🌸 Bông hoa mật ngọt ngào', options: ['Thuật toán tuần tự (chỉ dẫn từng bước thực hiện)', 'Một phép tính cộng trừ', 'Một bài hát thiếu nhi', 'Một bức tranh màu sáp'], correctAnswer: 'Thuật toán tuần tự (chỉ dẫn từng bước thực hiện)',
    scaffoldHint: 'Mọi chương trình điều khiển robot hay nhân vật game đều là một chuỗi thuật toán các bước được sắp xếp logic!',
    funFact: 'Học lập trình từ lớp 1 giúp rèn luyện tư duy logic, sự kiên nhẫn và khả năng giải quyết vấn đề vượt trội!'
  },
  {
    id: 'it18', stage: 18, difficulty: 'hard', title: 'Loa Máy Tính & Âm Thanh', opponentName: 'Cặp Loa Âm Vang', opponentAvatar: '🔊',
    questionText: 'Thiết bị nào của máy tính giúp em nghe được lời cô giáo giảng bài và những bài hát vui nhộn?',
    visual: '🎵 Sóng âm thanh lan tỏa', options: ['Loa (Speaker) hoặc Tai nghe (Headphone)', 'Bàn phím máy tính', 'Chuột quang', 'Cục sạc pin'], correctAnswer: 'Loa (Speaker) hoặc Tai nghe (Headphone)',
    scaffoldHint: 'Loa chuyển đổi tín hiệu điện tử thành sóng âm thanh truyền đến tai người nghe!',
    funFact: 'Không nên mở âm lượng tai nghe quá 60% để bảo vệ màng nhĩ và thính lực khỏe mạnh suốt đời nhé!'
  },
  {
    id: 'it19', stage: 19, difficulty: 'hard', title: 'Máy In & Giấy In', opponentName: 'Máy In Thần Tốc', opponentAvatar: '🖨️',
    questionText: 'Thiết bị công nghệ nào giúp chuyển bài vẽ hoặc tranh ảnh từ màn hình máy tính in ra trang giấy trắng?',
    visual: '📄 Trang giấy in màu sắc nét', options: ['Máy in (Printer)', 'Máy sấy tóc', 'Máy tính cầm tay', 'Máy hút bụi'], correctAnswer: 'Máy in (Printer)',
    scaffoldHint: 'Máy in phun hoặc máy in laser phun những hạt mực siêu nhỏ lên bề mặt giấy để tạo thành hình ảnh sắc nét!',
    funFact: 'Hiện nay con người đã phát minh ra máy in 3D có thể in ra cả đồ chơi, mô hình nhà cửa và các đồ vật thực tế!'
  },
  {
    id: 'it20', stage: 20, difficulty: 'hard', title: 'Vật Liệu Tái Chế Trong Thủ Công', opponentName: 'Hộp Sữa Tái Chế', opponentAvatar: '🧃',
    questionText: 'Vỏ hộp sữa, lõi giấy vệ sinh và que kem sau khi dùng xong có thể dùng làm gì trong môn Công nghệ thủ công?',
    visual: '✂️ Hộp đựng bút tự làm xinh xắn', options: ['Làm đồ chơi sáng tạo như ống đựng bút, mô hình ô tô hoặc ngôi nhà nhỏ', 'Vứt bừa bãi ra sân trường', 'Đem đốt gây khói bụi ô nhiễm', 'Không thể làm được gì hữu ích'], correctAnswer: 'Làm đồ chơi sáng tạo như ống đựng bút, mô hình ô tô hoặc ngôi nhà nhỏ',
    scaffoldHint: 'Tái chế phế liệu thành đồ dùng học tập vừa giúp phát huy óc sáng tạo, vừa bảo vệ môi trường xanh!',
    funFact: 'Hàng ngàn sản phẩm công nghệ độc đáo đã ra đời từ chính những vật liệu tái chế đơn sơ quanh ta!'
  },
  {
    id: 'it21', stage: 21, difficulty: 'hard', title: 'Bảo Vệ Bàn Phím Khỏi Nước', opponentName: 'Cốc Nước Nguy Hiểm', opponentAvatar: '🥤',
    questionText: 'Vì sao tuyệt đối KHÔNG được để cốc nước ngọt hay bình nước cạnh bàn phím máy tính?',
    visual: '⚠️ Nước đổ vào bàn phím điện tử', options: ['Vì nước có thể đổ vào làm chập cháy và hư hỏng các mạch điện tử bên trong', 'Vì bàn phím sẽ uống hết nước', 'Vì nước sẽ làm máy tính lạnh', 'Vì bàn phím sẽ nổi lên trên mặt nước'], correctAnswer: 'Vì nước có thể đổ vào làm chập cháy và hư hỏng các mạch điện tử bên trong',
    scaffoldHint: 'Linh kiện điện tử rất sợ nước và độ ẩm; nước ngọt có đường còn làm dính kẹt các phím bấm vĩnh viễn!',
    funFact: 'Quy tắc vàng trong phòng máy tính của mọi trường học là: "Không ăn uống cạnh thiết bị máy tính"!'
  },
  {
    id: 'it22', stage: 22, difficulty: 'hard', title: 'Tắt Máy Tính Đúng Cách', opponentName: 'Nút Nguồn Shut Down', opponentAvatar: '🔌',
    questionText: 'Để tắt máy tính an toàn sau khi học xong, thao tác chuẩn xác nhất là gì?',
    visual: '⏹️ Tắt máy tính đúng quy trình', options: ['Lưu bài làm ➔ Nhấp chuột vào nút Start ➔ Chọn lệnh Shut down', 'Giật phích cắm điện ra khỏi ổ cắm ngay lập tức', 'Bấm tắt cầu dao điện trong phòng', 'Cứ để máy chạy mãi không tắt'], correctAnswer: 'Lưu bài làm ➔ Nhấp chuột vào nút Start ➔ Chọn lệnh Shut down',
    scaffoldHint: 'Tắt máy qua lệnh Shut down giúp hệ điều hành lưu lại dữ liệu và đóng các chương trình an toàn, kéo dài tuổi thọ máy!',
    funFact: 'Rút phích cắm đột ngột có thể làm hỏng ổ cứng và mất toàn bộ dữ liệu bài học quý giá của em!'
  },
  {
    id: 'it23', stage: 23, difficulty: 'hard', title: 'Thiết Bị Lưu Trữ USB', opponentName: 'Ổ USB Nhỏ Gọn', opponentAvatar: '💾',
    questionText: 'Chiếc USB nhỏ bằng ngón tay cắm vào máy tính có công dụng kỳ diệu nào?',
    visual: '💽 Chiếc USB chứa cả kho sách', options: ['Lưu trữ dữ liệu học tập và sao chép mang đi nơi khác tiện lợi', 'Dùng làm chiếc còi thổi', 'Dùng làm chiếc kéo cắt giấy', 'Dùng làm cục tẩy chì'], correctAnswer: 'Lưu trữ dữ liệu học tập và sao chép mang đi nơi khác tiện lợi',
    scaffoldHint: 'USB là thiết bị nhớ thể rắn không mất dữ liệu khi rút khỏi máy, chứa được hàng nghìn bài hát và sách giáo khoa!',
    funFact: 'Chiếc USB ngày nay có thể chứa lượng sách vở nhiều hơn cả một thư viện khổng lồ của một trường học!'
  },
  {
    id: 'it24', stage: 24, difficulty: 'hard', title: 'Điện Thoại Thông Minh & An Toàn', opponentName: 'Điện Thoại Phát Sóng', opponentAvatar: '📱',
    questionText: 'Khi sạc pin điện thoại, hành vi nào là CỰC KỲ NGUY HIỂM cần tuyệt đối tránh?',
    visual: '⚡ Điện thoại đang cắm sạc pin', options: ['Vừa cắm sạc pin vừa bấm chơi game hoặc xem video', 'Để điện thoại nơi thoáng mát', 'Rút sạc khi pin đã đầy 100%', 'Nhờ bố mẹ cắm sạc hộ'], correctAnswer: 'Vừa cắm sạc pin vừa bấm chơi game hoặc xem video',
    scaffoldHint: 'Vừa sạc vừa dùng khiến pin nóng ran, nguy cơ chập mạch phát nổ gây thương tích nghiêm trọng!',
    funFact: 'Luôn sạc điện thoại ở nơi thoáng mát và chỉ sử dụng khi đã rút cắm sạc ra khỏi nguồn điện nhé!'
  },
  {
    id: 'it25', stage: 25, difficulty: 'hard', title: 'Luyện Gõ Phím Mười Ngón', opponentName: 'Mười Đầu Ngón Tay Thần Tốc', opponentAvatar: '🖐️⌨️',
    questionText: 'Trên bàn phím máy tính, hai phím nào có GỜ NỔI NHỎ để ngón trỏ của hai bàn tay đặt làm mốc xuất phát chuẩn?',
    visual: '🔘 Phím F và phím J có gờ nổi', options: ['Phím F (tay trái) và phím J (tay phải)', 'Phím A và phím Z', 'Phím số 1 và số 9', 'Phím Space và phím Enter'], correctAnswer: 'Phím F (tay trái) và phím J (tay phải)',
    scaffoldHint: 'Phím F và J có gờ nổi nhỏ giúp ngón trỏ định vị hàng phím cơ sở mà không cần nhìn xuống bàn phím!',
    funFact: 'Người gõ phím 10 ngón điêu luyện có thể gõ nhanh hơn 80 từ mỗi phút mà mắt chỉ cần nhìn màn hình!'
  },
  {
    id: 'it26', stage: 26, difficulty: 'hard', title: 'Kính Thực Tế Ảo VR', opponentName: 'Kính Thực Tế Ảo Kỳ Ảo', opponentAvatar: '🥽',
    questionText: 'Kính thực tế ảo (VR) giúp học sinh khám phá bài học Tự nhiên & Xã hội như thế nào?',
    visual: '🌌 Khám phá vũ trụ qua kính VR', options: ['Tạo không gian 3D sống động như đang lặn dưới đáy biển hay du hành trong vũ trụ', 'Chỉ nhìn thấy hình ảnh đen trắng mờ nhạt', 'Giúp nhìn xuyên qua bức tường gạch', 'Làm cho mắt bị đau nhức'], correctAnswer: 'Tạo không gian 3D sống động như đang lặn dưới đáy biển hay du hành trong vũ trụ',
    scaffoldHint: 'Công nghệ thực tế ảo mang đến trải nghiệm nhập vai sinh động, giúp bài học trở nên kỳ thú và dễ nhớ!',
    funFact: 'Nhiều trường học hiện đại đã áp dụng kính VR để đưa học sinh vào khám phá bên trong kim tự tháp Ai Cập cổ đại!'
  },
  {
    id: 'it27', stage: 27, difficulty: 'hard', title: 'Thùng Rác Điện Tử', opponentName: 'Thùng Rác Recycle Bin', opponentAvatar: '🗑️💻',
    questionText: 'Trên màn hình máy tính, biểu tượng thùng rác "Recycle Bin" có tác dụng gì?',
    visual: '🗑️ Thùng rác chứa tệp tin đã xóa', options: ['Chứa tạm thời các tệp tin đã xóa, có thể khôi phục lại nếu lỡ xóa nhầm', 'Chứa rác sinh hoạt trong phòng', 'Dọn sạch bụi bẩn trên bàn phím', 'Tự động in tài liệu'], correctAnswer: 'Chứa tạm thời các tệp tin đã xóa, có thể khôi phục lại nếu lỡ xóa nhầm',
    scaffoldHint: 'Khi xóa một tệp tin, nó sẽ vào Recycle Bin trước. Nếu lỡ xóa nhầm, em có thể bấm "Restore" để lấy lại!',
    funFact: 'Chức năng Recycle Bin được thiết kế như một lưới an toàn bảo vệ người dùng không bị mất dữ liệu bất ngờ!'
  },
  {
    id: 'it28', stage: 28, difficulty: 'hard', title: 'Robot Quét Rác Hút Bụi', opponentName: 'Robot Hút Bụi Tự Động', opponentAvatar: '🤖🧹',
    questionText: 'Chiếc máy hút bụi thông minh tự chạy khắp sàn nhà để dọn sạch bụi bẩn hoạt động nhờ công nghệ gì?',
    visual: '🏠 Robot tròn xoay dọn sàn nhà', options: ['Cảm biến va chạm, cảm biến chống rơi cầu thang và động cơ hút bụi tự động', 'Có sợi dây kéo bằng tay', 'Có bánh xe đẩy chạy bằng dây cót', 'Nhờ sức gió đẩy đi'], correctAnswer: 'Cảm biến va chạm, cảm biến chống rơi cầu thang và động cơ hút bụi tự động',
    scaffoldHint: 'Robot hút bụi có mắt thần cảm biến quét bản đồ căn phòng và tự quay về đế sạc pin khi dọn dẹp xong!',
    funFact: 'Robot thông minh ngày nay giúp giải phóng sức lao động, mang lại nhiều thời gian ấm áp cho gia đình sum vầy!'
  },
  {
    id: 'it29', stage: 29, difficulty: 'hard', title: 'Bản Đồ Chỉ Đường GPS', opponentName: 'Vệ Tinh Dẫn Đường', opponentAvatar: '🗺️🛰️',
    questionText: 'Ứng dụng bản đồ số trên điện thoại của bố mẹ có thể chỉ đường đi chính xác nhờ kết nối với hệ thống nào?',
    visual: '📍 Tọa độ định vị vệ tinh GPS', options: ['Hệ thống vệ tinh định vị toàn cầu GPS trên quỹ đạo không gian', 'Đoán hướng gió thổi', 'Nhờ các chú chim bồ câu đưa thư', 'Đoán mò ngẫu nhiên'], correctAnswer: 'Hệ thống vệ tinh định vị toàn cầu GPS trên quỹ đạo không gian',
    scaffoldHint: 'Hơn 30 vệ tinh GPS bay quanh Trái Đất liên tục gửi tín hiệu tọa độ giúp xác định vị trí xe ô tô từng centimet!',
    funFact: 'Hệ thống định vị GPS giúp tài xế tìm đường đi nhanh nhất, tránh tắc đường và đến đích an toàn tuyệt đối!'
  },
  {
    id: 'it30', stage: 30, difficulty: 'boss', title: 'Robot Thông Thái (TRÙM CÔNG NGHỆ NHÍ)', opponentName: 'Robot Titan AI Nhí', opponentAvatar: '🤖⚡👑',
    questionText: 'Công nghệ thông tin và máy tính được sinh ra với sứ mệnh thiêng liêng nhất là gì?',
    visual: '🌐 Thế giới công nghệ kết nối yêu thương', options: ['Giúp con người học tập, làm việc hiệu quả và kết nối tình yêu thương toàn cầu', 'Để trẻ em cày game suốt ngày đêm', 'Để thay thế hoàn toàn tình cảm gia đình', 'Làm cho con người lười biếng vận động'], correctAnswer: 'Giúp con người học tập, làm việc hiệu quả và kết nối tình yêu thương toàn cầu',
    scaffoldHint: 'Công nghệ là công cụ hỗ trợ tuyệt vời để học tập mở mang tri thức, chứ không phải để nghiện game quên đời thực!',
    funFact: 'Chúc mừng bé đã trở thành "Hiệp Sĩ Công Nghệ Nhí 4.0"! Dùng máy tính thông minh, tương lai nằm trong tay bé!'
  }
];

// ==========================================
// 3. ỐC ĐẢO ÂM NHẠC & SẮC MÀU MĨ THUẬT (30 ẢI)
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
    id: 'am5', stage: 5, difficulty: 'easy', title: 'Phép Thuật Pha Màu', opponentName: 'Giọt Sơn Biến Hình', opponentAvatar: '💧',
    questionText: 'Khi em pha trộn giọt màu ĐỎ với giọt màu VÀNG, em sẽ thu được màu sắc kỳ diệu nào?',
    visual: '🔴 + 🟡 = ?', options: ['Màu Cam', 'Màu Tím', 'Màu Đen', 'Màu Xanh lá cây'], correctAnswer: 'Màu Cam',
    scaffoldHint: 'Đỏ rực rỡ hòa quyện với Vàng tươi sáng sẽ tạo ra màu Cam ấm áp như quả cam chín mọng!',
    funFact: 'Nếu pha Vàng với Xanh lam ta được màu Xanh lá; pha Đỏ với Xanh lam ta sẽ được màu Tím thủy chung!'
  },
  {
    id: 'am6', stage: 6, difficulty: 'easy', title: 'Nhận Diện Gam Màu Nóng', opponentName: 'Mặt Trời Tỏa Nắng', opponentAvatar: '☀️',
    questionText: 'Nhóm màu nào sau đây thuộc gam màu NÓNG, gợi cảm giác ấm áp, tràn đầy năng lượng và nhiệt huyết?',
    visual: '🔥 Ánh lửa bập bùng và ánh nắng chói chang', options: ['Đỏ, Cam, Vàng', 'Xanh dương, Xanh lá, Tím nhạt', 'Trắng, Xám, Đen', 'Xanh ngọc, Xanh rêu, Xanh đá'], correctAnswer: 'Đỏ, Cam, Vàng',
    scaffoldHint: 'Gam màu nóng giống như ánh lửa và ánh mặt trời: đỏ tươi, cam ấm và vàng rực rỡ!',
    funFact: 'Các họa sĩ thường dùng gam màu nóng để vẽ bình minh rực rỡ, mùa thu lá vàng hay những ngày lễ hội vui tươi!'
  },
  {
    id: 'am7', stage: 7, difficulty: 'easy', title: 'Nhận Diện Gam Màu Lạnh', opponentName: 'Bông Tuyết Dịu Mát', opponentAvatar: '❄️',
    questionText: 'Nhóm màu nào thuộc gam màu LẠNH, gợi cảm giác mát mẻ, yên bình như bầu trời và dòng nước mát?',
    visual: '🌊 Đại dương bao la và rừng cây xanh mướt', options: ['Xanh lam, Xanh lá cây, Tím', 'Đỏ tươi, Cam đậm, Vàng chanh', 'Đỏ gạch, Hồng phấn, Nâu đất', 'Vàng cam, Đỏ cờ, Huyết dụ'], correctAnswer: 'Xanh lam, Xanh lá cây, Tím',
    scaffoldHint: 'Gam màu lạnh mang hơi thở của nước biển, mây trời và bóng râm của rừng cây xanh mát!',
    funFact: 'Ngắm nhìn tranh vẽ có gam màu lạnh giúp tâm hồn em cảm thấy thư thái, dễ chịu và dịu bớt căng thẳng!'
  },
  {
    id: 'am8', stage: 8, difficulty: 'easy', title: 'Các Nét Vẽ Cơ Bản', opponentName: 'Bút Chì Nhanh Trí', opponentAvatar: '✏️',
    questionText: 'Nét vẽ nào uốn lượn nhấp nhô như sóng biển dập dềnh được gọi là gì?',
    visual: '〰️ Đường nét uốn lượn mềm mại', options: ['Nét lượn sóng', 'Nét thẳng đứng', 'Nét đứt đoạn', 'Nét chấm tròn'], correctAnswer: 'Nét lượn sóng',
    scaffoldHint: 'Nét lượn sóng uốn cong nhịp nhàng lên xuống, thường được dùng để vẽ sóng biển, ngọn khói hay mái tóc bồng bềnh!',
    funFact: 'Họa tiết nét lượn sóng đã xuất hiện trên hoa văn gốm sứ cổ truyền của người Việt Nam từ hàng nghìn năm trước!'
  },
  {
    id: 'am9', stage: 9, difficulty: 'medium', title: 'Hình Khối Trong Mĩ Thuật', opponentName: 'Khối Vuông Sáng Tạo', opponentAvatar: '🟧',
    questionText: 'Mặt trời chiếu sáng, bánh xe quay tròn và đĩa bay UFO đều mang hình học cơ bản nào?',
    visual: '☀️ 🛞 🛸 Những đồ vật thân quen', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctAnswer: 'Hình tròn',
    scaffoldHint: 'Hình tròn không có góc cạnh, đường cong khép kín hoàn hảo tượng trưng cho sự trọn vẹn và viên mãn!',
    funFact: 'Vạn vật quanh ta đều có thể phân tích thành các hình khối cơ bản: hình tròn, vuông, tam giác và chữ nhật!'
  },
  {
    id: 'am10', stage: 10, difficulty: 'medium', title: 'Đàn Trưng Tây Nguyên', opponentName: 'Dòng Suối Reo Ca', opponentAvatar: '🎋',
    questionText: 'Đàn T’rưng - nhạc cụ độc đáo làm từ những ống tre nứa phát ra âm thanh như tiếng suối reo là của vùng đất nào?',
    visual: '🎶 Những ống nứa gõ ngân vang', options: ['Vùng núi rừng Tây Nguyên đại ngàn', 'Vùng đồng bằng sông Cửu Long', 'Vùng duyên hải miền Trung', 'Vùng núi cao Tây Bắc'], correctAnswer: 'Vùng núi rừng Tây Nguyên đại ngàn',
    scaffoldHint: 'Đàn T’rưng của đồng bào Ba Na, Gia Rai ở Tây Nguyên làm từ ống tre nứa có độ dài ngắn khác nhau để tạo cao độ nốt!',
    funFact: 'Tiếng đàn T’rưng trong trẻo tựa tiếng thác đổ, suối reo róc rách giữa đại ngàn xanh biếc!'
  },
  {
    id: 'am11', stage: 11, difficulty: 'medium', title: 'Tiếng Trống Trường Thân Thương', opponentName: 'Chiếc Trống Trường Uy Nghi', opponentAvatar: '🥁',
    questionText: 'Âm thanh "Tùng! Tùng! Tùng!" rộn rã đầu giờ học báo hiệu điều gì đối với học sinh?',
    visual: '🏫 Tiếng trống trường ngân vang', options: ['Giờ vào lớp học bắt đầu', 'Giờ đi ngủ', 'Giờ ra về', 'Giờ ăn trưa'], correctAnswer: 'Giờ vào lớp học bắt đầu',
    scaffoldHint: 'Tiếng trống trường giục giã nhắc nhở các bạn học sinh nhanh chân xếp hàng bước vào lớp học bài!',
    funFact: 'Trống trường làm từ gỗ mít và mặt da trâu là hình ảnh thiêng liêng gắn liền với tuổi thơ của mọi thế hệ học trò!'
  },
  {
    id: 'am12', stage: 12, difficulty: 'medium', title: 'Pha Màu Xanh Lá Cây', opponentName: 'Lá Cây Tươi Mới', opponentAvatar: '🍃',
    questionText: 'Khi em pha trộn giọt màu VÀNG với giọt màu XANH LAM, em sẽ thu được màu gì?',
    visual: '🟡 + 🔵 = ?', options: ['Màu Xanh lá cây', 'Màu Tím', 'Màu Đỏ tươi', 'Màu Nâu đất'], correctAnswer: 'Màu Xanh lá cây',
    scaffoldHint: 'Vàng tươi sáng trộn với Xanh lam thẫm sẽ tạo nên sắc Xanh lá cây tươi mát của chồi non mùa xuân!',
    funFact: 'Xanh lá cây là màu của chất diệp lục giúp cây quang hợp và là màu sắc tượng trưng cho sự sống bình yên!'
  },
  {
    id: 'am13', stage: 13, difficulty: 'medium', title: 'Nặn Đất Sét Tạo Hình', opponentName: 'Viên Đất Sét Bảy Màu', opponentAvatar: '🧸',
    questionText: 'Thao tác cơ bản nào khi nặn đất sét giúp em biến một khối đất thành hình quả bóng tròn xoe?',
    visual: '🔴 Thao tác xoay tròn đôi bàn tay', options: ['Xoay tròn khối đất giữa hai lòng bàn tay', 'Dùng búa đập bẹp', 'Lấy kéo cắt vụn', 'Ngâm đất sét vào nước'], correctAnswer: 'Xoay tròn khối đất giữa hai lòng bàn tay',
    scaffoldHint: 'Xoay tròn đều tay tạo khối cầu tròn; lăn dài tạo con sâu; ấn dẹt tạo chiếc bánh xinh xắn!',
    funFact: 'Nặn đất sét giúp rèn luyện cơ tay khéo léo và kích thích trí thông minh không gian ba chiều của não bộ!'
  },
  {
    id: 'am14', stage: 14, difficulty: 'medium', title: 'Chuông Tam Giác Triangle', opponentName: 'Chuông Leng Keng', opponentAvatar: '🔔',
    questionText: 'Nhạc cụ gõ bằng kim loại uốn thành hình tam giác, dùng que sắt gõ kêu "leng keng" trong trẻo gọi là gì?',
    visual: '📐 Nhạc cụ tam giác kim loại', options: ['Chuông tam giác (Triangle)', 'Chiếc còi đồng', 'Cây sáo trúc', 'Chiếc đàn bầu'], correctAnswer: 'Chuông tam giác (Triangle)',
    scaffoldHint: 'Chuông Triangle làm bằng thép uốn 3 cạnh hình tam giác, tiếng ngân dài trong vắt như giọt sương mai!',
    funFact: 'Trong dàn nhạc giao hưởng, dù tiếng chuông tam giác rất nhỏ nhưng luôn nổi bật và lấp lánh như ánh sao!'
  },
  {
    id: 'am15', stage: 15, difficulty: 'medium', title: 'Tranh Xé Dán Giấy Màu', opponentName: 'Mảnh Giấy Sắc Màu', opponentAvatar: '📄',
    questionText: 'Khác với cắt dán bằng kéo thẳng tắp, đường viền của bức tranh xé dán bằng tay có đặc điểm gì độc đáo?',
    visual: '🌸 Bức tranh xé dán bờ biển', options: ['Đường xé lượn xơ tự nhiên, mềm mại và sống động', 'Đường cắt thẳng đơ cứng nhắc', 'Bức tranh bị rách nát không đẹp', 'Không thể dán dính được'], correctAnswer: 'Đường xé lượn xơ tự nhiên, mềm mại và sống động',
    scaffoldHint: 'Xé dán thủ công bằng tay tạo những đường viền xơ trắng tự nhiên, rất thích hợp vẽ mây trời và sóng nước!',
    funFact: 'Nghệ thuật xé dán giấy đòi hỏi sự tỉ mỉ, khéo léo và mang lại phong cách nghệ thuật mộc mạc đậm chất dân gian!'
  },
  {
    id: 'am16', stage: 16, difficulty: 'hard', title: 'Đàn Bầu Việt Nam Độc Đáo', opponentName: 'Cung Đàn Một Dây', opponentAvatar: '🪕',
    questionText: 'Cây đàn dân tộc độc nhất vô nhị của Việt Nam chỉ có duy nhất MỘT DÂY mà gảy lên muôn vàn âm điệu ngọt ngào là đàn gì?',
    visual: '🎋 Cây đàn một dây thân bầu', options: ['Đàn bầu (Độc huyền cầm)', 'Đàn ghi-ta 6 dây', 'Đàn tranh 16 dây', 'Đàn violon'], correctAnswer: 'Đàn bầu (Độc huyền cầm)',
    scaffoldHint: '"Đàn bầu ai gảy nấy nghe / Làm thân con gái chớ nghe đàn bầu" - âm thanh nắn cần uốn lượn da diết làm say lòng người!',
    funFact: 'Đàn bầu là nhạc cụ độc bản duy nhất trên thế giới phát ra âm thanh hoàn toàn bằng kỹ thuật gảy bồi âm!'
  },
  {
    id: 'am17', stage: 17, difficulty: 'hard', title: 'Giai Điệu Vui Tươi & Trầm Buồn', opponentName: 'Cảm Xúc Âm Nhạc', opponentAvatar: '🎭',
    questionText: 'Một bài hát có nhịp điệu nhanh, rộn ràng, cao vút thường gợi cho người nghe cảm xúc gì?',
    visual: '💃 Đôi bạn nhỏ nhảy múa hân hoan', options: ['Vui tươi, phấn khởi, hào hứng và muốn nhún nhảy', 'Buồn ngủ, mệt mỏi', 'Sợ hãi, lo lắng', 'Tức giận, cáu kỉnh'], correctAnswer: 'Vui tươi, phấn khởi, hào hứng và muốn nhún nhảy',
    scaffoldHint: 'Nhịp điệu nhanh và âm hưởng tươi sáng mang năng lượng tích cực, kích thích cơ thể vận động vui vẻ!',
    funFact: 'Âm nhạc có khả năng kỳ diệu điều hòa nhịp tim, xua tan căng thẳng và nạp đầy năng lượng hứng khởi!'
  },
  {
    id: 'am18', stage: 18, difficulty: 'hard', title: 'Pha Màu Tím Thủy Chung', opponentName: 'Chùm Nho Tím', opponentAvatar: '🍇',
    questionText: 'Để pha được màu Tím lãng mạn, em cần kết hợp 2 màu cơ bản nào với nhau?',
    visual: '🔴 + 🔵 = ?', options: ['Màu Đỏ pha với Màu Xanh lam', 'Màu Vàng pha với Màu Trắng', 'Màu Xanh lá pha với Màu Đen', 'Màu Cam pha với Màu Vàng'], correctAnswer: 'Màu Đỏ pha với Màu Xanh lam',
    scaffoldHint: 'Đỏ nồng nàn kết hợp cùng Xanh lam thâm trầm sẽ hòa quyện thành sắc Tím hoàng gia quý phái!',
    funFact: 'Thời cổ đại, màu tím cực kỳ hiếm và đắt đỏ, chỉ có các vị vua chúa và hoàng hậu mới được mặc trang phục màu tím!'
  },
  {
    id: 'am19', stage: 19, difficulty: 'hard', title: 'Bức Tranh Phong Cảnh Quê Hương', opponentName: 'Cánh Đồng Lúa Vàng', opponentAvatar: '🌾',
    questionText: 'Trong bức tranh phong cảnh làng quê Việt Nam, những hình ảnh thân thuộc nào thường xuất hiện?',
    visual: '🏡 Dòng sông uốn quanh lũy tre xanh', options: ['Cây đa, bến nước, con đò, lũy tre xanh và cánh đồng lúa chín vàng', 'Tàu vũ trụ và đĩa bay', 'Tuyết trắng phủ kín rừng thông', 'Tòa nhà chọc trời bằng kính'], correctAnswer: 'Cây đa, bến nước, con đò, lũy tre xanh và cánh đồng lúa chín vàng',
    scaffoldHint: 'Cây đa, bến nước, lũy tre là biểu tượng thanh bình, mộc mạc của làng quê Việt Nam yêu dấu!',
    funFact: 'Vẽ tranh quê hương giúp các em thêm yêu từng góc sân, bờ đê và gắn bó sâu sắc với cội nguồn dân tộc!'
  },
  {
    id: 'am20', stage: 20, difficulty: 'hard', title: 'Khẩu Khí Hát Hợp Xướng', opponentName: 'Đội Hợp Xướng Măng Non', opponentAvatar: '👥🎶',
    questionText: 'Khi hát tập thể cùng cả lớp, bí quyết để cả lớp hát hay và vang đều là gì?',
    visual: '👦👧 Các bạn nhỏ cùng cất cao tiếng hát', options: ['Lắng nghe bạn bên cạnh, mở khẩu hình tròn và hát đúng nhịp cô bắt', 'Hét thật to át hết tiếng của bạn khác', 'Mấp máy môi không phát ra tiếng', 'Hát nhanh hơn nhạc đệm để xong sớm'], correctAnswer: 'Lắng nghe bạn bên cạnh, mở khẩu hình tròn và hát đúng nhịp cô bắt',
    scaffoldHint: 'Hát tập thể cần sự hòa quyện: mở to vòm họng và lắng nghe để giọng hát của mình hòa vào dàn đồng ca chung!',
    funFact: 'Hát hợp xướng giúp gắn kết tình bạn, rèn luyện sự hòa nhập và mang lại cảm xúc thăng hoa tuyệt vời!'
  },
  {
    id: 'am21', stage: 21, difficulty: 'hard', title: 'Họa Tiết Trang Trí Đường Diềm', opponentName: 'Dải Băng Thêu Hoa', opponentAvatar: '🎀',
    questionText: 'Quy tắc sắp xếp họa tiết lặp lại đều đặn theo một dải dài trang trí viền khăn hay bát đĩa gọi là gì?',
    visual: '〰️ Dải hoa văn lặp lại nhịp nhàng', options: ['Trang trí đường diềm', 'Vẽ tranh trừu tượng', 'Tô màu tự do', 'Vẽ tranh chân dung'], correctAnswer: 'Trang trí đường diềm',
    scaffoldHint: 'Đường diềm sắp xếp các hình hoa lá, tam giác lặp lại xen kẽ theo quy luật nhịp điệu trang trí!',
    funFact: 'Họa tiết đường diềm chim Lạc, sóng nước đã được tổ tiên ta đúc nổi trên thân Trống đồng Đông Sơn cổ đại!'
  },
  {
    id: 'am22', stage: 22, difficulty: 'hard', title: 'Chiếc Kèn Harmonica Miệng', opponentName: 'Kèn Harmonica Bỏ Túi', opponentAvatar: '🎺',
    questionText: 'Chiếc kèn ac-mô-ni-ca nhỏ gọn phát ra âm thanh du dương bằng cách nào?',
    visual: '🌬️ Thổi và hít luồng không khí qua kèn', options: ['Dùng miệng ngậm thổi hơi và hít hơi qua các lỗ nhỏ trên kèn', 'Dùng dùi sắt gõ vào kèn', 'Cắm điện để kèn tự kêu', 'Lắc mạnh chiếc kèn'], correctAnswer: 'Dùng miệng ngậm thổi hơi và hít hơi qua các lỗ nhỏ trên kèn',
    scaffoldHint: 'Luồng hơi thổi và hít làm rung các lưỡi gà kim loại nhỏ xíu bên trong kèn tạo nên các cao độ nốt nhạc!',
    funFact: 'Kèn Harmonica được mệnh danh là "cây đàn piano bỏ túi" vì có thể mang theo trong túi áo đi khắp muôn nơi!'
  },
  {
    id: 'am23', stage: 23, difficulty: 'hard', title: 'Tranh Vẽ Chân Dung', opponentName: 'Khuôn Mặt Rạng Rỡ', opponentAvatar: '😊',
    questionText: 'Tranh vẽ chân dung tập trung miêu tả đối tượng chính nào?',
    visual: '🖼️ Bức vẽ gương mặt mẹ hiền từ', options: ['Khuôn mặt, ánh mắt, nụ cười và cảm xúc của một con người', 'Chỉ vẽ phong cảnh núi non', 'Chỉ vẽ tĩnh vật lọ hoa quả', 'Chỉ vẽ máy móc cơ khí'], correctAnswer: 'Khuôn mặt, ánh mắt, nụ cười và cảm xúc của một con người',
    scaffoldHint: 'Tranh chân dung lột tả thần thái, nét mặt và tâm hồn của nhân vật: nụ cười mẹ hiền, ánh mắt cha nghiêm nghị!',
    funFact: 'Bức tranh chân dung nàng Mona Lisa của danh họa Leonardo da Vinci nổi tiếng thế giới nhờ nụ cười bí ẩn mê hoặc!'
  },
  {
    id: 'am24', stage: 24, difficulty: 'hard', title: 'Đàn Đá Cổ Sơ Tây Nguyên', opponentName: 'Phiến Đá Hùng Vĩ', opponentAvatar: '🪨',
    questionText: 'Nhạc cụ cổ xưa nhất của loài người làm từ những thanh đá tự nhiên gõ phát ra âm vang rền như sấm sét là gì?',
    visual: '⛰️ Những thanh đá ngàn năm ngân vang', options: ['Đàn đá Tây Nguyên', 'Đàn ghi-ta điện', 'Đàn piano', 'Kèn đồng'], correctAnswer: 'Đàn đá Tây Nguyên',
    scaffoldHint: 'Những phiến đá cổ có niên đại hơn 3.000 năm khi gõ vào nhau phát ra âm thanh ngân nga kỳ diệu của mẹ thiên nhiên!',
    funFact: 'Đàn đá là di sản âm nhạc cổ đại vô giá, chứng minh người tiền sử Việt Nam đã biết cảm thụ âm nhạc từ hàng ngàn năm trước!'
  },
  {
    id: 'am25', stage: 25, difficulty: 'hard', title: 'Màu Nâu Ấm Áp Của Đất', opponentName: 'Mảnh Đất Mẹ Thân Thương', opponentAvatar: '🤎',
    questionText: 'Khi em pha trộn cả 3 màu cơ bản ĐỎ + VÀNG + XANH LAM với tỷ lệ thích hợp, em sẽ tạo ra gam màu nào?',
    visual: '🔴 + 🟡 + 🔵 = ?', options: ['Màu Nâu (hoặc xám sẫm ấm áp)', 'Màu Trắng tinh khiết', 'Màu Hồng phấn', 'Màu Bạc lấp lánh'], correctAnswer: 'Màu Nâu (hoặc xám sẫm ấm áp)',
    scaffoldHint: 'Cả 3 màu gốc gặp nhau sẽ triệt tiêu độ rực rỡ, tạo thành sắc Nâu trầm ấm của màu đất mẹ phù sa!',
    funFact: 'Màu nâu của đất đai, thân cây và chiếc áo bà ba mang đậm vẻ đẹp mộc mạc, bền bỉ của người nông dân Việt Nam!'
  },
  {
    id: 'am26', stage: 26, difficulty: 'hard', title: 'Động Tác Múa Phụ Họa', opponentName: 'Vũ Công Bướm Vàng', opponentAvatar: '🦋',
    questionText: 'Khi hát bài "Con bướm vàng", động tác phụ họa tự nhiên và duyên dáng nhất là gì?',
    visual: '👐 Đôi bàn tay dập dờn như cánh bướm', options: ['Hai bàn tay bắt chéo vẫy nhẹ nhàng như đôi cánh bướm chao lượn', 'Ngồi yên không nhúc nhích', 'Đấm mạnh vào không khí', 'Quay tròn đầu thật nhanh'], correctAnswer: 'Hai bàn tay bắt chéo vẫy nhẹ nhàng như đôi cánh bướm chao lượn',
    scaffoldHint: 'Múa phụ họa mô phỏng nhịp điệu của lời bài hát: tay vẫy cánh bướm, chân bước nhịp nhàng theo câu ca!',
    funFact: 'Vận động phụ họa kết hợp hát giúp cơ thể dẻo dai, kích thích đồng thời cả bán cầu não trái và bán cầu não phải!'
  },
  {
    id: 'am27', stage: 27, difficulty: 'hard', title: 'Tô Màu Đều Nét Không Lem', opponentName: 'Hộp Sáp Màu Rực Rỡ', opponentAvatar: '🖍️',
    questionText: 'Kỹ thuật tô màu sáp đẹp mắt cho một hình vẽ là gì?',
    visual: '🎨 Bức tranh tô màu kín kẽ mịn màng', options: ['Di màu đều tay cùng một hướng, viền nét trước rồi tô kín bên trong không để lem ra ngoài', 'Gạch nguệch ngoạc lung tung', 'Tô chừa lại nhiều khoảng trắng nham nhở', 'Ấn gãy hết sáp màu'], correctAnswer: 'Di màu đều tay cùng một hướng, viền nét trước rồi tô kín bên trong không để lem ra ngoài',
    scaffoldHint: 'Tô viền mép hình trước giúp chặn màu không bị lem; sau đó di màu nhẹ nhàng cùng một chiều cho mịn màng!',
    funFact: 'Kiên nhẫn tô màu kín kẽ rèn luyện cho các bạn nhỏ tính cẩn thận, tỉ mỉ và óc thẩm mỹ tinh tế!'
  },
  {
    id: 'am28', stage: 28, difficulty: 'hard', title: 'Sáo Trúc Êm Đềm', opponentName: 'Cây Sáo Trúc Xanh', opponentAvatar: '🎋🎶',
    questionText: 'Nhạc cụ hơi truyền thống làm từ thân cây nứa hoặc trúc khoét các lỗ bấm phát ra tiếng vi vu gọi là gì?',
    visual: '🎼 Tiếng sáo diều trên lưng trâu', options: ['Cây sáo trúc', 'Chiếc đàn bầu', 'Cái trống cơm', 'Chiếc kèn lá'], correctAnswer: 'Cây sáo trúc',
    scaffoldHint: 'Nghệ nhân dùng luồng hơi thổi qua lỗ thổi làm rung cột không khí bên trong ống nứa phát ra âm thanh du dương!',
    funFact: 'Hình ảnh chú bé mục đồng thổi sáo trên lưng trâu là biểu tượng thanh bình bất hủ của đồng quê Việt Nam!'
  },
  {
    id: 'am29', stage: 29, difficulty: 'hard', title: 'Sắc Màu Lễ Hội Dân Gian', opponentName: 'Đèn Ông Sao Trung Thu', opponentAvatar: '⭐🏮',
    questionText: 'Trong dịp Tết Trung thu, chiếc đèn ông sao 5 cánh của thiếu nhi thường được làm bằng chất liệu rực rỡ nào?',
    visual: '🏮 Đèn ông sao lung linh đêm rằm', options: ['Khung tre nứa dán giấy bóng kính màu đỏ, vàng lấp lánh', 'Đúc bằng sắt đặc nặng nề', 'Làm bằng xi măng xám xịt', 'Làm bằng tấm xốp trắng trơn'], correctAnswer: 'Khung tre nứa dán giấy bóng kính màu đỏ, vàng lấp lánh',
    scaffoldHint: 'Đèn ông sao thắp nến lung linh bên trong giấy bóng kính đỏ vàng làm rực sáng đêm rằm tháng Tám phá cỗ rước đèn!',
    funFact: 'Bài hát "Chiếc đèn ông sao sao năm cánh tươi màu" của nhạc sĩ Phạm Tuyên đã đồng hành cùng bao thế hệ trẻ thơ Việt Nam!'
  },
  {
    id: 'am30', stage: 30, difficulty: 'boss', title: 'Nàng Tiên Nghệ Thuật (TRÙM ÂM NHẠC & MĨ THUẬT)', opponentName: 'Nữ Thần Giai Điệu & Sắc Màu', opponentAvatar: '🎭🎶🎨👑',
    questionText: 'Âm nhạc và Mĩ thuật đem lại giá trị kỳ diệu nhất nào cho tâm hồn của mỗi bạn nhỏ?',
    visual: '🌈 Cầu vồng nghệ thuật thắp sáng ước mơ', options: ['Bồi dưỡng tâm hồn trong sáng, khơi dậy trí sáng tạo và tình yêu thương cái đẹp cuộc sống', 'Chỉ để thi thố điểm số học hành', 'Để trở nên nổi tiếng trên mạng xã hội', 'Không có tác dụng gì cho việc học'], correctAnswer: 'Bồi dưỡng tâm hồn trong sáng, khơi dậy trí sáng tạo và tình yêu thương cái đẹp cuộc sống',
    scaffoldHint: 'Nghệ thuật chắp cánh cho ước mơ bay cao, giúp trẻ thơ biết yêu cái đẹp, sống nhân hậu và chan hòa với vạn vật!',
    funFact: 'Chúc mừng bé đã trở thành "Nghệ Sĩ Nhí Toàn Năng"! Hãy tiếp tục vẽ nên cuộc đời bằng những sắc màu rực rỡ nhất!'
  }
];

// ==========================================
// 4. THUNG LŨNG TRẢI NGHIỆM & KỸ NĂNG SINH TỒN (30 ẢI)
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
    id: 'ls5', stage: 5, difficulty: 'easy', title: 'Khi Ở Nhà Một Mình', opponentName: 'Khóa Cửa Thông Minh', opponentAvatar: '🔐',
    questionText: 'Khi em ở nhà một mình, có người lạ bấm chuông tự xưng là bạn của bố mẹ muốn vào nhà, em nên làm gì?',
    visual: '🚪 Cánh cửa khóa an toàn', options: ['Không mở cửa, khóa chốt cẩn thận và gọi điện ngay cho bố mẹ xác nhận', 'Mở toang cửa mời vào nhà uống nước', 'Ra mở cửa rồi cho người lạ vào phòng ngủ', 'Đi theo người lạ ra xe'], correctAnswer: 'Không mở cửa, khóa chốt cẩn thận và gọi điện ngay cho bố mẹ xác nhận',
    scaffoldHint: 'Kẻ xấu có thể đóng giả người quen để lừa gạt. Tuyệt đối không mở cửa cho bất kỳ ai khi chưa có sự đồng ý của cha mẹ!',
    funFact: 'Học sinh thông minh luôn có "mật khẩu an toàn" chỉ có cha mẹ và con mới biết!'
  },
  {
    id: 'ls6', stage: 6, difficulty: 'easy', title: 'Kỹ Năng Thoát Hiểm Khói Lửa', opponentName: 'Khăn Ướt Thần Tốc', opponentAvatar: '🧣',
    questionText: 'Khi có chuông báo cháy và khói đen tràn vào hành lang, cách di chuyển thoát hiểm đúng nhất là gì?',
    visual: '🌫️ Khói đen bốc lên cao', options: ['Lấy khăn ướt bịt mũi miệng, khom lưng hoặc bò sát sàn nhà men theo tường ra lối thoát hiểm', 'Đứng thẳng chạy thật nhanh', 'Đi vào thang máy để xuống tầng trệt', 'Núp vào gầm giường hoặc tủ quần áo'], correctAnswer: 'Lấy khăn ướt bịt mũi miệng, khom lưng hoặc bò sát sàn nhà men theo tường ra lối thoát hiểm',
    scaffoldHint: 'Khói độc nhẹ hơn không khí nên bốc lên cao, không khí sạch ở sát sàn nhà! Khăn ướt giúp lọc bớt khí độc CO2!',
    funFact: 'Tuyệt đối KHÔNG dùng thang máy khi có hỏa hoạn vì mất điện sẽ bị kẹt thang máy nguy hiểm!'
  },
  {
    id: 'ls7', stage: 7, difficulty: 'easy', title: 'Phòng Tránh Đuối Nước', opponentName: 'Phao Cứu Sinh Vàng', opponentAvatar: '🛟',
    questionText: 'Điều cấm kỵ quan trọng nhất để phòng chống tai nạn đuối nước thương tâm ở lứa tuổi học sinh là gì?',
    visual: '🌊 Dòng sông nước sâu cuồn cuộn', options: ['Tuyệt đối không tự ý rủ nhau đi tắm ao, hồ, sông, suối khi không có người lớn đi cùng', 'Nhảy xuống sông sâu thi bơi', 'Đi bắt cá ở mương nước sâu một mình', 'Bơi ở bãi biển có cắm cờ đỏ cảnh báo nguy hiểm'], correctAnswer: 'Tuyệt đối không tự ý rủ nhau đi tắm ao, hồ, sông, suối khi không có người lớn đi cùng',
    scaffoldHint: 'Chỉ tắm bơi ở bể bơi có nhân viên cứu hộ hoặc đi cùng cha mẹ và luôn mặc áo phao cứu sinh an toàn!',
    funFact: 'Khi thấy bạn bị ngã xuống nước, KHÔNG được nhảy xuống cứu nếu không biết bơi; hãy hô to cầu cứu và ném phao hoặc cành cây cho bạn!'
  },
  {
    id: 'ls8', stage: 8, difficulty: 'easy', title: 'Phân Loại Rác Xanh', opponentName: 'Thùng Rác Tự Động', opponentAvatar: '🗑️',
    questionText: 'Vỏ chai nhựa, lon nước ngọt bằng nhôm và giấy bìa carton cũ thuộc loại rác thải nào?',
    visual: '♻️ Biểu tượng tái chế bảo vệ Trái Đất', options: ['Rác tái chế (có thể gom lại để sản xuất đồ dùng mới)', 'Rác thải nguy hại', 'Rác hữu cơ dễ phân hủy', 'Rác thải y tế'], correctAnswer: 'Rác tái chế (có thể gom lại để sản xuất đồ dùng mới)',
    scaffoldHint: 'Rác tái chế gồm giấy, nhựa, kim loại sạch có thể tái sinh thành sản phẩm mới, giảm bớt ô nhiễm môi trường!',
    funFact: 'Tái chế 1 tấn giấy phế liệu giúp cứu sống được 17 cây xanh to lớn trong rừng nguyên sinh!'
  },
  {
    id: 'ls9', stage: 9, difficulty: 'medium', title: 'Kỹ Năng Khi Bị Lạc', opponentName: 'Ngọn Hải Đăng Dẫn Lối', opponentAvatar: '🗼',
    questionText: 'Khi đi chơi ở siêu thị hoặc công viên đông đúc mà vô tình bị lạc bố mẹ, em cần làm gì đầu tiên?',
    visual: '🛒 Siêu thị đông người qua lại', options: ['Đứng yên tại chỗ hoặc tìm chú bảo vệ, cô nhân viên thu ngân nhờ thông báo loa', 'Khóc thét và chạy lung tung khắp nơi', 'Nhận kẹo và đi theo người lạ rủ ra ngoài tìm mẹ', 'Lên xe của một người lạ mặt'], correctAnswer: 'Đứng yên tại chỗ hoặc tìm chú bảo vệ, cô nhân viên thu ngân nhờ thông báo loa',
    scaffoldHint: 'Hãy học thuộc số điện thoại của cha mẹ từ nhỏ và chỉ tìm người mặc đồng phục (bảo vệ, công an, nhân viên siêu thị) nhờ gọi điện!',
    funFact: 'Học thuộc số điện thoại của bố mẹ và địa chỉ nhà là "tấm bùa hộ mệnh" giúp bé luôn an toàn tìm về tổ ấm!'
  },
  {
    id: 'ls10', stage: 10, difficulty: 'medium', title: 'An Toàn Khi Bị Bỏng Nước Sôi', opponentName: 'Túi Nước Mát Lành', opponentAvatar: '🧊💧',
    questionText: 'Khi vô tình bị nước sôi hoặc canh nóng bắn vào tay bị bỏng rát, cách sơ cứu đúng đắn đầu tiên là gì?',
    visual: '🚰 Xả nước mát sạch lên vết bỏng', options: ['Ngâm hoặc xả nhẹ vết bỏng dưới vòi nước sạch mát trong 15 - 20 phút', 'Bôi kem đánh răng hoặc mỡ trăn lên vết bỏng', 'Đắp đá lạnh trực tiếp làm cóng thịt', 'Lấy kim chọc vỡ bọng nước'], correctAnswer: 'Ngâm hoặc xả nhẹ vết bỏng dưới vòi nước sạch mát trong 15 - 20 phút',
    scaffoldHint: 'Nước mát sạch giúp hạ nhiệt độ vùng da bị tổn thương ngay lập tức, ngăn ngừa vết bỏng ăn sâu vào thịt!',
    funFact: 'Tuyệt đối KHÔNG bôi nước mắm, kem đánh răng hay dầu mỡ lên vết bỏng vì dễ gây nhiễm trùng nguy hiểm!'
  },
  {
    id: 'ls11', stage: 11, difficulty: 'medium', title: 'Xử Lý Khi Bị Chảy Máu Cam', opponentName: 'Khăn Giấy Sạch Sẽ', opponentAvatar: '🧻',
    questionText: 'Khi bất ngờ bị chảy máu cam (chảy máu mũi), tư thế sơ cứu chuẩn y tế là gì?',
    visual: '👃 Bé ngồi hơi cúi đầu về phía trước', options: ['Ngồi thẳng, hơi cúi đầu về phía trước và dùng hai ngón tay bóp chặt cánh mũi 10 phút', 'Ngửa cổ ra phía sau thật cao', 'Nằm ngửa ra sàn nhà', 'Lấy tay ngoáy sâu vào mũi'], correctAnswer: 'Ngồi thẳng, hơi cúi đầu về phía trước và dùng hai ngón tay bóp chặt cánh mũi 10 phút',
    scaffoldHint: 'Cúi đầu về phía trước để máu chảy ra ngoài; nếu ngửa cổ ra sau máu sẽ chảy ngược xuống họng gây sặc và nôn ói!',
    funFact: 'Thở nhẹ nhàng bằng miệng trong khi dùng ngón tay ép chặt hai cánh mũi để máu mau đông lại nhé!'
  },
  {
    id: 'ls12', stage: 12, difficulty: 'medium', title: 'Tránh Sét Đánh Khi Mưa Dông', opponentName: 'Đám Mây Dông Sấm Chớp', opponentAvatar: '⛈️⚡',
    questionText: 'Khi đang chơi ngoài trời mà bất ngờ có mưa dông sấm chớp dữ dội, nơi nào sau đây TUYỆT ĐỐI KHÔNG được trú ẩn?',
    visual: '🌳 Cây to trơ trọi giữa bãi đất trống', options: ['Dưới gốc cây to đứng trơ trọi hoặc gần cột sắt kim loại ngoài trời', 'Vào bên trong nhà kiên cố đóng kín cửa', 'Vào trong xe ô tô đóng kín cửa kính', 'Tránh xa các hồ nước và bãi đất trống'], correctAnswer: 'Dưới gốc cây to đứng trơ trọi hoặc gần cột sắt kim loại ngoài trời',
    scaffoldHint: 'Sét luôn đánh vào những vật thể nhô cao nhất! Cây to đứng trơ trọi là "cột thu lôi" hút sét cực kỳ nguy hiểm!',
    funFact: 'Hãy tìm ngay nhà có mái che kiên cố hoặc ngồi xổm chụm hai chân lại nếu đang ở bãi đất trống!'
  },
  {
    id: 'ls13', stage: 13, difficulty: 'medium', title: 'An Toàn Thực Phẩm Học Đường', opponentName: 'Táo Đỏ Tươi Ngon', opponentAvatar: '🍎',
    questionText: 'Trước cổng trường có hàng quán rong bán đồ ăn vặt phẩm màu sặc sỡ, không rõ nguồn gốc xuất xứ, em nên làm gì?',
    visual: '🚫 Cảnh báo đồ ăn vặt mất vệ sinh', options: ['Tuyệt đối không mua ăn vì dễ bị ngộ độc thực phẩm và đau bụng cấp tính', 'Mua ăn hàng ngày vì ngon miệng', 'Mua chia cho bạn bè cùng ăn', 'Giấu bố mẹ mua ăn vụng'], correctAnswer: 'Tuyệt đối không mua ăn vì dễ bị ngộ độc thực phẩm và đau bụng cấp tính',
    scaffoldHint: 'Đồ ăn vặt vỉa hè chứa nhiều phẩm màu công nghiệp, bụi đường và vi khuẩn gây hại gan thận và đường tiêu hóa!',
    funFact: 'Hãy ăn chín uống sôi và mang theo bình nước sạch cùng bữa phụ lành mạnh từ nhà đi học nhé!'
  },
  {
    id: 'ls14', stage: 14, difficulty: 'medium', title: 'Kỹ Năng Đội Mũ Chống Nắng', opponentName: 'Mặt Trời Ngày Hè', opponentAvatar: '☀️👒',
    questionText: 'Vào những ngày hè nắng gắt khi ra sân trường tập thể dục, vì sao bé bắt buộc phải đội mũ rộng vành?',
    visual: '🧢 Chiếc mũ che mát đầu', options: ['Để che chắn ánh nắng gắt trực tiếp vào đỉnh đầu, phòng chống say nắng và say nóng', 'Để khoe mũ đẹp với bạn', 'Để đội cho nặng đầu', 'Không cần đội mũ'], correctAnswer: 'Để che chắn ánh nắng gắt trực tiếp vào đỉnh đầu, phòng chống say nắng và say nóng',
    scaffoldHint: 'Ánh nắng mặt trời buổi trưa chứa tia cực tím gay gắt có thể làm em bị đau đầu, chóng mặt và sốt cao say nắng!',
    funFact: 'Nhớ uống nước từng ngụm nhỏ thường xuyên ngay cả khi chưa cảm thấy khát trong những ngày nắng nóng nhé!'
  },
  {
    id: 'ls15', stage: 15, difficulty: 'medium', title: 'Ứng Phó Khi Gặp Chó Dữ', opponentName: 'Chú Chó Hung Dữ', opponentAvatar: '🐕‍🦺',
    questionText: 'Nếu đang đi bộ trên đường mà gặp một con chó lạ đang gầm gừ tiến lại gần, cách xử lý an toàn nhất là gì?',
    visual: '🧍 Bé đứng yên bình tĩnh', options: ['Đứng yên như pho tượng, hai tay buông thõng, không nhìn chằm chằm vào mắt nó và tuyệt đối không bỏ chạy', 'Hét to và quay lưng chạy hết tốc lực', 'Lấy đá ném vào đầu con chó', 'Đưa tay ra vuốt ve đầu nó'], correctAnswer: 'Đứng yên như pho tượng, hai tay buông thõng, không nhìn chằm chằm vào mắt nó và tuyệt đối không bỏ chạy',
    scaffoldHint: 'Bản năng của loài chó là săn đuổi mục tiêu chạy trốn; đứng yên tĩnh lặng sẽ làm nó mất hứng thú và bỏ đi!',
    funFact: 'Nếu không may bị ngã xuống đất, hãy cuộn tròn người lại như chú nhím, hai tay ôm chặt lấy đầu và cổ để bảo vệ!'
  },
  {
    id: 'ls16', stage: 16, difficulty: 'hard', title: 'Kỹ Năng Khi Bị Hóc Dị Vật', opponentName: 'Hạt Nhãn Nguy Hiểm', opponentAvatar: '⚠️',
    questionText: 'Khi đang ăn quả có hạt tròn (nhãn, vải) mà bị sặc nghẹn vào đường thở không nói được, dấu hiệu cầu cứu là gì?',
    visual: '🆘 Hai tay ôm lấy cổ họng nghẹn thở', options: ['Hai bàn tay ôm lấy cổ họng ra hiệu nghẹn thở để người lớn làm thủ thuật đẩy dị vật', 'Cố gắng nuốt thêm miếng cơm to', 'Uống thật nhiều nước vào', 'Chạy trốn vào nhà vệ sinh'], correctAnswer: 'Hai bàn tay ôm lấy cổ họng ra hiệu nghẹn thở để người lớn làm thủ thuật đẩy dị vật',
    scaffoldHint: 'Hai tay ôm cổ họng là tín hiệu cấp cứu quốc tế! Người lớn sẽ dùng thủ thuật vỗ lưng ấn ngực ép dị vật bật ra!',
    funFact: 'Quy tắc "Ăn chậm, nhai kỹ, không cười đùa khi đang nhai thức ăn" giúp em phòng tránh 100% tai nạn hóc dị vật!'
  },
  {
    id: 'ls17', stage: 17, difficulty: 'hard', title: 'Thoát Hiểm Khi Kẹt Trong Xe Ô Tô', opponentName: 'Chiếc Còi Xe Ô Tô Cấp Cứu', opponentAvatar: '🚗📢',
    questionText: 'Nếu không may bị bỏ quên một mình trong xe ô tô đóng kín cửa, cách phát tín hiệu cầu cứu hiệu quả nhất là gì?',
    visual: '🔊 Bấm còi xe ô tô inh ỏi', options: ['Trèo lên ghế lái bấm còi xe liên tục và bật đèn cảnh báo khẩn cấp (nút tam giác đỏ)', 'Ngồi khóc im lặng ở ghế sau', 'Cố gắng đập vỡ kính bằng tay không', 'Nằm ngủ đợi người đến mở'], correctAnswer: 'Trèo lên ghế lái bấm còi xe liên tục và bật đèn cảnh báo khẩn cấp (nút tam giác đỏ)',
    scaffoldHint: 'Còi xe ô tô vẫn hoạt động ngay cả khi xe đã tắt khóa điện! Tiếng còi inh ỏi sẽ thu hút người xung quanh đến cứu!',
    funFact: 'Các dòng xe ô tô hiện đại luôn cho phép mở khóa chốt cửa từ phía bên trong bằng tay lẫy cửa ghế lái!'
  },
  {
    id: 'ls18', stage: 18, difficulty: 'hard', title: 'Phòng Tránh Bị Điện Giật Ở Nhà', opponentName: 'Dây Điện Bị Hở', opponentAvatar: '🔌⚠️',
    questionText: 'Khi phát hiện dây điện quạt máy bị chuột cắn hở lõi đồng lóe tia lửa, hành động đúng nhất là gì?',
    visual: '⚡ Dây điện hở nguy hiểm', options: ['Tuyệt đối không chạm vào, lùi xa và gọi ngay người lớn ngắt cầu dao điện', 'Lấy tay cầm dây điện lên xem', 'Lấy kéo sắt cắt đứt dây điện', 'Lấy nước dội vào chỗ tia lửa'], correctAnswer: 'Tuyệt đối không chạm vào, lùi xa và gọi ngay người lớn ngắt cầu dao điện',
    scaffoldHint: 'Lõi đồng dẫn điện trực tiếp có thể giật chết người! Phải báo người lớn dập cầu dao Aptomat ngay lập tức!',
    funFact: 'Băng dính cách điện chuyên dụng được làm bằng nhựa vinyl dẻo có khả năng ngăn chặn dòng điện rò rỉ an toàn!'
  },
  {
    id: 'ls19', stage: 19, difficulty: 'hard', title: 'Xử Lý Khi Bị Ong Đốt', opponentName: 'Chú Ong Bầu Cảnh Giác', opponentAvatar: '🐝⚠️',
    questionText: 'Khi vô tình bị ong đốt vào bắp tay sưng tấy đau nhức, bước xử lý ban đầu an toàn là gì?',
    visual: '🧊 Chườm lạnh làm dịu vết sưng', options: ['Rửa sạch bằng xà phòng, chườm lạnh giảm đau và nhờ người lớn lấy ngòi đốt ra', 'Lấy tay bóp nặn mạnh làm vỡ nọc độc', 'Bôi bùn đất bẩn lên vết ong đốt', 'Để mặc không xử lý'], correctAnswer: 'Rửa sạch bằng xà phòng, chườm lạnh giảm đau và nhờ người lớn lấy ngòi đốt ra',
    scaffoldHint: 'Chườm đá lạnh bọc trong khăn sạch giúp mạch máu co lại, giảm sưng tấy và cơn đau rát nhanh chóng!',
    funFact: 'Nếu sau khi bị ong đốt mà thấy khó thở hoặc mẩn ngứa khắp người, phải đến ngay cơ sở y tế gần nhất cấp cứu!'
  },
  {
    id: 'ls20', stage: 20, difficulty: 'hard', title: 'Kỹ Năng Thoát Hiểm Thang Máy Kẹt', opponentName: 'Nút Chuông Báo Động Thang Máy', opponentAvatar: '🛗🔔',
    questionText: 'Khi thang máy tòa nhà đột ngột dừng lại giữa các tầng và mất điện tối om, em nên làm gì?',
    visual: '🆘 Nút chuông vàng trong thang máy', options: ['Bình tĩnh bấm nút chuông báo động hình chiếc chuông hoặc nút điện thoại Intercom cầu cứu', 'Dùng tay cạy phá cửa thang máy', 'Nhảy nhót gào thét đạp vào vách thang máy', 'Trèo lên nóc thang máy'], correctAnswer: 'Bình tĩnh bấm nút chuông báo động hình chiếc chuông hoặc nút điện thoại Intercom cầu cứu',
    scaffoldHint: 'Thang máy có hệ thống phanh cơ khí an toàn không thể rơi tự do; không khí bên trong luôn đủ thở, hãy giữ bình tĩnh gọi cứu hộ!',
    funFact: 'Nút chuông vàng kết nối trực tiếp với phòng điều khiển bảo vệ tòa nhà túc trực 24/7!'
  },
  {
    id: 'ls21', stage: 21, difficulty: 'hard', title: 'An Toàn Khi Đi Bơi', opponentName: 'Phao Tay Bơi Lội', opponentAvatar: '🏊',
    questionText: 'Trước khi nhảy xuống hồ bơi học bơi, việc làm bắt buộc giúp bé không bị chuột rút (vọp bẻ) là gì?',
    visual: '🤸 Khởi động các khớp tay chân', options: ['Khởi động kỹ các khớp cổ chân, cổ tay, khớp gối và làm ấm cơ thể ít nhất 10 phút', 'Ăn thật no rồi nhảy xuống nước ngay', 'Nhảy cắm đầu xuống chỗ nước cạn', 'Uống thật nhiều nước ngọt'], correctAnswer: 'Khởi động kỹ các khớp cổ chân, cổ tay, khớp gối và làm ấm cơ thể ít nhất 10 phút',
    scaffoldHint: 'Khởi động kỹ giúp các bó cơ dẻo dai, quen dần với vận động và ngăn chặn chứng chuột rút nguy hiểm dưới nước!',
    funFact: 'Chuột rút là hiện tượng co thắt cơ đột ngột do thiếu khởi động hoặc cơ thể bị nhiễm lạnh bất ngờ!'
  },
  {
    id: 'ls22', stage: 22, difficulty: 'hard', title: 'Xử Lý Khi Bị Cát Bụi Vào Mắt', opponentName: 'Lọ Nước Muối Sinh Lý', opponentAvatar: '👁️💧',
    questionText: 'Khi đang đi đường bị gió thổi bụi bay vào mắt cay xè, phản xạ đúng đắn là gì?',
    visual: '👀 Nhỏ nước muối sinh lý làm sạch mắt', options: ['Không dụi mắt, chớp mắt nhẹ nhàng trong chậu nước sạch hoặc nhỏ nước muối sinh lý', 'Lấy tay dụi thật mạnh vào mắt', 'Nhờ bạn thổi mạnh bụi vào sâu hơn', 'Lấy góc áo bẩn quẹt vào lòng đen'], correctAnswer: 'Không dụi mắt, chớp mắt nhẹ nhàng trong chậu nước sạch hoặc nhỏ nước muối sinh lý',
    scaffoldHint: 'Dụi mắt làm hạt bụi cọ xát gây xước giác mạc và nhiễm trùng; nước mắt hoặc nước muối sinh lý sẽ cuốn trôi bụi ra ngoài tự nhiên!',
    funFact: 'Tuyến lệ của mắt liên tục tiết ra nước mắt có chứa chất kháng khuẩn lysozyme bảo vệ mắt tự nhiên!'
  },
  {
    id: 'ls23', stage: 23, difficulty: 'hard', title: 'Không Nhận Quà Người Lạ', opponentName: 'Cây Kẹo Nguy Hiểm', opponentAvatar: '🍭⚠️',
    questionText: 'Một người lạ mặt đứng ở cổng trường đưa cho em gói kẹo ngon và bảo "Bố mẹ cháu nhờ chú đón về", em ứng xử ra sao?',
    visual: '🛑 Lùi lại từ chối dứt khoát', options: ['Lùi lại từ chối dứt khoát, chạy vào phòng bác bảo vệ hoặc báo ngay cho cô giáo', 'Vui vẻ nhận kẹo ăn và lên xe đi cùng', 'Đi theo người lạ ra quán kem', 'Đứng nói chuyện riêng với người lạ'], correctAnswer: 'Lùi lại từ chối dứt khoát, chạy vào phòng bác bảo vệ hoặc báo ngay cho cô giáo',
    scaffoldHint: 'Kẻ xấu thường dùng kẹo bánh hoặc đồ chơi để dụ dỗ bắt cóc trẻ em; chỉ đi về cùng người mà bố mẹ đã dặn trước!',
    funFact: 'Luôn đứng chờ bố mẹ bên trong cổng trường có bác bảo vệ trông coi, tuyệt đối không đứng một mình ngoài đường vắng!'
  },
  {
    id: 'ls24', stage: 24, difficulty: 'hard', title: 'Kỹ Năng Bảo Vệ Tai Khỏi Tiếng Ồn', opponentName: 'Cặp Bịt Tai Chống Ồn', opponentAvatar: '🎧',
    questionText: 'Khi đi qua công trường xây dựng có tiếng máy khoan cắt đục bê tông đinh tai nhức óc, em nên làm gì?',
    visual: '🙉 Lấy hai tay bịt chặt tai lại', options: ['Dùng hai ngón tay trỏ bịt chặt lỗ tai lại và nhanh chóng đi qua khu vực ồn ào', 'Đứng lại nghe cho vui tai', 'Ghé sát tai vào máy khoan', 'Hét to thi với máy khoan'], correctAnswer: 'Dùng hai ngón tay trỏ bịt chặt lỗ tai lại và nhanh chóng đi qua khu vực ồn ào',
    scaffoldHint: 'Tiếng ồn quá lớn (> 85 decibel) có thể làm tổn thương các tế bào lông cảm nhận âm thanh trong ốc tai, gây giảm thính lực vĩnh viễn!',
    funFact: 'Màng nhĩ của con người mỏng manh như một cánh hoa; bảo vệ thính giác từ nhỏ giúp em luôn nghe rõ giai điệu cuộc sống!'
  },
  {
    id: 'ls25', stage: 25, difficulty: 'hard', title: 'Xử Lý Vết Cào Động Vật', opponentName: 'Bông Băng Y Tế', opponentAvatar: '🩹',
    questionText: 'Nếu vô tình bị mèo cào hoặc chó cắn xước da chảy máu, việc làm y tế cấp bách đầu tiên là gì?',
    visual: '🚿 Rửa sạch vết thương bằng xà phòng', options: ['Rửa vết thương dưới vòi nước chảy với xà phòng 15 phút và báo bố mẹ đi tiêm phòng dại', 'Giấu kín không nói cho bố mẹ biết', 'Lấy lá cây đắp bừa lên vết thương', 'Bôi mực tím rồi để mặc'], correctAnswer: 'Rửa vết thương dưới vòi nước chảy với xà phòng 15 phút và báo bố mẹ đi tiêm phòng dại',
    scaffoldHint: 'Vi-rút bệnh dại trong nước bọt chó mèo rất nguy hiểm; rửa xà phòng giúp rửa trôi phần lớn mầm bệnh trước khi đi tiêm phòng!',
    funFact: 'Tiêm phòng dại kịp thời trong vòng 24 - 48 giờ sau khi bị cắn cứu sống 100% nạn nhân trước căn bệnh dại nguy hiểm!'
  },
  {
    id: 'ls26', stage: 26, difficulty: 'hard', title: 'Tự Mang Ba Lô Đúng Cách', opponentName: 'Chiếc Ba Lô Cân Đối', opponentAvatar: '🎒',
    questionText: 'Cách đeo cặp sách học sinh chuẩn y khoa giúp lưng thẳng và không bị vẹo cột sống là gì?',
    visual: '🧍 Đeo đều hai quai trên hai vai', options: ['Đeo đều cả hai quai lên hai vai, chỉnh quai vừa vặn ôm sát lưng', 'Chỉ đeo lệch một bên vai suốt cả ngày', 'Đeo cặp thõng thượt xuống tận mông', 'Kéo lê cặp trên mặt đất'], correctAnswer: 'Đeo đều cả hai quai lên hai vai, chỉnh quai vừa vặn ôm sát lưng',
    scaffoldHint: 'Đeo lệch một bên vai làm cột sống bị kéo nghiêng về một phía, lâu ngày gây cong vẹo cột sống và gù lưng học đường!',
    funFact: 'Trọng lượng cặp sách không nên vượt quá 10% trọng lượng cơ thể của bé (nặng 25kg chỉ nên đeo cặp dưới 2.5kg)!'
  },
  {
    id: 'ls27', stage: 27, difficulty: 'hard', title: 'An Toàn Khi Đi Thang Cuốn', opponentName: 'Bậc Thang Cuốn Siêu Thị', opponentAvatar: '🏢',
    questionText: 'Khi đi thang cuốn tự động ở trung tâm thương mại hoặc sân bay, hành động an toàn bắt buộc là gì?',
    visual: '🧍‍♂️ Đứng ngay ngắn giữa bậc thang cuốn', options: ['Đứng yên giữa bậc thang, vịn tay vào tay vịn cao su và không để dây giày mắc vào khe thang', 'Ngồi bệt xuống bậc thang cuốn', 'Chạy ngược chiều thang cuốn đang chạy', 'Thò đầu thò tay ra ngoài lan can thang'], correctAnswer: 'Đứng yên giữa bậc thang, vịn tay vào tay vịn cao su và không để dây giày mắc vào khe thang',
    scaffoldHint: 'Khe hở giữa các bậc thang cuốn có thể kẹp kẹt mũi giày xốp hoặc dây giày; hãy đứng yên trong vạch vàng an toàn!',
    funFact: 'Các nút bấm dừng khẩn cấp màu đỏ (Emergency Stop) luôn được bố trí ở hai đầu thang cuốn đề phòng sự cố!'
  },
  {
    id: 'ls28', stage: 28, difficulty: 'hard', title: 'Uống Nước Đúng Cách Mỗi Ngày', opponentName: 'Bình Nước Cá Nhân', opponentAvatar: '🍶',
    questionText: 'Cách uống nước khoa học nhất để cơ thể hấp thu nước tốt và bảo vệ sức khỏe là gì?',
    visual: '🥤 Uống từng ngụm nước nhỏ ấm áp', options: ['Uống từng ngụm nhỏ, uống rải đều cả ngày ngay cả khi chưa quá khát', 'Đợi thật khát khô cổ họng mới uống ừng ực một hơi', 'Chỉ uống nước ngọt có ga thay nước lọc', 'Uống nước đá quá lạnh liên tục'], correctAnswer: 'Uống từng ngụm nhỏ, uống rải đều cả ngày ngay cả khi chưa quá khát',
    scaffoldHint: 'Uống từng ngụm nhỏ giúp nước thấm dần vào tế bào và không làm tăng áp lực đột ngột lên trái tim và thận!',
    funFact: 'Cơ thể con người chứa hơn 70% là nước; uống đủ 1.5 lít nước mỗi ngày giúp não bộ tỉnh táo và trí nhớ siêu phàm!'
  },
  {
    id: 'ls29', stage: 29, difficulty: 'hard', title: 'Giấc Ngủ Vàng Của Trẻ Em', opponentName: 'Mặt Trăng Êm Dịu', opponentAvatar: '🌙⭐',
    questionText: 'Học sinh tiểu học cần đi ngủ trước mấy giờ đêm để tuyến yên tiết ra hormone tăng trưởng chiều cao tối đa?',
    visual: '🛌 Giấc ngủ say nồng êm ái', options: ['Nên đi ngủ trước 10 giờ tối và ngủ đủ 9 - 10 tiếng mỗi đêm', 'Thức xem phim đến 1 giờ sáng', 'Chỉ cần ngủ 4 tiếng mỗi ngày', 'Thức trắng đêm chơi điện tử'], correctAnswer: 'Nên đi ngủ trước 10 giờ tối và ngủ đủ 9 - 10 tiếng mỗi đêm',
    scaffoldHint: 'Hormone tăng trưởng chiều cao (GH) tiết ra mạnh nhất vào khoảng từ 11 giờ đêm đến 1 giờ sáng khi bé ngủ sâu giấc!',
    funFact: 'Một giấc ngủ sâu và ngon lành là "phép thuật" tự nhiên giúp tái tạo tế bào não, phát triển trí thông minh và chiều cao vượt trội!'
  },
  {
    id: 'ls30', stage: 30, difficulty: 'boss', title: 'Thần Hộ Mệnh Kỹ Năng (TRÙM SINH TỒN NHÍ)', opponentName: 'Hiệp Sĩ Sao Vàng Dũng Cảm', opponentAvatar: '🛡️🌟👑✨',
    questionText: 'Vũ khí mạnh mẽ nhất giúp em luôn bình an, mạnh khỏe và tự tin vượt qua mọi hoàn cảnh hiểm nguy là gì?',
    visual: '💪 Tinh thần dũng cảm và trí tuệ sáng suốt', options: ['Kiến thức an toàn, sự bình tĩnh, kỹ năng sinh tồn và lòng dũng cảm biết tìm kiếm sự giúp đỡ đúng lúc', 'Sự liều lĩnh không sợ gì', 'Trông chờ hoàn toàn vào may mắn', 'Khóc lóc đầu hàng số phận'], correctAnswer: 'Kiến thức an toàn, sự bình tĩnh, kỹ năng sinh tồn và lòng dũng cảm biết tìm kiếm sự giúp đỡ đúng lúc',
    scaffoldHint: 'Bình tĩnh là chìa khóa của sự sống sót! Học kỹ năng sống giúp em tự bảo vệ bản thân và giúp đỡ mọi người xung quanh!',
    funFact: 'Chúc mừng bé đã đạt danh hiệu "Hiệp Sĩ Kỹ Năng Sống Toàn Diện"! Bản lĩnh vững vàng, tự tin khám phá thế giới rộng lớn!'
  }
];
