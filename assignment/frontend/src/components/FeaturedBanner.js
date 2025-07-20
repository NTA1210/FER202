import React from "react";
import { Card, Badge, Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedBanner = ({ article }) => {
  const formattedDate = new Date(article?.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="text-white mb-5 overflow-hidden shadow rounded-4 border-0">
      {/* Background image */}
      <div style={{ position: "relative", height: "500px" }}>
        <Card.Img
          src={article?.imageURL}
          alt={article?.title}
          style={{
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Card.ImgOverlay
          style={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "2rem 3rem",
          }}
        >
          <Row className="mb-3 align-items-center">
            <Col xs="auto">
              <Badge bg="primary">{article?.category}</Badge>
            </Col>
            <Col>
              <small className="text-light opacity-75">{formattedDate}</small>
            </Col>
          </Row>

          <Link
            to={`/article/${article.article_id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Title as="h2" className="display-5 fw-bold text-white mb-3">
              {article.title}
            </Card.Title>
          </Link>

          <Card.Text
            className="fs-5 text-light mb-4"
            style={{ maxWidth: "800px" }}
          >
            {article.description}
          </Card.Text>

          <div>
            <span className="fw-medium">By: {article.creator}</span>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  );
};

export default FeaturedBanner;
