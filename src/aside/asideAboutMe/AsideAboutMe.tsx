import React from "react";
import Tilt from 'react-parallax-tilt';
import { Fade, Flip } from "react-awesome-reveal";
import { AsideStyleType } from "../../main/Main";
import style from './../../aside//Aside.module.scss'

import  photo from './../../assets/img/photo.webp'
export const AsideAboutMe: React.FC<AsideStyleType> = (props) => {
    return(
        <div className={props.className} id={'aboutMe'}>
            <div className={`section ${style.about_me__container}`}>
                <div className={style.about_me__text}>
                <Fade direction="down" damping={0.5}>
                    <h1 className={style.about_me__title}>My name Pavel Sasnouski</h1>
                </Fade>
                <Fade duration={5000} delay={2000} className={style.about_me__descr}>
                    <h2>I front-end developer</h2>
                </Fade>
                </div>
                <Flip duration={2500} delay={500} direction='horizontal'> 
                    <Tilt tiltEnable={false} 
                        glareEnable={true} 
                        glareMaxOpacity={0.5} 
                        glareColor="white" 
                        glarePosition="bottom"
                    > 
                      <img src={photo} className={style.about_me__foto} alt="pic"/> 
                    </Tilt>
                </Flip>
            </div>
        </div>
    )
}