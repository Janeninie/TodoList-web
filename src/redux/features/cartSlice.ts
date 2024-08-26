import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
    items: { label: string; value: string }[];
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [{ label: "Text your bf \"I love you\"  ", value: "love" },
            { label: "Text your bf \"I miss you\"", value: "miss" },
            { label: "Smile~", value: "smile" },
            { label: "Hug your bf", value: "hug" },],
    } as CartState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        
    },
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;