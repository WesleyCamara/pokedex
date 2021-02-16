import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  const [listTypes, setListTypes] = useState({});
  const [listPokemons, setListPokemons] = useState([]);
  const [showFilterTypes, setShowFilterTypes] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        pokemonData,
        setPokemonData,
        listTypes,
        setListTypes,
        listPokemons,
        setListPokemons,
        pokemon,
        setPokemon,
        showFilterTypes,
        setShowFilterTypes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
