import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => (
    <>
        <button onClick={onClick}>
            {text}
        </button>
        <button onClick={onClick}>
            {text}
        </button>
    </>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button