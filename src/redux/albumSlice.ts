import { JholderAlbumType } from "@/hooks/useApi/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AlbumStateType = {
  albums: JholderAlbumType[] | null;
};

const initialState: AlbumStateType = {
  albums: null,
};

export const AlbumSlice = createSlice({
  name: "albumSlice",
  initialState,
  reducers: {
    setAlbums: (state, action: PayloadAction<JholderAlbumType[]>) => {
      state.albums = action.payload;
    },
  },
});

export default AlbumSlice.reducer;
export const { setAlbums } = AlbumSlice.actions;
