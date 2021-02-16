import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main, ListMiniatures } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import Miniature from '../Miniature/Miniature';

const List = () => {
  const global = useContext(GlobalContext);
  const { loading, listPokemons } = global;
  console.log('listPokemons: ', listPokemons);

  return (
    <Main>
      {loading && <h1>Loading...</h1>}
      {/* <DetailsPokemon /> */}

      <ListMiniatures>
        {listPokemons && listPokemons.map((item) => <Miniature data={item} />)}
      </ListMiniatures>
    </Main>
  );
};

export default List;
