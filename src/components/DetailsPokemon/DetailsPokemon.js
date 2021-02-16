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
          <h1>{pokemonData.name}</h1>
          <DataWrapper>
            <img
              src={pokemonData.sprites?.other['official-artwork'].front_default}
              alt={pokemonData.name}
            />
            <div>
              Height:
              <p>
                <span>{pokemonData.height}</span>
              </p>
              Weight:
              <p>
                <span>{pokemonData.weight}</span>
              </p>
              Type:
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
