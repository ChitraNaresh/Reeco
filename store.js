import { configureStore } from "@reduxjs/toolkit";
import {productsSlice} from "./productsArraySlice";
import { popupActionsSlice } from "./popupAction";

const rootReducer={
    productsArray:productsSlice.reducer,
    popupData:popupActionsSlice.reducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store