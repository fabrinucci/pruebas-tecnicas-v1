import ContentLoader from 'react-content-loader';

export const CommentLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={45}
      viewBox='0 0 400 45'
      backgroundColor='#d8d4d4'
      foregroundColor='#e9e8e8'
    >
      <rect x='5' y='22' rx='3' ry='3' width='315' height='18' />
      <rect x='466' y='33' rx='3' ry='3' width='135' height='25' />
      <rect x='3' y='1' rx='3' ry='3' width='65' height='13' />
      <rect x='78' y='2' rx='3' ry='3' width='65' height='13' />
    </ContentLoader>
  );
};
