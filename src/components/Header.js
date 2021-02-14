import React from 'react';
import Types from './Types';

import { ReactComponent as Filter } from '../assets/img/filter.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <form className={styles.header}>
        <input className={styles.input} type="text" />
        <div className={styles.searchType}>
          Pesquisar por tipo: <Filter className={styles.filter} />
          <Types />
        </div>
        <button type="submit" className={styles.searchButton}>
          Pesquisar
        </button>
      </form>
    </header>
  );
};

export default Header;
