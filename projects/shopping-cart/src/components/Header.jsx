import { Cart } from './Cart';
import { Filters } from './Filters';

export const Header = () => {
  return (
    <header>
      <h2>React Shop </h2>
      <Filters />
      <Cart />
    </header>
  );
};
