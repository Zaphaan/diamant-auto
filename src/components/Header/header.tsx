import React from 'react';
import style from './header.module.css';

import Menu from './Menu/menu';

const Header = () => {
    return <header className={style.header}>
        <Menu />
    </header>
}

export default Header;