import React from "react";
import { Nav } from "../navBurger/nav/Nav";

import { NavBurger } from "../navBurger/NavBurger";

import style from './Header.module.scss'
import sn from '../navBurger/nav/nav.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            <Nav style={`section ${sn.nav} ${style.nav_hidden}`}/>
            <NavBurger styleBurger={`section ${style.burger_hidden}`}/>
        </header>
    )
}