import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Image as ImageIcon, Save, X } from "lucide-react";
import { toast } from "sonner";
import { Button, Card, Form, Container, Badge, Image } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { createArticle, getAllCategories } from "../actions/newsActions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const CreateArticlePage = () => {
  const navigate = useNavigate();
  const { loading, categories, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    pubDate: "",
    imageURL: "",
    category: [],
    creator: "",
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
  const handleChangeCategory = (e) => {
    if (formData.category.includes(e.target.value) || !e.target.value.trim())
      return;
    setFormData({
      ...formData,
      category: [...formData.category, e.target.value],
    });
  };
  const handleDeleteCategory = (c) => {
    setFormData({
      ...formData,
      category: formData.category.filter((item) => item !== c),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.imageURL.trim()) newErrors.imageURL = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("edit article", formData);
      dispatch(createArticle(formData));
      if (!error) {
        toast.success("Article updated successfully");
        navigate("/admin");
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getAllCategories());
    }
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
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
                value={formData?.title}
                onChange={handleChange}
                isInvalid={!!errors?.title}
                placeholder="Enter article title"
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData?.description}
                onChange={handleChange}
                isInvalid={!!errors?.description}
                placeholder="Brief summary of the article"
              />
              <Form.Control.Feedback type="invalid">
                {errors?.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category *</Form.Label>
              <Form.Select
                name="categoryId"
                value={formData?.category || ""}
                onChange={(e) => handleChangeCategory(e)}
                isInvalid={!!errors?.category}
                multiple
              >
                <option value="">Select a category</option>
                {categories &&
                  categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </Form.Select>
              <div className="d-flex align-items-center  mt-2">
                {formData?.category.map((c, index) => (
                  <Badge
                    key={index}
                    className="me-2 bg-gradient border border-0 rounded-pill fw-semibold"
                  >
                    {c} <X size={16} onClick={() => handleDeleteCategory(c)} />
                  </Badge>
                ))}
              </div>

              <Form.Control.Feedback type="invalid">
                {errors?.category}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL *</Form.Label>
              <Form.Control
                type="text"
                name="imageURL"
                value={formData?.imageURL}
                onChange={handleChange}
                isInvalid={!!errors?.imageURL}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.imageURL}
              </Form.Control.Feedback>
              {formData?.imageURL && (
                <div className="mt-2 position-relative">
                  <Image
                    src={formData?.imageURL}
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
                    onClick={() => setFormData({ ...formData, imageURL: "" })}
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
                value={formData?.content}
                onChange={handleChange}
                isInvalid={!!errors?.content}
                placeholder="Write your article content here... (HTML formatting supported)"
              />
              <Form.Control.Feedback type="invalid">
                {errors?.content}
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
