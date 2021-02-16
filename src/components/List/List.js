import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main, ListMiniatures } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import Miniature from '../Miniature/Miniature';

const List = () => {
  const global = useContext(GlobalContext);
  const { loading, listPokemons, showDetails } = global;

  const [pokemonsData, setPokemonData] = useState([]);

  const order = (items) => {
    items.sort((a, b) => a.id - b.id);
    setPokemonData(listPokemons);
  };

  useEffect(() => {
    order(listPokemons);
  }, [listPokemons]);

  return (
    <Main>
      {loading && <h1>Loading...</h1>}
      {showDetails && <DetailsPokemon />}
      {!showDetails && pokemonsData && (
        <ListMiniatures>
          {pokemonsData &&
            pokemonsData.map((item, index) => (
              <Miniature key={index} data={item} />
            ))}
        </ListMiniatures>
      )}
    </Main>
  );
};

export default List;
