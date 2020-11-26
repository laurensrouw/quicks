import { configureStore } from "@reduxjs/toolkit";

import failReducer from "./fails";
import rowReducer from "./rows";

const store = configureStore({
  reducer: {
    fails: failReducer,
    rows: rowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
