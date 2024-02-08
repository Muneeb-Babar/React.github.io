
import { combineReducers } from 'redux'
import themeSlice from './Slicetheme'
import userSlice from './UserSlice'


const rootReducers=combineReducers({
    themeReducer:themeSlice.reducer,
    userReducer:userSlice.reducer
})
export default rootReducers