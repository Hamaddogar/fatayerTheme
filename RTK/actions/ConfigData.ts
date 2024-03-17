import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  defaultConfig,
  endpoints,
  getRequest,
  getRequestWithParams,
} from "../store/axios";
// Create an async thunk to fetch data from an API
const fetchData: any = createAsyncThunk(
  "configFile/fetchConfigData",
  async ({ hostName, designType }: any) => {
    try {
      if (hostName && designType) {
        // defaultConfig.headers["x-tenant-id"] = hostName;
        const response = await getRequest(
          `${endpoints.design}/config?domain=${hostName}&type=${designType}`,
          defaultConfig()
        );
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export default fetchData;
