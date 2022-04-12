import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import PropTypes from 'prop-types'
import { useContext, useMemo } from 'react'
import CartContext from '../../../contexts/CartContext'
import ProductsContext from '../../../contexts/ProductsContext'
import ColorDisplay from '../../ColorDisplay'
import { Container, Description, Price, Setttings } from './styles'

const CartProduct = ({ product: cartProduct }) => {
  
  const { products } = useContext(ProductsContext)
  const { changeProductQtyInCart, removeProductFromCart } = useContext(CartContext)

  const foundProduct = useMemo(
    () => products.find(
      currentProduct => currentProduct.id === cartProduct.id
    ),
    [cartProduct.id, products]
  )

  const color = useMemo(
    () => foundProduct.model.colors.find(
      currentColor => currentColor.id === cartProduct.color
    ),
    [cartProduct.color, foundProduct.model.colors]
  )

  const product = useMemo(
    () => ({
      ...foundProduct,
      ...cartProduct
    }),
    [foundProduct, cartProduct]
  )

  const handleQtyChange = evt => {
    const qty = evt.target.value
    changeProductQtyInCart(cartProduct, qty)
  }
  
  return (
    <Container>
      <img src={product.photos[0]} alt="" width={50} height={50}/>
      <div>
        <Description>{product.model.description}</Description>
        <Setttings>
          <p>Size: {product.size}</p>
          <ColorDisplay color={color.hex} />
        </Setttings>
        <Price>
          <p>
            Qty: 
            <input
              type="number"
              min={1}
              max={99}
              value={product.qty}
              onChange={handleQtyChange} />
          </p>
          <p>Price: ${product.price.discountedPrice}</p>
        </Price>
      </div>
      <Popconfirm
        placement="bottomRight"
        title={'Tem certeza que deseja remover o produto do carrinho?'}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        onConfirm={() => removeProductFromCart(product)}
        okText="Remover"
        cancelText="Cancelar"
        okButtonProps={{ danger: true }}
      >
        <Button
          icon={<DeleteOutlined style={{
            fontSize: '10px'
          }} />}
          size='small'
          shape='circle' />
      </Popconfirm>
    </Container>
  )
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
    qty: PropTypes.number,
  }).isRequired
}

export default CartProduct
