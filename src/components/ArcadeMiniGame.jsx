import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function ArcadeMiniGame({ onFinishGame, onClose }) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [carPosition, setCarPosition] = useState(15); // % từ trái sang
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Sinh ngẫu nhiên câu hỏi tính nhẩm nhanh phạm vi 10
  const generateProblem = () => {
    const isAdd = Math.random() > 0.4;
    let a, b, answer;
    if (isAdd) {
      a = Math.floor(Math.random() * 6) + 1;
      b = Math.floor(Math.random() * 4) + 1;
      answer = a + b;
    } else {
      a = Math.floor(Math.random() * 6) + 4;
      b = Math.floor(Math.random() * 4) + 1;
      answer = a - b;
    }

    // Tạo 3 đáp án (1 đúng, 2 sai ngẫu nhiên)
    const options = new Set([answer]);
    while (options.size < 3) {
      const wrong = Math.max(1, answer + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1));
      options.add(wrong);
    }

    const shuffled = Array.from(options).sort(() => Math.random() - 0.5);

    return {
      text: `${a} ${isAdd ? '+' : '-'} ${b} = ?`,
      answer,
      options: shuffled
    };
  };

  // Khởi tạo bài toán đầu tiên
  useEffect(() => {
    setCurrentProblem(generateProblem());
  }, []);

  // Bộ đếm lùi thời gian 60 giây
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true);
      soundManager.playSuccess();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (val) => {
    if (isGameOver || !currentProblem) return;

    if (val === currentProblem.answer) {
      soundManager.playSuccess();
      soundManager.playCoin();
      setScore(s => s + 10 + combo * 2);
      setCombo(c => c + 1);
      setCarPosition(pos => Math.min(85, pos + 8));
      setFeedback('⚡ TURBO BOOST! CHÍNH XÁC!');

      setCurrentProblem(generateProblem());
    } else {
      soundManager.playTryAgain();
      setCombo(0);
      setFeedback(`Opps! ${currentProblem.text} ${currentProblem.answer}`);
      setCurrentProblem(generateProblem());
    }
  };

  const handleClaimReward = () => {
    const earnedCoins = Math.max(10, Math.floor(score / 2));
    onFinishGame({ score, coins: earnedCoins });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '720px',
        backgroundColor: '#ffffff',
        borderRadius: '2rem',
        padding: '2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        textAlign: 'center'
      }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🏎️</span>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>
                Đua Xe Tính Nhẩm Tốc Độ (Arcade 60s)
              </h2>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Phản xạ siêu tốc • Giải tỏa căng thẳng • Thưởng xu vàng
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: 'none',
              background: '#f1f5f9',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {!isGameOver ? (
          <div>
            {/* Thanh hiển thị Điểm và Thời gian */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              background: '#f8fafc',
              padding: '0.75rem',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #e2e8f0'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700 }}>⏱️ THỜI GIAN: </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: timeLeft <= 10 ? '#ef4444' : '#2563eb'
                }}>
                  {timeLeft}s
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700 }}>🏆 ĐIỂM SỐ: </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#16a34a' }}>
                  {score}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700 }}>🔥 COMBO: </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#ea580c' }}>
                  x{combo}
                </span>
              </div>
            </div>

            {/* Đường đua xe trực quan (Race Track Visual) */}
            <div style={{
              height: '110px',
              background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
              borderRadius: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              border: '3px solid #64748b',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.4)'
            }}>
              {/* Làn đường vạch trắng đứt đoạn */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '4px',
                borderTop: '4px dashed #ffffff88'
              }} />

              {/* Vạch đích */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: '30px',
                width: '16px',
                background: 'repeating-linear-gradient(45deg, #000, #000 8px, #fff 8px, #fff 16px)'
              }}>
                <span style={{ position: 'absolute', top: '-18px', right: '-8px', fontSize: '20px' }}>🏁</span>
              </div>

              {/* Chiếc xe đua di chuyển */}
              <div style={{
                position: 'absolute',
                top: '32px',
                left: `${carPosition}%`,
                fontSize: '44px',
                transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
              }}>
                🏎️💨
              </div>
            </div>

            {/* Thông báo feedback */}
            {feedback && (
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1rem',
                color: feedback.includes('TURBO') ? '#16a34a' : '#d97706',
                marginBottom: '0.75rem'
              }}>
                {feedback}
              </div>
            )}

            {/* Phép tính lớn */}
            {currentProblem && (
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: '#4f46e5',
                  marginBottom: '1.25rem',
                  background: '#e0e7ff',
                  padding: '0.75rem',
                  borderRadius: '1.25rem'
                }}>
                  {currentProblem.text}
                </div>

                {/* 3 Nút lựa chọn tốc độ */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {currentProblem.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className="btn-arcade btn-arcade-primary"
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        minHeight: '75px',
                        background: 'linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Game Over Screen */
          <div style={{ padding: '1.5rem 0' }}>
            <div style={{ fontSize: '72px', marginBottom: '0.5rem' }}>🏆 🏎️ 🌟</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#16a34a', marginBottom: '0.5rem' }}>
              Về Đích Xuất Sắc!
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Bé đã hoàn thành 60 giây đua xe tính nhẩm với số điểm: <strong>{score} điểm</strong>!
            </p>

            <div style={{
              display: 'inline-flex',
              gap: '1rem',
              background: '#fef3c7',
              border: '2px solid #fde68a',
              padding: '0.75rem 1.75rem',
              borderRadius: '1.25rem',
              marginBottom: '2rem'
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: '#b45309' }}>
                🪙 Thưởng: +{Math.max(10, Math.floor(score / 2))} Xu Vàng
              </span>
            </div>

            <div>
              <button
                onClick={handleClaimReward}
                className="btn-arcade btn-arcade-emerald"
                style={{ fontSize: '1.2rem', padding: '0.85rem 2.5rem' }}
              >
                🎉 Nhận Thưởng & Trở Về
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
