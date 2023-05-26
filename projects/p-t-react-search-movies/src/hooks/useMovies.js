import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export const useMovies = ({ sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(null);

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("render");
  }, [getMovies]);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies]?.sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return {
    movies: sortedMovies,
    loading,
    error,
    getMovies,
  };
};
