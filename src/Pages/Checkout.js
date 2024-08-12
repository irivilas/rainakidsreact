import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Brief from '../components/Brief';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Por favor, agrega productos antes de continuar.");
      return;
    }

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
      alert(`¡Compra realizada con éxito! ID de la orden: ${docRef.id}`);
      clearCart(); 
    } catch (e) {
      console.error("Error al realizar la compra: ", e);
      alert("Hubo un error al procesar tu compra. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Brief order={{
        items: cart,
        total: getTotalPrice(),
      }} />
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default Checkout;
