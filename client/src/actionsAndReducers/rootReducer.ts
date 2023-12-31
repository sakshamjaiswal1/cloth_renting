import { combineReducers } from "@reduxjs/toolkit";

import globalDataReducer from "./globalData/reducer";

export const rootReducers = combineReducers({
  globalData: globalDataReducer,
});
