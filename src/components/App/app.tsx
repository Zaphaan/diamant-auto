import React from 'react';
import styles from './app.module.css';

import Header from '../../components/Header/header';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
