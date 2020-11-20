import { configureStore } from "@reduxjs/toolkit";

import rowReducer from "./rows";

const store = configureStore({
  reducer: rowReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
