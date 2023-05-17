import { AddToCartIcon } from './Icons';
import { useFilters } from '../hooks/useFilters';
import { products as initialProducts } from '../mocks/products.json';

export const Products = () => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <section
      style={{
        padding: '20px 80px',
      }}>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          justifyItems: 'center',
          gap: '20px',
          textAlign: 'center',
          listStyle: 'none',
          marginTop: '15px',
        }}>
        {filteredProducts?.slice(0, 10).map((item) => (
          <li
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backgroundColor: '#1c1c1c',
              color: '#fff',
              boxShadow: '0 0 10px 10px rgba(0, 0, 0, .1)',
              borderRadius: '10px',
              padding: '10px',
            }}
            key={item.id}>
            <img
              style={{
                display: 'block',
                aspectRatio: '16/9',
                width: '100%',
                borderRadius: '6px',
                objectFit: 'cover',
                marginTop: '10px',
                background: '#fff',
              }}
              src={item.thumbnail}
              alt={item.title}
            />
            <div
              style={{
                fontSize: '15px',
              }}>
              <strong>{item.title}</strong>
              <span
                style={{
                  opacity: '.7',
                  fontSize: '13px',
                }}>
                {' '}
                - ${item.price}
              </span>
            </div>
            <button
              style={{
                cursor: 'pointer',
                backgroundColor: '#3c3b3b',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                margin: '0 auto',
                width: '25%',
                height: '40px',
              }}>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
