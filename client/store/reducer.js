import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isUser : JSON.parse(localStorage.getItem('user'))
}

export const userSlice = createSlice({
    name : "user" ,
    initialState,
    reducers : { 
      setUser : (state,action) => {
        state.isUser = action.payload
      }
    }
})

export const {setUser} = userSlice.actions
export const userReducer = userSlice.reducer;