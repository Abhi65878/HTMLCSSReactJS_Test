import React, { useState } from 'react';
import './FreeTrialPage.css';  

const FreeTrialPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validate = () => {
    let formErrors = {};


    if (!formData.firstName.trim()) {
      formErrors.firstName = '*First name is required';
    }


    if (!formData.lastName.trim()) {
      formErrors.lastName = '*Last name is required';
    }


    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = '*Email is invalid';
    }


    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = '*Phone number must be 10 digits';
    }
    if (formData.password.length < 8) {
      formErrors.password = '*Password must be at least 8 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formattedData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phone,
        email: formData.email,
        password: formData.password,
      };

      console.log('Form is valid. Submitting...', formattedData);
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <div className="trial-container">
      <div className="trial-header">
        <h1>Ready to take a free trial?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>

      <div className="trial-form-container">
        <form className="trial-form" onSubmit={handleSubmit}>
          <h2>Sign up for a free account</h2>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-row">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialPage;
