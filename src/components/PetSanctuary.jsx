import React, { useState } from 'react';
import { PET_ITEMS } from '../data/curriculumData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function PetSanctuary({
  pet,
  coins,
  setCoins,
  ownedItemIds = ['hat_wizard'],
  onBuyItem,
  equippedItemId = 'hat_wizard',
  onEquipItem,
  petEnergy = 85,
  onFeedPet,
  onClose
}) {
  const [message, setMessage] = useState('Bé hãy cho bạn ăn táo hoặc sắm thêm phụ kiện đẹp nhé!');

  // Tìm phụ kiện đang được trang bị
  const activeItem = PET_ITEMS.find(i => i.id === equippedItemId) || PET_ITEMS[0];

  const handleFeed = () => {
    if (coins < 5) {
      soundManager.playTryAgain();
      setMessage('Bé cần 5 xu vàng để mua táo thần nạp năng lượng!');
      return;
    }
    if (onFeedPet) {
      onFeedPet();
    } else {
      setCoins(prev => prev - 5);
    }
    soundManager.playSuccess();
    setMessage(`${pet.name} vui vẻ nhai táo rôm rốp! Năng lượng đầy ắp! 🍏✨`);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
  };

  const handleBuyOrEquip = (item) => {
    const isOwned = ownedItemIds.includes(item.id);

    if (isOwned) {
      soundManager.playClick();
      if (onEquipItem) {
        onEquipItem(item.id);
      }
      setMessage(`Đã trang bị ${item.name} cho ${pet.name}! ✨`);
      return;
    }

    if (coins < item.cost) {
      soundManager.playTryAgain();
      setMessage(`Bé cần thêm ${item.cost - coins} xu nữa để mở khóa ${item.name}! Hãy hoàn thành thêm ải nhé!`);
      return;
    }

    // Mua thành công
    if (onBuyItem) {
      onBuyItem(item);
    } else {
      setCoins(prev => prev - item.cost);
    }
    if (onEquipItem) {
      onEquipItem(item.id);
    }
    soundManager.playSuccess();
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.5 } });
    setMessage(`Tuyệt vời! Bé đã mở khóa vĩnh viễn và diện ${item.name}! 🎉`);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '680px',
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '2rem',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#1e293b' }}>
              🏡 Vườn Linh Thú & Tiệm Đồ Chơi
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Chăm sóc bạn {pet.name} và đổi trang phục bằng xu vàng bé kiếm được! (Đã mua là sở hữu vĩnh viễn)
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

        {/* Pet Display Arena */}
        <div style={{
          background: 'linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%)',
          borderRadius: '1.5rem',
          padding: '2rem 1rem',
          textAlign: 'center',
          position: 'relative',
          marginBottom: '1.5rem',
          border: '3px solid #93c5fd'
        }}>
          {/* Hat / Accessory on Pet */}
          {activeItem && (
            <div style={{
              fontSize: '36px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '18px',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
            }}>
              {activeItem.icon}
            </div>
          )}

          {/* Pet Avatar Bouncy */}
          <div className="animate-float" style={{
            fontSize: '84px',
            marginTop: '22px',
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))'
          }}>
            {pet.avatar}
          </div>

          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#1e3a8a' }}>
              {pet.name}
            </h3>
            {pet.badge && (
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#4338ca',
                background: '#e0e7ff',
                padding: '2px 8px',
                borderRadius: '9999px',
                border: '1px solid #c7d2fe'
              }}>
                {pet.badge}
              </span>
            )}
          </div>

          {/* Energy Bar */}
          <div style={{ maxWidth: '280px', margin: '0.75rem auto 0', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#1e40af', marginBottom: '4px' }}>
              <span>Năng Lượng Vui Vẻ</span>
              <span>{petEnergy}/100</span>
            </div>
            <div style={{ height: '12px', background: '#e0e7ff', borderRadius: '9999px', overflow: 'hidden', border: '1px solid #93c5fd' }}>
              <div style={{ width: `${petEnergy}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #10b981)', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          {/* Feed Button */}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleFeed}
              className="btn-arcade btn-arcade-emerald"
              style={{ fontSize: '1rem', padding: '0.5rem 1.25rem' }}
            >
              🍏 Cho Ăn Táo Thần (-5 Xu)
            </button>
          </div>

          {/* Message notification */}
          <div style={{
            marginTop: '0.75rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ffffffdd',
            borderRadius: '9999px',
            display: 'inline-block',
            fontSize: '0.88rem',
            color: '#1e293b',
            fontWeight: 600
          }}>
            {message}
          </div>
        </div>

        {/* Shop Items Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#1e293b' }}>
            🎒 Tủ Đồ & Phụ Kiện Thần Kỳ
          </h3>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#475569' }}>
            Số dư: <strong style={{ color: '#d97706' }}>🪙 {coins} Xu</strong>
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.75rem'
        }}>
          {PET_ITEMS.map((item) => {
            const isOwned = ownedItemIds.includes(item.id);
            const isEquipped = equippedItemId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleBuyOrEquip(item)}
                style={{
                  border: isEquipped ? '2px solid #10b981' : isOwned ? '2px solid #86efac' : '2px solid #e2e8f0',
                  borderRadius: '1rem',
                  padding: '0.85rem 0.5rem',
                  textAlign: 'center',
                  backgroundColor: isEquipped ? '#ecfdf5' : isOwned ? '#f8fafc' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isEquipped ? '0 4px 12px rgba(16, 185, 129, 0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isEquipped) e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  if (!isEquipped) e.currentTarget.style.borderColor = isOwned ? '#86efac' : '#e2e8f0';
                }}
              >
                <div style={{ fontSize: '38px', marginBottom: '0.25rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>
                  {item.name}
                </div>
                <div style={{ marginTop: '0.4rem' }}>
                  {isEquipped ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#047857', background: '#a7f3d0', padding: '2px 8px', borderRadius: '9999px' }}>
                      ✓ Đang diện
                    </span>
                  ) : isOwned ? (
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '9999px' }}>
                      Đã sở hữu
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d97706', background: '#fef3c7', padding: '2px 8px', borderRadius: '9999px' }}>
                      🪙 {item.cost} Xu
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
