import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    addItem({
      ...item, 
      quantity
    });
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
