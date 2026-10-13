# KẾ HOẠCH HỆ THỐNG HỌC TẬP QUA GAME WEB CHO TIỂU HỌC (LỚP 1 - 5)
*Chương trình GDPT 2018: Toán, Tiếng Việt, Tiếng Anh (L3-5), Tự nhiên & Xã hội / Khoa học*

---

## PHẦN 1: AGENT ĐÁNH GIÁ DỰ ÁN & ĐỀ XUẤT CẢI TIẾN

* **RPG Battle phi bạo lực (Học từ Prodigy Math):** Thay vì thanh máu (HP), dùng thanh "Năng lượng Tri thức" hoặc "Khiên Phép thuật"; giải đúng kích hoạt kỹ năng/chiêu thức hóa giải câu đố của quái vật thân thiện.
* **Cơ chế Thất bại Không Trừng phạt & Giàn giáo gợi ý (Scaffold - Khan Academy Kids / DragonBox):** Khi sai không trừ điểm nặng hay reset màn chơi; hiển thị trực quan gợi ý từng bước (visual scaffold, kéo thả trực quan) giúp bé tự sửa lỗi.
* **Thế giới Quái thú & Ngữ âm (Teach Your Monster to Read / SplashLearn):** Tạo avatar quái vật đồng hành tiến hóa theo cấp lớp; kết hợp audio phát âm chuẩn cho môn Tiếng Việt (âm, vần) và Tiếng Anh (phonics).
* **Chuỗi ngày tích cực & Tránh ganh đua độc hại (Duolingo / ABCmouse):** Dùng chuỗi học tập (Streak) nhẹ nhàng có tính năng đóng băng (Streak Freeze miễn phí); bảng xếp hạng theo nhóm bạn bè kín hoặc mục tiêu cá nhân/lớp học, loại bỏ leaderboard công khai gây áp lực.
* **Mini-game Arcade ngắt quãng (Arcademics / PBS Kids):** Cứ sau 10-15 phút giải đố sâu (Deep learning), thưởng 1 mini-game giải trí nhanh 2 phút (chạy đua tính nhẩm, bắt chữ) để giải tỏa mỏi mắt và não bộ.
* **Web-First & Offline Caching (PWA + Service Worker):** Đóng gói asset âm thanh/hình ảnh cục bộ bằng IndexedDB và Cache Storage; đảm bảo trẻ ở vùng sóng yếu hoặc dùng máy tính bảng cũ của gia đình vẫn chơi mượt không giật lag.
* **Parent/Teacher Dashboard riêng biệt (COPPA / Bảo mật trẻ em):** Trẻ em không cần email/SĐT khi chơi (chỉ dùng User ID mã hóa + mã lớp); phụ huynh quản lý thời gian chơi (tối đa 30-45 phút/ngày) và báo cáo năng lực chi tiết.

---

## PHẦN 2: AGENT HOÀN THIỆN KẾ HOẠCH TỔNG THỂ

### 1. Tầm nhìn & Đối tượng mục tiêu
* **Tầm nhìn:** Nền tảng EdTech Gamification số 1 tại Việt Nam bám sát chuẩn kiến thức GDPT 2018, biến giờ tự học thành hành trình phiêu lưu kỳ thú cho trẻ.
* **Đối tượng:**
  * Học sinh Lớp 1 - 5 (6 - 11 tuổi) tại Việt Nam (sử dụng trên tablet, laptop, PC).
  * Phụ huynh (theo dõi tiến độ, cài đặt giới hạn giờ chơi).
  * Giáo viên tiểu học (giao nhiệm vụ tuần, theo dõi báo cáo lớp).

### 2. Ma trận Nội dung Học tập (GDPT 2018)

| Khối lớp | Toán học | Tiếng Việt | Tiếng Anh | TN&XH / Khoa học |
| :--- | :--- | :--- | :--- | :--- |
| **Lớp 1** | Đếm, phép cộng/trừ phạm vi 10-100, hình học trực quan, đo lường cơ bản | Âm vần, ghép chữ, nhận diện từ đơn, chính tả hình ảnh | *(Làm quen từ vựng qua hình ảnh)* | Cơ thể người, gia đình, động thực vật quen thuộc |
| **Lớp 2** | Bảng nhân/chia 2 và 5, phép tính có nhớ phạm vi 1000, hình phẳng | Mở rộng vốn từ, dấu câu, đọc hiểu đoạn ngắn, kể chuyện | *(Nhận diện đồ vật, màu sắc, số đếm)* | Trường học, quê hương, an toàn giao thông, thời tiết |
| **Lớp 3** | Bảng nhân/chia 3, 4, 6, 7, 8, 9; số có 4-5 chữ số; chu vi/diện tích cơ bản | Từ chỉ sự vật, hoạt động, so sánh, nhân hóa, viết đoạn văn | Phonics, giao tiếp cơ bản, từ vựng theo chủ đề trường lớp/gia đình | Động vật, thực vật, môi trường xung quanh, máy móc đơn giản |
| **Lớp 4** | Phân số, góc, số trung bình cộng, phép tính hàng triệu | Danh/động/tính từ, câu kể/câu hỏi/câu khiến, đọc hiểu mở rộng | Ngữ pháp cơ bản (hiện tại đơn/tiếp diễn), kỹ năng nghe-đọc | Nước, không khí, ánh sáng, nhiệt, âm thanh, nấm |
| **Lớp 5** | Số thập phân, tỉ số phần trăm, thể tích (hình hộp, lập phương), vận tốc | Đại từ, quan hệ từ, ôn tập văn miêu tả, từ đồng nghĩa/trái nghĩa | Đọc hiểu đoạn văn ngắn, viết câu hoàn chỉnh, từ vựng mở rộng | Sự biến đổi chất, năng lượng, sinh sản động thực vật, môi trường |

### 3. Vòng lặp Core Game Mechanics
```
[Nhiệm vụ Ngày / Quest] ──> [Bản đồ Thế giới / Map] ──> [Màn Đấu Trí / Quiz Battle]
          ▲                                                           │
          │                                                           ▼
[Nâng cấp Avatar / Nuôi Pet] ◄── [Thưởng Xu / Huy hiệu] ◄── [Phản hồi & Scaffold Hint]
```
* **Avatar & Pet Companion:** Trẻ tạo linh thú (Rồng con, Cú thông thái, Rùa dũng cảm); pet lên cấp và biến hóa khi hoàn thành bài học.
* **World Map Phiêu lưu:** 5 Vùng đất tượng trưng cho 5 khối lớp (Rừng Tri thức, Đảo Phép thuật Toán học, Thành phố Ngôn ngữ, Thung lũng Khoa học, Xứ sở Toàn cầu).
* **Combat trí tuệ:** Gặp NPC/Quái vật giải đố; chọn chiêu thức bằng cách giải toán/điền từ/phát âm chuẩn.
* **Phần thưởng phi độc hại:** Nhận trang phục, nhà cho Pet, danh hiệu; không so sánh điểm số áp lực.

### 4. Kiến trúc Công nghệ (Web-First / PWA)
* **Frontend:** React 18 + Vite (UI shell, Dashboard, Auth) + **Phaser.js 3** (Canvas render Game World & Mini-games).
* **UI/UX Trẻ em:** Nút bấm lớn (tối thiểu 48x48px), icon trực quan, font chữ tiểu học chuẩn (UTM/Búp Sen/Inter), hiệu ứng âm thanh sống động (Web Audio API).
* **Offline & PWA:** Workbox Service Worker cache tĩnh + IndexedDB lưu trữ tiến độ offline, tự sync khi có mạng.
* **Backend:** Node.js (NestJS) hoặc Golang, RESTful API + WebSockets cho chế độ thi đấu giao hữu nhẹ.
* **Database & Auth:** PostgreSQL (Supabase / Prisma ORM); hệ thống Anonymous Guest Login bằng mã PIN 4 số hoặc Avatar-passcode cho trẻ em.
* **Bảo mật trẻ em:** Tuân thủ COPPA & Nghị định 13/2023/NĐ-CP (Zero PII collection từ học sinh; phụ huynh giữ quyền quản trị tài khoản).

### 5. Lộ trình Triển khai (4 Giai đoạn)

| Giai đoạn | Thời gian | Trọng tâm công việc | Deliverable chính |
| :--- | :--- | :--- | :--- |
| **Giai đoạn 1: MVP Core** | Tháng 1 - 2 | Core engine Phaser + React, Khối Lớp 1 (Toán & Tiếng Việt), Avatar cơ bản | Bản Alpha chơi thử trên web/mobile web cho Lớp 1 |
| **Giai đoạn 2: Scale Lớp 2-3 & Voice** | Tháng 3 - 4 | Mở rộng Lớp 2-3, tích hợp Tiếng Anh (Web Speech API/Audio phonics), Pet system | Bản Beta thử nghiệm tại 3-5 trường tiểu học / 500 học sinh |
| **Giai đoạn 3: Hoàn thiện Lớp 4-5 & Dashboard** | Tháng 5 - 6 | Nội dung Lớp 4-5, Khoa học, Cổng phụ huynh/giáo viên, chế độ Offline PWA | Bản thương mại hoàn chỉnh đa nền tảng |
| **Giai đoạn 4: Community & Co-op Quest** | Tháng 7 - 8 | Nhiệm vụ tổ đội diệt Boss lớp học, thư viện câu hỏi cộng đồng kiểm duyệt | Hệ sinh thái hoàn chỉnh, giải đấu kiến thức cấp trường |

### 6. Đội ngũ & Dự toán Tài nguyên
* **Nhân sự cốt lõi (6-7 người):** 1 Product Owner / EdTech Lead, 1 Chuyên gia Sư phạm Tiểu học, 1 Game Designer / 2D Artist, 1 Lead Frontend (React + Phaser), 1 Backend Dev, 1 QA / Tester.
* **Chi phí hạ tầng tối ưu:** Vercel/Cloudflare Pages (Frontend CDN miễn phí/rẻ), Supabase/Railway (Backend & DB), Cloudflare R2 (Asset storage giá rẻ không tốn egress fee).

### 7. Chỉ số Đánh giá Hiệu quả (KPIs)
* **Engagement:** DAU/MAU > 35%, Thời lượng phiên: 20 - 30 phút/ngày, Tỉ lệ duy trì D7 > 45%, D30 > 25%.
* **Học tập:** Tỉ lệ hoàn thành bài học (Lesson Completion Rate) > 80%, Tỉ lệ tiến bộ sau 3 lần sai > 70%.
* **Kỹ thuật:** Web Vitals LCP < 2.5s, FCP < 1.2s, Tốc độ tải scene < 1.5s trên 4G/Wifi yếu, Crash rate < 0.1%.

### 8. Quản trị Rủi ro & Giải pháp
* *Rủi ro mỏi mắt/nghiện game:* Khóa màn hình thân thiện sau 30 phút, nhắc bé vận động mắt.
* *Rủi ro sai lệch chương trình:* 100% nội dung thẩm định bởi giáo viên tiểu học đạt chuẩn GDPT 2018.
* *Rủi ro dung lượng web nặng:* Tối ưu hóa WebP, nén sprite sheet bằng TexturePacker, audio nén Ogg/AAC < 64kbps.

---

## PHẦN 3: AGENT KIỂM THỬ & QA (TEST CASES & ACCEPTANCE CRITERIA)

### 1. Danh sách Test Cases Cốt lõi
1. **TC-UX-01 (Kích thước & Phản hồi cảm ứng):** Trẻ dùng ngón tay bấm trên màn hình điện thoại 5.5 inch; mọi nút bấm có hit-box >= 48px, có phản hồi âm thanh và co giãn nhẹ (tween scale).
2. **TC-ADAPT-02 (Logic Thích ứng & Scaffold):** Khi học sinh trả lời sai 2 lần liên tiếp, hệ thống tự hạ độ khó 1 bậc và hiển thị gợi ý chia nhỏ bài toán (Visual Hint), không trừ điểm thưởng đã tích lũy.
3. **TC-AUDIO-03 (Phát âm Tiếng Việt & Tiếng Anh):** Kiểm tra audio âm vần và ngữ âm phonics phát chuẩn xác, không bị delay > 200ms sau khi chạm, hoạt động mượt trên Safari iOS và Chrome Android.
4. **TC-OFFLINE-04 (PWA & Đồng bộ Offline):** Ngắt kết nối mạng khi đang làm dở bài; game tiếp tục chơi bình thường ít nhất 1 bài học; khi có mạng trở lại tự động đồng bộ điểm và trạng thái lên máy chủ.
5. **TC-PERF-05 (RAM & FPS trên máy cấu hình yếu):** Chạy game trên iPad đời cũ (iPad 6) hoặc điện thoại Android RAM 2GB; duy trì 55-60 FPS ổn định, không tràn bộ nhớ (Memory Leak) sau 30 phút chơi.
6. **TC-CHILD-06 (Bảo mật Trẻ em / COPPA):** Xác minh không có ô nhập liệu thu thập Họ tên, Số điện thoại, Email của trẻ; không có quảng cáo bên thứ 3 hoặc liên kết ngoài không có lớp khóa phụ huynh (Parental Gate).
7. **TC-TIME-07 (Giới hạn Giờ chơi Tự động):** Sau 30 phút chơi liên tục, game chuyển sang màn hình "Nghỉ ngơi cùng Quái thú" với bài tập thể dục nhẹ nhàng cho mắt; cần mã PIN phụ huynh để tiếp tục nếu muốn.
8. **TC-PROGRESS-08 (Đồng bộ Đa thiết bị):** Học sinh chơi xong trên máy tính trường, về nhà đăng nhập tài khoản bằng Avatar-passcode trên điện thoại mẹ, toàn bộ Pet, đồ họa và tiến độ bài học được cập nhật nguyên vẹn.

### 2. Checklist Acceptance Criteria cho MVP
* [x] Đăng nhập 1-chạm không cần mật khẩu phức tạp (sử dụng Avatar PIN 4 hình vẽ).
* [x] Tải lần đầu < 3 giây trên mạng 4G tiêu chuẩn.
* [x] Đầy đủ 100% bài học Toán và Tiếng Việt học kỳ 1 Lớp 1 bám sát SGK Kết nối tri thức / Cánh diều.
* [x] Cơ chế gợi ý không phạt điểm khi trả lời sai hoạt động chính xác.
* [x] Cổng phụ huynh xem được biểu đồ câu đúng/sai và thời gian học trong tuần.

---

## PHẦN 4: AGENT SỬA LỖI & TỐI ƯU HÓA (BUG FIX & OPTIMIZATION)

* **Tối ưu Bundle Size & Asset Loading (Phaser + Vite):**
  * *Lỗ hổng:* Phaser bundle gốc nặng (~1.2MB) + asset hình ảnh tải cùng lúc gây lag, đơ trình duyệt mobile.
  * *Khắc phục:* Dùng Phaser custom build chỉ giữ Arcade Physics và Canvas/WebGL renderer; lazy-load asset theo từng màn chơi; chuyển toàn bộ asset sang định dạng `.webp` và nén sprite sheet giảm 70% dung lượng.
* **Ngăn chặn Rò rỉ Bộ nhớ (Memory Leak) khi đổi Scene:**
  * *Lỗ hổng:* Không hủy texture, sound cache và event listener khi chuyển giữa React UI và Phaser Canvas khiến máy nóng, văng app sau 15 phút.
  * *Khắc phục:* Thiết lập lifecycle chuẩn `scene.events.once('shutdown')` để xóa texture cache, clear Web Audio context và unbind toàn bộ event touch/click.
* **Khắc phục Gian lận & "Đoán mò" (Gaming the System):**
  * *Lỗ hổng:* Học sinh bấm bừa 4 đáp án trắc nghiệm để qua màn nhanh mà không học.
  * *Khắc phục:* Cơ chế tráo ngẫu nhiên vị trí; khi sai lần 1 biến câu hỏi trắc nghiệm thành kéo thả hoặc điền số trực quan; chỉ tính điểm tiến độ khi có thời gian đọc đề hợp lệ (> 3 giây).
* **Tiết kiệm Chi phí Giọng đọc Tiếng Việt & Tiếng Anh:**
  * *Lỗ hổng:* Dùng Cloud TTS (Google/AWS) thời gian thực tốn chi phí API định kỳ cao cho hàng triệu lượt phát âm.
  * *Khắc phục:* Thu âm sẵn toàn bộ ngân hàng âm vần và từ vựng tiểu học dưới dạng file nén Ogg/AAC chất lượng cao (tổng < 20MB); lưu trữ trên Cloudflare R2 (miễn phí băng thông tải về).
* **Tối ưu Hóa Cơ chế Thưởng & Tránh Lạm phát Kinh tế Game:**
  * *Lỗ hổng:* Thưởng quá nhiều xu dễ gây nhàm chán, hoặc quá ít khiến trẻ nản lòng.
  * *Khắc phục:* Thiết lập bảng cân bằng kinh tế: giới hạn xu tối đa kiếm được mỗi ngày từ việc giải bài tập (Daily Cap); thưởng thêm ngẫu nhiên phụ kiện trang trí Pet theo mốc chuyên cần (Streak 3 ngày, 7 ngày).
* **Thiết kế Responsive Đa tỷ lệ Màn hình:**
  * *Lỗ hổng:* Màn hình iPad (4:3) và điện thoại (16:9 / 20:9) bị đen viền hoặc tràn nút điều khiển.
  * *Khắc phục:* Dùng chế độ `Phaser.Scale.FIT` kết hợp dynamic safe-zone layout; thanh điều khiển luôn neo theo góc màn hình thiết bị.
