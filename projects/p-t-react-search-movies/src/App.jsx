import { MoviesPage } from "./components/MoviesPage";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

import "./app.css";
import { useCallback, useState } from "react";

const App = () => {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ sort });

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log(search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    updateSearch(searchValue);
    debounceGetMovies(searchValue);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div>
      <header>
        <h1>Search movies</h1>
        <form onSubmit={handleSubmit} className="Form">
          <input onChange={handleChange} value={search} name="query" />
          <button>Search</button>
          <input onClick={handleSort} type="checkbox" />
        </form>
        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <MoviesPage movies={movies} />}
      </main>
    </div>
  );
};

export default App;
