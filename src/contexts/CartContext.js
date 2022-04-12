import { createContext } from "react";

export default createContext({
  cart: [],
  cartOpen: false,
  addProductToCart: product => undefined,
  cleanCart: () => undefined,
  changeProductQtyInCart: (cartProduct, qty) => undefined,
  removeProductFromCart: product => undefined,
  toogleCartOpen: () => undefined
})
