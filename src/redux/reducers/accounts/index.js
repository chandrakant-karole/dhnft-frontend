// ** ThemeConfig Import
import { SET_SETTING_REQUEST } from "../../types";

const initialState = {
  selectedAddress: "",
  latestBlockNumber: "",
  wrongNetwork: "false",
  walletType: "metamask",
};
const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING_REQUEST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default accountsReducer;
