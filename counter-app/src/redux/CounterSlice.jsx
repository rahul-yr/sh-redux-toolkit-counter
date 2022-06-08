import { createSlice } from "@reduxjs/toolkit";

// Create the initial state of the counter
const initialState = {
    counter : 0
}

// Create the slice of the state
const counterSlice = createSlice({
    // The name of the slice
    name : 'counter',
    // The initial state of the slice
    initialState,
    // The reducers of the slice
    reducers : {
        // Increment the counter by 1 when the increment action is dispatched
        incrementAction : (state) => {
            // Increment the counter by 1
            state.counter = state.counter + 1;
        },
        // Decrement the counter by 1 when the decrement action is dispatched
        decrementAction : (state) => {
            // Decrement the counter by 1
            state.counter = state.counter - 1;
        }
    }
});

// Export the actions of the slice
export const {incrementAction , decrementAction } = counterSlice.actions;
// Export the reducer of the slicel
export default counterSlice.reducer;