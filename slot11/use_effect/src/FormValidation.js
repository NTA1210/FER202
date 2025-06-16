import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// Hàm xác thực mật khẩu (ít nhất 8 ký tự)
const validatePassword = (password) => {
  return password.length >= 8;
};

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false); // Trạng thái form hợp lệ hay không
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setErrorMessage("Email không hợp lệ!");
    } else if (!isPasswordValid) {
      setErrorMessage("Mật khẩu phải có ít nhất 8 ký tự!");
    } else {
      setErrorMessage(""); // Không có lỗi
    }

    setIsValid(isEmailValid && isPasswordValid);
  }, [email, password]); // useEffect sẽ chạy mỗi khi email hoặc password thay đổi

  return (
    <Form>
      <Form.Group controlId="validatedEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={validateEmail(email)}
          isInvalid={!validateEmail(email)}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validatedPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={validatePassword(password)}
          isInvalid={!validatePassword(password)}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default FormValidation;
