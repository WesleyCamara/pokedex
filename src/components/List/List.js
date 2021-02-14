import React from 'react';

const List = ({ pokemonsList }) => {
  return (
    <>
      {pokemonsList && (
        <img
          src={pokemonsList.sprites?.other['official-artwork'].front_default}
          alt={pokemonsList.name}
        />
      )}
    </>
  );
};

export default List;
