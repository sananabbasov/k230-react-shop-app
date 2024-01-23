import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        value: 0
    },
    reducers: {
        addToBasket: (state) => {
            state.value += 1;
        },
        addBasketByAmout: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToBasket, addBasketByAmout } = basketSlice.actions

export default basketSlice.reducer

