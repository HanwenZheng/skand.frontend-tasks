import axios from "axios";
import { GET_USERS } from "./types";

const proxy = "/api/v2";

export const getUsers = () => async (dispatch) => {
  const res = await axios.get(proxy + "/users");
  dispatch({
    type: GET_USERS,
    payload: res.data.users,
  });
};
