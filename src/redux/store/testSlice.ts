import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type testState = {
  isTestStarted: boolean;
}

const initialState: testState = {
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
