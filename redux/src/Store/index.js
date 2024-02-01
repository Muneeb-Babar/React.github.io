
import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Slicetheme'

const store = configureStore({
    reducer: themeSlice.reducer
})

export default store