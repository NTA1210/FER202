import { get, post, put, del } from "../utils/httpRequest";

const getNews = async (params = {}) => {
  try {
    const response = await get("", params);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getTopNew = async (params = { category: "top" }) => {
  try {
    const response = await get("", params);
    const data = response.data;
    data.sort((a, b) => Date(b.pubDate) - Date(a.pubDate));
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const getLatestNews = async (params) => {
  try {
    console.log(params);

    const response = await get("/latest", params);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getArticleById = async (id) => {
  try {
    const response = await get(`/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createArticle = async (data) => {
  try {
    const response = await post("", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteArticle = async (id) => {
  try {
    const response = await del(`/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const searchArticles = async (params) => {
  try {
    const response = await get(`/search`, params);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await get("/categories");
    return response;
  } catch (error) {
    console.log(error);
  }
};

const editArticle = async (id, data) => {
  try {
    const response = await put(`/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const newsService = {
  getNews,
  getTopNew,
  getLatestNews,
  getArticleById,
  searchArticles,
  getAllCategories,
  editArticle,
  deleteArticle,
  createArticle,
};

export default newsService;
