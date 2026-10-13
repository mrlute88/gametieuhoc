import React, { useState } from 'react';
import { LESSONS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';

export default function StageSelectView({
  subject,
  completedLessonIds = [],
  onSelectStage,
  onBackToMap
}) {
  const stages = LESSONS[subject.id] || [];
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'easy' | 'medium' | 'hard' | 'boss'

  const filteredStages = stages.filter(stg => {
    if (activeFilter === 'all') return true;
    return stg.difficulty === activeFilter;
  });

  const completedCount = stages.filter(s => completedLessonIds.includes(s.id)).length;
  const progressPercent = Math.round((completedCount / stages.length) * 100);

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'easy':
        return { label: '🟢 Khởi Động', bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' };
      case 'medium':
        return { label: '🟡 Nâng Tầm', bg: '#fefce8', color: '#ca8a04', border: '#fef08a' };
      case 'hard':
        return { label: '🔴 Thử Thách', bg: '#fff1f2', color: '#e11d48', border: '#fecdd3' };
      case 'boss':
        return { label: '👑 TRÙM CUỐI', bg: '#faf5ff', color: '#7e22ce', border: '#e9d5ff' };
      default:
        return { label: 'Thường', bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' };
    }
  };

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto', padding: '1.5rem 1rem' }}>
      {/* Top bar header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <button
          onClick={() => {
            soundManager.playClick();
            onBackToMap();
          }}
          className="btn-arcade"
          style={{
            background: '#ffffff',
            border: '2px solid #cbd5e1',
            color: '#475569',
            padding: '0.5rem 1.25rem',
            fontSize: '1rem'
          }}
        >
          ⬅ Trở về 4 Hòn Đảo
        </button>

        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 800,
            color: '#1e293b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>{subject.bannerEmoji}</span>
            <span>{subject.name} - Con Đường Thám Hiểm</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '2px' }}>
            Hệ thống <strong>{stages.length} Ải</strong> với mức độ từ dễ đến trùm thử thách!
          </p>
        </div>

        <div style={{
          background: '#fef3c7',
          border: '2px solid #fde68a',
          padding: '0.4rem 1.1rem',
          borderRadius: '9999px',
          fontWeight: 800,
          color: '#b45309',
          fontFamily: 'var(--font-display)',
          fontSize: '1rem'
        }}>
          ⭐ {completedCount}/{stages.length} Ải ({progressPercent}%)
        </div>
      </div>

      {/* Thanh tiến độ trực quan */}
      <div style={{
        background: '#ffffff',
        padding: '0.75rem 1.25rem',
        borderRadius: '1.25rem',
        border: '2px solid #e2e8f0',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap' }}>
          Tiến Độ Chinh Phục:
        </span>
        <div style={{
          flex: 1,
          height: '14px',
          background: '#f1f5f9',
          borderRadius: '9999px',
          overflow: 'hidden',
          border: '1px solid #cbd5e1'
        }}>
          <div style={{
            width: `${progressPercent}%`,
            height: '100%',
            background: `linear-gradient(90deg, #10b981 0%, ${subject.accentColor} 100%)`,
            transition: 'width 0.4s ease'
          }} />
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: subject.accentColor, fontSize: '1.1rem' }}>
          {progressPercent}%
        </span>
      </div>

      {/* Tabs lọc độ khó / Chặng đường */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        overflowX: 'auto',
        paddingBottom: '4px'
      }}>
        {[
          { id: 'all', label: `Tất Cả (${stages.length})` },
          { id: 'easy', label: '🟢 Khởi Động (Ải 1-10)' },
          { id: 'medium', label: '🟡 Nâng Tầm (Ải 11-20)' },
          { id: 'hard', label: '🔴 Thử Thách (Ải 21-28)' },
          { id: 'boss', label: '👑 Trùm Cuối (Ải 29+)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              soundManager.playClick();
              setActiveFilter(tab.id);
            }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.88rem',
              border: activeFilter === tab.id ? `2px solid ${subject.accentColor}` : '2px solid #e2e8f0',
              background: activeFilter === tab.id ? subject.accentColor : '#ffffff',
              color: activeFilter === tab.id ? '#ffffff' : '#475569',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid danh sách các ải */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredStages.map((stg) => {
          // Tìm index gốc của ải trong toàn bộ mảng stages
          const originalIndex = stages.findIndex(s => s.id === stg.id);
          const isCompleted = completedLessonIds.includes(stg.id);
          // Ải đầu tiên luôn mở; các ải sau mở khi ải trước đã hoàn thành
          const isUnlocked = originalIndex === 0 || completedLessonIds.includes(stages[originalIndex - 1].id) || isCompleted;
          const isBoss = stg.difficulty === 'boss';
          const badge = getDifficultyBadge(stg.difficulty);

          return (
            <div
              key={stg.id}
              onClick={() => {
                if (!isUnlocked) {
                  soundManager.playTryAgain();
                  return;
                }
                soundManager.playSuccess();
                onSelectStage(stg, originalIndex);
              }}
              style={{
                background: isUnlocked
                  ? (isCompleted ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' : '#ffffff')
                  : '#f1f5f9',
                border: isUnlocked
                  ? (isBoss ? '3px solid #f59e0b' : (isCompleted ? '3px solid #10b981' : `3px solid ${subject.accentColor}`))
                  : '2px dashed #cbd5e1',
                borderRadius: '1.5rem',
                padding: '1.25rem',
                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                opacity: isUnlocked ? 1 : 0.65,
                boxShadow: isUnlocked ? '0 8px 18px -4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '180px'
              }}
              onMouseEnter={(e) => {
                if (isUnlocked) {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 14px 25px -5px ${subject.accentColor}44`;
                }
              }}
              onMouseLeave={(e) => {
                if (isUnlocked) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 18px -4px rgba(0,0,0,0.08)';
                }
              }}
            >
              {/* Badge Số ải & Độ khó */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{
                    background: isBoss ? '#fef3c7' : '#ede9fe',
                    color: isBoss ? '#b45309' : '#4f46e5',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    border: isBoss ? '1px solid #fde68a' : '1px solid #c7d2fe'
                  }}>
                    {isBoss ? '👑 TRÙM CUỐI' : `ẢI ${originalIndex + 1}`}
                  </span>
                  <span style={{
                    background: badge.bg,
                    color: badge.color,
                    border: `1px solid ${badge.border}`,
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '9999px'
                  }}>
                    {badge.label}
                  </span>
                </div>

                {/* Biểu tượng trạng thái */}
                <span style={{ fontSize: '1.15rem' }}>
                  {isCompleted ? '⭐ ⭐ ⭐' : (isUnlocked ? '🔓' : '🔒')}
                </span>
              </div>

              {/* Thông tin ải */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>{stg.opponentAvatar}</span>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isUnlocked ? '#1e293b' : '#64748b',
                      lineHeight: 1.2
                    }}>
                      {stg.title}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Đối thủ: {stg.opponentName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '0.75rem' }}>
                <button
                  className="btn-arcade"
                  style={{
                    width: '100%',
                    padding: '0.45rem',
                    fontSize: '0.9rem',
                    backgroundColor: isUnlocked
                      ? (isCompleted ? '#10b981' : subject.accentColor)
                      : '#94a3b8',
                    color: '#ffffff',
                    boxShadow: isUnlocked ? '0 4px 0 rgba(0,0,0,0.15)' : 'none'
                  }}
                >
                  {isCompleted ? '✨ Thử Thách Lại' : (isUnlocked ? '🚀 Bắt Đầu Chiến' : '🔒 Chưa Mở Khóa')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
