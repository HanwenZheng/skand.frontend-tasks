import axios from "axios";
import { GET_USERS, GET_USER, DELETE_USER, EDIT_USER } from "./types";

const proxy = "/api/v2";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(proxy + "/users");
    dispatch({
      type: GET_USERS,
      payload: res.data.users,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(proxy + `/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data.users,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const editUser = (id, edit) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(edit);
  try {
    await axios.patch(proxy + `/users/${id}`, body, config);
    dispatch({
      type: EDIT_USER,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(proxy + `/users/${userId}`);
    dispatch({
      type: DELETE_USER,
    });
    dispatch(getUsers());
  } catch (err) {
    console.error(err.message);
  }
};
