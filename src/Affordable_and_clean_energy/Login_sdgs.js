import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Login_sdgs() {
  // State to manage form data and validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '', // Added phone number field
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '', // Added corresponding error state
  });

  // Validation function to check if the input is not empty
  const validateInput = (name, value) => {
    if (value.trim() === '') {
      return `${name} is required`; // Fix syntax here
    }
    return '';
  };

  // Validation function for email pattern
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Invalid email address';
  };

  // Validation function for phone number
  const validatePhoneNumber = (value) => {
    // Customize the validation logic based on your requirements
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value) ? '' : 'Invalid phone number';
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the input
    setErrors({
      ...errors,
      [name]:
        name === 'email'
          ? validateEmail(value)
          : name === 'phoneNumber'
          ? validatePhoneNumber(value)
          : validateInput(name, value),
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting the form
    const hasErrors =
      Object.values(errors).filter((error) => error !== '').length > 0;

    if (hasErrors) {
      console.log('Form has errors. Please fix them.');
      return;
    }

    // Submit the form or perform other actions
    console.log('Form submitted:', formData);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '', // Added phone number field
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '', // Added corresponding error state
    });
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4'>
        <h1 className='text-center mb-4'>Product Enquiry </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              Enter the First Name
            </label>
            <input
              type='text'
              className={`form-control ${errors.firstName && 'is-invalid'}`}
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Enter the Last Name
            </label>
            <input
              type='text'
              className={`form-control ${errors.lastName && 'is-invalid'}`}
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Enter the E-mail
            </label>
            <input
              type='email'
              className={`form-control ${errors.email && 'is-invalid'}`}
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneNumber' className='form-label'>
              Enter the Phone Number
            </label>
            <input
              type='tel'
              className={`form-control ${errors.phoneNumber && 'is-invalid'}`}
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <div className='invalid-feedback'>{errors.phoneNumber}</div>}
          </div>
          <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            <button type='reset' className='btn btn-secondary' onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
