import axios from "axios";
import { LOGIN } from "./types";

const proxy = "/api/v2";

export const login = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email: "test@skand.io", password: "password" });
  try {
    const res = await axios.post(proxy + "/users/tokens", body, config);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};
