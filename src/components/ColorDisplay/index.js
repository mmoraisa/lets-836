import PropTypes from 'prop-types'
import { StyledContainer } from './styles'

const ColorDisplay = ({ color, onClick }) => (
  <StyledContainer color={color} onClick={onClick} />
)

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ColorDisplay
