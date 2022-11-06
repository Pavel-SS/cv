import React from "react";
import { Buttons } from "../../../common/button/Button";
import style from "./../../Aside.module.scss";

type ProjectPropsType = {
    urlPic: string
    urlProject: string 
    title: string
}

export const Project: React.FC<ProjectPropsType> = ({urlPic, title, urlProject}) => {
  
    return (
        <div className={style.project}>
            <div className={style.project__img}>
                <img src={urlPic} alt="pic" />
                <Buttons url = {urlProject} styleBtn={style.project__btn} text={'Open'}/>
            </div>
            <div className={style.project__txt}>
                <h3 className={style.project__title}>{title}</h3>
            </div>
        </div>
    )
}