import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function EvolutionCutsceneModal({
  oldPet,
  newPet,
  onComplete
}) {
  // Giai đoạn hoạt cảnh: 0: chuẩn bị, 1: nhấp nháy biến hình, 2: bùng nổ hiển thị dạng mới
  const [phase, setPhase] = useState(0);
  const [toggleAvatar, setToggleAvatar] = useState(false);

  useEffect(() => {
    // Bắt đầu âm thanh tiến hóa
    soundManager.playEvolution();

    // Giai đoạn 1: Bắt đầu nhấp nháy biến hình sau 1.2s
    const timer1 = setTimeout(() => {
      setPhase(1);
    }, 1200);

    // Giai đoạn 2: Bùng nổ sau 4.2s
    const timer2 = setTimeout(() => {
      setPhase(2);
      soundManager.playSuccess();
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6']
      });
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }, 500);
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Hiệu ứng chớp nháy luân phiên giữa dạng cũ và dạng mới (kiểu Pokémon)
  useEffect(() => {
    if (phase === 1) {
      const interval = setInterval(() => {
        setToggleAvatar((prev) => !prev);
      }, 140);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const handleFinish = () => {
    soundManager.playSuccess();
    onComplete();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 15, 30, 0.95)',
      backdropFilter: 'blur(15px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
      padding: '1rem',
      overflow: 'hidden'
    }}>
      {/* Nút bỏ qua */}
      <button
        onClick={handleFinish}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          fontSize: '0.88rem',
          fontWeight: 700,
          cursor: 'pointer',
          zIndex: 20
        }}
      >
        Bỏ qua ➔
      </button>

      {/* Vòng tròn hào quang vũ trụ tỏa sáng */}
      <div style={{
        position: 'absolute',
        width: phase === 2 ? '650px' : '450px',
        height: phase === 2 ? '650px' : '450px',
        borderRadius: '50%',
        background: phase === 2
          ? 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
        transition: 'all 0.8s ease',
        animation: 'spin 20s linear infinite',
        pointerEvents: 'none'
      }} />

      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        maxWidth: '560px',
        width: '100%'
      }}>
        {/* Banner tiêu đề */}
        <div style={{ marginBottom: '1.5rem' }}>
          {phase < 2 ? (
            <div style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              color: '#fef08a',
              fontSize: '1.1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              letterSpacing: '1px',
              animation: 'pulse 1s infinite'
            }}>
              ✨ Ồ? {oldPet.name} ĐANG TIẾN HÓA! ✨
            </div>
          ) : (
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              padding: '0.6rem 2rem',
              borderRadius: '9999px',
              color: '#ffffff',
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.6)',
              animation: 'correctBounce 0.6s ease'
            }}>
              🎉 TIẾN HÓA THÀNH CÔNG! 🎉
            </div>
          )}
        </div>

        {/* Khung nhân vật tiến hóa */}
        <div style={{
          minHeight: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {phase === 0 && (
            <div style={{
              fontSize: '110px',
              filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.8))',
              animation: 'float 3s ease-in-out infinite'
            }}>
              {oldPet.avatar}
            </div>
          )}

          {phase === 1 && (
            <div style={{
              fontSize: toggleAvatar ? '135px' : '110px',
              filter: toggleAvatar
                ? 'drop-shadow(0 0 40px #fef08a) brightness(1.6)'
                : 'drop-shadow(0 0 30px #ffffff) brightness(1.8)',
              transition: 'all 0.1s ease',
              transform: toggleAvatar ? 'scale(1.15) rotate(4deg)' : 'scale(1) rotate(-4deg)'
            }}>
              {toggleAvatar ? newPet.avatar : oldPet.avatar}
            </div>
          )}

          {phase === 2 && (
            <div style={{
              fontSize: '145px',
              filter: 'drop-shadow(0 0 45px rgba(245, 158, 11, 0.9))',
              animation: 'correctBounce 0.8s ease'
            }}>
              {newPet.avatar}
            </div>
          )}
        </div>

        {/* Thông tin mô tả dạng mới */}
        {phase === 2 && (
          <div style={{
            marginTop: '1.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '1.75rem',
            padding: '1.75rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            border: '3px solid #f59e0b',
            animation: 'correctBounce 0.5s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{
                background: '#fef3c7',
                color: '#b45309',
                border: '1.5px solid #fde68a',
                borderRadius: '9999px',
                padding: '2px 10px',
                fontSize: '0.8rem',
                fontWeight: 800
              }}>
                {newPet.badge || 'Bậc Mới'}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#1e3a8a',
                margin: 0
              }}>
                {newPet.name}
              </h3>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem' }}>
              {newPet.title}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.75rem',
              textAlign: 'left',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                background: '#fff7ed',
                border: '1.5px solid #ffedd5',
                padding: '0.75rem',
                borderRadius: '1rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#c2410c' }}>
                  🔥 TUYỆT CHIÊU MỚI:
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginTop: '2px' }}>
                  {newPet.specialMove}
                </div>
              </div>

              <div style={{
                background: '#f0fdf4',
                border: '1.5px solid #dcfce7',
                padding: '0.75rem',
                borderRadius: '1rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#15803d' }}>
                  🛡️ NĂNG LỰC HỖ TRỢ:
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1e293b', marginTop: '2px' }}>
                  {newPet.perk}
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.5,
              fontStyle: 'italic',
              marginBottom: '1.25rem'
            }}>
              "{newPet.description}"
            </p>

            <button
              onClick={handleFinish}
              className="btn-arcade btn-arcade-emerald"
              style={{
                width: '100%',
                fontSize: '1.15rem',
                padding: '0.85rem',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.45)'
              }}
            >
              🚀 Tuyệt Vời! Cùng Đi Phiêu Lưu Nào!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
