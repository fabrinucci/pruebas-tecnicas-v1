import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import './Cart.css';

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {cart.length <= 0 ? (
          <p>No products in cart</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <footer>
                  <small>Quantity: {product.quantity}</small>
                  <button
                    onClick={() => addToCart(product)}
                    className='cart-button btn-qty'>
                    +
                  </button>
                </footer>
              </li>
            ))}
            {cart.length > 0 && (
              <div className='btn-clear-div'>
                <button onClick={clearCart} className='cart-button btn-clear'>
                  <ClearCartIcon />
                </button>
              </div>
            )}
          </ul>
        )}
      </aside>
    </>
  );
};
