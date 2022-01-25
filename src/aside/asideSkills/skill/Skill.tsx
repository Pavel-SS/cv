import React from "react";

import style from './Skill.module.scss'


export const Skill = () => {
    return (
        <div className={style.skill}>
            <img className={style.skill__img} src="https://miro.medium.com/max/800/0*0ZgS_Z1-5VBdbN3u.png" alt="img" />
            <h3 className={style.skill__title}>React</h3>
            <div className={style.skill__descr}>
                detailed description of the skill
            </div>
        </div>
    )
}