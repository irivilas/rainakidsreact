import React from 'react';
import Brief from '../components/Brief';

const Checkout = () => {
  const order = {
    items: [
      { id: 1, name: 'Castillo1', quantity: 2 },
      { id: 2, name: 'Castillo2', quantity: 1 }
    ],
    total: 300
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Brief order={order} />
      <button>Orden</button>
    </div>
  );
}

export default Checkout;
