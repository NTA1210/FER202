import userService from "../services/userService";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await userService.login({ username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    console.log("Error: ", error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
  }
};

export const logout = () => async (dispatch) => {
  await userService.logout();
  dispatch({ type: LOGOUT });
};

export const register = (username, password) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await userService.register({ username, password });
    dispatch({ type: REGISTER_SUCCESS, payload: response });
  } catch (error) {
    console.log("Error: ", error);
    dispatch({ type: REGISTER_FAILURE, payload: error.response.data });
  }
};
