import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice/todoSlice'

export default configureStore({
    reducer:{
        todo: todoReducer
    }
})