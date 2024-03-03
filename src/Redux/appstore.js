import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice"

const appstore = configureStore({
    reducer:{
       form:formReducer
    }
})

export default appstore;