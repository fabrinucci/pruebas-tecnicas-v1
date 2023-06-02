import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';

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
    <section className='filters'>
      <div className='minMax'>
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
      <div className='category'>
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
