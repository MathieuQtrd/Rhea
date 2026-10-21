import { configureStore } from "@reduxjs/toolkit";
// configureStore :
    // permet de créer le store redux
    // le store est l'endroit central où seront stockées les données globale de l'application
    // le state est centralisé dans le store

import shoppingReducer from '../features/shoppingSlice'

// On crée le store :
export const store = configureStore({
    reducer: {
        // on appelle ici nos slice
        shopping: shoppingReducer,

        // Un seul store pour autant de slice que nécessaire
    }
})


//  Redux toolkit crée un store
// store : {
//   dispatch : function
//   getState: function
//   subscribe: function
// }

// On rend notre store disponible via un provider
    // <Provider store={store}>

// Pour appliquer nos actions :
    // import { useDispatch } from 'react-redux'
    // const dispatch = useDisptach()
    // dispatch(addItem(data))

// Pour récupérer le state
// on utiliser useSelector() qui passe par getState et subscribe
    // import { useSelector } from 'react-redux'
    // const shopping = useSelector((state) => state.shopping.items)
