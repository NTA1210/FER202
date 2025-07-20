import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEW_DETAIL_REQUEST,
  FETCH_NEW_DETAIL_SUCCESS,
  FETCH_NEW_DETAIL_FAILURE,
  FETCH_TOP_NEW,
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_ALL_CATEGORIES_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
} from "../actions/newsActions";

const initialState = {
  loading: false,
  error: null,
  news: [],
  newDetail: null,
  topNew: null,
  categories: [],
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
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case FETCH_ALL_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        news: state.news.filter((item) => item.id !== action.payload),
      };
    case DELETE_ARTICLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_ARTICLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
