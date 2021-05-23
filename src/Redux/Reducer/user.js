import { GET_USERS, GET_USER, DELETE_USER, EDIT_USER } from "../Action/types";

const initialState = {
  users: [],
  editUser: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_USER:
      return {
        ...state,
        editUser: payload,
      };
    case DELETE_USER:
    case EDIT_USER:
    default:
      return state;
  }
};

export default user;
