import React from 'react';
import { Link } from 'react-router-dom'; 
import Item from './item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item 
          key={item.id} 
          id={item.id} 
          name={item.name}
          castillos para niños={item.description} 
          price={item.price}
          imageUrl={item.imageUrl} 
        />
      ))}
    </div>
  );
};

export default ItemList;
