import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [showFilterTypes, setShowFilterTypes] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [pokemon, setPokemon] = useState('');

  const [pokemonData, setPokemonData] = useState({});
  const [listTypes, setListTypes] = useState({});
  const [listPokemons, setListPokemons] = useState([]);

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
        showDetails,
        setShowDetails,
        notFound,
        setNotFound,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
