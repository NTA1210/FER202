import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Button,
  Form,
  Spinner,
  Container,
  Card,
  Image,
  Badge,
} from "react-bootstrap";
import { ArrowLeft, Save, X } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchNewDetail,
  getAllCategories,
  editArticle,
} from "../actions/newsActions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const EditArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const { news, loading, error, newDetail, categories } = useSelector(
    (state) => state.news
  );
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

  const currentNew =
    news.find((item) => String(item.article_id) === id) ||
    (String(newDetail?.article_id) === id ? newDetail : null);

  useEffect(() => {
    if (!currentNew) {
      dispatch(fetchNewDetail(id));
    }
    if (categories.length === 0) {
      dispatch(getAllCategories());
    }
  }, []);

  useEffect(() => {
    if (currentNew) {
      setFormData({
        title: currentNew.title || "",
        description: currentNew.description || "",
        content: currentNew.content || "",
        pubDate: currentNew.pubDate || "",
        imageURL: currentNew.imageURL || "",
        category: currentNew.category || [],
        creator: currentNew.creator || "",
      });
    }
  }, [currentNew]);

  if (error) {
    toast.error(error);
  }
  if (loading) {
    return <LoadingSpinner />;
  }

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
      dispatch(editArticle(id, formData));
      if (!error) {
        toast.success("Article updated successfully");
        navigate("/admin");
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  const handleChangeCategory = (e) => {
    if (formData.category.includes(e.target.value)) return;
    setFormData({
      ...formData,
      category: [...formData.category, e.target.value],
    });
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading article data...</p>
      </Container>
    );
  }
  const handleDeleteCategory = (c) => {
    setFormData({
      ...formData,
      category: formData.category.filter((item) => item !== c),
    });
  };

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
                value={formData?.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
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
                {/* <option value="">Select category</option> */}
                {categories &&
                  categories?.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
              </Form.Select>
              <div className="d-flex align-items-center  mt-2">
                {formData?.category.map((c, index) => (
                  <Badge
                    key={index}
                    className="me-2 bg-gradient border border-0 rounded-pill fw-semibold"
                  >
                    {c} <X onClick={() => handleDeleteCategory(c)} />
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
              />
              <Form.Control.Feedback type="invalid">
                {errors?.content}
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
