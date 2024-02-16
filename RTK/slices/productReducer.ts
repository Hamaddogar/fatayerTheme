import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../actions/Products";

let initialState = {
  list: null as any,
  product: null as any,
  loading: false,
  error: null as any,
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data.data;
        state.status = "succeeded";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error =
          action.error.message !== undefined ? action.error.message : null;
      });
  },
});
export { fetchData };
export default productSlice.reducer;
