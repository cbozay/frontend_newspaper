import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchClicked: null,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
  },
});

export const { setSearchClicked } = searchSlice.actions;
export default searchSlice.reducer;
