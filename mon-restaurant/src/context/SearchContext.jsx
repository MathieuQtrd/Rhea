import { useState, createContext } from 'react'
// createContext nous permet de mettre en place un context partageable entre les components
// useState permet de créer une variable d'état dans un component

const SearchContext = createContext()

export function SearchProvider({children}) {
    // on crée un fournisseur 
    // afin de rendre le context disponibles au éléments enfants

    const [search, setSearch] = useState("")

    return (
        // <SearchContext.Provider value={[search, setSearch]}>
        <SearchContext value={{search, setSearch}}>

            {/* value contient les données accessibles depuis le context */}

            {children}
            {/* children représente les éléments enfant qui auront accès au context */}

        </SearchContext>
    )

}

export default SearchContext