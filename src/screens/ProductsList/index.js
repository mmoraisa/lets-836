import { useCallback, useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import Main from '../../components/Main';
import CartContext from '../../contexts/CartContext'
import ProductsContext from '../../contexts/ProductsContext'
import { LSK_CART } from '../../defaults/StorageKeys';
import ProductsAPI from '../../integrations/ProductsAPI';

const App = () => {
  
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [products, setProducts] = useState([])

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

  useEffect(
    () => {
      const storedCart = localStorage.getItem(LSK_CART)

      if (!storedCart) return;

      const parsedStoredCart = JSON.parse(storedCart)

      setCart(parsedStoredCart)
    },
    []
  )

  useEffect(
    () => {
      (async () => {
        const storedProducts = await ProductsAPI.fetchProducts()
        setProducts(storedProducts)
      })()
    },
    []
  )

  useEffect(
    () => {
      localStorage.setItem(LSK_CART, JSON.stringify(cart))
    },
    [cart]
  )
  
  return (
    <div>
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
