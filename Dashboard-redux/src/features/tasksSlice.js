import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
            id: 1,
            title: 'Faire le devis du projet Automobile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'high',
            done: false
        },
        {
            id: 2,
            title: 'Faire le slider du projet eShop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'low',
            done: true
        },
        {
            id: 3,
            title: 'Modifier le formulaire d\'ajout produit du projet eShop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'medium',
            done: false
        },
    ],

    filter: "all"

}


const tasksSlice = createSlice({
    name: 'tasks',

    initialState,

    reducers: {
        addTask: (state, action) => {
            state.items.unshift(action.payload);
        },

        deleteTask: (state, action) => {
            state.items = state.items.filter(
                (task) => task.id !== action.payload
            )
        },

        // Changer le statut acheté / non acheté
        toggleTaskStatus: (state, action) => {
            // action.payload : l'id du produit
            const item = state.items.find(
                (task) => task.id === action.payload
            )

            // on vérifie
            if(item) {
                // on inverse
                item.done = !item.done 
            }

        },

        // Filtre pour afficher les produit de la liste 
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }

})

export const { addTask, deleteTask, toggleTaskStatus, setFilter } = tasksSlice.actions 
export default tasksSlice.reducer 