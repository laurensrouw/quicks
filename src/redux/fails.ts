import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const failsSlice = createSlice({
  name: "fails",
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const getFails = (state: RootState) => state.fails;

export const getNegativeScore = (state: RootState) => state.fails * 5;

export const { increment } = failsSlice.actions;

export default failsSlice.reducer;
