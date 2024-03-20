import { userReducer } from "./reducer";
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer : {user : userReducer}
})