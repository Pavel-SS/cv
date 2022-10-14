type ButtonPropsType = {
    url: string
    styleBtn: string
}
export const Buttons: React.FC<ButtonPropsType> = ({url, styleBtn}) => {
    return (
        <a href={url} className={styleBtn}>
            <img src="" alt="" />
        </a>
    )
}