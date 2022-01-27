// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import accounts from "./accounts";

const rootReducer = combineReducers({
    accounts,
});

export default rootReducer;
