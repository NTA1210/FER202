import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getArticleById, categories } from "../utils/mockData";
import {
  Button,
  Form,
  Spinner,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import { ArrowLeft, Image as ImageIcon, Save, X } from "react-bootstrap-icons";

const EditArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    categoryId: "",
    image: "",
    featured: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        const article = getArticleById(Number(id));
        if (article) {
          setFormData({ ...article });
        } else {
          toast.error("Article not found");
          navigate("/admin");
        }
        setIsLoading(false);
      }, 500);
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.categoryId) newErrors.categoryId = "Category is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Article updated successfully");
      navigate("/admin");
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading article data...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Button
        variant="light"
        onClick={() => navigate("/admin")}
        className="mb-3"
      >
        <ArrowLeft /> Back
      </Button>
      <h2 className="mb-4">Edit Article</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Summary *</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                isInvalid={!!errors.summary}
              />
              <Form.Control.Feedback type="invalid">
                {errors.summary}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category *</Form.Label>
              <Form.Select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                isInvalid={!!errors.categoryId}
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.categoryId}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Feature this article"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL *</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
              {formData.image && (
                <div className="mt-2 position-relative">
                  <Image
                    src={formData.image}
                    thumbnail
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/640x360?text=Invalid+Image+URL";
                    }}
                    className="w-100"
                  />
                  <Button
                    variant="light"
                    size="sm"
                    className="position-absolute top-0 end-0 m-2"
                    onClick={() => setFormData({ ...formData, image: "" })}
                  >
                    <X />
                  </Button>
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content *</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="content"
                value={formData.content}
                onChange={handleChange}
                isInvalid={!!errors.content}
              />
              <Form.Control.Feedback type="invalid">
                {errors.content}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => navigate("/admin")}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                <Save className="me-1" size={16} /> Update Article
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditArticlePage;
