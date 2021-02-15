import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  const [listTypes, setListTypes] = useState({});
  const [listPokemons, setListPokemons] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        pokemonData,
        setPokemonData,
        listTypes,
        setListTypes,
        listPokemons,
        setListPokemons,
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
