import { useContext } from 'react'
// import SearchContext from '../context/SearchContext'
import { Button } from 'react-bootstrap'

const TagButton = ({href, name, classList, variant, onButtonClick, iconClass}) => {

  return (
    <Button
      as="span"
      className={classList} 
      variant={variant}
      onClick={onButtonClick}
      title={name}
    >
      <i className={iconClass}></i>
    </Button>
  )
}

export default TagButton
