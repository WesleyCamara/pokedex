import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';

const List = () => {
  const global = useContext(GlobalContext);

  return (
    <>
      <DetailsPokemon />
    </>
  );
};

export default List;
