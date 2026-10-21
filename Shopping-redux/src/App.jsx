import { useState } from 'react'
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap'

// appel de useSelector et de useDispatch
import { useSelector, useDispatch } from 'react-redux'

// On importe les actions que l'on souhaite utiliser
import { addItem, deleteItem, toggleStatus, setFilter } from './features/shoppingSlice'

export default function App() {

  const [product, setProduct] = useState('')

  const items = useSelector((state) => state.shopping.items)
  const filter = useSelector((state) => state.shopping.filter)

  console.log(items)
  console.log(filter)

  let filteredItems = items

  if (filter === 'bought') {
    filteredItems = items.filter((item) => 
      item.bought === true
    )
  }
  if (filter === 'notBought') {
    filteredItems = items.filter((item) => 
      item.bought === false
    )
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = product.trim()

    if (!product) return

    dispatch(addItem({
      id: Date.now(),
      name: newProduct,
      bought: false
    }))

    setProduct('')

  }

  // Affichez les produits rajoutés dans la liste dans le bloc prévu à cet effet
  // sur chaque ligne mettre un bouton supprimer et un bouton affichant acheté / non acheté

  return (
    <>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <h1>Liste d'achats</h1>
            <Form className='border p-3' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Produit</Form.Label>
                <Form.Control
                  type="text"
                  name='product'
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder='Exemple: Pain'
                />
              </Form.Group>
              <button className='btn btn-outline-primary' type="submit">Ajouter</button>
            </Form>
            <div className='d-flex justify-content-between my-3 p-3 border'>
              <button className='btn btn-outline-primary' onClick={() => dispatch(setFilter('all'))}>Tous</button>
              <button className='btn btn-outline-success' onClick={() => dispatch(setFilter('bought'))}>Achetés</button>
              <button className='btn btn-outline-warning' onClick={() => dispatch(setFilter('notBought'))}>Non achetés</button>
            </div>
            <ListGroup as='ul'>
              <ListGroup.Item as='li' active>
                Liste des produits
              </ListGroup.Item>
              {filteredItems.map((item) => (
                <ListGroup.Item as='li' key={item.id} className='d-flex justify-content-between'>
                  <span>
                    {item.name} : &nbsp;
                    {item.bought ? <span className='text-success'>acheté</span> : <span className='text-danger'>non acheté</span>}
                  </span>
                  <div>
                    <button className='btn btn-outline-success' onClick={() => dispatch(toggleStatus(item.id))}>
                      {item.bought ? 'annuler' : 'acheter'}
                    </button>
                    &nbsp;
                    <button className='btn btn-outline-danger' onClick={() => dispatch(deleteItem(item.id))}>
                      Supprimer
                    </button>
                  </div>
                </ListGroup.Item>
              ))}

            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}


