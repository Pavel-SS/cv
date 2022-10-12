import React from "react";
import style from "./../../Aside.module.scss";


export const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.project__img}></div>
            <div className={style.project__txt}>
                <h3 className={style.project__title}>Name project</h3>
            </div>
        </div>
    )
}