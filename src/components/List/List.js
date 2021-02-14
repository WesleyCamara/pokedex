import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const List = () => {
  const global = useContext(GlobalContext);

  const { pokemonDetails } = global;
  return (
    <>
      {global.pokemonDetails && (
        <img
          src={pokemonDetails.sprites?.other['official-artwork'].front_default}
          alt={pokemonDetails.name}
        />
      )}
    </>
  );
};

export default List;
