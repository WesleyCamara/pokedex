import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main, ListMiniatures } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import Miniature from '../Miniature/Miniature';

import { getPokemonsInfo } from '../../services/pokemonsService';

const List = () => {
  const global = useContext(GlobalContext);
  const { loading, listPokemons } = global;

  // const loadPokemons = async (list) => {
  //   const data = await getPokemonsInfo(list);
  //   console.log('data: ', data);
  // };

  // useEffect(() => {
  //   if (listPokemons.lenght) loadPokemons(listPokemons);
  // }, [listPokemons]);

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
