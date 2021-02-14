import React, { useState, useEffect } from 'react';
import { FilterTypesWrapper, FilterIcon, Label } from './styles';
import { getTypes } from '../../services/pokemonsService';

const FilterTypes = () => {
  const [showTypes, setShowTypes] = useState(false);
  const [types, setTypes] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);

  async function loadTypes() {
    const { results } = await getTypes();

    if (results) setTypes(results);
  }

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedTypes([...selectedTypes, target.value]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== target.value));
    }
  }
  const styleSelectedItem = (item) => {
    return selectedTypes.includes(item);
  };

  useEffect(() => {
    loadTypes();
  }, []);

  return (
    <FilterTypesWrapper showTypes={showTypes}>
      <div
        onClick={() => {
          setShowTypes(!showTypes);
        }}
      >
        Pesquisar por tipo:
        <FilterIcon />
      </div>
      <div>
        {types &&
          types.map((type) => {
            if (type.name && type.name !== 'unknown') {
              return (
                <Label key={type.name} selected={styleSelectedItem(type.name)}>
                  <input
                    type="checkbox"
                    value={type.name}
                    onChange={handleChange}
                  />
                  {type.name}
                </Label>
              );
            } else return null;
          })}
      </div>
    </FilterTypesWrapper>
  );
};

export default FilterTypes;
