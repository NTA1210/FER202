import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEW_DETAIL_REQUEST,
  FETCH_NEW_DETAIL_SUCCESS,
  FETCH_NEW_DETAIL_FAILURE,
  FETCH_TOP_NEW,
} from "../actions/newsActions";

const initialState = {
  loading: false,
  error: null,
  news: [],
  newDetail: null,
  topNew: null,
  pagination: {
    page: 1,
    totalPages: 1,
    pageSize: 10,
    total: 0,
  },
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload.data,
        pagination: {
          page: action.payload.page,
          pageSize: action.payload.pageSize,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };
    case FETCH_NEWS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_NEW_DETAIL_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NEW_DETAIL_SUCCESS:
      return { ...state, loading: false, newDetail: action.payload };
    case FETCH_NEW_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_TOP_NEW:
      return { ...state, loading: false, topNew: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
