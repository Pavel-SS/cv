import React from "react";
import style from "./Project.module.scss";


export const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.project__img}>
                <button className={style.project__btn}>
                </button>
            </div>
            <div className={style.project__txt}>
                <h3 className={style.project__title}>Name project</h3>
                <p className={style.project__descr}> description</p>
            </div>
        </div>
    )
}