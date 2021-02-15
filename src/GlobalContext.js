import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonData, setPokemonData] = useState({});

  return (
    <GlobalContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </GlobalContext.Provider>
  );
};
