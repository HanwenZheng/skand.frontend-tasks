import {
  GET_USERS,
  GET_USER,
  DELETE_USER,
  EDIT_USER,
  CREATE_USER,
  CLEAR_EDIT,
} from "../Action/types";

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
    case EDIT_USER:
    case CREATE_USER:
    case CLEAR_EDIT:
      return {
        ...state,
        editUser: null,
      };
    case DELETE_USER:
    default:
      return state;
  }
};

export default user;
