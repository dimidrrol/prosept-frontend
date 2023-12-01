import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { api } from "./api/api";
import { itemIdReducer } from "./itemId/itemId.slice";
import { errorReducer } from "./error/error.slice";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  itemId: itemIdReducer,
  error: errorReducer,
});

const logger = createLogger({
  collapsed: true
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(logger)
})
