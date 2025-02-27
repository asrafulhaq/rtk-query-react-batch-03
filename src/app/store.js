import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";

// configure redix store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// export store
export default store;
