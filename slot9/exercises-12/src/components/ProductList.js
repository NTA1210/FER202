import React, { useState } from "react";

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Sản phẩm A" },
    { id: 2, name: "Sản phẩm B" },
    { id: 3, name: "Sản phẩm C" },
  ];

  const handleRadioChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div>
      <h3>Chọn sản phẩm:</h3>
      {products.map((product) => (
        <div key={product.id}>
          <input
            type="radio"
            id={product.id}
            name="product"
            value={product.id}
            checked={selectedProduct === String(product.id)}
            onChange={handleRadioChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>
          Bạn đã chọn:{" "}
          {
            products.find((product) => product.id === parseInt(selectedProduct))
              .name
          }
        </p>
      )}
    </div>
  );
}

export default ProductList;
