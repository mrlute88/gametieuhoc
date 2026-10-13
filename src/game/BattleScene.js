import Phaser from 'phaser';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene');
    this.petData = null;
    this.playerEnergy = 100;
    this.opponentEnergy = 100;
  }

  init(data) {
    this.petData = data.pet || { avatar: '🐲', name: 'Rồng Con', level: 1 };
    this.opponentName = data.opponentName || 'Gấu Thần Rừng';
    this.opponentAvatar = data.opponentAvatar || '🐻';
    this.onSceneReady = data.onSceneReady;
  }

  create() {
    const { width, height } = this.scale;

    // 1. Nền bầu trời thần tiên với gradient
    const bgGraphics = this.add.graphics();
    bgGraphics.fillGradientStyle(0x3b82f6, 0x60a5fa, 0x93c5fd, 0xbfdbfe, 1);
    bgGraphics.fillRect(0, 0, width, height);

    // 2. Thảm cỏ xanh mướt
    const ground = this.add.graphics();
    ground.fillGradientStyle(0x22c55e, 0x16a34a, 0x15803d, 0x166534, 1);
    ground.fillRoundedRect(0, height * 0.65, width, height * 0.45, 20);

    // 3. Mây trôi lững lờ
    this.createClouds(width, height);

    // 4. Bục chiến binh (Player Pedestal)
    const pPlatform = this.add.ellipse(width * 0.25, height * 0.68, 140, 44, 0xffffff, 0.4);
    pPlatform.setStrokeStyle(3, 0xffffff, 0.8);

    // 5. Bục đối thủ (Opponent Pedestal)
    const oPlatform = this.add.ellipse(width * 0.75, height * 0.68, 140, 44, 0xffffff, 0.4);
    oPlatform.setStrokeStyle(3, 0xffffff, 0.8);

    // 6. Hiển thị Avatar Người Chơi & Pet
    this.playerText = this.add.text(width * 0.25, height * 0.55, this.petData.avatar, {
      fontSize: '72px',
      align: 'center'
    }).setOrigin(0.5);

    // Tên & Danh hiệu Người chơi
    this.add.text(width * 0.25, height * 0.74, `⭐ ${this.petData.name}`, {
      fontFamily: 'Baloo 2, sans-serif',
      fontSize: '18px',
      fontStyle: 'bold',
      color: '#1e293b',
      backgroundColor: '#ffffffcc',
      padding: { x: 8, y: 4 }
    }).setOrigin(0.5);

    // 7. Hiển thị Đối thủ Thần Tiên (Thân thiện)
    this.opponentText = this.add.text(width * 0.75, height * 0.55, this.opponentAvatar, {
      fontSize: '72px',
      align: 'center'
    }).setOrigin(0.5);

    // Tên đối thủ
    this.add.text(width * 0.75, height * 0.74, `🌿 ${this.opponentName}`, {
      fontFamily: 'Baloo 2, sans-serif',
      fontSize: '18px',
      fontStyle: 'bold',
      color: '#1e293b',
      backgroundColor: '#ffffffcc',
      padding: { x: 8, y: 4 }
    }).setOrigin(0.5);

    // 8. Bouncy Tween cho Pet và Đối thủ
    this.tweens.add({
      targets: this.playerText,
      y: height * 0.52,
      duration: 1200,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    });

    this.tweens.add({
      targets: this.opponentText,
      y: height * 0.53,
      duration: 1400,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    });

    // 9. Floating particles (Bụi tiên lấp lánh)
    this.createSparkles(width, height);

    if (this.onSceneReady) {
      this.onSceneReady(this);
    }

    // Dọn dẹp bộ nhớ khi scene đóng
    this.events.once('shutdown', () => {
      this.tweens.killAll();
      this.time.removeAllEvents();
    });
  }

  createClouds(w, h) {
    const clouds = ['☁️', '🌤️', '☁️'];
    clouds.forEach((cloudIcon, i) => {
      const cloud = this.add.text(i * (w / 2.5) + 30, h * 0.12 + (i % 2) * 20, cloudIcon, {
        fontSize: '42px',
        alpha: 0.8
      });
      this.tweens.add({
        targets: cloud,
        x: cloud.x + 40,
        duration: 3500 + i * 800,
        yoyo: true,
        repeat: -1,
        ease: 'Quad.easeInOut'
      });
    });
  }

  createSparkles(w, h) {
    for (let i = 0; i < 8; i++) {
      const sparkle = this.add.text(
        Phaser.Math.Between(20, w - 20),
        Phaser.Math.Between(20, h * 0.6),
        '✨',
        { fontSize: '18px', alpha: 0.6 }
      );
      this.tweens.add({
        targets: sparkle,
        alpha: { from: 0.2, to: 0.9 },
        scale: { from: 0.6, to: 1.2 },
        duration: Phaser.Math.Between(1500, 2500),
        yoyo: true,
        repeat: -1
      });
    }
  }

  // Hiệu ứng tung chiêu Phép Thuật Tri Thức khi trả lời đúng
  castSpellEffect() {
    const { width, height } = this.scale;
    const startX = width * 0.25;
    const startY = height * 0.55;
    const targetX = width * 0.75;
    const targetY = height * 0.55;

    // Quả cầu năng lượng ánh sáng bay sang đối thủ
    const orb = this.add.text(startX, startY, '⚡', { fontSize: '36px' }).setOrigin(0.5);

    this.tweens.add({
      targets: orb,
      x: targetX,
      y: targetY,
      duration: 450,
      ease: 'Power2',
      onComplete: () => {
        orb.destroy();

        // Đối thủ nhảy cẫng vui vẻ / vỗ tay thán phục
        this.tweens.add({
          targets: this.opponentText,
          scale: 1.3,
          duration: 180,
          yoyo: true,
          repeat: 2
        });

        // Chùm sao bay lên từ đối thủ
        const cheerText = this.add.text(targetX, targetY - 40, '🌟 Giỏi Quá! 🌟', {
          fontFamily: 'Baloo 2, sans-serif',
          fontSize: '22px',
          fontStyle: 'bold',
          color: '#fbbf24',
          stroke: '#78350f',
          strokeThickness: 4
        }).setOrigin(0.5);

        this.tweens.add({
          targets: cheerText,
          y: cheerText.y - 50,
          alpha: 0,
          duration: 1200,
          onComplete: () => cheerText.destroy()
        });
      }
    });
  }

  // Hiệu ứng khi yêu cầu gợi ý: Cầu vồng kết nối
  castHintEffect() {
    const { width, height } = this.scale;
    const hintBadge = this.add.text(width * 0.5, height * 0.35, '💡 Thần Rừng Gợi Ý!', {
      fontFamily: 'Baloo 2, sans-serif',
      fontSize: '20px',
      color: '#0284c7',
      backgroundColor: '#ffffffdd',
      padding: { x: 12, y: 6 }
    }).setOrigin(0.5).setScale(0);

    this.tweens.add({
      targets: hintBadge,
      scale: 1,
      duration: 300,
      ease: 'Back.easeOut',
      yoyo: true,
      hold: 1200,
      onComplete: () => hintBadge.destroy()
    });
  }
}
