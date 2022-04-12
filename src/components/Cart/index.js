import { useContext, useCallback, useMemo } from "react"
import PropTypes from 'prop-types'
import { BsCart4 } from "react-icons/bs"
import { BtnClean, CartArea, CartButton, TotalArea } from "./styles"
import CartContext from '../../contexts/CartContext'
import CartProduct from "./CartProduct"
import ProductsContext from "../../contexts/ProductsContext"
import { Empty, Popconfirm } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"

const Cart = () => {

  const { products } = useContext(ProductsContext)
  const { cart, cartOpen, cleanCart, toogleCartOpen } = useContext(CartContext)

  const findProduct = useCallback(
    productId => products.find(product => product.id === productId),
    [products]
  )

  const total = useMemo(
    () => cart.reduce(
      (total, cartProduct) => {
        const foundProduct = findProduct(cartProduct.id)
        const ammountPrice = foundProduct.price.discountedPrice * cartProduct.qty

        return total + ammountPrice
      },
      0
    ),
    [cart, findProduct]
  )

  return (
    <>
      <CartButton
        open={cartOpen}
        onClick={toogleCartOpen}
        qty={
          cart.reduce(
            (acc, cartProduct) => acc + cartProduct.qty,
            0
          )
        }>
        <BsCart4 />
      </CartButton>
      <CartArea open={cartOpen}>
        {
          cart.length
          ? (
            <>
              <h2>Produtos selecionados</h2>
              {
                cart.map((cartProduct, index) =>
                  <CartProduct
                    key={`${cartProduct.id}_${index}`}
                    product={cartProduct} />
                )
              }
              <Popconfirm
                placement="bottomRight"
                title={'Tem certeza que limpar o carrinho?'}
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={cleanCart}
                okText="Limpar"
                cancelText="Cancelar"
                okButtonProps={{ danger: true }}
              >
              <BtnClean>
                Limpar carrinho
              </BtnClean>
              </Popconfirm>
              <TotalArea>
                Total: ${total}
              </TotalArea>
            </>
          )
          : <Empty
              image={'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'}
              description="Carrinho vazio!" />
        }
      </CartArea>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired
}

export default Cart
