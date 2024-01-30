export const Card = ({ pokemon, shuffleDeck }) => {
  return (
    <div className='card-container' onClick={shuffleDeck}>
      <img id='pokemon-image' src={pokemon.sprites.front_default} />
    </div>
  );
};
