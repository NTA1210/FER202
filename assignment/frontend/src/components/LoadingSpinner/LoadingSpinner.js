import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ message = "Đang tải..." }) => (
  <div className="loading">
    <div className="spinner"></div>
    <p>{message}</p>
  </div>
);

export default LoadingSpinner;
