import {createSlice} from '@reduxjs/toolkit';

// creating a slice for the items
const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action)=>{
            return action.payload;
        }
        
    }
}
);

export const itemsActions = itemsSlice.actions; // we can later use this as function in our code
export default itemsSlice;