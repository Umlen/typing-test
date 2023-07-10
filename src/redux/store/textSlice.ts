import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import getText from '../../api/getText';

import { TextType } from '../../types/type';

export const fetchText = createAsyncThunk<string, string, {rejectValue: string}>(
  'testSlice/fetchText',
  async function(sentences: string, {rejectWithValue}) {
    try {
      const response = await getText(sentences);
      return response.data;
    }
    catch (e) {
      return rejectWithValue( (e as Error).message );
    }
  }
);

type textState = {
  text: TextType[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: textState = {
  text: [],
  isLoading: false,
  error: null,
};

const textSlice = createSlice({
  name: 'textSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchText.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchText.fulfilled, (state, action) => {
        state.text = action.payload.split('').map(item => ( {char: item, class: ''} ));
        state.isLoading = false;
      })
      .addCase(fetchText.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default textSlice.reducer;
