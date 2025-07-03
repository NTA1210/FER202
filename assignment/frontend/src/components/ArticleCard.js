import React from "react";
import { Card, Badge, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategoryById } from "../utils/mockData";

const ArticleCard = ({ article }) => {
  const category = getCategoryById(article.categoryId);
  const formattedDate = new Date(article.publishDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <Card className="h-100 shadow-sm border-0 hover-shadow">
      <Link to={`/article/${article.id}`}>
        <Card.Img
          variant="top"
          src={article.image}
          alt={article.title}
          className="object-fit-cover"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <Badge className="me-2 bg-gradient border border-0 rounded-pill fw-semibold">
            {category?.name}
          </Badge>
          <small className="text-muted">{formattedDate}</small>
        </div>

        <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
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
          {article.summary}
        </Card.Text>

        <Row className="align-items-center">
          <Col xs="auto">
            <Image
              src={article.authorAvatar}
              roundedCircle
              width={32}
              height={32}
              alt={article.authorName}
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col>
            <small className="text-muted">{article.authorName}</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
