// GameMenu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = () => {
  const navigate = useNavigate();

  const handleCreateGame = () => {
    navigate('/game/create');
  };

  const handleJoinGame = () => {
    navigate('/game/join');
  };

  return (
    <div className="text-center">
      <h1>Welcome to Type Racer</h1>
      <button
        type="button"
        onClick={handleCreateGame}
        className="btn btn-primary btn-lg mr-3"
      >
        Create Game
      </button>
      <button
        type="button"
        onClick={handleJoinGame}
        className="btn btn-primary btn-lg"
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
