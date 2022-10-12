import React from "react";
import { AsideStyleType } from "../../main/Main";
import style from './AsideAboutMe.module.scss'

export const AsideAboutMe = (props: AsideStyleType) => {
    return(
        <div className={props.className} id={'aboutMe'}>
            <div className={`section ${style.about_me__container}`}>
                <div className={style.about_me__text}>
                    <h1 className={style.about_me__title}>My name Pavel Sasnouski</h1>
                    <h2 className={style.about_me__descr}>I front-end developer</h2>
                </div>
                <div className={style.about_me__foto}>
                </div>
            </div>
        </div>
    )
}