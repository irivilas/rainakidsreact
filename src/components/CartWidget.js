import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
      }}>3</span> {}
    </div>
  );
}

export default CartWidget;
