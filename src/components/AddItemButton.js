import React from 'react';

const AddItemButton = () => {
  const handleAddToCart = () => {
    alert('Item added to cart!');
  }

  return (
    <button onClick={handleAddToCart}>Agregar</button>
  );
}

export default AddItemButton;
