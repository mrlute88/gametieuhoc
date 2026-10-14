import React, { useState, useRef, useEffect } from 'react';
import GameCanvas from '../game/GameCanvas';
import { LESSONS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function QuizBattleView({
  subject,
  pet,
  stageIndex = 0,
  onCompleteLesson,
  onBackToStages,
  onBackToMap
}) {
  const lessons = LESSONS[subject.id] || [];
  const [currentIndex, setCurrentIndex] = useState(stageIndex);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Tham chiếu tới Phaser BattleScene
  const battleSceneRef = useRef(null);

  // Hàm xáo trộn ngẫu nhiên để phân bố vị trí đáp án linh hoạt
  const shuffleOptions = (options) => {
    if (!options || !Array.isArray(options)) return [];
    const arr = [...options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const currentLesson = lessons[currentIndex] || lessons[0];

  // Phân bố đáp án linh hoạt: xáo trộn các lựa chọn cho mỗi câu hỏi, không cố định một vị trí
  const [displayOptions, setDisplayOptions] = useState(() => shuffleOptions(currentLesson?.options));
  const [sessionCorrectCount, setSessionCorrectCount] = useState(0);

  useEffect(() => {
    setCurrentIndex(stageIndex);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowHint(false);
    setAttemptCount(0);
    setIsFinished(false);
    setSessionCorrectCount(0);
    const currentLessons = LESSONS[subject.id] || [];
    setDisplayOptions(shuffleOptions(currentLessons[stageIndex]?.options));
  }, [stageIndex, subject.id]);

  const handleSceneReady = (scene) => {
    battleSceneRef.current = scene;
  };

  const handleReadQuestion = () => {
    if (!currentLesson) return;
    const isEnglish = subject.id === 'english' || subject.id === 'english_adv';
    soundManager.speakText(currentLesson.questionText, isEnglish ? 'en-US' : 'vi-VN');
  };

  const handleSelectOption = (option) => {
    // Khi học sinh đã chọn một đáp án (dù đúng hay sai) thì khóa lại, không cho chọn lại nữa
    if (selectedOption !== null) return;

    setSelectedOption(option);

    if (option === currentLesson.correctAnswer) {
      // ĐÚNG RỒI!
      setIsCorrect(true);
      setSessionCorrectCount(prev => prev + 1);
      soundManager.playSuccess();
      soundManager.playCoin();

      // Kích hoạt chiêu phép thuật trong Phaser Canvas
      if (battleSceneRef.current?.castSpellEffect) {
        battleSceneRef.current.castSpellEffect();
      }

      // Bắn pháo hoa giấy chúc mừng
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 }
      });

      // Báo cáo hoàn thành câu hỏi (thưởng xu, sao, exp)
      onCompleteLesson({
        lessonId: currentLesson.id,
        subjectId: subject.id,
        attempts: attemptCount + 1
      });
    } else {
      // CHƯA ĐÚNG -> KHÔNG ĐƯỢC CHỌN LẠI ĐÁP ÁN KHÁC NỮA
      setIsCorrect(false);
      setAttemptCount(prev => prev + 1);
      soundManager.playTryAgain();

      // Khi chọn đáp án xong mà sai -> Tự động bật gợi ý để học sinh hiểu bài
      setShowHint(true);

      if (battleSceneRef.current?.castHintEffect) {
        battleSceneRef.current.castHintEffect();
      }
    }
  };

  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentIndex + 1 < lessons.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowHint(false);
      setAttemptCount(0);
      setDisplayOptions(shuffleOptions(lessons[nextIndex]?.options));
    } else {
      setIsFinished(true);
      soundManager.playSuccess();
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    }
  };

  if (isFinished) {
    return (
      <div style={{ maxWidth: '680px', margin: '2rem auto', padding: '1rem', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '2rem' }}>
          <div style={{ fontSize: '72px', marginBottom: '1rem' }} className="animate-float">
            🏆 🌟 👑
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: '#16a34a', marginBottom: '0.5rem' }}>
            Chúc Mừng Hiệp Sĩ Nhí!
          </h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            Bé và bạn <strong>{pet.name}</strong> đã hoàn thành chặng thử thách tại <strong>{subject.name}</strong>!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ background: '#fef3c7', padding: '0.75rem 1.5rem', borderRadius: '1rem', border: '2px solid #fde68a' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#b45309', fontFamily: 'var(--font-display)' }}>
                ⭐ Đúng {sessionCorrectCount}/{lessons.length} Ải
              </span>
            </div>
            <div style={{ background: '#ecfdf5', padding: '0.75rem 1.5rem', borderRadius: '1rem', border: '2px solid #a7f3d0' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#047857', fontFamily: 'var(--font-display)' }}>
                🪙 +{sessionCorrectCount * 15} Xu Vàng
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                soundManager.playClick();
                onBackToStages();
              }}
              className="btn-arcade"
              style={{ background: '#ffffff', border: '2px solid #cbd5e1', color: '#475569', fontSize: '1.1rem', padding: '0.75rem 1.5rem' }}
            >
              📋 Danh Sách Ải
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                onBackToMap();
              }}
              className="btn-arcade btn-arcade-primary"
              style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
            >
              🗺️ Trở Về Bản Đồ Đảo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '1rem' }}>
      {/* Navigation Top */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => {
              soundManager.playClick();
              onBackToStages ? onBackToStages() : onBackToMap();
            }}
            className="btn-arcade"
            style={{
              background: '#ffffff',
              border: '2px solid #cbd5e1',
              color: '#475569',
              padding: '0.45rem 1rem',
              fontSize: '0.92rem'
            }}
          >
            ⬅ Tuyến Đường Ải
          </button>
        </div>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: subject.accentColor,
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span>{subject.bannerEmoji}</span>
          <span>{subject.name} - Ải {currentIndex + 1}/{lessons.length}</span>
        </div>
      </div>

      {/* Phaser 3 Canvas Screen */}
      <div style={{ marginBottom: '1.25rem' }}>
        <GameCanvas
          pet={pet}
          opponentName={currentLesson.opponentName || 'Gấu Thần Rừng'}
          opponentAvatar={currentLesson.opponentAvatar || '🐻'}
          onSceneReady={handleSceneReady}
        />
      </div>

      {/* Question Card Box */}
      {currentLesson && (
        <div className="glass-card" style={{
          padding: '1.5rem',
          borderRadius: '1.75rem',
          border: '3px solid #e2e8f0',
          position: 'relative'
        }}>
          {/* Question Header & Speech Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{currentLesson.opponentAvatar}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#1e293b'
              }}>
                Ải {currentIndex + 1}: {currentLesson.title}
              </h3>
            </div>

            <button
              onClick={handleReadQuestion}
              title="Nghe đọc câu hỏi to và rõ ràng"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#eff6ff',
                color: '#2563eb',
                border: '2px solid #bfdbfe',
                borderRadius: '9999px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <span>🔊</span>
              <span>Nghe câu hỏi</span>
            </button>
          </div>

          <p style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            color: '#334155',
            lineHeight: 1.5,
            marginBottom: '1.25rem'
          }}>
            {currentLesson.questionText}
          </p>

          {/* Visual representations (Táo đếm, con thỏ, chữ ghép trực quan) */}
          {currentLesson.items && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '1rem',
              flexWrap: 'wrap'
            }}>
              {currentLesson.items.map((item, idx) => (
                <span key={idx} className="animate-float" style={{ animationDelay: `${idx * 0.15}s` }}>
                  {item}
                </span>
              ))}
            </div>
          )}

          {currentLesson.leftItems && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              fontSize: '2.2rem',
              marginBottom: '1.5rem',
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {currentLesson.leftItems.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
              <span style={{ fontWeight: 800, color: '#4f46e5', fontFamily: 'var(--font-display)' }}>
                {currentLesson.operator}
              </span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {currentLesson.rightItems.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {currentLesson.displayWord && (
            <div style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#4f46e5',
              letterSpacing: '0.15em',
              marginBottom: '1.25rem',
              background: '#ede9fe',
              padding: '0.5rem',
              borderRadius: '1rem'
            }}>
              {currentLesson.displayWord}
            </div>
          )}

          {currentLesson.displayFormula && (
            <div style={{
              textAlign: 'center',
              fontSize: '2.3rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#059669',
              marginBottom: '1.25rem',
              background: '#ecfdf5',
              padding: '0.5rem',
              borderRadius: '1rem'
            }}>
              {currentLesson.displayFormula}
            </div>
          )}

          {currentLesson.visual && !currentLesson.items && (
            <div style={{
              textAlign: 'center',
              fontSize: '2.8rem',
              marginBottom: '1.25rem',
              background: '#f8fafc',
              padding: '0.5rem',
              borderRadius: '1rem'
            }}>
              {currentLesson.visual}
            </div>
          )}

          {/* 4 Interactive Option Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1.25rem'
          }}>
            {displayOptions.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isTheCorrectAnswer = option === currentLesson.correctAnswer;

              let statusClass = '';
              if (selectedOption !== null) {
                if (isSelected) {
                  statusClass = isCorrect ? 'correct' : 'wrong';
                } else if (isTheCorrectAnswer) {
                  // Khi học sinh chọn sai, hiện đáp án đúng để học sinh biết kết quả chính xác
                  statusClass = 'correct';
                }
              }

              return (
                <button
                  key={`${currentLesson.id}-${idx}-${option}`}
                  id={`opt-${idx}`}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelectOption(option)}
                  className={`option-card ${statusClass}`}
                  style={{
                    opacity: selectedOption !== null && !isSelected && !isTheCorrectAnswer ? 0.55 : 1
                  }}
                >
                  <span>{option}</span>
                  {selectedOption !== null && isSelected && isCorrect && (
                    <span style={{ fontSize: '1.2rem' }}>✅</span>
                  )}
                  {selectedOption !== null && isSelected && !isCorrect && (
                    <span style={{ fontSize: '1.2rem' }}>❌</span>
                  )}
                  {selectedOption !== null && !isSelected && isTheCorrectAnswer && (
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      color: '#047857',
                      background: '#d1fae5',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      Đáp án đúng ✔
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Phản hồi & Chức năng Gợi ý: CHỈ HIỆN LÊN KHI HỌC SINH ĐÃ CHỌN ĐÁP ÁN XONG */}
          {selectedOption !== null && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '0.5rem'
            }}>
              {/* Thông báo kết quả thân thiện */}
              <div style={{
                padding: '0.85rem 1.15rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '1rem',
                fontWeight: 700,
                backgroundColor: isCorrect ? '#ecfdf5' : '#fff1f2',
                border: `2px solid ${isCorrect ? '#a7f3d0' : '#fecdd3'}`,
                color: isCorrect ? '#065f46' : '#9f1239'
              }}>
                <span style={{ fontSize: '1.35rem' }}>{isCorrect ? '🎉' : '💡'}</span>
                <div style={{ flex: 1 }}>
                  {isCorrect ? (
                    <span>Chính xác tuyệt đối! Bé làm rất giỏi!</span>
                  ) : (
                    <span>Tiếc quá, chưa chính xác rồi! Bé hãy xem gợi ý bên dưới để hiểu bài nhé.</span>
                  )}
                </div>
              </div>

              {/* Hàng nút tương tác: Nút Gợi ý (chỉ hiện khi đã chọn đáp án xong) & Nút Sang ải tiếp theo */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {currentLesson.scaffoldHint ? (
                  <button
                    id="btn-toggle-hint"
                    onClick={() => {
                      soundManager.playHint();
                      setShowHint(!showHint);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: showHint ? '#fef3c7' : '#fffbeb',
                      border: '2px solid #fde68a',
                      color: '#b45309',
                      borderRadius: '9999px',
                      padding: '0.5rem 1.15rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>💡</span>
                    <span>{showHint ? 'Ẩn Gợi Ý' : 'Xem Gợi Ý Chi Tiết'}</span>
                  </button>
                ) : <div />}

                <button
                  id="btn-next-question"
                  onClick={handleNextQuestion}
                  className={`btn-arcade ${isCorrect ? 'btn-arcade-emerald' : 'btn-arcade-primary'}`}
                  style={{
                    fontSize: '1.05rem',
                    padding: '0.65rem 1.75rem',
                    marginLeft: 'auto'
                  }}
                >
                  <span>
                    {currentIndex + 1 < lessons.length
                      ? 'Ải Tiếp Theo ➔'
                      : (isCorrect ? 'Nhận Thưởng 🏆' : 'Xem Kết Quả 🏁')}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Hint Card Box - Chỉ hiện khi showHint = true VÀ selectedOption !== null */}
          {selectedOption !== null && showHint && currentLesson.scaffoldHint && (
            <div style={{
              marginTop: '1rem',
              padding: '1.1rem 1.35rem',
              backgroundColor: '#fffbeb',
              border: '2px dashed #f59e0b',
              borderRadius: '1rem',
              animation: 'correctBounce 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <span style={{ fontSize: '1.65rem' }}>🧙‍♂️</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: '#92400e', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    Phù Thủy Tri Thức Mách Nước:
                  </h4>
                  <p style={{ color: '#78350f', fontSize: '0.98rem', lineHeight: 1.5, margin: 0 }}>
                    {currentLesson.scaffoldHint}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Fun Fact when correct */}
          {selectedOption !== null && isCorrect && currentLesson.funFact && (
            <div style={{
              marginTop: '1rem',
              padding: '0.85rem 1.1rem',
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '1rem',
              color: '#065f46',
              fontSize: '0.92rem',
              lineHeight: 1.45
            }}>
              🌟 <strong>Kiến thức thú vị:</strong> {currentLesson.funFact}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
