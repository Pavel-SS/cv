import { Fade } from "react-awesome-reveal";
import { AsideStyleType } from "../../main/Main";
import s from '../../aside/Aside.module.scss'
import { Skill } from "./skill/Skill";

//icons
import typeScryptIcon from "./../../assets/icon/iconSkills/ts.svg"
import javaScriptIcon from "./../../assets/icon/iconSkills/js.svg"
import reactIcon from "./../../assets/icon/iconSkills/react.svg"
import reduxIcon from "./../../assets/icon/iconSkills/redux.svg"
import htmlIcon from "./../../assets/icon/iconSkills/html.svg"
import cssIcon from "./../../assets/icon/iconSkills/css.svg"
import scssIcon from "./../../assets/icon/iconSkills/sass.svg"
import gitIcon from "./../../assets/icon/iconSkills/git.svg"
import gulpIcon from "./../../assets/icon/iconSkills/gulp.svg"
import materialUiIcon from "./../../assets/icon/iconSkills/materialUI.svg"
import figmaIcon from "./../../assets/icon/iconSkills/figma.svg"

export const AsideSkills = (props: AsideStyleType) => {
    return (
        <aside className={props.className} id={'skills'}>
            <div className={`section ${s.aside__container}`}>
                <div className={s.aside__title}>
                    <h2>My skills</h2>
                </div>
                <Fade delay={150}>
                    <div className={s.list}>
                        <Skill title={'TypeScript'} urlPic={typeScryptIcon} /> 
                        <Skill title={'React'} urlPic={reactIcon} />
                        <Skill title={'HTML'} urlPic={htmlIcon} />
                        <Skill title={'JavaScript'} urlPic={javaScriptIcon} />
                        <Skill title={'Redux'} urlPic={reduxIcon} />
                        <Skill title={'CSS'} urlPic={cssIcon} />
                        <Skill title={'Git'} urlPic={gitIcon} />
                        <Skill title={'Gulp'} urlPic={gulpIcon} />
                        <Skill title={'SASS/SCSS'} urlPic={scssIcon} />
                        <Skill title={'Figma'} urlPic={figmaIcon} />
                        <Skill title={'Material UI'} urlPic={materialUiIcon} /> 
                    </div>
                       
                </Fade>
            </div>
        </aside>
    )
}