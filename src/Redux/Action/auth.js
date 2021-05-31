import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { toast } from "react-hot-toast";

const proxy = "/api/v2";

// Login (Action)
// path: POST /users/tokens
// LOGIN_SUCCESS -> set axios Header, save Token to Local Storage
// LOGIN_FAIL -> remove axios Header, remove Token from Local Storage
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(proxy + "/users/tokens", body, config);
    axios.defaults.headers.common["authorization"] = res.headers.authorization;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.headers.authorization,
    });
  } catch (err) {
    console.log(err.message);
    delete axios.defaults.headers.common["authorization"];
    toast.error("Invalid credentials!");
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout (Action)
// path: DELETE /users/tokens
// LOGOUT -> remove axios Header, remove Token from Local Storage
export const logout = () => async (dispatch) => {
  try {
    await axios.delete(proxy + "/users/tokens");
  } catch (err) {
    console.log(err.message);
  }
  dispatch({
    type: LOGOUT,
  });
};

// Called once on App render (page refresh)
// -> set axios Header according to last session (from Local Storage)
export const initHeadersFromStorage = (token) => async (dispatch) => {
  if (token) axios.defaults.headers.common["authorization"] = token;
  else delete axios.defaults.headers.common["authorization"];
};
