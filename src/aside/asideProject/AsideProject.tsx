import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Project } from "./project/Project";


export const AsideProject: React.FC<AsideStyleType> = ( props ) => {
return (
<aside className={props.className} id={'project'}>
    <div className={`section ${s.aside__container}`}>
        <div className={s.aside__title}>
            <h2>My project</h2>
        </div>
        <div className={s.project__box}>
            <Project />
            <Project />
        </div>
    </div>
</aside>
)
}