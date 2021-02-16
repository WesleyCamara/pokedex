import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import { DetailsWrapper, DataWrapper } from './styles';

const DetailsPokemon = () => {
  const global = useContext(GlobalContext);

  const { pokemonData } = global;

  return (
    <>
      {pokemonData && (
        <DetailsWrapper>
          <h1>
            <span> #{pokemonData.id}</span> {pokemonData.name}
          </h1>

          <DataWrapper>
            <img
              src={pokemonData.sprites?.other['official-artwork'].front_default}
              alt={pokemonData.name}
            />
            <div>
              <h3> Altura:</h3>
              <p>
                <span>{pokemonData.height}</span>
              </p>
              <h3>Peso:</h3>
              <p>
                <span>{pokemonData.weight}</span>
              </p>
              <h3> Tipo:</h3>

              {pokemonData.types &&
                pokemonData.types.map((item) => (
                  <p key={item.slot}>{item.type.name}</p>
                ))}
            </div>
          </DataWrapper>
        </DetailsWrapper>
      )}
    </>
  );
};

export default DetailsPokemon;
