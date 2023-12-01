import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            state = payload;
        },
        //при закрытии модалки с ошибкой очищаем стейт
        removeError: (state) => {
            state = null;
        }
    }
})

export const { actions: errorActions, reducer: errorReducer } = errorSlice;