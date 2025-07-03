import { get, post, put, del } from "../utils/httpRequest";

const getNews = async ({ params = {} }) => {
  try {
    const response = await get({
      url: "",
      params,
    });
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

const getTopNews = async ({ params = { category: "top" } }) => {
  try {
    const response = await get({
      url: "",
      params,
    });
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

const newsService = {
  getNews,
  getTopNews,
};

export default newsService;
