import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConfigurationApi } from "./Api";
import { AxiosError } from "axios";

export const getConfiguration = createAsyncThunk(
  'product/config',
  async (payload: string, { rejectWithValue }) => {
    try {
      const res = await getConfigurationApi(payload);
      return res;
    } catch (err) {
      const error = err as AxiosError;
      if (error) {
        return Promise.reject(rejectWithValue(error?.response?.data))
      }
    }
  }
)