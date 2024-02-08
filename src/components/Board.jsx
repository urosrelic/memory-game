import { useEffect, useState } from 'react';
import { Card } from './Card';

const API = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export const Board = ({ increaseScore }) => {
  const [apiData, setApiData] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffleDeck = () => {
    const shuffledArray = [...pokemonDetails];
    shuffledArray.sort(() => Math.random() - 0.5);
    setPokemonDetails(shuffledArray);
  };

  const fetchApiData = async () => {
    try {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error('Failed getting api data');
      }

      const data = await response.json();
      setApiData(data.results);
    } catch (error) {
      console.error('Error getting api data');
    } finally {
      setLoading(false); // Update loading state on successful data fetch
    }
  };

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed getting pokemon details');
      }

      const details = await response.json();
      return details;
    } catch (error) {
      console.error('Error getting pokemon details');
    }
  };

  const updatePokemonDetails = async () => {
    try {
      const uniqueUrls = [...new Set(apiData.map((pokemon) => pokemon.url))];
      const detailsPromises = uniqueUrls.map((url) => fetchPokemonDetails(url));
      const detailsArray = await Promise.all(detailsPromises);

      const updatedArray = apiData.map((pokemon, index) => ({
        ...pokemon,
        details: detailsArray[index],
      }));

      setPokemonDetails(updatedArray);
    } catch (error) {
      console.error('Error updating pokemon details', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      updatePokemonDetails();
    }
  }, [apiData]);

  return (
    <div className='board-container'>
      {loading && <h1 id='loading-text'>Loading...</h1>}
      {pokemonDetails.length > 0 &&
        !loading &&
        pokemonDetails.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemon={pokemon.details}
            shuffleDeck={shuffleDeck}
            increaseScore={increaseScore}
          />
        ))}
    </div>
  );
};
