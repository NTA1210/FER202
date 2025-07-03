import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Container,
  Spinner,
  Row,
  Col,
  Alert,
  Image,
  Card,
} from "react-bootstrap";
import { searchArticles, getCategoryById } from "../utils/mockData";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setTimeout(() => {
        const searchResults = searchArticles(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 500);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

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

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h1 className="fw-bold">Search Results</h1>
        <p>
          {isLoading
            ? "Searching..."
            : results.length > 0
            ? `Found ${results.length} results for "${query}"`
            : `No results found for "${query}"`}
        </p>
      </div>

      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : results.length > 0 ? (
        <Row className="g-4">
          {results.map((article) => {
            const category = getCategoryById(article.categoryId);
            const formattedDate = new Date(
              article.publishDate
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <Col md={12} key={article.id}>
                <Card className="border-bottom pb-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small className="text-primary fw-semibold">
                        {category?.name}
                      </small>
                      <small className="text-muted">{formattedDate}</small>
                    </div>
                    <Card.Title
                      as={Link}
                      to={`/article/${article.id}`}
                      className="h5 text-decoration-none text-dark"
                    >
                      {highlightText(article.title, query)}
                    </Card.Title>
                    <Card.Text>
                      {highlightText(article.summary, query)}
                    </Card.Text>
                    <div className="d-flex align-items-center mt-3">
                      <Image
                        src={article.authorAvatar}
                        roundedCircle
                        height={30}
                        width={30}
                        className="me-2"
                      />
                      <small className="text-muted">{article.authorName}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
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
