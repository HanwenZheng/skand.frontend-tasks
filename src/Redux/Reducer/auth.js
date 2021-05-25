import { LOGIN_SUCCESS, LOGIN_FAIL } from "../Action/types";

const initialState = {
  token: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
