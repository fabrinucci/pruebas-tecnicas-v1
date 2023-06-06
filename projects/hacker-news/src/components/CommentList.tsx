import { Comment } from './Comment';

export const CommentList = (props: { ids?: number[] }) => {
  const { ids } = props;
  return (
    <ul
      style={{
        padding: '20px',
      }}
    >
      {ids?.map(id => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
};
