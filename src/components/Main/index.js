import { Button } from "antd"
import airmax from './airmax.json'
import Product from "../Product"
import UserCard from "../UserCard"
import { Container, StyledButton, StyledUserCard } from './styles'

const Main = () => (
  <Container>
    <h2>Listagem</h2>
    <Product product={airmax} />
    <Product product={airmax} />
  </Container>
)

export default Main
