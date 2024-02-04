import './App.css';
import { Board } from './components/Board';
import { GameOver } from './components/GameOver';
import { Title } from './components/Title';

import { useEffect, useState } from 'react';

function App() {
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = (name) => {
    if (!clickedPokemon.includes(name)) {
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevImage) => [...prevImage, name]);
    } else {
      setGameOver(true);
    }

    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const restartGame = () => {
    setGameOver(false);
    setClickedPokemon([]);
    setScore(0);
  };

  return (
    <>
      {gameOver && (
        <GameOver
          score={score}
          bestScore={bestScore}
          restartGame={restartGame}
        />
      )}
      <Title score={score} bestScore={bestScore} />
      <Board increaseScore={increaseScore} />
      <div className='hint'>
        <h3>Hint: Dont click the same image twice</h3>
      </div>
    </>
  );
}

export default App;
