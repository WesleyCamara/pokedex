import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MiniatureCard } from './styles.js';

import { getPokemonData } from '../../services/pokemonsService';

import { GlobalContext } from '../../GlobalContext';

import pokeball from '../../assets/img/pokeball.png';

const Miniature = ({ data }) => {
  const { pokemon } = data;

  const global = useContext(GlobalContext);
  const { setLoading, setShowDetails, setPokemonData } = global;

  const [pokemonInfo, setPokemonInfo] = useState({});

  const loadPokemonData = useCallback(async () => {
    setLoading(true);
    const data = await getPokemonData(pokemon.url);
    setPokemonInfo(data);
    setLoading(false);
  }, [pokemon.url, setLoading]);

  useEffect(() => {
    loadPokemonData();
  }, [loadPokemonData]);

  return (
    <MiniatureCard
      onClick={() => {
        setPokemonData(pokemonInfo);
        setShowDetails(true);
      }}
    >
      <h2>{pokemonInfo.name}</h2>
      <p>#{pokemonInfo.id}</p>

      <img
        src={
          pokemonInfo.sprites?.other['official-artwork'].front_default ||
          pokeball
        }
        alt={pokemonInfo.name}
      />
    </MiniatureCard>
  );
};

export default Miniature;
