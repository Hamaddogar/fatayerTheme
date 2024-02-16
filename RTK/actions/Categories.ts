import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesList, productsList } from "../../src/constants/dummyData";
import { IRequest, defaultConfig, endpoints, getRequest } from "../store/axios";

export const fetchCategoriesList = createAsyncThunk(
  "category/fetchList",
  async () => {
    try {
      const response = await getRequest(
        `${endpoints.category.list}`,
        defaultConfig()
      );
      return response;
    } catch (error: any) {
      return error.response.data;
      // return rejectWithValue(error.response.data);
    }
  }
);
// export default fetchCategoriesList;
