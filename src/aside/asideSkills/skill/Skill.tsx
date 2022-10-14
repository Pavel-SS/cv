import React from "react";
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import style from './Skill.module.scss'

type SkillPropsType = {
    urlPic: string 
    title: string
}
export const Skill: React.FC<SkillPropsType> = ({urlPic, title}) => {
    return (
        <Fade>
            <div className={style.skill}>
                <Tilt 
                    glareEnable={true} 
                    glareMaxOpacity={1} 
                    glareColor="#ffffff" 
                    glarePosition="bottom" 
                    glareBorderRadius="5px"
                    className={style.skill__tilt}
                >
                   <img className={style.skill__img} src={urlPic} alt="img" /> 
                </Tilt>
                <h3 className={style.skill__title}>{title}</h3>
            </div>
        </Fade>
    )
}