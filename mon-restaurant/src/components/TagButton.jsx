import { useContext } from 'react'
import SearchContext from '../context/SearchContext'
import { Button } from 'react-bootstrap'

const TagButton = ({href, name, classList, variant}) => {

  const {setSearch} = useContext(SearchContext)
  return (
    <Button
      as="a"
      href={href} 
      className={classList} 
      onClick={(e) => {e.preventDefault(); setSearch(name)} }
      variant={variant}
    >
      {name}
    </Button>
  )
}

export default TagButton
