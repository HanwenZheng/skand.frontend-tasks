import { GET_USERS } from "../Action/types";

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
    default:
      return state;
  }
};

export default user;
