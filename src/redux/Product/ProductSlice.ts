import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductData, updateProductData } from './service';
import { ProductSlice } from './types';

const initialState: ProductSlice = {
  loading: false,
  productData: {
    description: '',
    categories: [],
    businessModels: [],
    company: {
      address: {
        longitude: '',
        latitude: '',
      }
    }
  },
  error: false,
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state: ProductSlice) => {
      state.loading = true;
      state.productData = {
        description: '',
        categories: [],
        businessModels: [],
        company: {
          address: {
            longitude: '',
            latitude: '',
          }
        }
      };
    });
    builder.addCase(getProductData.fulfilled, (state: ProductSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.productData = action.payload.data;
      state.error = false;
    });
    builder.addCase(getProductData.rejected, (state: ProductSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(updateProductData.pending, (state: ProductSlice) => {
      state.loading = true;
    });
    builder.addCase(updateProductData.fulfilled, (state: ProductSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(updateProductData.rejected, (state: ProductSlice, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = true;
    });
  }
});

export default productSlice.reducer;