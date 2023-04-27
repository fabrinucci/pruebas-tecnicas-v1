import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const updateRandomFact = () => {
    getRandomFact().then(setFact);
  }

  useEffect(updateRandomFact, [])

  return {
    fact,
    updateRandomFact
  }
}