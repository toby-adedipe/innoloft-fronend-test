import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTrl } from './service';
import { TrlSlice } from './types';

const initialState: TrlSlice = {
  trlLoading: false,
  trlList: [],
  trlError: false,
};

const trlSlice = createSlice({
  name: 'Trl',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getTrl.pending, (state: TrlSlice) => {
      state.trlLoading = true;
      state.trlList = [];
    });
    builder.addCase(getTrl.fulfilled, (state: TrlSlice, action: PayloadAction<any>) => {
      state.trlLoading = false;
      state.trlList = action.payload.data;
      state.trlError = false;
    });
    builder.addCase(getTrl.rejected, (state: TrlSlice, action: PayloadAction<any>) => {
      state.trlLoading = false;
      state.trlList = [];
      state.trlError = true;
    });
  }
});

export default trlSlice.reducer;