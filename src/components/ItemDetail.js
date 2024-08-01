
import React from 'react';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <Description description={item.description} />
      <ItemQuantitySelector />
      <AddItemButton />
    </div>
  );
}

export default ItemDetail;
