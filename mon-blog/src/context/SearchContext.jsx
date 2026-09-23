import { useState, createContext, useContext } from 'react'
// createContext : nous permet de créer un contexte que l'on peut appeler sur plusieurs composant
// useState : permet de créer une variable d'état
// useContext : permet de récupérer les données d'un context (voir le hook perso en fin de fichier)

const SearchContext = createContext(); 
// création du context

export function SearchProvider({children}) {
    // On crée un provier (fournisseur)
    // children représente les components enfants qui auront donc accès au context

    const [recherche, changeRecherche] = useState('')
    // recherche => la variable d'état qui contient la valeur de la recherche
    // changeRecherche => fonction qui ne sert que à changer la valeur de la variable d'état "recherche"

    return (

        // Syntaxe <Context.Provider value=""> pour react <= 18        
        // <SearchContext.Provider value={{ recherche, changeRecherche }}>
        // Syntaxe <Context value=""> pour react >= 19 
        <SearchContext value={{ recherche, changeRecherche }}>
            {/* 
                value représente les données accessible depuis le contexte :
                    recherche
                    changeRecherche
            */}
            {children}
            {/* children représente les components enfants qui auront donc accès au context */}
        </SearchContext>    
        //</SearchContext.Provider>
    )

}


// On crée un hook personnalisé : useSearch
// Permet de simplifier l'appel de ce context
export function useSearch() {
    return useContext(SearchContext)
}


export default SearchContext