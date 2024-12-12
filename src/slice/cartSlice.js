import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartItemsNumber : 0
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push(newItem);
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },        
        incrementCartItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = !state.items.some(item => item.id === newItem.id);
            if (existingItem) {
                state.cartItemsNumber = state.cartItemsNumber + 1;
            }
        },
        decrementCartItem: (state, action) => {
            const id = action.payload;
            const existingItem = !state.items.some(item => item.id === id);
            if (existingItem) {
                state.cartItemsNumber = state.cartItemsNumber - 1;
            }
        }
    }
})

export const { addItem, removeItem, incrementCartItem, decrementCartItem } = cartSlice.actions;

export default cartSlice.reducer;