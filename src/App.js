import { useState } from 'react';
import Cart from './components/Cart';
import Main from './components/Main';
import Menu from './components/Menu'
import CartContext from './contexts/CartContext'

const App = () => {
  
  const [cart, setCart] = useState([{"id":"ee18624c-6679-45f3-bbce-579aca202680","size":8,"color":"yellow","qty":1},{"id":"ee18624c-6679-45f3-bbce-579aca202681","size":8,"color":"red","qty":1}])
  const [cartOpen, setCartOpen] = useState(true)

  const toogleCartOpen = () => {
    setCartOpen(!cartOpen)
  }

  const addProductToCart = product => {

    const foundProductIndex = cart.findIndex(
      cartProduct => (
        cartProduct.id === product.id
        && cartProduct.size === product.size
        && cartProduct.color === product.color
      )
    )

    if (foundProductIndex !== -1) {
      setCart(
        cart.map(
          (cartProduct, index) => 
            index === foundProductIndex
            ? ({
              ...cartProduct,
              qty: cartProduct.qty + 1
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
  }

  const removeProductFromCart = product => {
    setCart(
      cart.filter(cartProduct =>
        cartProduct.id !== product.id
        || cartProduct.size !== product.size
        || cartProduct.color !== product.color
      )
    )
  }
  
  return (
    <div>
      <Menu />
      <CartContext.Provider value={{
        cart,
        cartOpen,
        addProductToCart,
        removeProductFromCart,
        toogleCartOpen
      }}>
        <Cart cart={cart} />
        <Main />
      </CartContext.Provider>
    </div>
  );
}

export default App;
