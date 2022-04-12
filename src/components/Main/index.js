import { useContext } from "react"
import ProductsContext from "../../contexts/ProductsContext"
import Product from "../Product"
import { Container } from './styles'

const Main = () => {
  
  const { products } = useContext(ProductsContext)
  
  return (
    <Container>
      <h2>Listagem</h2>
      {
        products.map(product =>
          <Product key={product.id} product={product} />
        )
      }
    </Container>
  )
}

export default Main
