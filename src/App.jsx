import './App.css';
import { Board } from './components/Board';
import { Title } from './components/Title';

import { useEffect, useState } from 'react';

function App() {
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);

  const increaseScore = (name) => {
    if (!clickedPokemon.includes(name)) {
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevImage) => [...prevImage, name]);
      console.log(score);
    }
  };

  return (
    <>
      <Title />
      <Board increaseScore={increaseScore} />
      <div>
        <p>Score: {score}</p>
      </div>
    </>
  );
}

export default App;
