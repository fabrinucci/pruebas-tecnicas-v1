import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";
import { getRandomFact } from "./getRandomFact";

const App = () => {
  const [fact, setFact] = useState("");
  const [gifs, setGifs] = useState([]);

  const catFact = fact.split(" ").slice(0, 3).join(" ");

  const getFactData = async () => {
    const data = await getRandomFact();
    return data;
  };

  const getGifsData = async () => {
    const data = await getGifs(catFact);
    return data;
  };

  useEffect(() => {
    getFactData().then((res) => setFact(res));
  }, []);

  useEffect(() => {
    getGifsData().then((res) => setGifs(res));
  }, [catFact]);

  return (
    <div className="App">
      <h1>Catfact: {catFact}</h1>
      <ul className="fact-container">
        {gifs.data?.map((gif) => (
          <li className="fact-card" key={gif.id}>
            <img
              className="fact-img"
              src={gif.images.downsized_medium.url}
              alt={gif.title}
            />
            <h2 className="fact-title">{gif.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
