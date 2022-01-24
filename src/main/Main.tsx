import React from "react";
import { Aside } from "../aside/Aside";

import style from '../aside/Aside.module.scss';


export const Main = () => {
    return (
        <main>
            <Aside className={style.aside} />
            <Aside className={style.aside}/>
            <Aside className={style.aside}/>
            <Aside className={style.aside}/>
        </main>
        
    )
}