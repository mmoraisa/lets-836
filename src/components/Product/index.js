import airmax from './airmax.json'
import Button from '../Button'
import ColorDisplay from '../ColorDisplay'
import { BsFillHandbagFill, BsFillCartFill } from 'react-icons/bs'
import { ActionsArea, Collection, ColorArea, Container, InfoArea, ModelDescription, ModelLine, PhotoArea, Price, PriceArea, SizeArea } from './styles'

const Product = () => (
  <Container>
    <PhotoArea>
      <img src={airmax.photos[0]} />
    </PhotoArea>
    <InfoArea>
      <ModelLine>{airmax.model.line}</ModelLine>
      <Collection>{airmax.collection}</Collection>
      <ModelDescription>{airmax.model.description}</ModelDescription>
      <PriceArea>
        <Price>{airmax.price.discountedPrice}</Price>
        <Price scratched>{airmax.price.originalPrice}</Price>
      </PriceArea>
      <SizeArea>
        Size
        {
          airmax.model.sizes
            .map(size =>
              <Button>{size}</Button>
            )
        }
      </SizeArea>
      <ColorArea>
        Color
        {
          airmax.model.colors
            .map(({ hex }) =>
              <ColorDisplay color={hex} />
            )
        }
      </ColorArea>
      <ActionsArea>
        <Button
          icon={<BsFillHandbagFill />}
          onClick={() => {}}>Buy Now
        </Button>
        <Button
          icon={<BsFillCartFill />}
          onClick={() => {}}>Add to Cart
        </Button>
      </ActionsArea>
    </InfoArea>
  </Container>
)

export default Product
