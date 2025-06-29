import newsList from "../data/newsList";
import Card from "react-bootstrap/Card";

function News() {
  return (
    <div className="p-3">
      <h2 className="text-danger mb-4">News Category</h2>
      <div className="row">
        {newsList.map((news, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={news.images} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <Card.Link href="#">Read more</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
