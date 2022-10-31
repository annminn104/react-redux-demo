import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_LAST_USER } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case DELETE_LAST_USER:
      return {
        users: action.payload.splice(0, action.payload.length - 1),
      };

    default:
      return state;
  }
};

export default userReducer;
