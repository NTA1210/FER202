import React from "react";
import { Card, Badge, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategoryById } from "../utils/mockData";

const FeaturedBanner = ({ article }) => {
  const category = getCategoryById(article.categoryId);
  const formattedDate = new Date(article.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="position-relative mb-5 rounded-4 overflow-hidden shadow">
      {/* Background image */}
      <img
        src={article.image_url}
        alt={article.title}
        className="w-100"
        style={{
          height: "500px",
          objectFit: "cover",
          transition: "transform 0.5s",
        }}
      />

      {/* Overlay gradient */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)",
          zIndex: 1,
        }}
      ></div>

      {/* Content on top of image */}
      <div
        className="position-absolute bottom-0 start-0 end-0 text-white p-4 p-sm-5"
        style={{ zIndex: 2 }}
      >
        <div className="d-flex align-items-center mb-3">
          <Badge bg="primary" className="me-3">
            {category?.name}
          </Badge>
          <small className="text-light opacity-75">{formattedDate}</small>
        </div>

        <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
          <h2 className="display-5 fw-bold text-white mb-3">{article.title}</h2>
        </Link>

        <p
          className="fs-5 opacity-85 text-light mb-4 clamp-1"
          style={{ maxWidth: "800px" }}
        >
          {article.description}
        </p>

        <div className="d-flex align-items-center">
          <Image
            src={article.authorAvatar}
            alt={article.authorName}
            roundedCircle
            width={40}
            height={40}
            className="me-3 border border-white"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-medium">{article.authorName}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
