import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import ListMiniatures from '../ListMiniatures/ListMiniatures';

const List = () => {
  const global = useContext(GlobalContext);
  const { loading, listPokemons, showDetails, notFound } = global;

  const [pokemonsData, setPokemonData] = useState([]);

  const order = (items) => {
    items.sort(
      (a, b) =>
        Number(clearUrl(a.pokemon.url)) - Number(clearUrl(b.pokemon.url)),
    );

    setPokemonData(listPokemons);
  };

  const clearUrl = (url) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    return url.replace(baseUrl, '').replace('/', '');
  };

  useEffect(() => {
    order(listPokemons);
  });

  return (
    <Main>
      {loading && <h1>Buscando...</h1>}
      {notFound && <h1>Pokémon não encontrado</h1>}
      {showDetails && <DetailsPokemon />}
      {!showDetails && pokemonsData && (
        <ListMiniatures pokemonsData={pokemonsData} />
      )}
    </Main>
  );
};

export default List;
