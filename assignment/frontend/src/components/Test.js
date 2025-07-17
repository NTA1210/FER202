import { useEffect } from "react";
import newsService from "../services/newsService";
function Test() {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getNews();
        console.log(response[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  });
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Test;
