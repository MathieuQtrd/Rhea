import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createAsyncThunk sert à gérer les actions asynchrones dans redux
    // les données ne sont pas disponibles immédiatement !!!
    // permet la gestion des appels API 

    // Crée automatiquement :
        // pictures/fetchPictures/pending : en cours
        // pictures/fetchPictures/fulfilled : succès
        // pictures/fetchPictures/rejected : en cas d'erreur

    // Avec createAsyncThunk on ne remplit pas nos actions dans reducer, on passera par extraReducers

export const fetchPictures = createAsyncThunk('pictures/fetchPictures', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const data = await response.json()

    return data.map((picture) => ({
        id: picture.id,
        title: picture.title,
        url: picture.url,
        thumbnailUrl: picture.thumbnailUrl,
    }))

})    


const initialState = {
    items: [],
    filter: 'all',
    loading: false,
    error: null,
}

const picturesSlice = createSlice({
    name: 'pictures',

    initialState,

    reducers: {
        // ...
        setFilter: (state, action) => {
            
        }
    },
    extraReducers: (builder) => {
        // extraReducers permet de réagir  à des actions qui ne sont pas définies dans le slice
        // builder est un objet fourni par redux concernant extraReducers
        // builder nous permet de déclarer des réaction à des actions
        builder
        .addCase(fetchPictures.pending, (state) =>  {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPictures.fulfilled, (state, action) =>  {
            state.loading = false
            state.items = action.payload // on place les données reçues
        })
        .addCase(fetchPictures.rejected, (state) =>  {
            state.loading = false
            state.error = 'Erreur lors de chargement des images'
        })    
        // .addCase(createPictures.pending, (state) =>  {})
        // .addCase(createPictures.fulfilled, (state) =>  {})
        // .addCase(createPictures.rejected, (state) =>  {})
    }
})

export const { setFilter } = picturesSlice.actions 
export default picturesSlice.reducer