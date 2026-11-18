// Import des outils redux toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// createSlice permet de créer un slice redux
// createAsyncThunk permet de gérer des actions asynchrones (API)

// Impport de notre outil pour lancer nos requetes HTTP (fetch)
import { apiRequest } from '../../api/apiClient'

// Récupération de l'utilisateur depuis le localStorage
const storedUser = localStorage.getItem('user')
// Récupération du token depuis le localStorage
const storedToken = localStorage.getItem('token')

// Etat initial
const initialState = {
    // Si un utilisateur est connecté sinon null
    user: storedUser ? JSON.parse(storedUser) : null, 
    token: storedToken || null,

    // Etat de nos requetes HTTP
    status: 'idle',
    // idle : aucune requete
    // loading : chargement
    // succeeded : succès
    // failed : erreur

    error: null,
}

export const loginUser = createAsyncThunk(
    // Nom unique de l'action redux
    'auth/loginUser',

    // fonction asynchrone exécutée lors du dispatch
    // rejectWithValue est une fonction fournie par createAsyncThunk
    // permet de récupérer une erreur personnalisée : dans notre cas l'erreur potentielle renvoyée par l'API

    async(credentials, { rejectWithValue}) => {
        try {

            return await apiRequest('/auth/login.php', {
                // methode : post
                method: 'POST',

                // conversion des données au format JSON
                body: JSON.stringify(credentials)
            })

        } catch(error) {

            return rejectWithValue(error.message)

        }
    }

)

export const registerUser = createAsyncThunk(
    // Nom unique de l'action redux
    'auth/registerUser',

    // fonction asynchrone exécutée lors du dispatch
    // rejectWithValue est une fonction fournie par createAsyncThunk
    // permet de récupérer une erreur personnalisée : dans notre cas l'erreur potentielle renvoyée par l'API

    async(formData, { rejectWithValue}) => {
        try {

            return await apiRequest('/auth/register.php', {
                // methode : post
                method: 'POST',

                // conversion des données au format JSON
                body: JSON.stringify(formData)
            })

        } catch(error) {

            return rejectWithValue(error.message)
            
        }
    }

)


// Création du slice auth
const authSlice = createSlice({
    // nom du slice :
    name: 'auth',

    // Etat initial 
    initialState,

    // Reducers synchrones
    reducers: {
        // logout

        // suppression des messages d'erreurs

        // ...
    },

    extraReducers: (builder) => {
        builder 

            // connexion utilisateur
            .addCase(loginUser.pending, (state) => {
                // passage en mode chargement
                state.status = 'loading'
                // suppression des précédente erreurs potentielles
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded'

                // stockage de l'utilisateur connecté
                state.user = action.payload 

                // Stockage du token
                state.token = action.payload.accessToken

                // sauvegarde dans le localstorage
                localStorage.setItem(
                    'user',
                    JSON.stringify(action.payload)
                )

                localStorage.setItem(
                    'token',
                    JSON.stringify(action.payload.accessToken)
                )
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })

            // inscription utilisateur
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.status = 'succeeded'               
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

// depuis les reducers
// authSlice.actions

// export du reducer redux
// sera utilisé dans configureStore() app/store
export default authSlice.reducer
