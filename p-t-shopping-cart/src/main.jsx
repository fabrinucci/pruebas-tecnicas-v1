import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { FiltersContextProvider } from './context/filtersContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <App />
  </FiltersContextProvider>
);
