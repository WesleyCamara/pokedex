import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main, ListMiniatures } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import Miniature from '../Miniature/Miniature';

const List = () => {
  const global = useContext(GlobalContext);

  const { loading } = global;

  return (
    <Main>
      {loading && <h1>Loading...</h1>}
      {/* <DetailsPokemon /> */}

      <ListMiniatures>
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
        <Miniature />
      </ListMiniatures>
    </Main>
  );
};

export default List;
