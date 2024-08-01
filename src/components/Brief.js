import React from 'react';

const Brief = ({ order }) => {
  return (
    <div>
      <h2>Total de la orden</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${order.total}</h3>
    </div>
  );
}

export default Brief;
