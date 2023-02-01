import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miId: "",
  miName: "",
  miNickname: "",
  miBirth: "",
  miGen: "",
  miPhoneNum: "",
  miAddress: "",
  miDetailAddress: "",
  miBusinessNum: "",
};

const bzLoggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      state.miId = action.payload.miId;
      state.miName = action.payload.miName;
      state.miNickname = action.payload.miNickname;
      state.miBirth = action.payload.miBirth;
      state.miPhoneNum = action.payload.miPhoneNum;
      state.miAddress = action.payload.miAddress;
      state.miDetailAddress = action.payload.miDetailAddress;
      state.miBusinessNum = action.payload.miBusinessNum;
    },
    logoutAccount: (state) => {
      state.miId = "";
      state.miName = "";
      state.miNickname = "";
      state.miBirth = "";
      state.miPhoneNum = "";
      state.miAddress = "";
      state.miDetailAddress = "";
      state.miBusinessNum = "";
    },
  },
});
export const { loginAccount, logoutAccount } = bzLoggedState.actions;
export default bzLoggedState;
