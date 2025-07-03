import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Image, Save, X } from "lucide-react";
import { toast } from "sonner";
import { categories } from "../utils/mockData";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image as RBImage,
} from "react-bootstrap";

const CreateArticlePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    categoryId: "",
    image: "",
    featured: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
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
      toast.success("Article created successfully");
      navigate("/admin");
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <Container className="py-5">
      <div className="d-flex align-items-center mb-4">
        <Button
          variant="light"
          onClick={() => navigate("/admin")}
          className="me-3"
        >
          <ArrowLeft size={20} />
        </Button>
        <h2>Create New Article</h2>
      </div>
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
                placeholder="Enter article title"
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
                placeholder="Brief summary of the article"
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
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
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
                label="Feature this article (displayed prominently on homepage)"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL *</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  isInvalid={!!errors.image}
                  placeholder="Enter image URL"
                />
                <span className="input-group-text bg-light border">
                  <Image size={16} />
                </span>
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
              {formData.image && (
                <div className="position-relative mt-2">
                  <RBImage
                    src={formData.image}
                    alt="Preview"
                    height={160}
                    rounded
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/640x360?text=Invalid+Image+URL";
                    }}
                  />
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => setFormData({ ...formData, image: "" })}
                    className="position-absolute top-0 end-0 m-1"
                  >
                    <X size={16} />
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
                placeholder="Write your article content here... (HTML formatting supported)"
              />
              <Form.Control.Feedback type="invalid">
                {errors.content}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="outline-secondary"
                onClick={() => navigate("/admin")}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                <Save size={16} className="me-1" /> Save Article
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateArticlePage;
