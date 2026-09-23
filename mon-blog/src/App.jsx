import Header from './components/Header.jsx'
import Menu from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'
import SearchForm from './components/SearchForm'

import { useContext } from 'react'
// Appel du context
import SearchContext from './context/SearchContext'

import articles from './data/articles.json'

import { Container, Row } from "react-bootstrap";


function App() {

  // const [recherche, changeRecherche] = useContext(SearchContext)
  const {recherche} = useContext(SearchContext)

  const articlesFiltres = articles.filter(data => {
    const valeur = recherche.toLowerCase()
    const rechercheTitle = data.title.toLowerCase().includes(valeur)
    const rechercheTags = data.tags.some(tag =>
      tag.name.toLowerCase().includes(valeur)
    )
    return rechercheTags || rechercheTitle 
  })

  const articleList = articlesFiltres.map(data => (
    <Article 
      key={data.id}
      title={data.title}
      img={data.img}
      text={data.text}
      tags={data.tags}
    />
  ))

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Menu />
      <Header />     

      <Container>
        <Row className='mb-3'>
          <SearchForm />
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
