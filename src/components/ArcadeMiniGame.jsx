import React, { useState, useEffect } from 'react';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

// Hàm xác định Chặng đường đua (Stage 1, 2, 3) dựa trên vị trí % xe trên đường đua
const getTrackStage = (carPos) => {
  if (carPos < 35) return 1; // Chặng 1: Khởi động (0% - 35%)
  if (carPos < 70) return 2; // Chặng 2: Tăng tốc (35% - 70%)
  return 3;                 // Chặng 3: Bứt phá về đích (70% - 100%)
};

// Hàm sinh câu hỏi tính nhẩm thông minh theo Mức (level1 | level2) và Chặng đường đua
const generateProblem = (level, stage) => {
  let text = '';
  let answer = 0;

  if (level === 'level1') {
    // ==========================================
    // MỨC 1: DÀNH CHO HỌC SINH LỚP 1, 2
    // ==========================================
    if (stage === 1) {
      // Chặng 1 (Khởi động: 0 - 35%): Cộng trừ trong phạm vi 10
      const isAdd = Math.random() > 0.45;
      if (isAdd) {
        const a = Math.floor(Math.random() * 6) + 1; // 1..6
        const b = Math.floor(Math.random() * (10 - a)) + 1; // tổng <= 10
        answer = a + b;
        text = `${a} + ${b} = ?`;
      } else {
        const a = Math.floor(Math.random() * 8) + 3; // 3..10
        const b = Math.floor(Math.random() * (a - 1)) + 1; // hiệu >= 1
        answer = a - b;
        text = `${a} - ${b} = ?`;
      }
    } else if (stage === 2) {
      // Chặng 2 (Tăng tốc: 35% - 70%): Cộng trừ qua 10 phạm vi 20 & điền số
      const type = Math.random();
      if (type < 0.45) {
        // Cộng qua 10 (tổng từ 11 đến 19)
        const a = Math.floor(Math.random() * 4) + 6; // 6..9
        const b = Math.floor(Math.random() * 6) + (11 - a); // b sao cho tổng 11..19
        answer = a + b;
        text = `${a} + ${b} = ?`;
      } else if (type < 0.8) {
        // Trừ có nhớ trong phạm vi 20
        const b = Math.floor(Math.random() * 7) + 3; // 3..9
        const diff = Math.floor(Math.random() * 6) + 4; // 4..9
        const a = b + diff; // 11..18
        answer = diff;
        text = `${a} - ${b} = ?`;
      } else {
        // Tìm số còn thiếu: a + ? = sum
        const a = Math.floor(Math.random() * 6) + 4;
        const missing = Math.floor(Math.random() * 6) + 3;
        answer = missing;
        text = `${a} + ? = ${a + missing}`;
      }
    } else {
      // Chặng 3 (Bứt phá về đích: 70% - 100%): Tròn chục, bảng nhân chia 2 và 5 (Lớp 2)
      const type = Math.random();
      if (type < 0.35) {
        // Phép tính số tròn chục
        const tens = [10, 20, 30, 40, 50];
        const a = tens[Math.floor(Math.random() * tens.length)];
        const b = tens[Math.floor(Math.random() * 4)];
        if (Math.random() > 0.5) {
          answer = a + b;
          text = `${a} + ${b} = ?`;
        } else {
          const sum = a + b;
          answer = a;
          text = `${sum} - ${b} = ?`;
        }
      } else if (type < 0.7) {
        // Bảng nhân 2 và 5
        const mul = Math.random() > 0.5 ? 2 : 5;
        const k = Math.floor(Math.random() * 8) + 2; // 2..9
        answer = mul * k;
        text = `${mul} × ${k} = ?`;
      } else {
        // Bảng chia 2 và 5
        const div = Math.random() > 0.5 ? 2 : 5;
        const k = Math.floor(Math.random() * 8) + 2; // 2..9
        const prod = div * k;
        answer = k;
        text = `${prod} : ${div} = ?`;
      }
    }
  } else {
    // ==========================================
    // MỨC 2: DÀNH CHO HỌC SINH KHỐI 3, 4, 5
    // ==========================================
    if (stage === 1) {
      // Chặng 1 (Khởi động: 0 - 35%): Cửu chương nhân chia 6, 7, 8, 9
      const isMultiply = Math.random() > 0.45;
      const a = Math.floor(Math.random() * 4) + 6; // 6..9
      const b = Math.floor(Math.random() * 7) + 3; // 3..9
      if (isMultiply) {
        answer = a * b;
        text = `${a} × ${b} = ?`;
      } else {
        answer = b;
        text = `${a * b} : ${a} = ?`;
      }
    } else if (stage === 2) {
      // Chặng 2 (Tăng tốc: 35% - 70%): Nhân chia tròn chục/trăm, nhân 2 chữ số, tìm x
      const type = Math.random();
      if (type < 0.35) {
        // Nhân chia tròn chục/trăm: 30 x 4, 450 : 9
        const isMul = Math.random() > 0.45;
        if (isMul) {
          const base = (Math.floor(Math.random() * 6) + 2) * 10; // 20..70
          const k = Math.floor(Math.random() * 6) + 3; // 3..8
          answer = base * k;
          text = `${base} × ${k} = ?`;
        } else {
          const k = Math.floor(Math.random() * 6) + 4; // 4..9
          const quotient = (Math.floor(Math.random() * 7) + 2) * 10; // 20..80
          const total = quotient * k;
          answer = quotient;
          text = `${total} : ${k} = ?`;
        }
      } else if (type < 0.7) {
        // Nhân nhẩm số 2 chữ số: 12x4, 15x3, 25x3, 14x5
        const seeds = [12, 14, 15, 16, 20, 25];
        const a = seeds[Math.floor(Math.random() * seeds.length)];
        const b = Math.floor(Math.random() * 4) + 3; // 3..6
        answer = a * b;
        text = `${a} × ${b} = ?`;
      } else {
        // Tìm x nhanh: x * 7 = 56, x + 35 = 100
        if (Math.random() > 0.5) {
          const x = Math.floor(Math.random() * 6) + 4;
          const k = Math.floor(Math.random() * 5) + 5;
          answer = x;
          text = `x × ${k} = ${x * k}  ➔  x = ?`;
        } else {
          const x = (Math.floor(Math.random() * 5) + 3) * 5;
          const total = 100;
          const given = total - x;
          answer = x;
          text = `x + ${given} = ${total}  ➔  x = ?`;
        }
      }
    } else {
      // Chặng 3 (Bứt phá về đích: 70% - 100%): Mẹo nhân 11, số thập phân, cặp số vàng
      const type = Math.random();
      if (type < 0.3) {
        // Mẹo nhân số 2 chữ số với 11
        const d1 = Math.floor(Math.random() * 4) + 1; // 1..4
        const d2 = Math.floor(Math.random() * (9 - d1)) + 1;
        const num = d1 * 10 + d2;
        answer = num * 11;
        text = `${num} × 11 = ?`;
      } else if (type < 0.55) {
        // Số thập phân nhẩm nhanh
        const pairs = [
          { t: '0.5 + 0.5', a: 1 },
          { t: '1.2 + 0.8', a: 2 },
          { t: '2.5 + 1.5', a: 4 },
          { t: '3.6 + 1.4', a: 5 },
          { t: '5.5 - 2.5', a: 3 },
          { t: '4.8 - 1.8', a: 3 },
          { t: '0.25 × 4', a: 1 }
        ];
        const chosen = pairs[Math.floor(Math.random() * pairs.length)];
        answer = chosen.a;
        text = `${chosen.t} = ?`;
      } else if (type < 0.75) {
        // Cặp số vàng tính nhanh
        const pairs = [
          { t: '25 × 4', a: 100 },
          { t: '125 × 8', a: 1000 },
          { t: '50 × 6', a: 300 },
          { t: '200 × 5', a: 1000 },
          { t: '1000 : 4', a: 250 },
          { t: '500 : 25', a: 20 }
        ];
        const chosen = pairs[Math.floor(Math.random() * pairs.length)];
        answer = chosen.a;
        text = `${chosen.t} = ?`;
      } else {
        // Phép cộng trừ 3 chữ số tròn chục
        const sums = [
          { t: '150 + 250', a: 400 },
          { t: '320 + 180', a: 500 },
          { t: '500 - 180', a: 320 },
          { t: '600 - 250', a: 350 },
          { t: '450 + 150', a: 600 },
          { t: '750 - 300', a: 450 }
        ];
        const chosen = sums[Math.floor(Math.random() * sums.length)];
        answer = chosen.a;
        text = `${chosen.t} = ?`;
      }
    }
  }

  // Tạo 3 đáp án (1 đúng, 2 sai hợp lý và không trùng nhau)
  const optionSet = new Set([answer]);
  let guard = 0;
  while (optionSet.size < 3 && guard < 50) {
    guard++;
    let delta = 0;
    if (typeof answer === 'number') {
      if (answer <= 10) {
        delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 2) + 1);
      } else if (answer <= 30) {
        delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      } else if (answer >= 100) {
        delta = (Math.random() > 0.5 ? 10 : -10) * (Math.floor(Math.random() * 2) + 1);
      } else {
        delta = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 4) + 1);
      }
      const candidate = answer + delta;
      if (candidate >= 0 && candidate !== answer) {
        optionSet.add(candidate);
      }
    }
  }

  while (optionSet.size < 3) {
    const fallback = typeof answer === 'number' ? Math.max(0, answer + optionSet.size + 1) : `${answer}*`;
    optionSet.add(fallback);
  }

  const shuffled = Array.from(optionSet).sort(() => Math.random() - 0.5);

  return {
    text,
    answer,
    options: shuffled
  };
};

export default function ArcadeMiniGame({ initialLevel = 'level1', onFinishGame, onClose }) {
  const [level, setLevel] = useState(initialLevel); // 'level1' | 'level2'
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [lap, setLap] = useState(1);
  const [carPosition, setCarPosition] = useState(6); // % từ trái sang (6% -> 90%)
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Tính Chặng đường đua hiện tại: 1, 2, 3
  const currentStage = getTrackStage(carPosition);

  // Sinh bài toán hiện tại dựa vào level và currentStage
  const [currentProblem, setCurrentProblem] = useState(() => generateProblem(level, 1));

  // Bộ đếm lùi thời gian 60 giây
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true);
      soundManager.playSuccess();
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Khi chuyển Mức (Level 1 <-> Level 2)
  const handleChangeLevel = (newLevel) => {
    if (newLevel === level) return;
    soundManager.playClick();
    setLevel(newLevel);
    setCombo(0);
    setFeedback(`⚡ ĐÃ CHUYỂN SANG ${newLevel === 'level2' ? 'MỨC 2 (LỚP 3-4-5)' : 'MỨC 1 (LỚP 1-2)'}!`);
    setCurrentProblem(generateProblem(newLevel, currentStage));
  };

  const handleAnswer = (val) => {
    if (isGameOver || !currentProblem) return;

    if (val === currentProblem.answer) {
      soundManager.playSuccess();
      soundManager.playCoin();

      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      // Điểm số tăng theo độ khó của Chặng (Stage 1: 10đ, Stage 2: 15đ, Stage 3: 20đ)
      const basePoints = currentStage === 1 ? 10 : currentStage === 2 ? 15 : 20;
      const levelBonus = level === 'level2' ? 5 : 0;
      const earned = basePoints + levelBonus + newCombo * 3;
      setScore((s) => s + earned);
      setCorrectAnswersCount((c) => c + 1);

      // Quãng đường xe tiến về phía trước (7% - 9% tùy combo)
      const moveDistance = Math.min(10, 7 + Math.floor(newCombo / 3));
      const nextPos = carPosition + moveDistance;

      if (nextPos >= 90) {
        // VƯỢT QUA VẠCH ĐÍCH (Hoàn thành 1 Lap)!
        setLap((l) => l + 1);
        setCarPosition(6); // Quay lại xuất phát vòng tiếp theo
        setScore((s) => s + 50); // Thưởng hoàn thành Lap
        setFeedback(`🏁 VƯỢT ĐÍCH VÒNG ${lap}! +50 ĐIỂM THƯỞNG! TIẾP TỤC BỨT PHÁ! 🚀`);
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        setCurrentProblem(generateProblem(level, 1));
      } else {
        setCarPosition(nextPos);
        const nextStage = getTrackStage(nextPos);
        if (nextStage !== currentStage) {
          const stageName = nextStage === 2 ? 'CHẶNG 2: TĂNG TỐC' : 'CHẶNG 3: BỨT PHÁ VỀ ĐÍCH';
          setFeedback(`🔥 TIẾN VÀO ${stageName}! THỬ THÁCH NÂNG TẦM!`);
        } else {
          setFeedback(newCombo >= 3 ? `⚡ TURBO BOOST x${newCombo}! QUÁ ĐỈNH!` : '✅ CHÍNH XÁC! TĂNG TỐC!');
        }
        setCurrentProblem(generateProblem(level, nextStage));
      }
    } else {
      soundManager.playTryAgain();
      setCombo(0);
      setCarPosition((pos) => Math.max(6, pos - 3)); // Khựng lại nhẹ
      setFeedback(`❌ Chưa đúng rồi! ${currentProblem.text.replace('?', currentProblem.answer)}`);
      setCurrentProblem(generateProblem(level, currentStage));
    }
  };

  const handleClaimReward = () => {
    // Thưởng xu dựa trên điểm và số câu đúng
    const baseCoins = Math.max(15, Math.floor(score / 2));
    const levelMultiplier = level === 'level2' ? 1.25 : 1.0;
    const earnedCoins = Math.round(baseCoins * levelMultiplier);
    onFinishGame({ score, coins: earnedCoins });
  };

  // Tính tốc độ ảo km/h để hiển thị sống động
  const currentSpeed = 70 + combo * 22 + (currentStage - 1) * 35 + (level === 'level2' ? 30 : 0);

  // Badge thông tin chặng
  const getStageBadge = (stg) => {
    switch (stg) {
      case 1:
        return { label: '🟢 Chặng 1: Khởi Động', desc: 'Phép tính nền tảng cơ bản', bg: '#ecfdf5', color: '#047857', border: '#a7f3d0' };
      case 2:
        return { label: '🟡 Chặng 2: Tăng Tốc', desc: 'Phạm vi mở rộng & tư duy nhanh', bg: '#fefce8', color: '#ca8a04', border: '#fef08a' };
      case 3:
        return { label: '🔴 Chặng 3: Bứt Phá Về Đích', desc: 'Nước rút cực hạn & nâng cao', bg: '#fff1f2', color: '#e11d48', border: '#fecdd3' };
      default:
        return { label: '🟢 Khởi Động', desc: '', bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' };
    }
  };

  const stageBadge = getStageBadge(currentStage);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.88)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '780px',
        backgroundColor: '#ffffff',
        borderRadius: '2rem',
        padding: '1.75rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Top Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '2.2rem' }}>🏎️</span>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#1e293b' }}>
                Đua Xe Tính Nhẩm Tốc Độ
              </h2>
              <span style={{ fontSize: '0.84rem', color: '#64748b' }}>
                Độ khó tăng dần theo cự ly đường đua • Thưởng xu vàng cực khủng
              </span>
            </div>
          </div>

          {/* Nút đóng */}
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '2px solid #e2e8f0',
              background: '#f8fafc',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {/* Thanh chọn Mức học sinh: Mức 1 (Lớp 1-2) vs Mức 2 (Lớp 3-4-5) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.65rem',
          marginBottom: '1rem',
          background: '#f1f5f9',
          padding: '0.4rem',
          borderRadius: '9999px',
          maxWidth: '520px',
          margin: '0 auto 1.25rem'
        }}>
          <button
            onClick={() => handleChangeLevel('level1')}
            style={{
              flex: 1,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: level === 'level1' ? '#10b981' : 'transparent',
              color: level === 'level1' ? '#ffffff' : '#64748b',
              boxShadow: level === 'level1' ? '0 2px 8px rgba(16, 185, 129, 0.4)' : 'none'
            }}
          >
            🌱 Mức 1 (Lớp 1 - 2)
          </button>
          <button
            onClick={() => handleChangeLevel('level2')}
            style={{
              flex: 1,
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              border: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: level === 'level2' ? '#6366f1' : 'transparent',
              color: level === 'level2' ? '#ffffff' : '#64748b',
              boxShadow: level === 'level2' ? '0 2px 8px rgba(99, 102, 241, 0.4)' : 'none'
            }}
          >
            🚀 Mức 2 (Khối 3 - 4 - 5)
          </button>
        </div>

        {!isGameOver ? (
          <div>
            {/* Dashboard: Thời gian, Điểm, Combo, Tốc độ, Chặng hiện tại */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.6rem',
              marginBottom: '1rem'
            }}>
              <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '0.85rem', border: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>⏱️ THỜI GIAN</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: timeLeft <= 10 ? '#ef4444' : '#2563eb'
                }}>
                  {timeLeft}s
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '0.85rem', border: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>🏆 ĐIỂM SỐ</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#16a34a' }}>
                  {score}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '0.85rem', border: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>🔥 COMBO</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#ea580c' }}>
                  x{combo}
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '0.85rem', border: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>⚡ TỐC ĐỘ</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#8b5cf6' }}>
                  {currentSpeed} <span style={{ fontSize: '0.8rem' }}>km/h</span>
                </div>
              </div>
            </div>

            {/* Thanh hiển thị Chặng cự ly độ khó & Vòng đua */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.65rem',
              flexWrap: 'wrap',
              gap: '0.4rem',
              fontSize: '0.86rem'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: stageBadge.bg,
                color: stageBadge.color,
                border: `2px solid ${stageBadge.border}`,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                fontWeight: 800,
                fontFamily: 'var(--font-display)'
              }}>
                <span>{stageBadge.label}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>({stageBadge.desc})</span>
              </div>

              <div style={{
                fontWeight: 800,
                color: '#475569',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>🏁 Vòng {lap}</span>
                <span>•</span>
                <span style={{ color: '#0284c7' }}>{Math.round((carPosition / 90) * 1000)}m / 1000m</span>
              </div>
            </div>

            {/* Đường đua trực quan sống động (Race Track Visual) */}
            <div style={{
              height: '115px',
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.25rem',
              border: '3px solid #475569',
              boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.6)'
            }}>
              {/* Làn đường vạch trắng đứt đoạn */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '4px',
                borderTop: '4px dashed rgba(255, 255, 255, 0.45)'
              }} />

              {/* Mốc Checkpoint 1 (35% cự ly) */}
              <div style={{
                position: 'absolute',
                left: '35%',
                top: 0,
                bottom: 0,
                width: '2px',
                borderLeft: '2px dashed #facc15'
              }}>
                <span style={{ position: 'absolute', top: '4px', left: '-10px', fontSize: '13px' }} title="Mốc Chặng 2: Tăng tốc">
                  🚩
                </span>
              </div>

              {/* Mốc Checkpoint 2 (70% cự ly) */}
              <div style={{
                position: 'absolute',
                left: '70%',
                top: 0,
                bottom: 0,
                width: '2px',
                borderLeft: '2px dashed #f87171'
              }}>
                <span style={{ position: 'absolute', top: '4px', left: '-10px', fontSize: '13px' }} title="Mốc Chặng 3: Bứt phá về đích">
                  🚩
                </span>
              </div>

              {/* Vạch đích hoàn thành chặng (90% cự ly) */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: '25px',
                width: '18px',
                background: 'repeating-linear-gradient(45deg, #000, #000 7px, #fff 7px, #fff 14px)'
              }}>
                <span style={{ position: 'absolute', top: '-18px', right: '-7px', fontSize: '20px' }}>🏁</span>
              </div>

              {/* Chiếc xe đua di chuyển linh hoạt theo vị trí */}
              <div style={{
                position: 'absolute',
                top: '28px',
                left: `${carPosition}%`,
                fontSize: '44px',
                transition: 'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.6))',
                userSelect: 'none'
              }}>
                {level === 'level2' ? '🚀✨' : '🏎️💨'}
              </div>
            </div>

            {/* Thông báo feedback trạng thái */}
            <div style={{
              minHeight: '26px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.98rem',
              color: feedback.includes('TURBO') || feedback.includes('CHÍNH XÁC') || feedback.includes('VƯỢT ĐÍCH')
                ? '#16a34a'
                : feedback.includes('❌') ? '#e11d48' : '#ca8a04',
              marginBottom: '0.65rem'
            }}>
              {feedback}
            </div>

            {/* Khung phép tính lớn */}
            {currentProblem && (
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: level === 'level2' ? '#4338ca' : '#1d4ed8',
                  marginBottom: '1rem',
                  background: level === 'level2' ? '#ede9fe' : '#e0e7ff',
                  padding: '0.65rem 1rem',
                  borderRadius: '1.25rem',
                  border: `3px solid ${level === 'level2' ? '#c7d2fe' : '#bfdbfe'}`,
                  letterSpacing: '0.04em'
                }}>
                  {currentProblem.text}
                </div>

                {/* 3 Nút lựa chọn tốc độ */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }}>
                  {currentProblem.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className="btn-arcade"
                      style={{
                        fontSize: '1.85rem',
                        fontWeight: 800,
                        padding: '0.85rem',
                        minHeight: '70px',
                        background: level === 'level2'
                          ? 'linear-gradient(180deg, #818cf8 0%, #4f46e5 100%)'
                          : 'linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '1rem'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Màn hình tổng kết khi hết 60s (Game Over) */
          <div style={{ padding: '1.25rem 0' }}>
            <div style={{ fontSize: '64px', marginBottom: '0.5rem' }} className="animate-float">
              🏆 🏎️ 🌟
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#16a34a',
              marginBottom: '0.4rem'
            }}>
              Về Đích Xuất Sắc!
            </h3>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Bé đã chinh phục thử thách 60 giây đua xe tính nhẩm tại{' '}
              <strong>{level === 'level2' ? 'Mức 2 (Khối 3-4-5)' : 'Mức 1 (Lớp 1-2)'}</strong>!
            </p>

            {/* Chi tiết thành tích */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              maxWidth: '560px',
              margin: '0 auto 1.5rem'
            }}>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '1rem', border: '2px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>🏆 ĐIỂM SỐ</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a', fontFamily: 'var(--font-display)' }}>
                  {score}
                </div>
              </div>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '1rem', border: '2px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>✅ CÂU ĐÚNG</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', fontFamily: 'var(--font-display)' }}>
                  {correctAnswersCount}
                </div>
              </div>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '1rem', border: '2px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>🏁 VÒNG ĐUA</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7c3aed', fontFamily: 'var(--font-display)' }}>
                  {lap} Vòng
                </div>
              </div>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '1rem', border: '2px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>🔥 COMBO MAX</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ea580c', fontFamily: 'var(--font-display)' }}>
                  x{maxCombo}
                </div>
              </div>
            </div>

            {/* Hộp phần thưởng xu */}
            <div style={{
              display: 'inline-flex',
              gap: '0.75rem',
              background: '#fef3c7',
              border: '2px solid #fde68a',
              padding: '0.75rem 1.75rem',
              borderRadius: '1.25rem',
              marginBottom: '1.75rem',
              alignItems: 'center'
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.35rem',
                color: '#b45309'
              }}>
                🪙 Thưởng: +{Math.round(Math.max(15, Math.floor(score / 2)) * (level === 'level2' ? 1.25 : 1))} Xu Vàng
              </span>
            </div>

            {/* Nút hành động */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setTimeLeft(60);
                  setScore(0);
                  setCombo(0);
                  setMaxCombo(0);
                  setLap(1);
                  setCarPosition(6);
                  setCorrectAnswersCount(0);
                  setFeedback('');
                  setIsGameOver(false);
                  setCurrentProblem(generateProblem(level, 1));
                }}
                className="btn-arcade"
                style={{
                  background: '#ffffff',
                  border: '2px solid #cbd5e1',
                  color: '#475569',
                  fontSize: '1.1rem',
                  padding: '0.75rem 1.75rem'
                }}
              >
                🔄 Đua Lại Vòng Này
              </button>

              <button
                onClick={handleClaimReward}
                className="btn-arcade btn-arcade-emerald"
                style={{ fontSize: '1.1rem', padding: '0.75rem 2.25rem' }}
              >
                🎉 Nhận Thưởng & Trở Về
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
