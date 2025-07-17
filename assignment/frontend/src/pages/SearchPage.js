import React, { use, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Container,
  Spinner,
  Row,
  Col,
  Alert,
  Card,
  NavDropdown,
  Pagination,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { searchArticles } from "../actions/newsActions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const sortOptions = [
  { value: "newest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];
const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";

  const { news, loading, error, pagination } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchArticles({ q: q, category: category, page: page, sort: sort })
    );
  }, [q, category, page, sort, dispatch]);

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  const handleChangePage = (newPage) => {
    setSearchParams({ q: q, category: category, page: newPage, sort: sort });
  };
  const handleChangeSort = (newSort) => {
    setSearchParams({ q: q, category: category, sort: newSort, page: 1 });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container className="py-5">
      <div className="mb-4 d-flex justify-content-between">
        <div>
          <h1 className="fw-bold">Search Results</h1>
          <p>
            {loading
              ? "Searching..."
              : news.length > 0
              ? `Found ${news.length} results for "${q}"`
              : `No results found for "${q}"`}
          </p>
        </div>

        <NavDropdown
          title={`Sort ${sort ? "by: " + sort : ""}`}
          id="basic-nav-dropdown"
          className="border border-1 w-auto p-2 align-self-end mb-4 rounded fw-semibold d-flex justify-content-center align-items-center"
          style={{ height: "40px" }}
          align={{ sm: "end" }}
        >
          {sortOptions.map((option) => (
            <NavDropdown.Item
              key={option.value}
              onClick={() => handleChangeSort(option.value)}
            >
              {option.label}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : news.length > 0 ? (
        <Row className="g-4">
          {news.map((article) => {
            const formattedDate = new Date(article.pubDate).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );
            return (
              <Col md={12} key={article.id}>
                <Card className="border-bottom d-flex flex-row">
                  <div
                    style={{
                      width: "240px",
                      height: "180px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Card.Img
                      src={article.imageURL}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // 👈 giữ tỷ lệ, crop nếu cần
                      }}
                    />
                  </div>

                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        {Array.from({
                          length: Math.min(3, article.category.length),
                        }).map((_, index) => (
                          <small
                            key={index}
                            className="text-white fw-semibold border border-primary rounded-pill px-2"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #3b82f6, #4f46e5)", // blue-500 to indigo-600
                            }}
                          >
                            {article.category[index]}
                          </small>
                        ))}
                      </div>
                      <small className="text-muted">{formattedDate}</small>
                    </div>
                    <Card.Title
                      as={Link}
                      to={`/article/${article.article_id}`}
                      className="h5 text-decoration-none text-dark"
                    >
                      {highlightText(article.title, q)}
                    </Card.Title>
                    <Card.Text className="line-clamp-2">
                      {/* {highlightText(article.description, q)} */}
                      {article.description}
                    </Card.Text>
                    <div className="d-flex align-items-center mt-3">
                      <small className="text-muted">{article.creator}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          <Pagination className="mt-4 justify-content-center">
            {Array.from({ length: pagination.totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === Number(pagination.page)}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Row>
      ) : (
        <Alert variant="light" className="text-center py-5">
          <Search size={48} className="mb-3 text-muted" />
          <h4>No results found</h4>
          <p className="text-muted">
            We couldn't find any articles matching your search.
          </p>
          <ul className="text-start mx-auto" style={{ maxWidth: 300 }}>
            <li>Check your spelling</li>
            <li>Use more general keywords</li>
            <li>Use fewer keywords</li>
          </ul>
        </Alert>
      )}
    </Container>
  );
};

export default SearchPage;
