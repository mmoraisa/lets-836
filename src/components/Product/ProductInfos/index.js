import { Collection, ModelDescription, ModelLine, Price, PriceArea } from "./styles"
import PropTypes from 'prop-types'

const ProductInfos = ({ product }) => (
  <>
    <ModelLine>{product.model.line}</ModelLine>
    <Collection>{product.collection}</Collection>
    <ModelDescription>{product.model.description}</ModelDescription>
    <PriceArea>
      <Price>{product.price.discountedPrice}</Price>
      <Price scratched>{product.price.originalPrice}</Price>
    </PriceArea>
  </>
)

ProductInfos.propTypes = {
  product: PropTypes.shape({
    collection: PropTypes.string.isRequired,
    model: PropTypes.shape({
      line: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.shape({
      discountedPrice: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired
}

export default ProductInfos
