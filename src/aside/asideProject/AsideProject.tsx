import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Project } from "./project/Project";

export const AsideProject = (props: AsideStyleType) => {
    return (
        <aside className={props.className}>
            <div className={`section ${s.aside__container}`}>
                <div className={s.aside__title}>
                    <h2>My project</h2>
                </div>
                <div className={s.aside__item}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </aside>
    )
}