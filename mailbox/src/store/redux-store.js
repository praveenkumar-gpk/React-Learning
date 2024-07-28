import { configureStore } from "@reduxjs/toolkit";
import SliceForMail from "../slices/SliceForMail";

const Store = configureStore({
    reducer:SliceForMail.reducer
})

export default Store;