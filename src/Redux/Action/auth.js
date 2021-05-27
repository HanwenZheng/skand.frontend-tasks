import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

const proxy = "/api/v2";

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
    console.error(err.message);
    delete axios.defaults.headers.common["authorization"];
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const setInitHeaders = (token) => async (dispatch) => {
  if (token) axios.defaults.headers.common["authorization"] = token;
  else delete axios.defaults.headers.common["authorization"];
};
