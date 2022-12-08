import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    idVacina: null,
}

export const vacinaSlice = createSlice({
    name: 'vacina',
    initialState: initialValues,
    reducers: {
        reducerSetVacina: (state, action) => {
            state.idVacina = action.payload.idVacina;
        }
    }
})

export const { reducerSetVacina } = vacinaSlice.actions;

export default vacinaSlice.reducer;