import { useEffect, useState } from 'react';
import { Card } from './Card';

const API = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export const Board = ({ increaseScore }) => {
  const [apiData, setApiData] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

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
    const updatedArray = [];
    for (const pokemon of apiData) {
      const details = await fetchPokemonDetails(pokemon.url);
      updatedArray.push({ ...pokemon, details });
    }

    setPokemonDetails(updatedArray);
  };

  useEffect(() => {
    fetchApiData();
    shuffleDeck();
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      updatePokemonDetails();
    }
  }, [apiData]);

  return (
    <div className='board-container'>
      {pokemonDetails.map((pokemon) => (
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
