import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import ProductReducer from './Product/ProductSlice';
import TrlReducer from './TrlList/TrlSlice';
import ConfigReducer from './Config/ConfigSlice';
import { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({
  ProductData: ProductReducer,
  TrlData: TrlReducer,
  ConfigData: ConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default rootReducer;