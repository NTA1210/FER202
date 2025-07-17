import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, updateCart, deleteFromCart } from "../redux/cartSlice";

const products = [
  {
    id: "001",
    name: "Apple iPhone 14",
    price: 999.99,
    description: "Newest iPhone with A16 Bionic chip.",
    catalogs: ["Electronics", "Smartphone"],
  },
  {
    id: "002",
    name: "Samsung Galaxy S23",
    price: 899.99,
    description: "Flagship Android phone with great camera.",
    catalogs: ["Electronics", "Smartphone"],
  },
  {
    id: "003",
    name: "Sony WH-1000XM5 Headphones",
    price: 349.99,
    description: "Industry leading noise-canceling headphones.",
    catalogs: ["Audio", "Electronics"],
  },
  {
    id: "004",
    name: "Asus ROG Gaming Laptop",
    price: 1599.99,
    description: "High performance gaming laptop with RTX 4070.",
    catalogs: ["Electronics", "Laptop"],
  },
  {
    id: "005",
    name: "Nike Air Max 270",
    price: 129.99,
    description: "Stylish and comfortable everyday sneakers.",
    catalogs: ["Fashion", "Footwear"],
  },
  {
    id: "006",
    name: "Adidas Ultraboost 22",
    price: 139.99,
    description: "Boost cushioning running shoes for athletes.",
    catalogs: ["Fashion", "Footwear"],
  },
  {
    id: "007",
    name: 'Apple MacBook Pro 14"',
    price: 1999.99,
    description: "Apple M2 Pro chip, 14-inch Liquid Retina Display.",
    catalogs: ["Electronics", "Laptop"],
  },
  {
    id: "008",
    name: "Canon EOS R6",
    price: 2499.99,
    description: "Mirrorless full-frame camera for professionals.",
    catalogs: ["Electronics", "Camera"],
  },
  {
    id: "009",
    name: "Logitech MX Master 3S",
    price: 99.99,
    description: "Advanced productivity mouse with ergonomic design.",
    catalogs: ["Electronics", "Accessories"],
  },
  {
    id: "010",
    name: 'Samsung 4K Smart TV 55"',
    price: 699.99,
    description: "Ultra HD 4K smart television with vivid display.",
    catalogs: ["Electronics", "TV"],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p className="catalogs">Catalogs: {product.catalogs.join(", ")}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
            <button
              onClick={() =>
                dispatch(updateCart({ id: product.id, quantity: 2 }))
              }
            >
              Update to Cart
            </button>
            <button onClick={() => dispatch(deleteFromCart(product.id))}>
              Delete from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
