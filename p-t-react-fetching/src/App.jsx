import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

export const App = () => {
  const { fact, updateRandomFact } = useCatFact();
  const { imageUrl, imagePath } = useCatImage({ fact });

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      placeItems: 'center'
    }}>
      <h1>App</h1>
      <button 
        style={{
          marginBottom:'15px',
          cursor: 'pointer'
        }} 
        onClick={updateRandomFact}
      >
        Get new cat
      </button>

      {fact && <p>{fact}</p>}

      {imageUrl && (
        <img 
          src={imagePath} 
          alt={`Image extacted using the first rhee words for ${fact}`}
          style={{
            maxWidth: '260px',
            maxHeight: '320',
            borderRadius: '20px'
          }}
        />
      )}
    </main>
  );
};
