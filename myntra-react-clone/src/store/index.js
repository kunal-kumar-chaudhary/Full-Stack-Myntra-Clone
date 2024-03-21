import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';

// configuring the store
const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
    }
)

export default myntraStore;


// actions were exported for
// after making slice, redux made store and then exported it.