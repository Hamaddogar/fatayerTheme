import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesList } from "../actions/Categories";

let initialState = {
  list: null as any,
  category: null as any,
  loading: false,
  error: null as any,
  status: "idle",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.loading = false;
        state.list = action.payload.data.data;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error =
          action.error.message !== undefined ? action.error.message : null;
      });
  },
});

export { fetchCategoriesList };
export default categorySlice.reducer;
