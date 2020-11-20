import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Dice, DiceColor } from "../model/colors";

interface RowState {
  numbers: Dice[];
  checked: boolean[];
}

type RowsSliceState = Record<DiceColor, RowState>;

interface CheckActionPayload {
  color: DiceColor;
  index: number;
}

const redSlice = createSlice({
  name: "rows",
  initialState: {
    RED: {
      numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      checked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    YELLOW: {
      numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      checked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    GREEN: {
      numbers: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
      checked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    BLUE: {
      numbers: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
      checked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
  } as RowsSliceState,
  reducers: {
    check: (state, action: PayloadAction<CheckActionPayload>) => {
      state[action.payload.color].checked[action.payload.index] = true;
    },
  },
});

export const { check } = redSlice.actions;

export default redSlice.reducer;
