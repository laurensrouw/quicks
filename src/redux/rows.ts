import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Dice, DiceColor } from "../model/colors";
import { RootState } from "./store";

interface RowState {
  numbers: Dice[];
  checked: boolean[];
}

type RowsSliceState = Record<DiceColor, RowState>;

interface CheckActionPayload {
  color: DiceColor;
  index: number;
}

const rowsSlice = createSlice({
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

export const getDiceNumber = (color: DiceColor, index: number) => (
  state: RootState
) => {
  return state.rows[color].numbers[index];
};

export const getChecked = (color: DiceColor, index: number) => (
  state: RootState
) => {
  return state.rows[color].checked[index];
};

export const countChecked = (color: DiceColor) => (state: RootState) => {
  return state.rows[color].checked.filter((el) => el).length;
};

export const maxChecked = (color: DiceColor) => (state: RootState) => {
  return state.rows[color].checked.reduce(
    (prev, cur, idx) => (cur ? idx : prev),
    0
  );
};

function calcScore(row: boolean[]) {
  const scores = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
  const count = row.reduce((prev, cur) => (cur ? prev + 1 : prev), 0);
  const bonus = count >= 5 && row[10] ? 1 : 0;

  return scores[count + bonus];
}

export const getScore = (state: RootState) => {
  return {
    red: calcScore(state.rows.RED.checked),
    yellow: calcScore(state.rows.YELLOW.checked),
    green: calcScore(state.rows.GREEN.checked),
    blue: calcScore(state.rows.BLUE.checked),
  };
};

export const { check } = rowsSlice.actions;

export default rowsSlice.reducer;
