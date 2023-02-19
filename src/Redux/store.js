import { configureStore } from "@reduxjs/toolkit";

import menuTabSlice from "./menuTabSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menuTab: menuTabSlice,
    searchClicked: searchSlice,
  },
});

export default store;
