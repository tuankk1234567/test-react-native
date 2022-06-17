import { combineReducers } from "redux"
import backgroundReducer from "./background/backgroundReducer"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
    backgroundScreen: backgroundReducer,
    user :userReducer
});

export default rootReducer