import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <GlobalContext.Provider value={{ pokemonDetails, setPokemonDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};
