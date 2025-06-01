import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "./Card";
import car from "./car.png";
function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light align-items-center px-0">
      <h1> Card Columns</h1>
      <div className="container d-flex justify-content-center gap-3">
        {/*  */}
        <Card
          img={car}
          text="Some quick example text to build on the card title and make up the bulk of the card's content"
          className={"bg-primary"}
        />
        <Card
          img={car}
          text="Some quick example text to build on the card title and make up the bulk of the card's content"
          className={"bg-warning"}
        />
        <Card
          img={car}
          text="Some quick example text to build on the card title and make up the bulk of the card's content"
          className={"bg-danger"}
        />
        {/*  */}
      </div>
    </div>
  );
}

export default App;
