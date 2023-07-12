import axios from "axios"
import { GetDataPayload, UpdateDataPayload } from "./types";

const getProductDataApi = async(payload: GetDataPayload) => {
  const response = await axios.get(`https://api-test.innoloft.com/product/${payload.id}/`)
  return response
}

const updateProductDataApi = async(payload: UpdateDataPayload) => {
  return await axios.put(`https://api-test.innoloft.com/product/${payload.id}/`, payload);
}

const getTrlApi = async () => {
  return await axios.get('https://api-test.innoloft.com/trl/');
}

export {
  getProductDataApi,
  updateProductDataApi,
  getTrlApi,
}