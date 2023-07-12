import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getConfiguration } from './service';
import { ConfigSlice } from './types';

const initialState: ConfigSlice = {
  loading: false,
  error: false,
  config: {},
};

const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getConfiguration.pending, (state: ConfigSlice) => {
      state.loading = true;
      state.config = {};
    });
    builder.addCase(getConfiguration.fulfilled, (state: ConfigSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.config = action.payload.data;
      state.error = false;
    });
    builder.addCase(getConfiguration.rejected, (state: ConfigSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.config = {};
      state.error = true;
    });
  }
});

export default configSlice.reducer;