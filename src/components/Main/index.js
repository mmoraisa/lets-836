import products from './products.json'
import Product from "../Product"
import { Container } from './styles'

const Main = () => (
  <Container>
    <h2>Listagem</h2>
    {
      products.map(product =>
        <Product key={product.id} product={product} />
      )
    }
  </Container>
)

export default Main
