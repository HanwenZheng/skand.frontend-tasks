import axios from "axios";
import { GET_USERS, GET_USER, DELETE_USER, EDIT_USER, CREATE_USER, CLEAR_EDIT } from "./types";

const proxy = "/api/v2";

// path: GET /users
// GET_USERS -> save all users data
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(proxy + "/users");
    dispatch({
      type: GET_USERS,
      payload: res.data.users,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// path: GET /users/:id
// GET_USER -> request and save user data by user_id
export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(proxy + `/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data.users,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// path: PATCH /users/:id
// EDIT_USER -> save edit and clear editUser
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
    console.log(err.message);
  }
};

// path: POST /users
// CREATE_USER -> save edit and clear editUser
export const createUser = (edit) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(edit);
  try {
    await axios.post(proxy + "/users", body, config);
    dispatch({
      type: CREATE_USER,
    });
  } catch (err) {
    console.log(err.message);
  }
};

// path: DELETE /users/:id
// DELETE_USER -> delete user by user_id
export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(proxy + `/users/${userId}`);
    dispatch({
      type: DELETE_USER,
    });
    dispatch(getUsers());
  } catch (err) {
    console.log(err.message);
  }
};

// CLEAR_EDIT -> discard edit and clear editUser
export const clearEdit = () => async (dispatch) => {
  dispatch({
    type: CLEAR_EDIT,
  });
};
