export const SET_LOADING = "SET_LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";

export const setLoading = (key) => {
  return {
    type: SET_LOADING,
    payload: key,
  };
};

export const clearLoading = (key) => {
  return {
    type: CLEAR_LOADING,
    payload: key,
  };
};
