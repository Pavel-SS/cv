import React from "react";

import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Project } from "./project/Project";

import toDo from "./../../assets/img/todoList.webp"
import card from "./../../assets/img/cards.webp"
import chess from "./../../assets/img/chess.webp"
import quiz from "./../../assets/img/quiz.webp"

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { dataProjects } from "./dataProject";


export const AsideProject: React.FC<AsideStyleType> = ( props ) => {

    const items = dataProjects.map(item => {
        return (
            <SwiperSlide>
                <Project urlPic={item.urlPic} title={item.title} urlProject={item.urlProject}/>
            </SwiperSlide>
        );
    });
    
return (
<aside className={props.className} id={'project'}>
    <div className={`section ${s.aside__container}`}>
        <div className={s.aside__title}>
            <h2>My project</h2>
        </div>
        <Swiper
             slidesPerView={1}
             spaceBetween={30}
             loop={true}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Pagination, Navigation]}
             className={s.project__box}
        >
            {items}
        </Swiper>
    </div>
</aside> 
)
}