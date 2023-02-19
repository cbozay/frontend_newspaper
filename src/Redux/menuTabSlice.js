import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuTab: [],
};

export const menuTabSlice = createSlice({
  name: "menuTabSlice",
  initialState,
  reducers: {
    setMenuTab: (state, action) => {
      state.menuTab = action.payload;
    },
  },
});

export const { setMenuTab } = menuTabSlice.actions;
export default menuTabSlice.reducer;
