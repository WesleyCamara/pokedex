import React from 'react';
import Miniature from '../Miniature/Miniature';

import { MiniaturesWrapper } from './style';

const ListMiniatures = ({ pokemonsData }) => {
  return (
    <MiniaturesWrapper>
      {pokemonsData.map((item, index) => (
        <Miniature key={index} data={item} />
      ))}
    </MiniaturesWrapper>
  );
};

export default ListMiniatures;
