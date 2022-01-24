import React from "react";

import { Nav } from "../nav/Nav";
import style from './Header.module.scss'


export const Header = () => {
    return (
        <header className={style.header}>
            <Nav/>
        </header>
    )
}