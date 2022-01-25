import React from "react";
import s from './../aside/Aside.module.scss'
import { AsideAboutMe } from "../aside/asideAboutMe/AsideAboutMe";
import { AsideSkills } from "../aside/asideSkills/AsideSkills";
import { AsideProject } from "../aside/asideProject/AsideProject";
export type AsideStyleType = {
    className: string
}
export const Main = () => {
    return (
        <main>
            <AsideAboutMe className= {`${s.aside} ${s.aside__block_red}`}/>
            <AsideSkills className= {`${s.aside} ${s.aside__block_green}`}/>
            <AsideProject className= {`${s.aside} ${s.aside__block_blue}`}/>

        </main>        
    )
}