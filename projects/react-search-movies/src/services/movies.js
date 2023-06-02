const API_KEY = "513370dc";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await res.json();
    const movies = data.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
