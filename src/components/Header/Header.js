import React, { useContext } from 'react';

import FilterTypes from '../FilterTypes/FilterTypes';

import { getPokemon, getPokemonByType } from '../../services/pokemonsService';

import { GlobalContext } from '../../GlobalContext';
import { HeaderWrapper } from './styles';

const Header = () => {
  const global = useContext(GlobalContext);
  const { pokemon } = global;

  async function handleSubmit(event) {
    event.preventDefault();
    if (pokemon) {
      const data = await getPokemon(pokemon);
      global.setPokemonData(data);
    } else if (global.listTypes) {
      const data = await getPokemonByType(global.listTypes);
      global.setListPokemons(data);
    }
  }

  async function handleChange({ target }) {
    global.setPokemon(target.value.toLowerCase().trim());
  }

  return (
    <HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual pokémon você quer pesquisar? ex. 
Charmander"
          onChange={handleChange}
          autoFocus={true}
        />
        <FilterTypes />

        <button type="submit">Pesquisar</button>
      </form>
    </HeaderWrapper>
  );
};

export default Header;
