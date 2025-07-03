import { SET_LOADING, CLEAR_LOADING } from "../actions/uiActions";

const initialState = {
  loading: {},
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.key]: true,
        },
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.key]: false,
        },
      };
    default:
      return state;
  }
};
