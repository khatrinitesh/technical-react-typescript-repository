import React, { useState } from 'react';
// constants
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/checkoutformdata';
// store
import { useCheckoutFormStore } from '../store/useCheckoutFormStore';
// library
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner'; // Import Sonner toast
// components
import BtnPrimary from './BtnPrimary';
import './CheckoutForm.css';

const CheckoutForm:React.FC = () => {
    const { formData, setFormData, validateForm } = useCheckoutFormStore(); // Access Zustand store
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    // Validate form before submitting
    if (validateForm()) {
        console.log("Form is valid!");
        setIsSubmitting(true);
      toast.success(SUCCESS_MESSAGE); // Show success message
    } else {
        console.log("Form is invalid!");
      toast.error(ERROR_MESSAGE); // Show error message
    }
    // Delay setting submitting state to false to give toast time to show
setTimeout(() => {
    setIsSubmitting(false);
  }, 3000); // Set to 3 seconds (adjust as needed)
  };

  


  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
        <h1>Checkout Form</h1>  
      <form onSubmit={handleSubmit} className="checkout-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Order'}
      </button>
    </form>
    <Toaster /> {/* Display toast notifications */}
    </>
  );
}

export default CheckoutForm;
