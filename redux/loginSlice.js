import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    uid: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.uid = action.payload.uid;
        }
    }
})

export const {reducerSetLogin} = loginSlice.actions;

export default loginSlice.reducer;