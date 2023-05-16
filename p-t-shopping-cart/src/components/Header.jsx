import { Filters } from './Filters';

export const Header = ({ setFilters }) => {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0',
      }}>
      <h2>React Shop </h2>
      <Filters onChange={setFilters} />
    </header>
  );
};
