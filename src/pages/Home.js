import React, { useState } from 'react';
import Header from '../components/Header/Header';
import List from '../components/List/List';

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  return (
    <>
      <Header setPokemonsList={setPokemonsList} />
      <List pokemonsList={pokemonsList} />
    </>
  );
};

export default Home;
