import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            {cart.length === 0 ? (
                <p>Tu carrito esta vacio . <Link to="/">volver.</Link></p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Vaciar</button>
                    <Link to="/checkout">Porcesar pedido</Link>
                </>
            )}
        </div>
    );
};

export default Cart;
