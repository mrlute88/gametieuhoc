// Bộ tạo hiệu ứng âm thanh thời gian thực qua Web Audio API (Không cần tải file ngoài, siêu nhẹ)
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Nút bấm UI - Tiếng pop nhẹ
  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Trả lời đúng / Phép thuật - Hợp âm Đô trưởng tươi sáng
  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  // Gợi ý / Trợ giúp - Âm thanh chuông thần kỳ
  playHint() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [587.33, 880, 1174.66]; // D5, A5, D6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + idx * 0.07;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    });
  }

  // Trả lời chưa đúng - Âm thanh êm dịu, không trừng phạt (Boing ấm áp khích lệ thử lại)
  playTryAgain() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Thu thập sao / Tiền vàng
  playCoin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, now); // B5
    osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  // Âm thanh tiến hóa thần thoại hoành tráng phong cách Pokemon (Hào quang dồn dập + Khúc khải hoàn Victory)
  playEvolution() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 1. Tiếng rung hào quang năng lượng dồn dập (0 -> 1.5s)
    const oscP = this.ctx.createOscillator();
    const gainP = this.ctx.createGain();
    oscP.type = 'sawtooth';
    oscP.frequency.setValueAtTime(260, now);
    oscP.frequency.exponentialRampToValueAtTime(1040, now + 1.5);
    gainP.gain.setValueAtTime(0.04, now);
    gainP.gain.linearRampToValueAtTime(0.2, now + 1.3);
    gainP.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
    oscP.connect(gainP);
    gainP.connect(this.ctx.destination);
    oscP.start(now);
    oscP.stop(now + 1.6);

    // 2. Kèn chiến thắng vĩ đại (Victory Fanfare sau khi bừng sáng biến hình)
    const fanfare = [
      { f: 523.25, t: 1.6, d: 0.16 }, // C5
      { f: 523.25, t: 1.82, d: 0.16 }, // C5
      { f: 523.25, t: 2.04, d: 0.16 }, // C5
      { f: 659.25, t: 2.26, d: 0.28 }, // E5
      { f: 783.99, t: 2.58, d: 0.25 }, // G5
      { f: 1046.50, t: 2.88, d: 0.85 } // C6 ngân dài uy lực
    ];
    fanfare.forEach(note => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(note.f, now + note.t);
      g.gain.setValueAtTime(0.26, now + note.t);
      g.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(now + note.t);
      o.stop(now + note.t + note.d);
    });
  }

  // Đọc câu hỏi và từ vựng bằng tiếng nói trình duyệt (hỗ trợ bé lớp 1 chưa thạo chữ)
  speakText(text, lang = 'vi-VN') {
    if (!this.enabled) return;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.88; // Đọc chậm rãi, phát âm rõ ràng cho trẻ
      utterance.pitch = 1.1; // Giọng tươi sáng, thân thiện
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const soundManager = new SoundManager();
