import React from 'react';
import { GRADE_LEVELS, SUBJECTS_BY_LEVEL, LESSONS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';

export default function WorldMap({
  onSelectSubject,
  completedLessonIds = [],
  selectedLevel = 'level1',
  onSelectLevel
}) {
  const currentGrade = GRADE_LEVELS.find(g => g.id === selectedLevel) || GRADE_LEVELS[0];
  const activeSubjects = SUBJECTS_BY_LEVEL[selectedLevel] || SUBJECTS_BY_LEVEL.level1;

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '1.5rem 1rem' }}>
      {/* Title & Level Switcher Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: currentGrade.bgBadge,
          color: currentGrade.accentColor,
          border: `2px solid ${currentGrade.borderBadge}`,
          padding: '0.45rem 1.25rem',
          borderRadius: '9999px',
          fontWeight: 800,
          fontSize: '0.92rem',
          marginBottom: '0.85rem'
        }}>
          <span>{currentGrade.badge}</span>
          <span>{currentGrade.title} - Chuẩn GDPT 2018</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#1e293b',
          lineHeight: 1.2,
          marginBottom: '0.5rem'
        }}>
          Chọn Hòn Đảo Để Bắt Đầu Thám Hiểm!
        </h1>

        <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
          {currentGrade.description}
        </p>

        {/* 2-Level Grade Selector Switcher */}
        <div style={{
          display: 'inline-flex',
          background: '#ffffff',
          padding: '6px',
          borderRadius: '9999px',
          boxShadow: '0 8px 20px rgba(99, 102, 241, 0.12)',
          border: '2px solid #e0e7ff',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {GRADE_LEVELS.map((lvl) => {
            const isActive = selectedLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                id={`btn-select-${lvl.id}`}
                onClick={() => {
                  if (onSelectLevel && selectedLevel !== lvl.id) {
                    onSelectLevel(lvl.id);
                  }
                }}
                className="btn-arcade"
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '1rem',
                  borderRadius: '9999px',
                  border: isActive ? 'none' : '2px solid transparent',
                  background: isActive ? 'linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)' : '#f8fafc',
                  color: isActive ? '#ffffff' : '#64748b',
                  boxShadow: isActive ? '0 4px 10px rgba(79, 70, 229, 0.35)' : 'none',
                  transform: 'none'
                }}
              >
                <span>{lvl.badge}</span>
                <span>{lvl.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid các Hòn đảo theo mức lớp */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {activeSubjects.map((sub) => {
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
