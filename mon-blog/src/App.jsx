import Header from './components/Header.jsx'
import Menu from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'

import { useState } from 'react'

import articles from './data/articles.json'

import { Container, Row, Form, Button, InputGroup, Col } from "react-bootstrap";


function App() {

  const [recherche, changeRecherche] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    // alert('hello')
    changeRecherche(formData.get('rechercher'))
  }

  function handleTagClick(e, tagName) {
    e.preventDefault()    
    changeRecherche(tagName)
  }

  const articlesFiltres = articles.filter(data => {
    const valeur = recherche.toLowerCase()
    const rechercheTitle = data.title.toLowerCase().includes(valeur)
    const rechercheTags = data.tags.some(tag =>
      tag.name.toLowerCase().includes(valeur)
    )
    return rechercheTags ||  rechercheTitle
  })

  const articleList = articlesFiltres.map(data => (
    <Article 
      key={data.id}
      title={data.title}
      img={data.img}
      text={data.text}
      tags={data.tags}
      onTagClick={handleTagClick}
    />
  ))

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Menu />
      <Header />     

      <Container>
        <Row className='mb-3'>
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
        </Row>
        <Row>
          {articleList}
        </Row>
      </Container>

      <Footer />

    </>
  )
}

export default App
