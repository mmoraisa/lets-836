import { createContext } from "react";

export default createContext({
  modalCadastreProduct: {
    close: () => undefined,
    open: () => undefined,
    visible: false
  }
})
