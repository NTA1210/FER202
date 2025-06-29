import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const initialForm = {
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    message: "",
    agree: false,
  };

  const [form, setForm] = useState(initialForm);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formElement = event.currentTarget;

    if (formElement.checkValidity()) {
      setSubmitted(true);
      setForm(initialForm); // reset all fields
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Contact Us</h2>

      {submitted && (
        <Alert
          variant="success"
          onClose={() => setSubmitted(false)}
          dismissible
        >
          ✅ Form submitted successfully!
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* First row */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Mark"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Otto"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your last name.
            </Form.Control.Feedback>
          </div>
          <div className="col-md-4 mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="username123"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </div>
        </div>

        {/* Second row */}
        <div className="row mb-3">
          <div className="col-md-4">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </div>
          <div className="col-md-4">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </div>
          <div className="col-md-4">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="Zip"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip code.
            </Form.Control.Feedback>
          </div>
        </div>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Message */}
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message here..."
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Checkbox */}
        <Form.Check
          required
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />

        {/* Submit Button */}
        <Button type="submit" className="mt-3">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
