export const Title = ({ score, bestScore }) => {
  return (
    <header>
      <div className='logo'>
        <img id='pokemon-logo' src='/pokemon-23.svg'></img>
        <h3>Memory game</h3>
      </div>
      <div className='score-container'>
        <div className='score'>Score: {score}</div>
        <div className='best-score'>Best score: {bestScore}</div>
      </div>
    </header>
  );
};
