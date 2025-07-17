// components/AdminTableRow.jsx
import React from "react";
import { Button, ButtonGroup, Badge, Image } from "react-bootstrap";
import { Trash2, Pencil, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AdminTableRow = ({ article, onDelete }) => {
  return (
    <tr key={article.article_id} className="align-middle">
      <td>{article.article_id}</td>
      <td className="fw-semibold text-truncate" style={{ maxWidth: "400px" }}>
        {article.title}
      </td>
      <td>
        <Badge bg="info" className="text-white">
          {article.category[0]}
        </Badge>
      </td>
      <td className=" gap-2">
        <span>{article.creator || "Unknown"}</span>
      </td>
      <td>
        <Badge bg={article.featured ? "success" : "secondary"}>
          {article.featured ? "Featured" : "Published"}
        </Badge>
      </td>
      <td>
        <ButtonGroup size="sm">
          <Link
            to={`/article/${article.article_id}`}
            className="btn btn-outline-primary"
          >
            <Eye size={16} />
          </Link>
          <Link
            to={`/admin/edit/${article.article_id}`}
            className="btn btn-outline-secondary"
          >
            <Pencil size={16} />
          </Link>
          <Button variant="outline-danger" onClick={() => onDelete(article)}>
            <Trash2 size={16} />
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default AdminTableRow;
