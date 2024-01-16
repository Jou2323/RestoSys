import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';


const OrderModal = ({ isOpen, onClose, onPay }) => {
  const [name, setName] = useState('');
  const [customer_email, setEmail] = useState('');
  const [Number_card, setCardNumber] = useState('');
 
 

  const handlePay = () => {
    // Create an order object with the necessary information
    const order = {
      name, // Assuming 'name' is the dish name
      customer_email,
      Number_card,
    };

    // Make an HTTP POST request to the backend endpoint for order placement
    axios.post('http://localhost:8080/api/orders', order)
      .then(response => {
        // Handle the success response if needed
        console.log('Order placed successfully:', response.data);
        onPay(); // Assuming onPay is a callback to update some state in the parent component
        onClose(); // Close the modal
      })
      .catch(error => {
        // Handle the error
        console.error('Error placing order:', error);
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Order</h2>
      <label>Email:</label>
      <input type="text" value={customer_email} onChange={(e) => setEmail(e.target.value)} />

      <label>Selected Menu:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Card Number:</label>
      <input type="text" value={Number_card} onChange={(e) => setCardNumber(e.target.value)} />

      <button onClick={handlePay}>Pay</button>
  
    </Modal>
  );
};

export default OrderModal;
