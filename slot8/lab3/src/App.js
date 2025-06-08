import Header from "./Header";
import Banner from "./Banner";
import Menu from "./Menu";
import Booking from "./Booking";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid d-flex flex-column align-items-center p-0">
      <Header />
      <Banner />
      <Container
        fluid
        className="content d-flex flex-column gap-5 px-6 py-5 bg-gray"
      >
        <Menu />
        <Booking />
      </Container>
    </div>
  );
}

export default App;
