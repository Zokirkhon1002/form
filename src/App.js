import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameInput = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailInput = (e) => {
    setValues({ ...values, email: e.target.value });
  };



  const { firstName, lastName, email } = values;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email){
      setValid(true);
    }
    setSubmitted(true);
  };


  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div class="success-message">Success! Thank you for registering</div>
        )}
        <input
          onChange={handleFirstNameInput}
          value={firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          onChange={handleLastNameInput}
          value={lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !lastName && (
          <span id="first-name-error">Please enter a last name</span>
        )}
        <input
          onChange={handleEmailInput}
          value={email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !email && (
          <span id="first-name-error">Please enter an email address</span>
        )}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
