import React, { useState, useEffect } from 'react';
import HeaderBar from './components/HeaderBar';
import WorldMap from './components/WorldMap';
import StageSelectView from './components/StageSelectView';
import QuizBattleView from './components/QuizBattleView';
import ArcadeMiniGame from './components/ArcadeMiniGame';
import PetSelectorModal from './components/PetSelectorModal';
import PetSanctuary from './components/PetSanctuary';
import ParentModal from './components/ParentModal';
import { PETS } from './data/curriculumData';
import { soundManager } from './utils/audio';

export default function App() {
  // Trạng thái người chơi & Thú cưng
  const [pet, setPet] = useState(PETS[0]);
  const [coins, setCoins] = useState(30);
  const [stars, setStars] = useState(4);
  const [streak, setStreak] = useState(3);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(120);
  const maxXp = 300;

  // Điều hướng màn hình: 'map' | 'stages' | 'quiz'
  const [currentView, setCurrentView] = useState('map');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState(['m1', 'v1']);

  // Lựa chọn Mức độ học tập: 'level1' (Lớp 1 - 2) | 'level2' (Lớp 3 - 4 - 5)
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

  // Modals
  const [showPetModal, setShowPetModal] = useState(false);
  const [showSanctuary, setShowSanctuary] = useState(false);
  const [showParentModal, setShowParentModal] = useState(false);
  const [showArcadeGame, setShowArcadeGame] = useState(false);

  // Quản lý thời gian chơi & An toàn trẻ em (Screen Time Limit)
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
          setLevel((lvl) => lvl + 1);
          soundManager.playSuccess();
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

  // Thưởng khi hoàn thành Mini-game Đua xe 60s
  const handleFinishArcade = ({ coins: earnedCoins }) => {
    setCoins(prev => prev + earnedCoins);
    setShowArcadeGame(false);
    soundManager.playSuccess();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header Bar */}
      <HeaderBar
        pet={pet}
        coins={coins}
        stars={stars}
        streak={streak}
        level={level}
        xp={xp}
        maxXp={maxXp}
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
            pet={pet}
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
        🏰 <strong>Vương Quốc Tri Thức</strong> • 34+ Màn Chơi Chuẩn GDPT 2018 Lớp 1 • Trải nghiệm Game Hóa Tương Tác
      </footer>

      {/* 4. Modals */}
      {showPetModal && (
        <PetSelectorModal
          currentPet={pet}
          onSelectPet={setPet}
          onClose={() => setShowPetModal(false)}
        />
      )}

      {showSanctuary && (
        <PetSanctuary
          pet={pet}
          coins={coins}
          setCoins={setCoins}
          onClose={() => setShowSanctuary(false)}
        />
      )}

      {showParentModal && (
        <ParentModal
          stats={stats}
          screenTimeLimit={screenTimeLimit}
          setScreenTimeLimit={setScreenTimeLimit}
          onClose={() => setShowParentModal(false)}
        />
      )}

      {/* 5. Mini-Game Đua Xe 60s */}
      {showArcadeGame && (
        <ArcadeMiniGame
          onFinishGame={handleFinishArcade}
          onClose={() => setShowArcadeGame(false)}
        />
      )}

      {/* 6. Khóa Nghỉ Ngơi Bảo Vệ Mắt */}
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
              Bé đã học chăm chỉ được <strong>{screenTimeLimit} phút</strong> rồi. Hãy cùng bạn <strong>{pet.name}</strong> vươn vai, uống một ngụm nước và nhìn xa ra ngoài cửa sổ để thư giãn mắt nhé!
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
