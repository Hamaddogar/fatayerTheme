import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../actions/ConfigData";


let initialState = {
  defaultData: null,
};



const configSlice = createSlice({
  name: "configFile",
  initialState,
  reducers: {
    setDefaultData: (state, action) => {
      state.defaultData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.defaultData = action?.payload?.design;
      })

  },
});
const { setDefaultData } = configSlice.actions;
export { fetchData, setDefaultData };
export default configSlice.reducer;


