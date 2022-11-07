import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Project } from "./project/Project";

import toDo from "./../../assets/img/todoList.webp"
import card from "./../../assets/img/cards.webp"
import chess from "./../../assets/img/chess.webp"
import quiz from "./../../assets/img/quiz.webp"


export const AsideProject: React.FC<AsideStyleType> = ( props ) => {

    const arr = [
        {
            urlPic: toDo,
            title: 'ToDo-list',
            urlProject: 'https://pavel-ss.github.io/todo-list/#/login'
        },
        {
            urlPic: card,
            title: 'BrainStorm',
            urlProject: 'https://pavel-ss.github.io/card-nya/#/login'
        },
        {
            urlPic: chess,
            title: 'Chess',
            urlProject: 'https://pavel-ss.github.io/Chess/'
        },
        {
            urlPic: quiz,
            title: 'Quiz',
            urlProject: 'https://fabulous-frangipane-de4815.netlify.app/'
        }, 
    ]
    const items = arr.map(item => {
        return (
            <Project urlPic={item.urlPic} title={item.title} urlProject={item.urlProject}/>
        );
    });

return (
<aside className={props.className} id={'project'}>
    <div className={`section ${s.aside__container}`}>
        <div className={s.aside__title}>
            <h2>My project</h2>
        </div>
        <div className={s.project__box}>
            {items}
            {/* <Project urlPic={toDo} title={'ToDo-list'} urlProject={'https://pavel-ss.github.io/todo-list/#/login'}/>
            <Project urlPic={card} title={'BrainStorm'} urlProject={'https://pavel-ss.github.io/card-nya/#/login'}/>
            <Project urlPic={chess} title={'Chess'} urlProject={'https://pavel-ss.github.io/Chess/'}/>
            <Project urlPic={quiz} title={'Quiz'} urlProject={'https://fabulous-frangipane-de4815.netlify.app/'}/> */}
        </div>
    </div>
</aside>
)
}