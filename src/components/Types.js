import React, { useState, useEffect } from 'react';
import styles from './Types.module.css';
import { getTypes } from '../services/pokemonsService';

const Types = () => {
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
    <>
      <div className={styles.types}>
        {types &&
          types.map((type) => {
            if (type.name && type.name !== 'unknown') {
              return (
                <label
                  key={type.name}
                  className={`${
                    styleSelectedItem(type.name) && styles.selected
                  }`}
                >
                  <input
                    type="checkbox"
                    value={type.name}
                    onChange={handleChange}
                  />
                  {type.name}
                </label>
              );
            } else return null;
          })}
      </div>
    </>
  );
};

export default Types;
