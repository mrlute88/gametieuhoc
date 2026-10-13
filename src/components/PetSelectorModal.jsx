import React from 'react';
import { PETS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';

export default function PetSelectorModal({ currentPet, onSelectPet, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
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
        animation: 'correctBounce 0.3s ease'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#1e293b'
            }}>
              🐾 Chọn Bạn Linh Thú Đồng Hành
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Mỗi bạn thú cưng có tuyệt chiêu và năng lực hỗ trợ riêng cho bé!
            </p>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              background: '#f1f5f9',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          maxHeight: '60vh',
          overflowY: 'auto',
          padding: '4px'
        }}>
          {PETS.map((pet) => {
            const isSelected = currentPet.id === pet.id;
            return (
              <div
                key={pet.id}
                onClick={() => {
                  soundManager.playSuccess();
                  onSelectPet(pet);
                  onClose();
                }}
                style={{
                  border: isSelected ? `3px solid ${pet.color}` : '2px solid #e2e8f0',
                  borderRadius: '1.25rem',
                  padding: '1.25rem',
                  backgroundColor: isSelected ? '#f8fafc' : '#ffffff',
                  boxShadow: isSelected ? `0 8px 20px -4px ${pet.color}55` : '0 4px 6px -1px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{
                  fontSize: '56px',
                  marginBottom: '0.5rem',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}>
                  {pet.avatar}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#1e293b',
                  marginBottom: '0.25rem'
                }}>
                  {pet.name}
                </h3>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: pet.color,
                  backgroundColor: `${pet.color}15`,
                  padding: '2px 10px',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem'
                }}>
                  {pet.title}
                </span>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.4 }}>
                  ✨ {pet.perk}
                </p>
                {isSelected && (
                  <div style={{
                    marginTop: '0.75rem',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    ✓ Đang đồng hành
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
