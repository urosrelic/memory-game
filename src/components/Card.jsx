export const Card = ({ pokemon, shuffleDeck, increaseScore }) => {
  const handleClick = () => {
    shuffleDeck();
    increaseScore(pokemon.name);
  };
  return (
    <div className='card-container' onClick={handleClick}>
      <img id='pokemon-image' src={pokemon.sprites.front_default} />
    </div>
  );
};
