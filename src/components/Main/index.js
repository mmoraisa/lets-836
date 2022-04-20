import { Button } from "antd"
import { useContext, useState } from "react"
import ProductsContext from "../../contexts/ProductsContext"
import ModalsContext from "../../contexts/ModalsContext"
import ModalCadastreProduct from "../modals/ModalCadastreProduct"
import Product from "../Product"
import { Container } from './styles'

const Main = () => {
  
  const [modalCadastreProductVisible, setModalCadastreProductVisible] = useState(false)

  const { products } = useContext(ProductsContext)

  const closeModalCadastreProduct = () => {
    setModalCadastreProductVisible(false)
  }
  
  const openModalCadastreProduct = () => {
    setModalCadastreProductVisible(true)
  }
  
  return (
    <ModalsContext.Provider value={{
      modalCadastreProduct: {
        close: closeModalCadastreProduct,
        open: openModalCadastreProduct,
        visible: modalCadastreProductVisible
      }
    }}>
      <Container>
        <h2>Listagem de produtos</h2>
        <Button onClick={openModalCadastreProduct}>Cadastrar produto</Button>
        {
          products.map(product =>
            <Product key={product.id} product={product} />
          )
        }
        <ModalCadastreProduct />
      </Container>
    </ModalsContext.Provider>
  )
}

export default Main
