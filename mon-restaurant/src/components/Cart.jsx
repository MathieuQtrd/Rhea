import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Button, Modal, Table  } from 'react-bootstrap'

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(cart)

    return (
        <>
            <span className="btn btn-light cursor" onClick={handleShow}>
                <i className="bi bi-cart"></i> {cart.cartCount}
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.items.length === 0 ? (
                        <p>Votre panier est vide</p>
                    ) : (
                        <Table  bordered hover>
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Quantité</th>
                                    <th>Prix unitaire</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.items.map(item =>  (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unitPrice}</td>
                                </tr>
                            ))}
                            <tr><td colSpan="3" className="text-end"> Prix total : {cart.total} €</td></tr>
                            <tr><td colSpan="3" ><Button variant="danger" onClick={() => dispatch({ type: "clear" })}>Vider le panier</Button> </td></tr>
                            </tbody>
                        </Table>
                    )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal >
        </>
    )
}

export default Cart
