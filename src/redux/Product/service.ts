import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDataApi, updateProductDataApi } from "./Api";
import { AxiosError } from "axios";
import { GetDataPayload, UpdateDataPayload } from "./types";

export const getProductData = createAsyncThunk(
  'product/get',
  async (payload: GetDataPayload, { rejectWithValue}) => {
    try {
      const response = await getProductDataApi(payload);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      if (error) {
        return Promise.reject(rejectWithValue(error?.response?.data))
      }
    }
  }
)

export const updateProductData = createAsyncThunk(
  'product/update',
  async (payload: UpdateDataPayload, { rejectWithValue }) => {
    try {
      const res = await updateProductDataApi(payload);
      console.log('response from update: ', res);
      return res;
    } catch (err) {
      const error = err as AxiosError;
      if (error) {
        return Promise.reject(rejectWithValue(error?.response?.data))
      }
    }
  }
)