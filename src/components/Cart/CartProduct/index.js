import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import CartContext from '../../../contexts/CartContext'
import ColorDisplay from '../../ColorDisplay'
import { Container } from './styles'

const CartProduct = ({ product }) => {
  
  const { removeProductFromCart } = useContext(CartContext)
  
  return (
    <Container>
      <p>Size: {product.size}</p>
      <ColorDisplay color={product.color} />
      <p>Qty: {product.qty}</p>
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
