import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalDetailsState {
  isBackgroundBlur: boolean;
  preloadImages: HTMLImageElement[];
}

const initialState: IGlobalDetailsState = {
  isBackgroundBlur: false,
  preloadImages: [] as HTMLImageElement[],
};

export const globalDetailsSlice = createSlice({
  name: "globalDetails",
  initialState,
  reducers: {
    setIsBackgroundBlur: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isBackgroundBlur: payload,
    }),
    setPreloadImages: (
      state,
      { payload }: PayloadAction<HTMLImageElement[]>
    ) => ({
      ...state,
      preloadImages: payload,
    }),
  },
});

export default globalDetailsSlice.reducer;
