import React from 'react';
import style from './logo.module.css';
import logo from './logo.png';

const Logo = () => {
    return <div className={style.logo}>
        <img className={style.img} src={logo}/>
        <h1 className={style.h1}>Diamant Auto</h1>
    </div>
}

export default Logo;