import React from 'react';
import FilterTypes from '../FilterTypes/FilterTypes';

import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <form>
        <input
          type="text"
          placeholder="Qual pokémon você quer pesquisar? ex. 
Charmander"
        />
        <FilterTypes />

        <button type="submit">Pesquisar</button>
      </form>
    </HeaderWrapper>
  );
};

export default Header;
