// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import {accountsReducer, addressReducer} from "./accounts/index";
// import addressReducer from './accounts/index'

const rootReducer = combineReducers({
    accounts1:accountsReducer,
    addressReducer1:addressReducer
});

export default rootReducer;
