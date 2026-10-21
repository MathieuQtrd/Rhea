import { useContext } from 'react'
import SearchContext from '../context/SearchContext'

const CategoriesList = ({ categories = [] }) => {

  const {search, setSearch} = useContext(SearchContext)

  return (
    <ul className="list-group">
      <li className="list-group-item bg-dark text-white ">Catégories</li>
      <li className="list-group-item"><a href="" className="link-underline-opacity-0 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover link-underline" onClick={(e) => {e.preventDefault(); setSearch("")} }>
            Voir tout
          </a></li>
      {categories?.map(categorie => (
        <li className="list-group-item " key={categorie.id}>
          <a href="" className="link-underline-opacity-0 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover link-underline" onClick={(e) => {e.preventDefault(); setSearch(categorie.name)} }>
            {categorie.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default CategoriesList
