import React from 'react';
import style from './search.module.css';


const Search = () => {
    return <div className={style.search}>
        <form className={style.form}>
            <input className={style.input} type="text" placeholder="Tapez votre recherche (marque, modèle, énergie...)"></input>
            <button className={style.button} type="submit"></button>
        </form>
        <p className={style.p}><span className={style.span}>250</span>voitures en stock</p>
    </div>
}

export default Search;