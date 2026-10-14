import React, { useState } from 'react';
import { soundManager } from '../utils/audio';

export default function ScreenTimeLockModal({
  screenTimeLimit,
  parentPassword = 'admin',
  onUnlock
}) {
  const [inputPass, setInputPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedExtraTime, setSelectedExtraTime] = useState(30); // 15, 30, 60, 'unlimited'

  const handleUnlockSubmit = (e) => {
    e.preventDefault();
    if (inputPass.trim() === parentPassword.trim()) {
      soundManager.playSuccess();
      setErrorMsg('');
      onUnlock(selectedExtraTime);
    } else {
      soundManager.playTryAgain();
      setErrorMsg('Mật khẩu không chính xác! Vui lòng kiểm tra lại.');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.96)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 500,
        padding: '1.25rem',
        userSelect: 'none'
      }}
      // Ngăn chặn sự kiện click ra ngoài để đóng
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          padding: '2.5rem 2rem',
          borderRadius: '2rem',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          border: '3px solid #ef4444',
          animation: 'correctBounce 0.4s ease'
        }}
      >
        {/* Biểu tượng nghỉ ngơi thanh bình */}
        <div style={{ fontSize: '64px', marginBottom: '0.75rem' }} className="animate-float">
          🧘‍♂️ 🍃 🦉
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: '#fee2e2',
          color: '#b91c1c',
          border: '1.5px solid #fca5a5',
          borderRadius: '9999px',
          padding: '0.25rem 0.85rem',
          fontSize: '0.85rem',
          fontWeight: 800,
          marginBottom: '0.75rem'
        }}>
          <span>🔒</span>
          <span>KHÓA AN TOÀN BẢO VỆ MẮT TRẺ EM</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          fontWeight: 800,
          color: '#1e293b',
          marginBottom: '0.5rem'
        }}>
          Đã Đến Giờ Nghỉ Ngơi Rồi Bé Ơi!
        </h2>

        <p style={{
          color: '#475569',
          fontSize: '0.98rem',
          lineHeight: 1.55,
          marginBottom: '1.5rem'
        }}>
          Bé đã học tập và phiêu lưu chăm chỉ được <strong>{screenTimeLimit} phút</strong> rồi.
          Hãy cùng đứng dậy vươn vai, uống một ngụm nước và nhìn xa ra ngoài cửa sổ để thư giãn mắt nhé!
        </p>

        {/* Khung dành riêng cho phụ huynh mở khóa */}
        <div style={{
          background: '#f8fafc',
          border: '2px dashed #cbd5e1',
          borderRadius: '1.25rem',
          padding: '1.25rem',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.95rem',
            fontWeight: 800,
            color: '#1e3a8a',
            marginBottom: '0.4rem'
          }}>
            <span>🛡️</span>
            <span>Dành Cho Ba Mẹ & Thầy Cô Mở Khóa:</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 0.85rem 0' }}>
            Học sinh không thể tự tắt màn hình này. Ba mẹ vui lòng nhập mật khẩu quản trị để cấp thêm thời gian cho bé:
          </p>

          <form onSubmit={handleUnlockSubmit}>
            {/* Lựa chọn thêm thời gian */}
            <div style={{ marginBottom: '0.85rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                Thời gian mở khóa thêm:
              </label>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {[
                  { label: '+15 Phút', val: 15 },
                  { label: '+30 Phút', val: 30 },
                  { label: '+60 Phút', val: 60 },
                  { label: 'Hết Hôm Nay', val: 'unlimited' }
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setSelectedExtraTime(opt.val)}
                    style={{
                      flex: '1 1 45%',
                      padding: '0.4rem 0.5rem',
                      borderRadius: '0.5rem',
                      border: selectedExtraTime === opt.val ? '2px solid #4f46e5' : '1px solid #cbd5e1',
                      background: selectedExtraTime === opt.val ? '#ede9fe' : '#ffffff',
                      color: selectedExtraTime === opt.val ? '#4f46e5' : '#475569',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ô nhập mật khẩu */}
            <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
              <input
                type={showPass ? 'text' : 'password'}
                value={inputPass}
                onChange={(e) => {
                  setInputPass(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Nhập mật khẩu phụ huynh..."
                style={{
                  width: '100%',
                  padding: '0.65rem 2.8rem 0.65rem 0.85rem',
                  borderRadius: '0.75rem',
                  border: errorMsg ? '2px solid #ef4444' : '2px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                title={showPass ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  padding: '4px'
                }}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>

            {errorMsg && (
              <div style={{
                color: '#dc2626',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                background: '#fef2f2',
                padding: '0.4rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #fecaca'
              }}>
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="btn-arcade btn-arcade-primary"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: 800,
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)'
              }}
            >
              🔓 Xác Nhận Mở Khóa Cho Bé
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
