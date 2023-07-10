import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TestState = {
  isTestStarted: boolean;
}

const initialState: TestState = {
  isTestStarted: false,
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setIsTestStarted(state, action: PayloadAction<boolean>) {
      state.isTestStarted = action.payload;
    }
  }
});

export const { setIsTestStarted } = testSlice.actions;

export default testSlice.reducer;
