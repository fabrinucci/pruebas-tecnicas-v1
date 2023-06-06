import useSWR from 'swr';
import { getItemInfo } from '../services';
import { CommentList } from './CommentList';
import { commentDetail, commentSummary, commentInfo } from './comment.css';
import { CommentLoader } from './CommentLoader';

export const Comment = (props: { id: number }) => {
  const { id } = props;
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id));

  if (isLoading) {
    return <CommentLoader />;
  }

  const { by, text, kids } = data!;

  return (
    <>
      <details open className={commentDetail}>
        <summary className={commentSummary}>
          <span className={commentInfo}>{by}</span>
          <span className={commentInfo}>-</span>
          <span className={commentInfo}>3 hours ago</span>
        </summary>
        <p>{text}</p>
      </details>

      {kids?.length > 0 && <CommentList ids={kids.slice(0, 10)} />}
    </>
  );
};
