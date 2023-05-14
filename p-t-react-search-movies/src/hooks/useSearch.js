import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Search cannot be an empty string");
      return;
    }

    if (search.length < 3) {
      setError("There cannot be a search with less than 3 words");
      return;
    }

    setError(null);
  }, [search]);

  return {
    search,
    error,
    updateSearch,
  };
};
