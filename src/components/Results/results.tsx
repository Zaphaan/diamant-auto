import React from 'react';
import style from './results.module.css';

import Card from '../Card/card';


const Results = () => {
    return <section className={style.results}>
       <div className={style.resultsContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
       </div>
    </section>
}

export default Results;