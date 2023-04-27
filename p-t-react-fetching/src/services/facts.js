const CAT_FACT_URL = 'https://catfact.ninja/fact';

export const getRandomFact = () => {
  return fetch(CAT_FACT_URL)
    .then(res => res.json())
    .then(data => {
      return data.fact
    })
}