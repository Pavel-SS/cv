type ButtonPropsType = {
    url: string
    styleBtn: string
    text?: string
}
export const Buttons: React.FC<ButtonPropsType> = ({url, styleBtn, text}) => {
    return (
        <a href={url} className={styleBtn}>
            {text}
        </a>
    )
}