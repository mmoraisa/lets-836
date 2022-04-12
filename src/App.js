import { useCallback, useState } from 'react';
import products from './products.json'
import Cart from './components/Cart';
import Main from './components/Main';
import Menu from './components/Menu'
import CartContext from './contexts/CartContext'
import ProductsContext from './contexts/ProductsContext'

const App = () => {
  
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const toogleCartOpen = useCallback(
    () => setCartOpen(!cartOpen),
    [cartOpen]
  )

  const cartProductIsCurrentProduct = useCallback(
    (cartProduct, currentProduct) => (
      cartProduct.id === currentProduct.id
      && cartProduct.size === currentProduct.size
      && cartProduct.color === currentProduct.color
    ),
    []
  )

  const addProductToCart = useCallback(
    product => {
      const foundProductIndex =
        cart.findIndex(
          cartProduct =>
            cartProductIsCurrentProduct(cartProduct, product)
        )

      if (foundProductIndex !== -1) {
        setCart(
          cart.map(
            (cartProduct, index) => 
              index === foundProductIndex
              ? ({
                ...cartProduct,
                qty: parseInt(cartProduct.qty, 10) + 1
              })
              : cartProduct
          )
        )
      }
      else {
        setCart([
          ...cart,
          {
            ...product,
            qty: 1
          }
        ])
      }

      setCartOpen(true)
    },
    [cart, cartProductIsCurrentProduct]
  )

  const removeProductFromCart = useCallback(
    product => {
      setCart(
        cart.filter(cartProduct =>
          cartProduct.id !== product.id
          || cartProduct.size !== product.size
          || cartProduct.color !== product.color
        )
      )
    },
    [cart]
  )

  const cleanCart = useCallback(
    () => setCart([]),
    []
  )

  const changeProductQtyInCart = useCallback(
    (cartProduct, qty) => {
      setCart(
        cart.map(
          currentCartProduct =>
            cartProductIsCurrentProduct(cartProduct, currentCartProduct)
            ? ({ ...currentCartProduct, qty: parseInt(qty, 10) })
            : currentCartProduct
        )
      )
    },
    [cart, cartProductIsCurrentProduct]
  )
  
  return (
    <div>
      <Menu />
      <ProductsContext.Provider value={{
        products
      }}>
        <CartContext.Provider value={{
          cart,
          cartOpen,
          addProductToCart,
          cleanCart,
          changeProductQtyInCart,
          removeProductFromCart,
          toogleCartOpen,
        }}>
          <Cart cart={cart} />
          <Main />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
