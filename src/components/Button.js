const Button = ({onClick, color, text}) => {
    return(
        <button
            className="btn"
            style={{backgroundColor: color}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;