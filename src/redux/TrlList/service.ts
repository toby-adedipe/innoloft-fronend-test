import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getTrlApi } from "./Api";
import { AxiosError } from "axios";


export const getTrl = createAsyncThunk(
  'product/update',
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getTrlApi();
      return res;
    } catch (err) {
      const error = err as AxiosError;
      if (error) {
        return Promise.reject(rejectWithValue(error?.response?.data))
      }
    }
  }
)
