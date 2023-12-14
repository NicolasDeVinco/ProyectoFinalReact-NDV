import './Titles.css'

export const Titles = (props) => {
    return (
        <div className="titulos__container">
            <h1 className="titulo__item">{props.title}</h1>
        </div>
    )
}