import React from 'react';
import { SUBJECTS, LESSONS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';

export default function WorldMap({ onSelectSubject, completedLessonIds = [] }) {
  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '1.5rem 1rem' }}>
      {/* Title Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: '#ede9fe',
          color: '#4f46e5',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          fontWeight: 700,
          fontSize: '0.9rem',
          marginBottom: '0.75rem'
        }}>
          🗺️ Bản Đồ Phiêu Lưu Lớp 1 - Chuẩn GDPT 2018
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#1e293b',
          lineHeight: 1.2
        }}>
          Chọn Hòn Đảo Để Bắt Đầu Thám Hiểm!
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          Đồng hành cùng Linh Thú cưng vượt qua các thử thách trí tuệ vui nhộn
        </p>
      </div>

      {/* Grid 4 Hòn đảo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {SUBJECTS.map((sub) => {
          const subjectLessons = LESSONS[sub.id] || [];
          const completedCount = subjectLessons.filter(l => completedLessonIds.includes(l.id)).length;
          const totalCount = subjectLessons.length;
          const isComplete = completedCount === totalCount && totalCount > 0;

          return (
            <div
              key={sub.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                border: `3px solid ${sub.accentColor}44`,
                borderRadius: '1.75rem',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 16px 30px -6px ${sub.accentColor}33`;
                e.currentTarget.style.borderColor = sub.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = `${sub.accentColor}44`;
              }}
            >
              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `${sub.accentColor}18`,
                color: sub.accentColor,
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontFamily: 'var(--font-display)'
              }}>
                {sub.grade}
              </div>

              <div>
                {/* Banner Island Emoji */}
                <div style={{
                  fontSize: '54px',
                  marginBottom: '0.75rem',
                  filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.1))'
                }}>
                  {sub.bannerEmoji} {sub.icon}
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#1e293b',
                  marginBottom: '0.4rem'
                }}>
                  {sub.name}
                </h2>

                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {sub.description}
                </p>
              </div>

              {/* Progress & Start Button */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#475569',
                  marginBottom: '6px'
                }}>
                  <span>Tiến độ vượt ải</span>
                  <span>⭐ {completedCount}/{totalCount} thử thách</span>
                </div>

                {/* Progress bar */}
                <div style={{
                  height: '10px',
                  background: '#f1f5f9',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    width: `${totalCount ? (completedCount / totalCount) * 100 : 0}%`,
                    height: '100%',
                    backgroundColor: sub.accentColor,
                    transition: 'width 0.4s ease'
                  }} />
                </div>

                <button
                  id={`btn-explore-${sub.id}`}
                  onClick={() => {
                    soundManager.playSuccess();
                    onSelectSubject(sub);
                  }}
                  className="btn-arcade"
                  style={{
                    width: '100%',
                    backgroundColor: sub.accentColor,
                    color: '#ffffff',
                    boxShadow: `0 5px 0 ${sub.accentColor}cc, 0 10px 15px ${sub.accentColor}33`,
                    fontSize: '1.05rem'
                  }}
                >
                  <span>{isComplete ? '✨ Ôn Lại Bài' : '🚀 Vào Khám Phá'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
