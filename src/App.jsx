import './App.css';
import { Board } from './components/Board';
import { Title } from './components/Title';

import { useEffect, useState } from 'react';

function App() {
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = (name) => {
    if (!clickedPokemon.includes(name)) {
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevImage) => [...prevImage, name]);
      console.log(score);
    } else {
      setScore(0);
    }

    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <>
      <Title score={score} bestScore={bestScore} />
      <Board increaseScore={increaseScore} />
    </>
  );
}

export default App;
