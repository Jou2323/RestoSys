// IngredientsModal.js
import React from 'react';
import Modal from 'react-modal';

const IngredientsModal = ({ isOpen, onRequestClose, ingredients }) => {
  return (
    <Modal id='modal-ingrid' isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Ingredients</h2>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default IngredientsModal;
