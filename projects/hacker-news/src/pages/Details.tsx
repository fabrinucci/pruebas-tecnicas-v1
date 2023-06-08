import useSWR from 'swr';
import { getItemInfo } from '../services';
import { CommentList } from '../components/CommentList';
import { useEffect } from 'react';

const DetailsPage = (props: { params: { id: number } }) => {
  const {
    params: { id },
  } = props;

  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id));

  useEffect(() => {
    if (!isLoading) {
      document.title = `Hacker news | ${data?.title!}`;
    }
  }, [data?.title]);

  const commentsIds = data?.kids.slice(0, 10) || [];
  return (
    <main>
      <h1 style={{ padding: '10px 20px' }}>{data?.title}</h1>
      <CommentList ids={commentsIds} />
    </main>
  );
};

export default DetailsPage;
