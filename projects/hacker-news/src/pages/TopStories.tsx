import useSWR from 'swr';
import Story from '../components/Story';
import Loading from '../components/Loading';
import { getTopStories } from '../services';

import { main, li } from './topStories.css';

const TopStoriesPage = () => {
  const { data, isLoading } = useSWR('/', () => getTopStories(1, 10));

  return (
    <main className={main}>
      <h1>Top stories</h1>
      <ul>
        {data?.map((id: number, index: number) => (
          <li className={li} key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      {!isLoading && <button>Load more</button>}
    </main>
  );
};

export default TopStoriesPage;
