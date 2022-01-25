import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'

export const AsideProject = (props: AsideStyleType) => {
    return (
        <aside className={props.className}>
            <div className={`section ${s.aside__container}`}>
                <div className={s.aside__title}>
                    <h2>My skills</h2>
                </div>
                <div className={s.aside__item}>
                </div>
            </div>
        </aside>
    )
}