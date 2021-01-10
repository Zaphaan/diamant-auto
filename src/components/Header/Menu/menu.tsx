import React from 'react';
import style from './menu.module.css';
import Logo from './Logo/logo';

const Menu = () => {
    return <nav className={style.menu}>
        <Logo />
        <ul className={style.ul}>
            <li className={`${style.ul} ${style.active}`}>Achat</li>
            <li className={style.li}>Financements</li>
            <li className={style.li}>Contact</li>
            <li className={style.li}>04.20.12.93.25</li>
            <li className={style.li}>Se connecter</li>
        </ul>
    </nav>
}

export default Menu;