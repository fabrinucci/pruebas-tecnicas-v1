import { Products } from './components/Products';
import { Header } from './components/Header';
import { CartContextProvider } from './context/cartContext';

export const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Products />
      </main>
    </CartContextProvider>
  );
};
