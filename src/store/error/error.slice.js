import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            return state = payload;
        },
        //при закрытии модалки с ошибкой очищаем стейт
        removeError: (state) => {
            return state = null;
        }
    }
})

export const { actions: errorActions, reducer: errorReducer } = errorSlice;