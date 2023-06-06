import useSWR from 'swr';
import { getItemInfo } from '../services';
import { CommentList } from '../components/CommentList';

const DetailsPage = (props: { params: { id: number } }) => {
  const {
    params: { id },
  } = props;
  const { data } = useSWR(`/story/${id}`, () => getItemInfo(id));

  const commentsIds = data?.kids.slice(0, 10) || [];
  return (
    <main>
      <h1 style={{ padding: '10px 20px' }}>Element id:{id}</h1>
      <CommentList ids={commentsIds} />
    </main>
  );
};

export default DetailsPage;
