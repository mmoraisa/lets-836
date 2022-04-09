import { useContext } from "react"
import PropTypes from 'prop-types'
import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"
import Button from "../../Button"
import CartContext from '../../../contexts/CartContext'
import { Container } from "./styles"

const Actions = ({ productId, settings }) => {
  
  const { addProductToCart } = useContext(CartContext)
  
  const handleAddProductToCart = () => {
    addProductToCart({
      id: productId,
      size: settings.size,
      color: settings.color
    })
  }
  
  return (
    <Container>
      <Button
        icon={<BsFillHandbagFill />}
        onClick={() => {}}>Buy Now
      </Button>
      <Button
        icon={<BsFillCartFill />}
        onClick={handleAddProductToCart}>Add to Cart
      </Button>
    </Container>
  )
}

Actions.propTypes = {
  productId: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.number,
  }).isRequired
}

export default Actions
