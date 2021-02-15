import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';

const List = () => {
  const global = useContext(GlobalContext);

  return (
    <Main>
      <DetailsPokemon />
    </Main>
  );
};

export default List;
