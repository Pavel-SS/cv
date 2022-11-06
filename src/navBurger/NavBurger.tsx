import { useState } from "react"
import { Nav } from "./nav/Nav"

import style from "./navBurger.module.scss"
import s from "./nav/nav.module.scss"
import general from './../header/Header.module.scss'

import { Burger } from "./burger/Burger"

type NavBurgerPropsType = {
    styleBurger: string
}
export const NavBurger: React.FC<NavBurgerPropsType> = ({styleBurger}) => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const openMenu = () => {
        setOpenNav(!openNav)
    }
    const hiddenMenu = () => {
        setOpenNav(false)
    }
    const styleNav = `${style.navBurger} ${openNav ? `${style.isShow} ${general.nav__txt}`: ''}`

    return (
        <section className={styleBurger}>
            <Nav style={`${s.nav} ${styleNav}`} onClick={hiddenMenu}/>
            <Burger styles={style.burgerOpen} onClick={openMenu} isOpen={openNav}/>
        </section>
    )
}