import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers: {
        login:(state, action) => {
            return action.payload
        },
        logout:(state) => {
            return null
        }
    }
})
export const selectUser = state => state.user
export const {login, logout} = userSlice.actions
export default userSlice.reducer