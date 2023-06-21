import { JHolderUserType } from "@/hooks/useApi/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
  users: JHolderUserType[] | null;
};

const initialState: UserStateType = {
  users: null,
};
export const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<JHolderUserType[]>) => {
      state.users = action.payload;
    },
  },
});

export default UserSlice.reducer;
