import React, { useState } from 'react';
import { soundManager } from '../utils/audio';

export default function ParentModal({
  stats,
  screenTimeLimit,
  setScreenTimeLimit,
  parentPassword = 'admin',
  onUpdatePassword,
  onTriggerTimeLock,
  onSetLevel,
  onAddCoins,
  onTriggerEvolutionCutscene,
  onClose
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Đổi mật khẩu
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (passwordInput.trim() === parentPassword.trim()) {
      soundManager.playSuccess();
      setUnlocked(true);
      setErrorMsg('');
    } else {
      soundManager.playTryAgain();
      setErrorMsg('Mật khẩu không chính xác! (Mật khẩu mặc định: admin)');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword.trim().length < 3) {
      soundManager.playTryAgain();
      setPasswordSuccessMsg('');
      setErrorMsg('Mật khẩu mới phải có ít nhất 3 ký tự!');
      return;
    }
    if (onUpdatePassword) {
      onUpdatePassword(newPassword.trim());
    }
    soundManager.playSuccess();
    setPasswordSuccessMsg('✓ Đã lưu mật khẩu mới thành công!');
    setNewPassword('');
    setTimeout(() => setPasswordSuccessMsg(''), 4000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '580px',
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🛡️</span>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>
                Cổng Phụ Huynh & Giáo Viên
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Theo dõi tiến độ học tập và quản lý thời lượng sử dụng của bé
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              background: '#f1f5f9',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {!unlocked ? (
          /* Màn hình Xác Thực Mật Khẩu (Bảo Mật Phụ Huynh & Giáo Viên) */
          <div style={{
            background: '#f8fafc',
            border: '2px dashed #cbd5e1',
            borderRadius: '1.25rem',
            padding: '1.75rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '42px', marginBottom: '0.5rem' }} className="animate-float">
              🔐
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.4rem' }}>
              Xác Thực Mật Khẩu Quản Trị
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Khu vực dành riêng cho Ba Mẹ và Thầy Cô. Vui lòng nhập mật khẩu quản lý để mở khóa:
            </p>

            <form onSubmit={handleVerify} style={{ maxWidth: '340px', margin: '0 auto' }}>
              <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="Nhập mật khẩu (Mặc định: admin)"
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.8rem 0.75rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '0.75rem',
                    border: errorMsg ? '2px solid #ef4444' : '2px solid #cbd5e1',
                    outline: 'none',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                  }}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    padding: '4px'
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              {errorMsg && (
                <div style={{
                  color: '#dc2626',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  background: '#fef2f2',
                  padding: '0.4rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #fecaca'
                }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn-arcade btn-arcade-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 800 }}
              >
                🔓 Mở Khóa Quản Trị
              </button>

              <div style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                color: '#64748b',
                background: '#eff6ff',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #bfdbfe'
              }}>
                🔑 Mật khẩu mặc định hệ thống: <strong style={{ color: '#2563eb' }}>admin</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Bảng Điều Khiển Đã Mở Khóa */
          <div>
            {/* Thống kê học tập */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '1rem', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a', fontFamily: 'var(--font-display)' }}>
                  {stats.completedQuestions}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>Câu đã làm</div>
              </div>
              <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '1rem', border: '1px solid #bfdbfe', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', fontFamily: 'var(--font-display)' }}>
                  {stats.accuracyRate}%
                </div>
                <div style={{ fontSize: '0.8rem', color: '#1d4ed8', fontWeight: 600 }}>Tỉ lệ làm đúng</div>
              </div>
              <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '1rem', border: '1px solid #fde68a', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706', fontFamily: 'var(--font-display)' }}>
                  {stats.minutesPlayed} phút
                </div>
                <div style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 600 }}>Thời gian học</div>
              </div>
            </div>

            {/* Cài đặt thời lượng tối đa */}
            <div style={{ marginBottom: '1.25rem', background: '#f8fafc', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.5rem' }}>
                ⏱️ Giới Hạn Giờ Chơi Mỗi Ngày
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[15, 30, 45, 60].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => {
                      soundManager.playClick();
                      setScreenTimeLimit(mins);
                    }}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      border: screenTimeLimit === mins ? '2px solid #4f46e5' : '1px solid #cbd5e1',
                      background: screenTimeLimit === mins ? '#ede9fe' : '#ffffff',
                      color: screenTimeLimit === mins ? '#4f46e5' : '#475569',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {mins} phút
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.4rem' }}>
                Khi hết thời gian quy định, hệ thống sẽ tự động khóa và bắt buộc nhập mật khẩu phụ huynh mới có thể mở khóa tiếp.
              </p>
            </div>

            {/* Đổi mật khẩu phụ huynh */}
            <div style={{ marginBottom: '1.25rem', background: '#f8fafc', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>🔑</span>
                <span>Thay Đổi Mật Khẩu Phụ Huynh</span>
              </div>
              <form onSubmit={handleChangePassword} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <input
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nhập mật khẩu mới..."
                  style={{
                    flex: 1,
                    padding: '0.45rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#4f46e5',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.45rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Lưu
                </button>
              </form>
              {passwordSuccessMsg && (
                <div style={{ color: '#16a34a', fontSize: '0.82rem', fontWeight: 700, marginTop: '0.4rem' }}>
                  {passwordSuccessMsg}
                </div>
              )}
            </div>

            {/* Công cụ Thử nghiệm Nhanh */}
            <div style={{ marginBottom: '1.25rem', background: '#fdf4ff', padding: '1rem', borderRadius: '1rem', border: '1.5px solid #f0abfc' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#86198f', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>⚡</span>
                <span>Công Cụ Khảo Sát & Thử Nghiệm Nhanh</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#701a75', marginBottom: '0.75rem' }}>
                Giúp phụ huynh và thầy cô thử nghiệm nhanh bài thi, khóa hết giờ và tiến hóa:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playSuccess();
                    onSetLevel && onSetLevel(10);
                    onClose();
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #d946ef',
                    color: '#a21caf',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ⚡ Đặt Cấp 10 (Thi Bậc 1)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playSuccess();
                    onSetLevel && onSetLevel(20);
                    onClose();
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #d946ef',
                    color: '#a21caf',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ⚡ Đặt Cấp 20 (Thi Bậc 2)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playSuccess();
                    onSetLevel && onSetLevel(30);
                    onClose();
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #d946ef',
                    color: '#a21caf',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  ⚡ Đặt Cấp 30 (Thi Bậc 3)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onAddCoins && onAddCoins(100);
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #f59e0b',
                    color: '#b45309',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  🪙 +100 Xu Vàng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onTriggerTimeLock) {
                      onTriggerTimeLock();
                      onClose();
                    }
                  }}
                  style={{
                    background: '#fee2e2',
                    border: '1.5px solid #f87171',
                    color: '#b91c1c',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  🔒 Thử Nghiệm Khóa Hết Giờ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onTriggerEvolutionCutscene && onTriggerEvolutionCutscene();
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #d946ef, #8b5cf6)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  🎬 Xem Hoạt Cảnh Tiến Hóa (Demo)
                </button>
              </div>
            </div>

            {/* Cam kết bảo mật trẻ em */}
            <div style={{
              background: '#ecfdf5',
              padding: '0.85rem 1rem',
              borderRadius: '0.75rem',
              border: '1px solid #a7f3d0',
              fontSize: '0.82rem',
              color: '#065f46',
              lineHeight: 1.4
            }}>
              🔒 <strong>Tuân thủ An toàn Trẻ em (COPPA & Nghị định 13):</strong> Hệ thống không thu thập số điện thoại hay vị trí thật của học sinh. Mọi thiết lập được bảo vệ bằng mật khẩu phụ huynh.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
