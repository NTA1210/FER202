import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList"; // Import ProductList component

function App() {
  return (
    <Container>
      <h1 className="my-4 text-center">Exercise 12 - Sản phẩm chọn lựa</h1>
      <ProductList />
    </Container>
  );
}

export default App;
