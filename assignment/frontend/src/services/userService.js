import { post } from "../utils/httpRequest";

const login = async (data) => {
  try {
    const response = await post("/login", data);
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  } catch (error) {
    throw error;
  }
};
const logout = async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    throw error;
  }
};

const register = async (data) => {
  try {
    const response = await post("/register", data);
    return response;
  } catch (error) {
    throw error;
  }
};

const userService = {
  login,
  logout,
  register,
};

export default userService;
