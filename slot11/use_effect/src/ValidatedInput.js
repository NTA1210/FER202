import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// Hàm xác thực password (ít nhất 8 ký tự)
const validatePassword = (password) => {
  return password.length >= 8;
};

function ValidatedInput() {
  const [email, setEmail] = useState(""); // State lưu trữ giá trị email
  const [password, setPassword] = useState(""); // State lưu trữ giá trị password
  const [isValid, setIsValid] = useState(false); // State theo dõi tính hợp lệ của form
  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi

  // useEffect để kiểm tra tính hợp lệ của email và password mỗi khi chúng thay đổi
  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setErrorMessage("Email không hợp lệ!");
    } else if (!isPasswordValid) {
      setErrorMessage("Mật khẩu phải có ít nhất 8 ký tự!");
    } else {
      setErrorMessage(""); // Không có lỗi nếu tất cả đều hợp lệ
    }

    // Kiểm tra tính hợp lệ tổng thể (email và password đều hợp lệ)
    setIsValid(isEmailValid && isPasswordValid);
  }, [email, password]); // useEffect chạy lại mỗi khi email hoặc password thay đổi

  return (
    <Form>
      {/* Trường nhập liệu cho email */}
      <Form.Group controlId="validatedEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Cập nhật email khi người dùng thay đổi
          isValid={validateEmail(email)} // Kiểm tra tính hợp lệ của email
          isInvalid={!validateEmail(email)} // Hiển thị lỗi nếu email không hợp lệ
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage} {/* Hiển thị thông báo lỗi nếu không hợp lệ */}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Trường nhập liệu cho password */}
      <Form.Group controlId="validatedPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Cập nhật password khi người dùng thay đổi
          isValid={validatePassword(password)} // Kiểm tra tính hợp lệ của password
          isInvalid={!validatePassword(password)} // Hiển thị lỗi nếu password không hợp lệ
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage} {/* Hiển thị thông báo lỗi nếu không hợp lệ */}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Nút Submit */}
      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;
