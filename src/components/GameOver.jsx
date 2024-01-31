export const GameOver = ({ score, bestScore, restartGame }) => {
  return (
    <div className='overlay'>
      <div className='overlay-contents'>
        <h1>Game Over</h1>
        <p>Your Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <button id='restart-btn' onClick={restartGame}>
          Restart
        </button>
      </div>
    </div>
  );
};
