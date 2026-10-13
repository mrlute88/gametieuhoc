import React, { useState } from 'react';
import { soundManager } from '../utils/audio';

export default function HeaderBar({
  pet,
  coins,
  stars,
  streak,
  level,
  xp,
  maxXp,
  onOpenPetSelector,
  onOpenParentPortal,
  onOpenSanctuary,
  onOpenArcade
}) {
  const [soundOn, setSoundOn] = useState(true);

  const handleToggleSound = () => {
    const newState = soundManager.toggleSound();
    setSoundOn(newState);
    if (newState) soundManager.playClick();
  };

  return (
    <header style={{
      width: '100%',
      padding: '0.75rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '3px solid #e0e7ff',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.08)'
    }}>
      {/* 1. Pet Avatar & Level */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          id="btn-avatar-pet"
          onClick={() => {
            soundManager.playClick();
            onOpenPetSelector();
          }}
          title="Bấm để đổi Bạn Đồng Hành"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%)',
            border: '3px solid #ffffff',
            boxShadow: '0 4px 10px rgba(99, 102, 241, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            cursor: 'pointer',
            transition: 'transform 0.15s ease'
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {pet.avatar}
        </button>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: '#1e293b'
            }}>
              {pet.name}
            </span>
            <span style={{
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-display)'
            }}>
              Lv.{level}
            </span>
          </div>

          {/* Thanh EXP */}
          <div style={{
            width: '120px',
            height: '10px',
            backgroundColor: '#e2e8f0',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginTop: '4px',
            border: '1px solid #cbd5e1'
          }}>
            <div style={{
              width: `${Math.min(100, (xp / maxXp) * 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #10b981, #34d399)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </div>

      {/* 2. Phần thưởng tích lũy (Xu, Sao, Streak) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {/* Streak */}
        <div
          title="Chuỗi ngày chăm chỉ học tập"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
            border: '2px solid #fed7aa',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1rem',
            color: '#c2410c'
          }}
        >
          <span>🔥</span>
          <span>{streak} Ngày</span>
        </div>

        {/* Ngôi sao tri thức */}
        <div
          title="Sao tri thức thu thập được"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
            border: '2px solid #fef08a',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1rem',
            color: '#a16207'
          }}
        >
          <span>⭐</span>
          <span>{stars}</span>
        </div>

        {/* Tiền xu vàng */}
        <button
          onClick={() => {
            soundManager.playClick();
            onOpenSanctuary();
          }}
          title="Xem Vườn Linh Thú & Cửa Hàng Trang Phục"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            border: '2px solid #fde68a',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1rem',
            color: '#b45309',
            cursor: 'pointer'
          }}
        >
          <span>🪙</span>
          <span>{coins} Xu</span>
        </button>
      </div>

      {/* 3. Tương tác hệ thống (Arcade mini-game, Âm thanh, Phụ huynh) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {/* Nút Đua Xe 60s Mini-game */}
        <button
          id="btn-open-arcade"
          onClick={() => {
            soundManager.playSuccess();
            if (onOpenArcade) onOpenArcade();
          }}
          title="Chơi Mini-game Đua xe tính nhẩm 60s xả stress"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
            border: '2px solid #eab308',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#854d0e',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(234, 179, 8, 0.3)'
          }}
        >
          <span>🏎️</span>
          <span>Đua Xe 60s</span>
        </button>

        <button
          id="btn-sound-toggle"
          onClick={handleToggleSound}
          title={soundOn ? 'Tắt âm thanh' : 'Bật âm thanh'}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '2px solid #cbd5e1',
            background: soundOn ? '#f0fdf4' : '#f8fafc',
            color: soundOn ? '#16a34a' : '#94a3b8',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease'
          }}
        >
          {soundOn ? '🔊' : '🔇'}
        </button>

        <button
          id="btn-parent-portal"
          onClick={() => {
            soundManager.playClick();
            onOpenParentPortal();
          }}
          title="Khu vực dành cho Ba Mẹ & Thầy Cô"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#ffffff',
            border: '2px solid #cbd5e1',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#475569',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#6366f1')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#cbd5e1')}
        >
          <span>🛡️</span>
          <span>Phụ Huynh</span>
        </button>
      </div>
    </header>
  );
}
