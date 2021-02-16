import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Main, ListMiniatures } from './style';
import DetailsPokemon from '../DetailsPokemon/DetailsPokemon';
import Miniature from '../Miniature/Miniature';

const List = () => {
  const global = useContext(GlobalContext);
  const { loading, listPokemons, showDetails } = global;

  return (
    <Main>
      {loading && <h1>Loading...</h1>}
      {showDetails && <DetailsPokemon />}

      {!showDetails && (
        <ListMiniatures>
          {listPokemons &&
            listPokemons.map((item) => <Miniature data={item} />)}
        </ListMiniatures>
      )}
    </Main>
  );
};

export default List;
