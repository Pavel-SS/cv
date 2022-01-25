import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Skill } from "./skill/Skill";

export const AsideSkills = (props: AsideStyleType) => {
    return (
        <aside className={props.className}>
            <div className={`section ${s.aside__container}`}>
                <div className={s.aside__title}>
                    <h2>My skills</h2>
                </div>
                <div className={s.aside__item}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </aside>
    )
}