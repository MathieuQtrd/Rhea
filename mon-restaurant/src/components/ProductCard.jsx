import { useContext } from "react"
import TagButton from "./TagButton"
import CartButton from "./CartButton"
import { Col, Card } from 'react-bootstrap'
import CartContext from "../context/CartContext"

const ProductCard = ({ product, classList, col }) => {
    const { dispatch } = useContext(CartContext)



    return (
        <Col lg={col} className={classList}>
            <Card>
                <Card.Img variant="top" src={product.img.src} alt={product.img.alt} />
                <Card.Body>
                    <Card.Title className="card-title pb-3 border-bottom d-flex justify-content-between">
                        <span>{product.name}</span>
                        <span>{product.price} €</span>
                    </Card.Title>
                    {product.tags.length > 0 && (
                        <Card.Text className="py-2 border-bottom">
                            {product.tags?.map(tag => (
                                <TagButton
                                    key={tag.id}
                                    name={tag.name}
                                    href={tag.href}
                                    classList="me-1 mb-1 btn-sm"
                                    variant="outline-dark"
                                />
                            ))}
                        </Card.Text>
                    )}
                    <Col className="d-flex justify-content-between ">
                        <CartButton
                            id={product.id}
                            name="Retirer"
                            // href={""}
                            classList="w-25"
                            variant="outline-danger"
                            onButtonClick={(e) => dispatch({ type: "remove", product })}
                            iconClass="bi bi-cart-dash"
                        />
                        <CartButton
                            id={product.id}
                            name="Ajouter"
                            // href={""}
                            classList="w-25"
                            variant="outline-primary"
                            onButtonClick={(e) => dispatch({ type: "add", product })}
                            iconClass="bi bi-cart-plus"
                        />
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
