import React from 'react';
import { MiniatureCard } from './styles.js';
import pokemon from '../../assets/img/pokemon.png';

const Miniature = () => {
  return (
    <MiniatureCard>
      Nome <img src={pokemon} alt="teste" />
    </MiniatureCard>
  );
};

export default Miniature;
