import {createSlice} from '@reduxjs/toolkit';

// creating a slice for the items
const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action)=>{
             state.push(action.payload);
        },
        removeFromBag: (state, action)=>{
            return state.filter((itemId)=> itemId!==action.payload);
        }
    }
}
);

export const bagActions = bagSlice.actions; // we can later use this as function in our code
export default bagSlice;