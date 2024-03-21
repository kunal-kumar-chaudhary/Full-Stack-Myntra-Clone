import {createSlice} from '@reduxjs/toolkit';

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        fetching: false,
    },
    reducers: {
        markFetchDone: (state)=>{
            state.fetchDone = true;
        },
        markFetchingStarted: (state)=>{
            state.fetching = true;
        },
        markFetchingFinished: (state)=>{
            state.fetching = false;
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;