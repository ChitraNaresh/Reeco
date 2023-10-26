import { createSlice } from "@reduxjs/toolkit";


export const popupActionsSlice = createSlice({
  name: "popupData",
  initialState: {
    dataOfPopup: {},
  },
  reducers: {
    addProduct: (state,action) => {
      state.dataOfPopup=action.payload
    },
  },
});

export const { addProduct} = popupActionsSlice.actions;