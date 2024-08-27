import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : [],
}
  
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, item) => {

        console.log(item);
        console.log('inside addItem of cart slice');
        state.items.push(item.payload)
        
      
    },
    removeItem: (state, item) => {
        //state.items.pop(item.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer