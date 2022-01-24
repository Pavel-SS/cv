import React from "react";

import '../GeneralStyle.scss'
import style from './Nav.module.scss'

export const Nav = () => {
    return(
        <section className='section'>
            <nav className={style.nav}>
                <a href="#" className={style.nav__item}>ABOUT MYSELF</a>
                <a href="#" className={style.nav__item}>SKILLS</a>
                <a href="#" className={style.nav__item}>PROJECT</a>
                <a href="#" className={style.nav__item}>CONTACTS</a>
            </nav>   
        </section>
    )
}