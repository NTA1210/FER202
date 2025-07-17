import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Badge,
  Form,
  Card,
} from "react-bootstrap";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
} from "lucide-react";
import ArticleCard from "../components/ArticleCard";
import { useSelector, useDispatch } from "react-redux";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { fetchNewDetail } from "../actions/newsActions";

const ArticlePage = () => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80",
      content:
        "This is a fascinating article! I especially appreciated the insights on how this technology might impact everyday life.",
      date: "2 hours ago",
      likes: 5,
    },
    {
      id: 2,
      author: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
      content:
        "I have some concerns about the implications discussed in the third paragraph. Has anyone looked into the long-term effects?",
      date: "1 day ago",
      likes: 2,
    },
  ]);
  const { id } = useParams();
  const { news, loading, error, newDetail } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  const currentNew =
    news.find((item) => String(item.article_id) === id) ||
    (String(newDetail?.article_id) === id ? newDetail : null);

  useEffect(() => {
    if (!currentNew) {
      dispatch(fetchNewDetail(id));
    }
  }, [id, dispatch, currentNew]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "You",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=256&q=80",
        content: comment,
        date: "Just now",
        likes: 0,
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  if (loading) {
    return <LoadingSpinner message="Đang tải bài viết..." />;
  }

  if (!currentNew) {
    return (
      <Container className="py-5 text-center">
        <h2>Article not found</h2>
        <p>The article you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/" variant="primary">
          Return to Homepage
        </Button>
      </Container>
    );
  }

  const formattedDate = currentNew?.pubDate
    ? new Date(currentNew.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <div className="position-relative">
            <img
              src={currentNew?.imageURL}
              alt={currentNew?.title}
              className="w-100"
              style={{
                height: "500px",
                objectFit: "cover",
                transition: "transform 0.5s",
              }}
            />
            <div className="position-absolute bottom-0 start-0 p-4 text-white bg-dark bg-opacity-50 w-100">
              <div className="mb-2">
                <Badge bg="primary" className="me-2">
                  {currentNew.category[0]}
                </Badge>
                <small>{formattedDate}</small>
              </div>
              <h1>{currentNew.title}</h1>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h5>{currentNew.creator}</h5>
          <small className="text-muted">Published on {formattedDate}</small>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <div dangerouslySetInnerHTML={{ __html: currentNew.content }} />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h5>Share:</h5>
          <Button variant="outline-primary" className="me-2">
            <FacebookIcon size={18} />
          </Button>
          <Button variant="outline-info" className="me-2">
            <TwitterIcon size={18} />
          </Button>
          <Button variant="outline-secondary" className="me-2">
            <LinkedinIcon size={18} />
          </Button>
          <Button variant="outline-dark">
            <LinkIcon size={18} />
          </Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4 className="d-flex align-items-center">
            <MessageCircleIcon className="me-2" size={20} /> Comments (
            {comments.length})
          </h4>
          <Form onSubmit={handleCommentSubmit} className="mb-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <div className="mt-2 text-end">
              <Button
                type="submit"
                variant="primary"
                disabled={!comment.trim()}
              >
                Post Comment
              </Button>
            </div>
          </Form>

          {comments.map((c) => (
            <Card key={c.id} className="mb-3">
              <Card.Body className="d-flex">
                <Image
                  src={c.avatar}
                  roundedCircle
                  width={48}
                  height={48}
                  className="me-3"
                />
                <div>
                  <div className="d-flex justify-content-between">
                    <strong>{c.author}</strong>
                    <small className="text-muted">{c.date}</small>
                  </div>
                  <p className="mb-1">{c.content}</p>
                  <div className="d-flex align-items-center text-muted">
                    <Button variant="link" size="sm" className="p-0 me-2">
                      <ThumbsUpIcon size={16} className="me-1" /> Like (
                      {c.likes})
                    </Button>
                    <span className="me-2">•</span>
                    <Button variant="link" size="sm" className="p-0">
                      Reply
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      {relatedArticles.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h4>Related Articles</h4>
            <Row>
              {relatedArticles.map((article) => (
                <Col md={4} key={article.id} className="mb-4">
                  <ArticleCard article={article} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ArticlePage;
