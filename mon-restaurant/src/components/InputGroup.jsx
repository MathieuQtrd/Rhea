import { useContext } from 'react'
import SearchContext from '../context/SearchContext'



const Input = ({ groupText, type, name, classList, placeholder }) => {

  const {search, setSearch} = useContext(SearchContext)

  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">{groupText}</span>
      <input type={type} name={name} className={classList} placeholder={placeholder} onChange={(e) => setSearch(e.target.value)}  />
    </div>
    
  )
}

export default Input
