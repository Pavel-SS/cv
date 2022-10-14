import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Project } from "./project/Project";

import toDo from "./../../assets/img/todoList.webp"
import card from "./../../assets/img/cards.webp"
import chess from "./../../assets/img/chess.webp"

export const AsideProject: React.FC<AsideStyleType> = ( props ) => {
return (
<aside className={props.className} id={'project'}>
    <div className={`section ${s.aside__container}`}>
        <div className={s.aside__title}>
            <h2>My project</h2>
        </div>
        <div className={s.project__box}>
            <Project  urlPic={toDo} title={'ToDo lists'} urlProject={''}/>
            <Project urlPic={card} title={'ToDo lists'} urlProject={''}/>
            <Project urlPic={chess} title={'ToDo lists'} urlProject={''}/>
        </div>
    </div>
</aside>
)
}