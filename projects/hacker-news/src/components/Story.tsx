import useSWR from 'swr';
import { Link } from 'wouter';
import { StoryLoader } from './StoryLoader';
import { getItemInfo } from '../services';
import { getRelativeTime } from '../utils/getRelativeTime';
import {
  storyArticle,
  storyHeader,
  storyFooter,
  storyTitle,
  storyLink,
  score,
  storyIndex,
} from './story.css';

const Story = (props: { id: number; index: number }) => {
  const { id, index } = props;
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <StoryLoader />;
  }

  const { by, kids, title, url, time } = data!;

  let domain = '';

  try {
    domain = new URL(url).hostname.replace('www.', '');
  } catch {}

  const timeAgo = getRelativeTime(time);

  return (
    <article className={storyArticle}>
      <header className={storyHeader}>
        <p className={storyIndex}>{index + 1}.</p>
        <Link className={storyTitle} href={`/article/${id}`}>
          {title}
        </Link>
        <a
          className={storyLink}
          href={`https://${domain}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <Link className={score} to={`/article/${id}`}>
          by: {by}
        </Link>
        <Link className={score} to={`/article/${id}`}>
          {timeAgo}
        </Link>
        <Link className={score} to={`/article/${id}`}>
          {kids?.length} comments
        </Link>
      </footer>
    </article>
  );
};

export default Story;
