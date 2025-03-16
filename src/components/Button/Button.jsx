import './Button.css'

const Button = ({value, className, callback}) => {
    return (
        <button value={value} className={className} onClick={callback}>
            {value}
        </button>
    )
};

export default Button;