import newsService from "../services/newsService";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const FETCH_NEW_DETAIL_REQUEST = "FETCH_NEW_DETAIL_REQUEST";
export const FETCH_NEW_DETAIL_SUCCESS = "FETCH_NEW_DETAIL_SUCCESS";
export const FETCH_NEW_DETAIL_FAILURE = "FETCH_NEW_DETAIL_FAILURE";
export const FETCH_TOP_NEW = "FETCH_TOP_NEW";
export const FETCH_ALL_CATEGORIES_SUCCESS = "FETCH_ALL_CATEGORIES_SUCCESS";
export const FETCH_ALL_CATEGORIES_FAILURE = "FETCH_ALL_CATEGORIES_FAILURE";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";
export const CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS";
export const CREATE_ARTICLE_FAILURE = "CREATE_ARTICLE_FAILURE";

export const fetchNews = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.getNews();
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
  }
};

export const fetchNewDetail = (id) => async (dispatch) => {
  dispatch({ type: FETCH_NEW_DETAIL_REQUEST });
  try {
    const response = await newsService.getArticleById(id);
    console.log(response);

    dispatch({ type: FETCH_NEW_DETAIL_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_NEW_DETAIL_FAILURE, payload: error.message });
  }
};

export const getLatestNews = (params) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.getLatestNews(params);
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
  }
};

export const getTopNew = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.getTopNew();
    dispatch({ type: FETCH_TOP_NEW, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
  }
};

export const searchArticles = (query) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.searchArticles(query);
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.getAllCategories();
    dispatch({ type: FETCH_ALL_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_CATEGORIES_FAILURE, payload: error.message });
  }
};

export const editArticle = (id, data) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.editArticle(id, data);
    console.log("response", response);

    dispatch({ type: FETCH_NEW_DETAIL_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_NEW_DETAIL_FAILURE, payload: error.message });
  }
};
export const deleteArticle = (id) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.deleteArticle(id);
    dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: DELETE_ARTICLE_FAILURE, payload: error.message });
  }
};

export const createArticle = (data) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });
  try {
    const response = await newsService.createArticle(data);
    dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: CREATE_ARTICLE_FAILURE, payload: error.message });
  }
};
