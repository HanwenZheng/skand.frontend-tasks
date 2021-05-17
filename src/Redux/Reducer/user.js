import { GET_USERS, GET_USER, DELETE_USER } from "../Action/types";

const initialState = {
  users: [],
  editUser: {},
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
        editUser: {},
      };
    case DELETE_USER:
    default:
      return state;
  }
};

export default user;
