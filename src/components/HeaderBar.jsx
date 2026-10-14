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
  equippedItem,
  canEvolve,
  onOpenEvolutionExam,
  selectedLevel = 'level1',
  onToggleLevel,
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
        <div style={{ position: 'relative' }}>
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
          {equippedItem && (
            <span
              title={`Đang diện: ${equippedItem.name}`}
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-6px',
                fontSize: '20px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))',
                pointerEvents: 'none'
              }}
            >
              {equippedItem.icon}
            </span>
          )}
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.12rem',
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
            {pet.badge && (
              <span style={{
                background: '#fef3c7',
                color: '#b45309',
                border: '1px solid #fde68a',
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '1px 6px',
                borderRadius: '9999px'
              }}>
                {pet.badge}
              </span>
            )}
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

        {/* Nút Kích hoạt Bài Thi Tiến Hóa khi đủ cấp độ */}
        {canEvolve && (
          <button
            onClick={() => {
              soundManager.playClick();
              if (onOpenEvolutionExam) onOpenEvolutionExam();
            }}
            title="Đủ điều kiện thăng cấp tiến hóa! Bấm để làm Bài Kiểm Tra 30 Câu!"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              color: '#ffffff',
              border: '2px solid #fde68a',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.45)',
              animation: 'pulse 1.5s infinite'
            }}
          >
            <span>⚡</span>
            <span>Thi Tiến Hóa Cấp {Math.min(30, Math.floor(level / 10) * 10)}</span>
          </button>
        )}

        {/* Level Switcher Quick Pill */}
        {onToggleLevel && (
          <button
            id="btn-header-toggle-level"
            onClick={onToggleLevel}
            title="Bấm để chuyển nhanh giữa Mức 1 (Lớp 1-2) và Mức 2 (Lớp 3-4-5)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: selectedLevel === 'level2'
                ? 'linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%)'
                : 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
              border: selectedLevel === 'level2' ? '2px solid #818cf8' : '2px solid #6ee7b7',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.88rem',
              color: selectedLevel === 'level2' ? '#4338ca' : '#047857',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{selectedLevel === 'level2' ? '🚀 Lớp 3-4-5' : '🌱 Lớp 1-2'}</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>⇄ Đổi</span>
          </button>
        )}
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
