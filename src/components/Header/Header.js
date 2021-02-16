import React, { useRef, useEffect, useContext } from 'react';

import FilterTypes from '../FilterTypes/FilterTypes';

import { getPokemon, getPokemonByType } from '../../services/pokemonsService';

import { GlobalContext } from '../../GlobalContext';
import { HeaderWrapper } from './styles';

const Header = () => {
  const global = useContext(GlobalContext);
  const { pokemon, showFilterTypes, setShowFilterTypes } = global;
  const input = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    setShowFilterTypes(false);
    if (pokemon) {
      const data = await getPokemon(pokemon);
      global.setPokemonData(data);
    } else if (global.listTypes) {
      const data = await getPokemonByType(global.listTypes);
      global.setListPokemons(data);
    }
  }

  async function handleChange({ target }) {
    setShowFilterTypes(false);
    global.setPokemon(target.value.toLowerCase().trim());
  }

  useEffect(() => {
    if (showFilterTypes) input.current.value = '';
  }, [showFilterTypes]);

  return (
    <HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual pokémon você quer pesquisar? ex. 
Charmander"
          onChange={handleChange}
          autoFocus={true}
          ref={input}
        />
        <FilterTypes />

        <button type="submit">Pesquisar</button>
      </form>
    </HeaderWrapper>
  );
};

export default Header;
