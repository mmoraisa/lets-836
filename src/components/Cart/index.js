import { useContext } from "react"
import PropTypes from 'prop-types'
import { BsCart4 } from "react-icons/bs"
import { CartArea, CartButton } from "./styles"
import CartContext from '../../contexts/CartContext'
import CartProduct from "./CartProduct"

const Cart = () => {

  const { cart, cartOpen, toogleCartOpen } = useContext(CartContext)

  return (
    <>
      <CartButton
        open={cartOpen}
        onClick={toogleCartOpen}>
        <BsCart4 />
      </CartButton>
      <CartArea open={cartOpen}>
        <h2>Produtos selecionados</h2>
        {
          cart.map((cartProduct, index) =>
            <CartProduct
              key={`${cartProduct.id}_${index}`}
              product={cartProduct} />
          )
        }
      </CartArea>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired
}

export default Cart
