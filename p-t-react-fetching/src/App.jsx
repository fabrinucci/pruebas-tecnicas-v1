import { useEffect, useState } from 'react';
const CAT_FACT_URL = 'https://catfact.ninja/fact';
const CAT_IMAGE_URL = 'https://cataas.com';

export const App = () => {

  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
      })
  }, [])

  useEffect(() => {
    if(!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ');

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(data => {
      const {url} = data;
      setImageUrl(url);
    })
  }, [fact])

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      placeItems: 'center'
    }}>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          style={{
            maxWidth: '260px',
            maxHeight: '320',
            borderRadius: '20px'
          }}
          src={`${CAT_IMAGE_URL}/${imageUrl}`} 
          alt="Three first words about cats" 
        />
      )}
    </main>
  );
};
