const MoviesList = ({ movies }) => {
  return (
    <ul className="MovieList">
      {movies?.map((movie) => {
        const { id, title, year, poster } = movie;
        return (
          <li className="MovieCard" key={id}>
            <div className="MovieCardInfo">
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
            <img src={poster} alt={title} />
          </li>
        );
      })}
    </ul>
  );
};

const NoMoviesResult = () => {
  return <p>No movies found</p>;
};

export const MoviesPage = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesResult />;
};
