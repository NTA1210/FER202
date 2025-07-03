// components/AdminTableRow.jsx
import React from "react";
import { Button, ButtonGroup, Badge, Image } from "react-bootstrap";
import { Trash2, Pencil, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { getCategoryById } from "../utils/mockData";

const AdminTableRow = ({ article, onDelete }) => {
  const category = getCategoryById(article.categoryId);

  return (
    <tr>
      <td>{article.id}</td>
      <td className="fw-semibold">{article.title}</td>
      <td>
        <Badge bg="info" className="text-white">
          {category?.name || "Unknown"}
        </Badge>
      </td>
      <td className="d-flex align-items-center gap-2">
        <Image
          src={article.authorAvatar}
          alt={article.authorName}
          roundedCircle
          width={32}
          height={32}
        />
        <span>{article.authorName}</span>
      </td>
      <td>
        <Badge bg={article.featured ? "success" : "secondary"}>
          {article.featured ? "Featured" : "Published"}
        </Badge>
      </td>
      <td>
        <ButtonGroup size="sm">
          <Link
            to={`/article/${article.id}`}
            className="btn btn-outline-primary"
          >
            <Eye size={16} />
          </Link>
          <Link
            to={`/admin/edit/${article.id}`}
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
