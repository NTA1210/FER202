import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormValidation() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Kiểm tra tính hợp lệ của form
  const validateForm = () => {
    setIsValid(
      (name.length > 0 && gender !== "" && selectedValue !== "") || isChecked
    );
  };

  return (
    <Form>
      {/* Trường nhập liệu cho tên */}
      <Form.Group controlId="validatedName">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateForm();
          }}
        />
      </Form.Group>

      {/* Radio Buttons cho giới tính */}
      <Form.Group controlId="validatedGender">
        <Form.Label>Giới tính</Form.Label>
        <Form.Check
          type="radio"
          label="Nam"
          value="Nam"
          checked={gender === "Nam"}
          onChange={(e) => {
            setGender(e.target.value);
            validateForm();
          }}
        />
        <Form.Check
          type="radio"
          label="Nữ"
          value="Nữ"
          checked={gender === "Nữ"}
          onChange={(e) => {
            setGender(e.target.value);
            validateForm();
          }}
        />
      </Form.Group>

      {/* Dropdown cho lựa chọn */}
      <Form.Group controlId="validatedSelect">
        <Form.Label>Lựa chọn</Form.Label>
        <Form.Control
          as="select"
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
            validateForm();
          }}
        >
          <option value="">Chọn một giá trị</option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </Form.Control>
      </Form.Group>

      {/* Checkbox đồng ý */}
      <Form.Group controlId="validatedCheckbox">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            validateForm();
          }}
        />
      </Form.Group>

      {/* Nút Submit */}
      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default FormValidation;
