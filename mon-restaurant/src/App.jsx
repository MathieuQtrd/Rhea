import { useContext } from 'react'

import { Container, Row } from 'react-bootstrap'

import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'

import products from './data/products.json'

import './App.css'

import SearchContext from './context/SearchContext'




function App() {

  const { search, setSearch } = useContext(SearchContext)

  const allCategories = products.map(product => product.category)

  const categories = allCategories.filter((category, index, array) => {
    return array.findIndex(c => c.id === category.id) === index;
  })

  // const allTags = [ ... new Set(products.map(product => product.tags))]
  const allTags = products.flatMap(product => product.tags)
  const tags = allTags.filter((tag, index, array) => {
    return array.findIndex(t => t.id === tag.id) === index;
  })

  const filterProducts = products.filter(product => {
    const value = search.toLowerCase()
    const productTitle = product.name.toLowerCase().includes(value)
    const productPrice = product.price <= value
    const productCategory = product.category.name.toLowerCase().includes(value)
    const productTag = product.tags.some(tag =>
      tag.name.toLowerCase().includes(value)
    )

    return productTitle || productTag || productCategory || productPrice
  })

  console.log(categories)
  console.log(tags)
  return (
    <>
      <Header />
      <Menu />
      <Container as="main" className=" mt-5">
        <Row>
          <Sidebar
            categories={categories}
            tags={tags}
          />
          <ProductList
            products={filterProducts}
          />
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
