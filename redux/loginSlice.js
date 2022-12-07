import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    uid: null,
    userName: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.uid = action.payload.uid;
            state.userName = action.payload.userName;
        }
    }
})

export const {reducerSetLogin} = loginSlice.actions;

export default loginSlice.reducer;