import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import BattleScene from './BattleScene';

export default function GameCanvas({ pet, opponentName, opponentAvatar, onSceneReady }) {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 720;
    const height = Math.min(360, Math.floor(width * 0.5));

    const config = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: width,
      height: height,
      backgroundColor: '#38bdf8',
      transparent: false,
      scene: [BattleScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 } }
      }
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    // Truyền dữ liệu vào Scene
    game.scene.start('BattleScene', {
      pet,
      opponentName,
      opponentAvatar,
      onSceneReady
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [pet?.id, opponentName]);

  return (
    <div
      ref={containerRef}
      id="phaser-game-container"
      style={{
        width: '100%',
        maxWidth: '820px',
        height: 'auto',
        aspectRatio: '2 / 1',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 12px 30px -10px rgba(79, 70, 229, 0.35)',
        margin: '0 auto',
        backgroundColor: '#38bdf8'
      }}
    />
  );
}
