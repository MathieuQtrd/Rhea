import { Form, Button, InputGroup, Col } from "react-bootstrap";


import { useContext } from 'react'
// Appel du context
import SearchContext from '../context/SearchContext'

function SearchForm() {

  const {changeRecherche} = useContext(SearchContext)

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    // alert('hello')
    changeRecherche(formData.get('rechercher'))
  }

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder="Filtrer les articles"
            name="rechercher"
          />
          <Button variant="outline-dark" type="submit">Rechercher</Button>
        </InputGroup>
      </Form>
    </Col>
  )
}

export default SearchForm
