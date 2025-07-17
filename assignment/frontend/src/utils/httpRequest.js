import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3011/api/news",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// GET
export const get = async (url, params = {}, options = {}) => {
  try {
    const response = await httpRequest.get(url, {
      params: {
        ...params,
      },
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("GET error:", error);
    throw error;
  }
};

// POST
export const post = async (url, data = {}, options = {}) => {
  try {
    const response = await httpRequest.post(url, data, {
      params: {},
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("POST error:", error);
    throw error;
  }
};

// PUT
export const put = async (url, data = {}, options = {}) => {
  try {
    const response = await httpRequest.put(url, data, {
      params: {},
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("PUT error:", error);
    throw error;
  }
};

// DELETE
export const del = async (url, options = {}) => {
  try {
    const response = await httpRequest.delete(url, {
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("DELETE error:", error);
    throw error;
  }
};
