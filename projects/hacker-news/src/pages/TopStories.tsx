import useSWRInfinite from 'swr/infinite';
import Story from '../components/Story';
import { getTopStories } from '../services';

import { main, li, storiesButton } from './topStories.css';
import { useEffect } from 'react';

const TopStoriesPage = () => {
  const { data, isLoading, size, setSize } = useSWRInfinite(
    index => `stories/${index + 1}`,
    key => {
      const [, page] = key.split('/');

      return getTopStories(Number(page), 10);
    }
  );

  useEffect(() => {
    if (!isLoading) {
      document.title = 'Hacker news';
    }
  }, []);

  const stories = data?.flat();

  return (
    <main className={main}>
      <h1>Top stories</h1>
      <ul>
        {stories?.map((id: number, index: number) => (
          <li className={li} key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      {!isLoading && (
        <button
          onClick={() => {
            setSize(size + 1);
          }}
          className={storiesButton}
        >
          Load more
        </button>
      )}
    </main>
  );
};

export default TopStoriesPage;
