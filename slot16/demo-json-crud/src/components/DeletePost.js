import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Alert } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Xóa bài viết qua API
   * @function
   * @async
   * @throws {Error} Lỗi khi xóa bài viết
   * @returns {undefined}
   */
  /*******  ef5cf098-837b-4046-a0e2-34f53e91fe95  *******/ const handleDelete =
    async () => {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        navigate("/posts"); // Quay lại danh sách sau khi xóa
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
        alert("Xảy ra lỗi khi xóa bài viết.");
      }
    };

  const handleCancel = () => {
    navigate("/posts"); // Hủy xóa và quay lại danh sách
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "500px" }}>
      <Alert variant="danger">
        <h4>Bạn có chắc chắn muốn xóa bài viết này?</h4>
        <p>Hành động này không thể hoàn tác.</p>
        <div className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleDelete}>
            ✅ Xóa
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            ❌ Hủy
          </Button>
        </div>
      </Alert>
    </Container>
  );
};

export default DeletePost;
