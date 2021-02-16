import React, { useRef, useEffect, useContext } from 'react';

import FilterTypes from '../FilterTypes/FilterTypes';

import { getPokemon, getPokemonByType } from '../../services/pokemonsService';

import { GlobalContext } from '../../GlobalContext';
import { HeaderWrapper } from './styles';

const Header = () => {
  const global = useContext(GlobalContext);
  const {
    pokemon,
    showFilterTypes,
    setShowFilterTypes,
    setLoading,
    setShowDetails,
    listTypes,
    setListPokemons,
    setPokemonData,
  } = global;
  const input = useRef();

  const getOnePokemon = async (pokemon) => {
    const data = await getPokemon(pokemon);
    if (data) {
      setPokemonData(data);
      setShowDetails(true);
    }
  };

  const getListPokemon = async (listTypes) => {
    const data = await getPokemonByType(listTypes);
    if (data) {
      setListPokemons(data);
      setShowDetails(false);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setShowFilterTypes(false);
    setLoading(true);

    if (pokemon) {
      getOnePokemon(pokemon);
    } else if (listTypes) {
      getListPokemon(listTypes);
    }
    setLoading(false);
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
          placeholder="Pesquise um Pokémon Ex: Charmander"
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
