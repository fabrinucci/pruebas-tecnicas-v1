import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';
import { products as initialProducts } from '../mocks/products.json';

import './Products.css';

export const Products = () => {
  const { filterProducts } = useFilters();
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const products = filterProducts(initialProducts);

  return (
    <section className='products'>
      <ul>
        {products?.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className='title'>
                <strong>{product.title}</strong>
                <span> - ${product.price}</span>
              </div>
              <button
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product);
                }}
                className={`btn ${isProductInCart ? 'btn-remove' : 'btn-add'}`}>
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
