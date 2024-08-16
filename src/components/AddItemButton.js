import React from 'react';

const AddItemButton = ({ onAddToCart }) => {
  return (
    <button onClick={onAddToCart}>Agregar al Carrito</button>
  );
};

export default AddItemButton;
