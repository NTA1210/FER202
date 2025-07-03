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
  Spinner,
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
import {
  getArticleById,
  getRelatedArticles,
  getCategoryById,
} from "../utils/mockData";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setTimeout(() => {
        const fetchedArticle = getArticleById(Number(id));
        setArticle(fetchedArticle);
        setRelatedArticles(getRelatedArticles(Number(id)));
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

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

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (!article) {
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

  const category = getCategoryById(article.categoryId);
  const formattedDate = new Date(article.publishDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <div className="position-relative">
            <Image
              src={article.image}
              alt={article.title}
              fluid
              className="rounded"
            />
            <div className="position-absolute bottom-0 start-0 p-4 text-white bg-dark bg-opacity-50 w-100">
              <div className="mb-2">
                <Badge bg="primary" className="me-2">
                  {category?.name}
                </Badge>
                <small>{formattedDate}</small>
              </div>
              <h1>{article.title}</h1>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md="auto">
          <Image
            src={article.authorAvatar}
            roundedCircle
            width={60}
            height={60}
          />
        </Col>
        <Col>
          <h5>{article.authorName}</h5>
          <small className="text-muted">Published on {formattedDate}</small>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
