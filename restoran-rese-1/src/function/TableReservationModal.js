// TableReservationModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const TableReservationModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [number, setTableNumber] = useState('');
  const [dateTable, setReservationDate] = useState('');
  const [position, setPosition] = useState('');
  const [num_guest, setNumberOfGuests] = useState('');


  const handleSubmit = () => {
    // Create an order object with the necessary information
    const table = {
      number, // Assuming 'name' is the dish name
      position,
      num_guest,
      dateTable
    };
    axios.post('http://localhost:8080/api/tables', table)
    .then(response => {
      // Handle the success response if needed
      console.log('Order placed successfully:', response.data);
      onSubmit(); // Assuming onPay is a callback to update some state in the parent component
      onRequestClose(); // Close the modal
    })
    .catch(error => {
      // Handle the error
      console.error('Error placing order:', error);
    });
};
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Table Reservation</h2>
      <label>Choose the desired table:</label>
      <input type="text" value={number} onChange={(e) => setTableNumber(e.target.value)} />
      <label>Time and date of reservation:</label>
      <input type="text" value={dateTable} onChange={(e) => setReservationDate(e.target.value)} />
      <label>Position:</label>
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      <label>Choose the number of guests:</label>
      <input type="text" value={num_guest} onChange={(e) => setNumberOfGuests(e.target.value)} />
      <button onClick={handleSubmit}>Confirm the reservation</button>
    </Modal>
  );
};

export default TableReservationModal;
