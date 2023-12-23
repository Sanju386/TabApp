import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabSlice";



const store = configureStore({
    reducer : {
        tab : tabSlice
    }
})

export default store


