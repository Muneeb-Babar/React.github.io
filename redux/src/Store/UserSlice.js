

import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
    theme: null
    },
    reducers: {
        updateUser: (state,data) => {
            console.log(data)
            state.user = data.payload
        },
    }
})
export const { updateUser } = userSlice.actions
export default userSlice