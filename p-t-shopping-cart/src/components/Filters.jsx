import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
export const Filters = () => {
  const categoryFilterId = useId();
  const minPriceFilterId = useId();

  const { filters, setFilters } = useFilters();

  const handleChangeMinMax = (e) => {
    setFilters((state) => ({
      ...state,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((state) => ({
      ...state,
      category: e.target.value,
    }));
  };

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '20px',
        width: '100%',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleChangeMinMax}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  );
};
