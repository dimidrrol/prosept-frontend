import { createSlice } from "@reduxjs/toolkit";
import { ITEM_ID } from "../../utils/constants";

const initialState = localStorage.getItem(ITEM_ID) || null;

export const itemIdSlice = createSlice({
    name: 'itemId',
    initialState,
    reducers: {
        setItemId: (state, { payload }) => {          
            localStorage.setItem(ITEM_ID, payload);
            return state = payload;
        },
        removeItemId: (state) => {
            localStorage.removeItem(ITEM_ID);
            return state = null;
        }
    }
})

export const { actions: itemIdActions, reducer: itemIdReducer } = itemIdSlice;