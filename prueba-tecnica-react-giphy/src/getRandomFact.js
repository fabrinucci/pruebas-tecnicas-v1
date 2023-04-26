const url = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data.fact;
};
