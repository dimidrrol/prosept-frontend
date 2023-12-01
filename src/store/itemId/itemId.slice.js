import { createSlice } from "@reduxjs/toolkit";
import { ITEM_ID } from "../../utils/constants";

const initialState = localStorage.getItem(ITEM_ID) || null;

export const itemIdSlice = createSlice({
    name: 'itemId',
    initialState,
    reducers: {
        setItemId: (state, { payload }) => {
            state = payload;
            localStorage.setItem(ITEM_ID, payload);
        },
        removeItemId: (state) => {
            state = null;
            localStorage.removeItem(ITEM_ID);
        }
    }
})

export const { actions: itemIdActions, reducer: itemIdReducer } = itemIdSlice;