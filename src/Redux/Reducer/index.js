import { combineReducers } from "redux";
// for authentication and token
import auth from "./auth";
// for user data
import user from "./user";

export default combineReducers({ auth, user });
