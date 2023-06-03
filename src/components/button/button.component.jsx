import './button.styles.scss'

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',      //add 'google' to button types to take the 'google-sign-in' styles
    inverted: 'inverted'           //add 'inverted' as a class to the button component to take the 'inverted' styles
}


const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
        {children}
        </button>
    )
}

export default Button