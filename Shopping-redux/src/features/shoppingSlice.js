import { createSlice } from '@reduxjs/toolkit'
// createSlice permet de créer un slice (state + reducers + actions)

//  Ce fichier va nous permettre de faire 3 choses :
    // Définir le state initial
    // Définir les outils pour modifier le state
    // On prépare les actions redux

// Exemple de slice : userSlice, uiSlice, tasksSlice, productsSlice, commentsSlice ...

// On définit le state initial
const initialState = {
    items: [],
    //  un tableau pour stocker les produits à acheter

    filter: 'all',

    // ...
}

// On crée notre slice 
const shoppingSlice = createSlice({
    // Son nom 
    name: 'shopping',

    // on importe le state initial
    initialState,

    reducers: {
        // Ajouter un produit à la liste
        addItem: (state, action) => {
            // state : le state actuel (initialState puis selon l'évolution)
            // action.payload : les données reçues lors de l'appel (addItem(data))

            // action : 
                // action.payload : {} les données reçues
                // action.type : 'shopping/addItem' // l'action
                // action.meta : {} infos complementaires (timestamp ...)
                // action.error : si une erreur s'est produite

            state.items.unshift(action.payload)
            // Immer est une bibliotheque qui permet de modifier des objets
            // Normalement : on ne peut pas affecter directement, il faut que l'on passe par les outils permettant de modifier le state
            // Avec Immer on facilite l'écriture
            // En réalité :
                /*
                return (
                    ...state,
                    items: [action.payload, ...state.items]
                )
                */

        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },
        toggleStatus: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )
            if(item) {
                item.bought = !item.bought
            }
        }, 
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }

})

// Redux toolkit crée automatiquement 3 choses :
    // le state initial
    // Le reducer global : shoppingSlice.reducer
    // Les actions : shoppingSlice.actions
        // addItem
        // deleteItem
        // ...

// Pour appeler dans nos components une action : useDispatch(addItem(data))
    // en iterne : shopping/addItem

// Les actions nous permettent de faire une demande de changement
// Le reducer ensuite nous permet d'appliquer le changement

// On exporte les actions pour les components 
export const { addItem, deleteItem, toggleStatus, setFilter } = shoppingSlice.actions // le terme .actions est obligatoire

// On exporte le reducer pour le store
export default shoppingSlice.reducer // le terme .reducer est obligatoire
