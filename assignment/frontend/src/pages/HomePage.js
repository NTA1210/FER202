import React, { useEffect, useState } from "react";
import FeaturedBanner from "../components/FeaturedBanner";
import ArticleCard from "../components/ArticleCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getTopNew, getLatestNews } from "../actions/newsActions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const { news, topNew, loading, error, pagination } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        dispatch(getLatestNews({ page: page })),
        dispatch(getTopNew()),
      ]);
    };
    fetchAll();
  }, [page, dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
  if (news.length === 0) {
    return (
      <Alert variant="info" className="text-center mt-5">
        <h5>No articles found</h5>
        <p>Try selecting a different category</p>
      </Alert>
    );
  }

  return (
    <Container className="py-4">
      {topNew && <FeaturedBanner article={topNew} />}

      <div className="mb-4">
        <h2 className="mb-4 border-bottom pb-2">Latest Articles</h2>
        <Row>
          {Array.isArray(news) &&
            news.map((article) => (
              <Col
                key={article.article_id}
                xs={12}
                md={6}
                lg={4}
                className="mb-4"
              >
                <ArticleCard article={article} />
              </Col>
            ))}
        </Row>

        {pagination.totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => setSearchParams({ page: page - 1 })}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setSearchParams({ page: page + 1 })}
              disabled={page === pagination.totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
