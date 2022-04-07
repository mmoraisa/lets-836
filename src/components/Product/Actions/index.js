import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"
import Button from "../../Button"
import { Container } from "./styles"

const Actions = () => (
  <Container>
    <Button
      icon={<BsFillHandbagFill />}
      onClick={() => {}}>Buy Now
    </Button>
    <Button
      icon={<BsFillCartFill />}
      onClick={() => {}}>Add to Cart
    </Button>
  </Container>
)

export default Actions
