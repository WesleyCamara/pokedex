import React, { useState, useContext } from 'react';

import FilterTypes from '../FilterTypes/FilterTypes';

import { getPokemon } from '../../services/pokemonsService';

import { GlobalContext } from '../../GlobalContext';
import { HeaderWrapper } from './styles';

const Header = ({ setPokemonsList }) => {
  const global = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await getPokemon(pokemon);
    setPokemonsList(data);
    global.setPokemonDetails(data);
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
