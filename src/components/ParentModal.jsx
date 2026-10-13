import React, { useState } from 'react';
import { soundManager } from '../utils/audio';

export default function ParentModal({ stats, screenTimeLimit, setScreenTimeLimit, onClose }) {
  // Parental Gate: Câu hỏi toán xác thực người lớn
  const [unlocked, setUnlocked] = useState(false);
  const [numA] = useState(() => Math.floor(Math.random() * 20) + 15);
  const [numB] = useState(() => Math.floor(Math.random() * 20) + 12);
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer, 10) === numA + numB) {
      soundManager.playSuccess();
      setUnlocked(true);
      setErrorMsg('');
    } else {
      soundManager.playTryAgain();
      setErrorMsg('Kết quả chưa chính xác. Vui lòng thử lại!');
    }
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
        maxWidth: '560px',
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
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {!unlocked ? (
          /* Parental Gate */
          <div style={{
            background: '#f8fafc',
            border: '2px dashed #cbd5e1',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#334155', marginBottom: '0.5rem' }}>
              Xác thực Người Lớn (Parental Gate)
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Vui lòng giải phép tính sau để mở khóa khu vực quản trị:
            </p>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#4f46e5',
              marginBottom: '1rem'
            }}>
              {numA} + {numB} = ?
            </div>

            <form onSubmit={handleVerify} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Nhập kết quả"
                style={{
                  width: '140px',
                  padding: '0.6rem 1rem',
                  fontSize: '1.1rem',
                  borderRadius: '0.75rem',
                  border: '2px solid #cbd5e1',
                  textAlign: 'center',
                  outline: 'none'
                }}
                autoFocus
              />
              <button type="submit" className="btn-arcade btn-arcade-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '1rem' }}>
                Mở Khóa
              </button>
            </form>
            {errorMsg && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem' }}>{errorMsg}</p>}
          </div>
        ) : (
          /* Unlocked Parent Dashboard */
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
            <div style={{ marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
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
                Hệ thống sẽ tự động khóa và gợi ý bài tập thư giãn mắt khi hết giờ quy định.
              </p>
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
              🔒 <strong>Tuân thủ An toàn Trẻ em (COPPA & Nghị định 13):</strong> Hệ thống không thu thập số điện thoại, vị trí hoặc họ tên thật của bé. Tất cả tiến độ được lưu trữ an toàn.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
