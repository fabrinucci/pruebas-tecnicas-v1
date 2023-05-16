const url = "https://api.giphy.com/v1";
const GIPHY_API_Key = "gmfB0iCogBprZww9KyG1nrVX4u2P7Tle";

export const getGifs = async (query) => {
  const res = await fetch(
    `${url}/gifs/search?api_key=${GIPHY_API_Key}&q=${query}&limit=25&offset=0&rating=g&lang=en`
  );
  const data = res.json();
  return data;
};
