import React, { useState, useEffect } from 'react';
import { MiniatureCard } from './styles.js';

import { getPokemonData } from '../../services/pokemonsService';

import pokeball from '../../assets/img/pokeball.png';

const Miniature = ({ data }) => {
  const { pokemon } = data;

  const [pokemonData, setPokemonData] = useState({});

  const loadPokemonData = async () => {
    const data = await getPokemonData(pokemon.url);
    console.log('data: ', data);
    setPokemonData(data);
  };

  useEffect(() => {
    loadPokemonData();
  }, []);

  return (
    <MiniatureCard>
      <h2>{pokemonData.name}</h2>
      <p>#{pokemonData.id}</p>

      <img
        src={
          pokemonData.sprites?.other['official-artwork'].front_default ||
          pokeball
        }
        alt={pokemonData.name}
      />
    </MiniatureCard>
  );
};

// {
//   pokemonData && (
//     <DetailsWrapper>
//       <h1>{pokemonData.name}</h1>
//       <DataWrapper>
//         <img
//           src={pokemonData.sprites?.other['official-artwork'].front_default}
//           alt={pokemonData.name}
//         />
//         <div>
//           Height:
//           <p>
//             <span>{pokemonData.height}</span>
//           </p>
//           Weight:
//           <p>
//             <span>{pokemonData.weight}</span>
//           </p>
//           Type:
//           {pokemonData.types &&
//             pokemonData.types.map((item) => (
//               <p key={item.slot}>{item.type.name}</p>
//             ))}
//         </div>
//       </DataWrapper>
//     </DetailsWrapper>
//   );
// }

export default Miniature;
