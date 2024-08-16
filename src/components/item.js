import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} />
      <h3>{castillo1}</h3>
      <p>{castillo}</p>
      <p>precio: ${2000}</p>
      <Link to={`/item/${id}`}> Castillo para niños de mas de 5 años</Link>
    </div>
  );
};

export default Item;
