import React, { useState } from 'react';
import FilterTypes from '../FilterTypes/FilterTypes';

import { getPokemon } from '../../services/pokemonsService';

import { HeaderWrapper } from './styles';

const Header = ({ setPokemonsList }) => {
  const [pokemon, setPokemon] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await getPokemon(pokemon);
    setPokemonsList(data);
  }

  async function handleChange({ target }) {
    setPokemon(target.value.toLowerCase().trim());
  }

  return (
    <HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual pokémon você quer pesquisar? ex. 
Charmander"
          onChange={handleChange}
        />
        <FilterTypes />

        <button type="submit">Pesquisar</button>
      </form>
    </HeaderWrapper>
  );
};

export default Header;
