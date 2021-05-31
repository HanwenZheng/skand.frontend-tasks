import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../Action/types";

// token: keep token in Redux & Local Storage :String
const initialState = {
  token: localStorage.getItem("token"),
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
