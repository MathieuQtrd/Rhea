import ProductCard from "./ProductCard"
import { Col, Row } from 'react-bootstrap'

const ProductList = ({products}) => {
  return (
    <Col md="9">
      <Row>
      { products?.map(product => (
        <ProductCard 
            key={product.id}
            classList="mb-3"
            product={product}
            col={4}
        />
      )) }
      </Row>
    </Col>
  )
}

export default ProductList
