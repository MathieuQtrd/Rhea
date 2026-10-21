import { configureStore } from '@reduxjs/toolkit'


import userReducer from '../features/user/userSlice'
import picturesReducer from '../features/pictures/picturesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        pictures: picturesReducer,
    },
})

