import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

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
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.headers.authorization,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
