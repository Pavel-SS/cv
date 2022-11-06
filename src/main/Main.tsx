import React from "react";
import s from './../aside/Aside.module.scss'
import { AsideAboutMe } from "../aside/asideAboutMe/AsideAboutMe";
import { AsideSkills } from "../aside/asideSkills/AsideSkills";
import { AsideProject } from "../aside/asideProject/AsideProject";
import { AsideLocation } from "../aside/asideLocation/AsideLocation";
import { AsideContacts } from "../aside/asideContacts/AsideContacts";

export type AsideStyleType = {
    className: string
    id?: string
}

export const Main = () => {
    return (
        <main style={{padding:'40px 0 0 0'}}>
            <AsideAboutMe className= {`${s.aside} ${s.aside__block_grey}`}/>
            <AsideSkills className= {`${s.aside} ${s.aside__block_dark}`}/>
            <AsideProject className= {`${s.aside} ${s.aside__block_grey}`}/>
            {/* <AsideLocation className={`${s.aside} ${s.aside__block_orange}`}/> */}
            <AsideContacts className={`${s.aside} ${s.aside__block_dark}`}/>
        </main>        
    )
}
