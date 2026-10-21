import { createSlice } from '@reduxjs/toolkit'

// Récupération de l'utilisateur depuis le sessionStorage
const savedUser = sessionStorage.getItem('user')

const initialState = {
    currentUser: savedUser ? JSON.parse(savedUser) : null,

    isConnected: !!savedUser
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // inscription
        register: (state, action) => {
            // Récupère les utilisateurs déjà enregistrés dans le localStorage
            const usersJSON = localStorage.getItem('users')

            const users = usersJSON ? JSON.parse(usersJSON) : []

            users.push(action.payload)

            localStorage.setItem('users', JSON.stringify(users))
        }, 

        login: (state, action) => {
            const connectedUser = {
                username: action.payload.username,
                email: action.payload.email
            }

            state.currentUser = connectedUser

            state.isConnected = true 

            sessionStorage.setItem('user', JSON.stringify(connectedUser))
        },
        
        logout: (state, action) => {

        },
    }
})

export const { register, login, logout } = userSlice.actions  

export default userSlice.reducer