export const Card = ({ pokemon }) => {
  return (
    <div className='card-container'>
      <img id='pokemon-image' src={pokemon.sprites.front_default} />
    </div>
  );
};
