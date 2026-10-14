import React, { useState, useEffect } from 'react';
import { LESSONS, SUBJECTS_LEVEL1, SUBJECTS_LEVEL2 } from '../data/curriculumData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function EvolutionExamModal({
  pet,
  targetTier = 2,
  level = 10,
  selectedLevel = 'level1',
  onPassExam,
  onClose
}) {
  // Lấy danh sách môn học theo cấp độ
  const subjects = selectedLevel === 'level1' ? SUBJECTS_LEVEL1 : SUBJECTS_LEVEL2;

  // Thu thập 30 câu hỏi cân bằng từ tất cả các môn học
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Hàm sinh 30 câu hỏi liên môn
  const generateExamQuestions = () => {
    const pool = [];
    const questionsPerSubject = Math.ceil(30 / subjects.length);

    subjects.forEach((sub) => {
      const lessons = LESSONS[sub.id] || [];
      if (lessons.length > 0) {
        // Xáo trộn ngẫu nhiên câu hỏi của môn này
        const shuffled = [...lessons].sort(() => 0.5 - Math.random());
        const picked = shuffled.slice(0, questionsPerSubject).map((q) => ({
          ...q,
          subjectName: sub.name,
          subjectIcon: sub.icon,
          subjectColor: sub.accentColor || '#6366f1'
        }));
        pool.push(...picked);
      }
    });

    // Xáo trộn tổng thể và lấy đúng 30 câu
    const final30 = pool.sort(() => 0.5 - Math.random()).slice(0, 30);
    return final30;
  };

  useEffect(() => {
    const list = generateExamQuestions();
    setQuestions(list);
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setIsFinished(false);
  }, [selectedLevel]);

  const currentQ = questions[currentIndex];

  // Xáo trộn các lựa chọn cho mỗi câu
  useEffect(() => {
    if (currentQ && currentQ.options) {
      const opts = [...currentQ.options].sort(() => 0.5 - Math.random());
      setShuffledOptions(opts);
      setSelectedOption(null);
    }
  }, [currentIndex, questions]);

  const handleReadQuestion = () => {
    if (!currentQ) return;
    const isEn = currentQ.subjectName?.toLowerCase().includes('tiếng anh');
    soundManager.speakText(currentQ.questionText, isEn ? 'en-US' : 'vi-VN');
  };

  const handleSelectOption = (opt) => {
    if (selectedOption !== null) return;
    setSelectedOption(opt);

    const isRight = opt === currentQ.correctAnswer;
    if (isRight) {
      soundManager.playSuccess();
      setCorrectCount((prev) => prev + 1);
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.6 } });
    } else {
      soundManager.playTryAgain();
    }
  };

  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      if (correctCount + (selectedOption === currentQ.correctAnswer ? 0 : 0) === 30) {
        soundManager.playEvolution();
        confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
      }
    }
  };

  const handleRestart = () => {
    soundManager.playClick();
    const list = generateExamQuestions();
    setQuestions(list);
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setIsFinished(false);
  };

  const isPassed = correctCount === 30;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 110,
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '720px',
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '2rem',
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(99, 102, 241, 0.35)',
        border: '3px solid #a5b4fc'
      }}>
        {/* Nút đóng */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            background: '#f1f5f9',
            fontSize: '1.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Header Modal */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            border: '2px solid #f59e0b',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '1.1rem' }}>🏛️</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#92400e', fontSize: '0.92rem' }}>
              ĐẠI HỘI KHẢO THÍ TIẾN HÓA LINH THÚ • CẤP {level}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>
            Bài Kiểm Tra Kiến Thức Toàn Năng
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            Vượt qua 30/30 câu hỏi liên môn để mở khóa hình dạng tiến hóa Bậc {targetTier} cho bạn <strong>{pet.name}</strong>!
          </p>
        </div>

        {/* Thanh tiến độ */}
        {!isFinished && questions.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
              <span>Câu hỏi: <strong style={{ color: '#4f46e5' }}>{currentIndex + 1} / 30</strong></span>
              <span>Đúng: <strong style={{ color: '#16a34a' }}>{correctCount}</strong> / 30</span>
            </div>
            <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{
                width: `${((currentIndex + 1) / 30) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #10b981)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        )}

        {/* Màn hình kết quả khi làm xong 30 câu */}
        {isFinished ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ fontSize: '72px', marginBottom: '0.75rem' }} className="animate-float">
              {isPassed ? '🏆✨🐲' : '🌱🦉📖'}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: isPassed ? '#16a34a' : '#d97706',
              marginBottom: '0.5rem'
            }}>
              {isPassed ? 'XUẤT SẮC TUYỆT ĐỐI! 30/30 ĐIỂM!' : `Bé Đã Hoàn Thành: ${correctCount}/30 Câu`}
            </h3>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              {isPassed ? (
                <>Bé đã trả lời chính xác trọn vẹn <strong>30/30 câu hỏi</strong> thuộc tất cả các môn học! Linh thú <strong>{pet.name}</strong> đã hấp thụ đủ tinh hoa vũ trụ và sẵn sàng bùng nổ tiến hóa!</>
              ) : (
                <>Để linh thú tiến hóa hình dạng mới, bé cần vượt qua thử thách với số điểm tuyệt đối <strong>30/30 câu</strong>. Bé chỉ thiếu một chút nữa thôi, hãy cùng bạn <strong>{pet.name}</strong> thử sức lại nhé!</>
              )}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {isPassed ? (
                <button
                  onClick={() => {
                    onPassExam();
                  }}
                  className="btn-arcade btn-arcade-emerald"
                  style={{
                    fontSize: '1.15rem',
                    padding: '0.85rem 2rem',
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.45)',
                    animation: 'pulse 1.5s infinite'
                  }}
                >
                  ⚡ KÍCH HOẠT TIẾN HÓA NGAY ⚡
                </button>
              ) : (
                <>
                  <button
                    onClick={handleRestart}
                    className="btn-arcade btn-arcade-primary"
                    style={{ fontSize: '1rem', padding: '0.75rem 1.75rem' }}
                  >
                    🔄 Thử Lại Bài Kiểm Tra Mới
                  </button>
                  <button
                    onClick={onClose}
                    className="btn-arcade"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #cbd5e1',
                      color: '#475569',
                      fontSize: '1rem',
                      padding: '0.75rem 1.5rem'
                    }}
                  >
                    📚 Ôn Luyện Thêm Rồi Trở Lại
                  </button>
                </>
              )}
            </div>
          </div>
        ) : currentQ ? (
          /* Màn hình từng câu hỏi */
          <div>
            {/* Tag Môn Học & Đối Thủ */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#f1f5f9',
                padding: '0.3rem 0.85rem',
                borderRadius: '9999px',
                border: `1.5px solid ${currentQ.subjectColor}`
              }}>
                <span>{currentQ.subjectIcon}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: currentQ.subjectColor }}>
                  {currentQ.subjectName}
                </span>
              </div>

              <button
                onClick={handleReadQuestion}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: '#eff6ff',
                  color: '#2563eb',
                  border: '1.5px solid #bfdbfe',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.75rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span>🔊</span>
                <span>Nghe đọc</span>
              </button>
            </div>

            {/* Nội dung câu hỏi */}
            <div style={{
              background: '#f8fafc',
              padding: '1.25rem',
              borderRadius: '1.25rem',
              border: '2px solid #e2e8f0',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{currentQ.opponentAvatar || '🐻'}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>
                  {currentQ.opponentName || 'Sứ Giả Khảo Thí'}:
                </span>
              </div>
              <p style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#1e293b',
                lineHeight: 1.5,
                margin: 0
              }}>
                {currentQ.questionText}
              </p>
              {currentQ.visual && (
                <div style={{
                  marginTop: '0.75rem',
                  fontSize: '1.15rem',
                  padding: '0.5rem',
                  background: '#ffffff',
                  borderRadius: '0.75rem',
                  border: '1px dashed #cbd5e1',
                  textAlign: 'center'
                }}>
                  {currentQ.visual}
                </div>
              )}
            </div>

            {/* 4 Lựa chọn trả lời */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1.25rem'
            }}>
              {shuffledOptions.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isRight = opt === currentQ.correctAnswer;
                let bg = '#ffffff';
                let border = '#cbd5e1';
                let color = '#1e293b';

                if (selectedOption !== null) {
                  if (isRight) {
                    bg = '#ecfdf5';
                    border = '#10b981';
                    color = '#065f46';
                  } else if (isSelected) {
                    bg = '#fef2f2';
                    border = '#ef4444';
                    color = '#991b1b';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={selectedOption !== null}
                    style={{
                      background: bg,
                      border: `2.5px solid ${border}`,
                      borderRadius: '1rem',
                      padding: '0.85rem 1rem',
                      textAlign: 'left',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: color,
                      cursor: selectedOption !== null ? 'default' : 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.08)' : 'none'
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '26px',
                      height: '26px',
                      lineHeight: '26px',
                      textAlign: 'center',
                      borderRadius: '50%',
                      background: isRight && selectedOption !== null ? '#10b981' : isSelected ? '#ef4444' : '#f1f5f9',
                      color: (isRight && selectedOption !== null) || isSelected ? '#ffffff' : '#475569',
                      marginRight: '0.65rem',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Phản hồi & Gợi ý sau khi chọn */}
            {selectedOption !== null && (
              <div style={{
                background: selectedOption === currentQ.correctAnswer ? '#f0fdf4' : '#fffbeb',
                border: `2px solid ${selectedOption === currentQ.correctAnswer ? '#86efac' : '#fcd34d'}`,
                borderRadius: '1rem',
                padding: '0.85rem 1.25rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div>
                  <div style={{
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: selectedOption === currentQ.correctAnswer ? '#15803d' : '#b45309'
                  }}>
                    {selectedOption === currentQ.correctAnswer ? '🎉 Chính xác tuyệt đối!' : '💡 Chưa đúng rồi bé ơi!'}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '2px' }}>
                    {selectedOption === currentQ.correctAnswer
                      ? (currentQ.funFact || 'Bé làm rất tốt, tiếp tục phát huy nhé!')
                      : (currentQ.scaffoldHint || `Đáp án đúng là: ${currentQ.correctAnswer}`)}
                  </div>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="btn-arcade btn-arcade-primary"
                  style={{ fontSize: '0.95rem', padding: '0.5rem 1.25rem' }}
                >
                  {currentIndex + 1 < 30 ? 'Câu Tiếp Theo ➔' : 'Xem Kết Quả 🏁'}
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
