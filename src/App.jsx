import React, { useState, useEffect } from 'react';
import HeaderBar from './components/HeaderBar';
import WorldMap from './components/WorldMap';
import StageSelectView from './components/StageSelectView';
import QuizBattleView from './components/QuizBattleView';
import ArcadeMiniGame from './components/ArcadeMiniGame';
import PetSelectorModal from './components/PetSelectorModal';
import PetSanctuary from './components/PetSanctuary';
import ParentModal from './components/ParentModal';
import EvolutionExamModal from './components/EvolutionExamModal';
import EvolutionCutsceneModal from './components/EvolutionCutsceneModal';
import { PETS, PET_ITEMS, getPetWithEvolution } from './data/curriculumData';
import { soundManager } from './utils/audio';

export default function App() {
  // 1. Thú cưng gốc & Cấp bậc tiến hóa (Bậc 1, 2, 3, 4)
  const [basePet, setBasePet] = useState(() => {
    try {
      const savedId = localStorage.getItem('gametieuhoc_base_pet_id');
      return PETS.find(p => p.id === savedId) || PETS[0];
    } catch {
      return PETS[0];
    }
  });

  const [petTiers, setPetTiers] = useState(() => {
    try {
      const saved = localStorage.getItem('gametieuhoc_pet_tiers');
      return saved ? JSON.parse(saved) : { dragon: 1, owl: 1, fox: 1, unicorn: 1 };
    } catch {
      return { dragon: 1, owl: 1, fox: 1, unicorn: 1 };
    }
  });

  const currentTier = petTiers[basePet.id] || 1;
  const activePet = getPetWithEvolution(basePet, currentTier);

  // 2. Tài sản người chơi & Thống kê tích lũy (Có lưu LocalStorage)
  const [coins, setCoins] = useState(() => {
    const s = localStorage.getItem('gametieuhoc_coins');
    return s ? parseInt(s, 10) : 30;
  });

  const [stars, setStars] = useState(() => {
    const s = localStorage.getItem('gametieuhoc_stars');
    return s ? parseInt(s, 10) : 4;
  });

  const [streak, setStreak] = useState(() => {
    const s = localStorage.getItem('gametieuhoc_streak');
    return s ? parseInt(s, 10) : 3;
  });

  const [level, setLevel] = useState(() => {
    const s = localStorage.getItem('gametieuhoc_player_level');
    return s ? parseInt(s, 10) : 1;
  });

  const [xp, setXp] = useState(() => {
    const s = localStorage.getItem('gametieuhoc_player_xp');
    return s ? parseInt(s, 10) : 120;
  });
  const maxXp = 300;

  // 3. Tủ đồ phụ kiện & Năng lượng (Khắc phục lỗi mất phụ kiện khi đóng shop)
  const [ownedItemIds, setOwnedItemIds] = useState(() => {
    try {
      const saved = localStorage.getItem('gametieuhoc_owned_items');
      return saved ? JSON.parse(saved) : ['hat_wizard'];
    } catch {
      return ['hat_wizard'];
    }
  });

  const [equippedItemId, setEquippedItemId] = useState(() => {
    return localStorage.getItem('gametieuhoc_equipped_item') || 'hat_wizard';
  });

  const [petEnergy, setPetEnergy] = useState(() => {
    const saved = localStorage.getItem('gametieuhoc_pet_energy');
    return saved ? parseInt(saved, 10) : 85;
  });

  const equippedItem = PET_ITEMS.find(i => i.id === equippedItemId) || null;

  // 4. Các ải đã hoàn thành
  const [completedLessonIds, setCompletedLessonIds] = useState(() => {
    try {
      const s = localStorage.getItem('gametieuhoc_completed_lessons');
      return s ? JSON.parse(s) : ['m1', 'v1'];
    } catch {
      return ['m1', 'v1'];
    }
  });

  // 5. Đồng bộ LocalStorage liên tục
  useEffect(() => { localStorage.setItem('gametieuhoc_base_pet_id', basePet.id); }, [basePet]);
  useEffect(() => { localStorage.setItem('gametieuhoc_pet_tiers', JSON.stringify(petTiers)); }, [petTiers]);
  useEffect(() => { localStorage.setItem('gametieuhoc_coins', coins); }, [coins]);
  useEffect(() => { localStorage.setItem('gametieuhoc_stars', stars); }, [stars]);
  useEffect(() => { localStorage.setItem('gametieuhoc_streak', streak); }, [streak]);
  useEffect(() => { localStorage.setItem('gametieuhoc_player_level', level); }, [level]);
  useEffect(() => { localStorage.setItem('gametieuhoc_player_xp', xp); }, [xp]);
  useEffect(() => { localStorage.setItem('gametieuhoc_completed_lessons', JSON.stringify(completedLessonIds)); }, [completedLessonIds]);
  useEffect(() => { localStorage.setItem('gametieuhoc_owned_items', JSON.stringify(ownedItemIds)); }, [ownedItemIds]);
  useEffect(() => { localStorage.setItem('gametieuhoc_equipped_item', equippedItemId); }, [equippedItemId]);
  useEffect(() => { localStorage.setItem('gametieuhoc_pet_energy', petEnergy); }, [petEnergy]);

  // 6. Điều hướng màn hình: 'map' | 'stages' | 'quiz'
  const [currentView, setCurrentView] = useState('map');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  // 7. Mức độ học tập: 'level1' (Lớp 1 - 2) | 'level2' (Lớp 3 - 4 - 5)
  const [selectedLevel, setSelectedLevel] = useState(() => {
    return localStorage.getItem('gametieuhoc_level') || 'level1';
  });

  const handleSelectLevel = (lvlId) => {
    setSelectedLevel(lvlId);
    localStorage.setItem('gametieuhoc_level', lvlId);
    soundManager.playClick();
  };

  const handleToggleLevel = () => {
    const nextLevel = selectedLevel === 'level1' ? 'level2' : 'level1';
    handleSelectLevel(nextLevel);
  };

  // 8. Quản lý Điều kiện Tiến hóa theo Cấp Độ (Cấp 10, 20, 30...)
  let targetTier = 1;
  if (level >= 30) targetTier = 4;
  else if (level >= 20) targetTier = 3;
  else if (level >= 10) targetTier = 2;

  const canEvolve = currentTier < targetTier;

  // Modals
  const [showPetModal, setShowPetModal] = useState(false);
  const [showSanctuary, setShowSanctuary] = useState(false);
  const [showParentModal, setShowParentModal] = useState(false);
  const [showArcadeGame, setShowArcadeGame] = useState(false);
  const [showEvolutionExam, setShowEvolutionExam] = useState(false);
  const [showEvolutionCutscene, setShowEvolutionCutscene] = useState(false);
  const [cutsceneData, setCutsceneData] = useState({ oldPet: activePet, newPet: activePet });

  // 9. Quản lý thời gian chơi & An toàn trẻ em (Screen Time Limit)
  const [screenTimeLimit, setScreenTimeLimit] = useState(30);
  const [minutesPlayed, setMinutesPlayed] = useState(12);
  const [isTimeLocked, setIsTimeLocked] = useState(false);

  // Thống kê dành cho Phụ huynh
  const [stats, setStats] = useState({
    completedQuestions: 14,
    correctAnswers: 12,
    accuracyRate: 86,
    minutesPlayed: 12
  });

  // Đếm thời gian sử dụng
  useEffect(() => {
    const timer = setInterval(() => {
      setMinutesPlayed((prev) => {
        const next = prev + 1;
        setStats((s) => ({ ...s, minutesPlayed: next }));
        if (next >= screenTimeLimit) {
          setIsTimeLocked(true);
        }
        return next;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, [screenTimeLimit]);

  // Xử lý khi chọn môn học từ Bản đồ -> Chuyển sang màn hình chọn ải
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentView('stages');
  };

  // Xử lý khi chọn ải từ Tuyến đường
  const handleSelectStage = (stage, index) => {
    setSelectedStageIndex(index);
    setCurrentView('quiz');
  };

  // Xử lý khi hoàn thành câu hỏi trong ải
  const handleCompleteLesson = ({ lessonId }) => {
    if (!completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds((prev) => [...prev, lessonId]);
      setStars((s) => s + 1);
      setCoins((c) => c + 15);

      // Tăng EXP và Level Up
      setXp((prevXp) => {
        const newXp = prevXp + 60;
        if (newXp >= maxXp) {
          const nextLvl = level + 1;
          setLevel(nextLvl);
          soundManager.playSuccess();

          // Kiểm tra nếu chạm mốc Cấp 10, 20, 30... mà chưa tiến hóa -> Kích hoạt bài kiểm tra
          let nextTargetTier = 1;
          if (nextLvl >= 30) nextTargetTier = 4;
          else if (nextLvl >= 20) nextTargetTier = 3;
          else if (nextLvl >= 10) nextTargetTier = 2;

          if (currentTier < nextTargetTier) {
            setTimeout(() => {
              setShowEvolutionExam(true);
            }, 800);
          }

          return newXp - maxXp;
        }
        return newXp;
      });

      // Cập nhật thống kê
      setStats((s) => {
        const total = s.completedQuestions + 1;
        const correct = s.correctAnswers + 1;
        return {
          ...s,
          completedQuestions: total,
          correctAnswers: correct,
          accuracyRate: Math.round((correct / total) * 100)
        };
      });
    }
  };

  // Vượt qua bài kiểm tra 30 câu (100% chính xác) -> Kích hoạt Hoạt Cảnh Tiến Hóa
  const handlePassExam = () => {
    const oldForm = getPetWithEvolution(basePet, currentTier);
    const nextTier = Math.min(4, currentTier + 1);
    const newForm = getPetWithEvolution(basePet, nextTier);

    setPetTiers((prev) => ({
      ...prev,
      [basePet.id]: nextTier
    }));

    setCutsceneData({ oldPet: oldForm, newPet: newForm });
    setShowEvolutionExam(false);
    setShowEvolutionCutscene(true);
  };

  // Mua phụ kiện vĩnh viễn
  const handleBuyItem = (item) => {
    setCoins((c) => Math.max(0, c - item.cost));
    setOwnedItemIds((prev) => [...new Set([...prev, item.id])]);
  };

  // Trang bị phụ kiện
  const handleEquipItem = (itemId) => {
    setEquippedItemId(itemId);
  };

  // Cho ăn táo thần
  const handleFeedPet = () => {
    setCoins((c) => Math.max(0, c - 5));
    setPetEnergy((e) => Math.min(100, e + 15));
  };

  // Thưởng khi hoàn thành Mini-game Đua xe 60s
  const handleFinishArcade = ({ coins: earnedCoins }) => {
    setCoins((prev) => prev + earnedCoins);
    setShowArcadeGame(false);
    soundManager.playSuccess();
  };

  // Dành cho Phụ huynh / Giáo viên test nhanh Cấp Độ và Hoạt cảnh
  const handleSetLevelFast = (lvl) => {
    setLevel(lvl);
    let target = 1;
    if (lvl >= 30) target = 4;
    else if (lvl >= 20) target = 3;
    else if (lvl >= 10) target = 2;

    if (currentTier < target) {
      setShowEvolutionExam(true);
    }
  };

  const handleTriggerDemoCutscene = () => {
    const oldForm = getPetWithEvolution(basePet, currentTier);
    const demoTier = currentTier < 4 ? currentTier + 1 : 1;
    const newForm = getPetWithEvolution(basePet, demoTier);
    setCutsceneData({ oldPet: oldForm, newPet: newForm });
    setShowParentModal(false);
    setShowEvolutionCutscene(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header Bar */}
      <HeaderBar
        pet={activePet}
        coins={coins}
        stars={stars}
        streak={streak}
        level={level}
        xp={xp}
        maxXp={maxXp}
        equippedItem={equippedItem}
        canEvolve={canEvolve}
        onOpenEvolutionExam={() => setShowEvolutionExam(true)}
        selectedLevel={selectedLevel}
        onToggleLevel={handleToggleLevel}
        onOpenPetSelector={() => setShowPetModal(true)}
        onOpenParentPortal={() => setShowParentModal(true)}
        onOpenSanctuary={() => setShowSanctuary(true)}
        onOpenArcade={() => setShowArcadeGame(true)}
      />

      {/* 2. Main Content Area */}
      <main style={{ flex: 1, paddingBottom: '3rem' }}>
        {/* Màn hình 1: Các Hòn Đảo Thám Hiểm theo Cấp Độ */}
        {currentView === 'map' && (
          <WorldMap
            onSelectSubject={handleSelectSubject}
            completedLessonIds={completedLessonIds}
            selectedLevel={selectedLevel}
            onSelectLevel={handleSelectLevel}
          />
        )}

        {/* Màn hình 2: Tuyến Đường Các Ải (Stage Road) của môn đã chọn */}
        {currentView === 'stages' && selectedSubject && (
          <StageSelectView
            subject={selectedSubject}
            completedLessonIds={completedLessonIds}
            onSelectStage={handleSelectStage}
            onBackToMap={() => {
              setCurrentView('map');
              setSelectedSubject(null);
            }}
          />
        )}

        {/* Màn hình 3: Màn Đấu Trí RPG Battle của Ải đã chọn */}
        {currentView === 'quiz' && selectedSubject && (
          <QuizBattleView
            subject={selectedSubject}
            pet={activePet}
            stageIndex={selectedStageIndex}
            onCompleteLesson={handleCompleteLesson}
            onBackToStages={() => setCurrentView('stages')}
            onBackToMap={() => {
              setCurrentView('map');
              setSelectedSubject(null);
            }}
          />
        )}
      </main>

      {/* 3. Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.25rem',
        fontSize: '0.85rem',
        color: '#64748b',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#ffffff88'
      }}>
        🏰 <strong>Vương Quốc Tri Thức</strong> • 17 Hòn Đảo Tri Thức • 512 Màn Chơi Toàn Diện Chuẩn GDPT 2018 (Lớp 1 - 5) • Hệ Thống Tiến Hóa Linh Thú Phong Cách Pokemon
      </footer>

      {/* 4. Modals */}
      {showPetModal && (
        <PetSelectorModal
          currentPet={basePet}
          onSelectPet={(selected) => {
            setBasePet(selected);
          }}
          onClose={() => setShowPetModal(false)}
        />
      )}

      {showSanctuary && (
        <PetSanctuary
          pet={activePet}
          coins={coins}
          setCoins={setCoins}
          ownedItemIds={ownedItemIds}
          onBuyItem={handleBuyItem}
          equippedItemId={equippedItemId}
          onEquipItem={handleEquipItem}
          petEnergy={petEnergy}
          onFeedPet={handleFeedPet}
          onClose={() => setShowSanctuary(false)}
        />
      )}

      {showParentModal && (
        <ParentModal
          stats={stats}
          screenTimeLimit={screenTimeLimit}
          setScreenTimeLimit={setScreenTimeLimit}
          onSetLevel={handleSetLevelFast}
          onAddCoins={(c) => setCoins((prev) => prev + c)}
          onTriggerEvolutionCutscene={handleTriggerDemoCutscene}
          onClose={() => setShowParentModal(false)}
        />
      )}

      {/* 5. Bài Kiểm Tra Tiến Hóa 30 Câu Hỏi Liên Môn */}
      {showEvolutionExam && (
        <EvolutionExamModal
          pet={activePet}
          targetTier={targetTier}
          level={Math.max(10, Math.floor(level / 10) * 10)}
          selectedLevel={selectedLevel}
          onPassExam={handlePassExam}
          onClose={() => setShowEvolutionExam(false)}
        />
      )}

      {/* 6. Hoạt Cảnh Tiến Hóa Phong Cách Pokémon */}
      {showEvolutionCutscene && (
        <EvolutionCutsceneModal
          oldPet={cutsceneData.oldPet}
          newPet={cutsceneData.newPet}
          onComplete={() => setShowEvolutionCutscene(false)}
        />
      )}

      {/* 7. Mini-Game Đua Xe 60s */}
      {showArcadeGame && (
        <ArcadeMiniGame
          initialLevel={selectedLevel}
          onFinishGame={handleFinishArcade}
          onClose={() => setShowArcadeGame(false)}
        />
      )}

      {/* 8. Khóa Nghỉ Ngơi Bảo Vệ Mắt */}
      {isTimeLocked && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <div className="glass-card" style={{ maxWidth: '480px', padding: '2.5rem', borderRadius: '2rem' }}>
            <div style={{ fontSize: '64px', marginBottom: '1rem' }} className="animate-float">
              🧘‍♂️ 🍃 🦉
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
              Đã Đến Giờ Nghỉ Ngơi Rồi Bé Ơi!
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Bé đã học chăm chỉ được <strong>{screenTimeLimit} phút</strong> rồi. Hãy cùng bạn <strong>{activePet.name}</strong> vươn vai, uống một ngụm nước và nhìn xa ra ngoài cửa sổ để thư giãn mắt nhé!
            </p>
            <button
              onClick={() => {
                setShowParentModal(true);
                setIsTimeLocked(false);
              }}
              className="btn-arcade btn-arcade-primary"
            >
              🛡️ Ba Mẹ Mở Khóa Thêm Giờ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
