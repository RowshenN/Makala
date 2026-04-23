import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import { issueApi } from "./services/issueApi";
import { categoryApi } from "./services/categoryApi";
import { magazineApi } from "./services/magazineApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [issueApi.reducerPath]: issueApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [magazineApi.reducerPath]: magazineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      issueApi.middleware,
      categoryApi.middleware,
      magazineApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
