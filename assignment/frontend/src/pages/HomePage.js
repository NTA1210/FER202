import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FeaturedBanner from "../components/FeaturedBanner";
import ArticleCard from "../components/ArticleCard";
import {
  getFeaturedArticles,
  getRecentArticles,
  getArticlesByCategory,
  categories,
} from "../utils/mockData";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";

import newsService from "../services/newsService";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category");
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const topNews = await newsService.getTopNews()[0];
      console.log(topNews);
      setFeaturedArticle(topNews);
      const allArticles = await newsService.getNews();
      setArticles(allArticles);
      setPage(1);
      setHasMore(allArticles.length > articlesPerPage);
    };
  }, [categorySlug]);

  const displayedArticles = articles.slice(0, page * articlesPerPage);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setHasMore(articles.length > nextPage * articlesPerPage);
  };

  return (
    <Container className="py-4">
      {featuredArticle && <FeaturedBanner article={featuredArticle} />}

      <div className="mb-4">
        <h2 className="mb-4 border-bottom pb-2">
          {categorySlug
            ? `${
                categories.find((c) => c.slug === categorySlug)?.name
              } Articles`
            : "Latest Articles"}
        </h2>
        <Row>
          {displayedArticles.map((article) => (
            <Col key={article.id} xs={12} md={6} lg={4} className="mb-4">
              <ArticleCard article={article} />
            </Col>
          ))}
        </Row>

        {hasMore && (
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" onClick={loadMore}>
              Load More Articles
            </Button>
          </div>
        )}

        {displayedArticles.length === 0 && (
          <Alert variant="info" className="text-center mt-5">
            <h5>No articles found</h5>
            <p>Try selecting a different category</p>
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
