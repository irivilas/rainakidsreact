import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Brief from '../components/Brief';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    const order = {
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "pedidos"), order);
      alert(`Orden! Order ID: ${docRef.id}`);
      clearCart(); 
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Brief order={{
        items: cart,
        total: getTotalPrice(),
      }} />
      <button onClick={handleCheckout}>Detalleorden</button>
    </div>
  );
}

export default Checkout;
