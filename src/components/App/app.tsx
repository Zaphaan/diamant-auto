import React from 'react';
import styles from './app.module.css';

import Header from '../../components/Header/header';
import Slider from '../../components/Slider/slider';
import Search from '../../components/Search/search';
import Results from '../../components/Results/results';
import Footer from '../../components/Footer/footer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Slider />
      <Search />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
