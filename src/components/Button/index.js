import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ children, icon, onClick, selected }) => (
  <StyledButton onClick={onClick} selected={selected}>
    {icon}
    {children}
  </StyledButton>
)

Button.defaultProps = {
  icon: null,
  selected: false
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  selected: PropTypes.bool
}

export default Button
