import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="h-100 shadow-sm border-0 hover-shadow">
      <Link to={`/article/${article["article_id"]}`}>
        <Card.Img
          variant="top"
          src={article?.imageURL}
          alt={article.title}
          className="object-fit-cover"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          {
            <Badge className="me-2 bg-gradient border border-0 rounded-pill fw-semibold">
              {article.category[0]}
            </Badge>
          }
          <small className="text-muted">{formattedDate}</small>
        </div>

        <Link
          to={`/article/${article.article_id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Title as="h3" className="fs-5 fw-bold text-dark mb-2">
            {article.title}
          </Card.Title>
        </Link>

        <Card.Text
          className="text-muted mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.description}
        </Card.Text>

        <Row className="align-items-center">
          <Col>
            <small className="text-muted">By: {article.creator}</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
