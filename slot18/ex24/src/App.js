import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
