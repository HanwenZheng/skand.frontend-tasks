import { GET_USERS, DELETE_USER } from "../Action/types";

const initialState = {
  users: [],
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case DELETE_USER:
    default:
      return state;
  }
};

export default user;
