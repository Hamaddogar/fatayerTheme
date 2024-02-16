import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesList, productsList } from "../../src/constants/dummyData";
import { IRequest, defaultConfig, endpoints, getRequest } from "../store/axios";

export const fetchData = createAsyncThunk(
  "products/fetchList",
  async (params: IRequest, { rejectWithValue }) => {
    try {
      const response = await getRequest(
        endpoints.product.list,
        defaultConfig()
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create an async thunk to fetch data from an API
// const fetchData = createAsyncThunk("products/fetchData", async () => {
//   try {
//     const data = { categoriesList, productsList };
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });

export default fetchData;
