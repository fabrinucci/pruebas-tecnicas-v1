import ContentLoader from 'react-content-loader';

export const StoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={45}
      viewBox='0 0 400 45'
      backgroundColor='#d8d4d4'
      foregroundColor='#e9e8e8'
    >
      <rect x='2' y='3' rx='3' ry='3' width='276' height='22' />
      <rect x='466' y='33' rx='3' ry='3' width='135' height='25' />
      <rect x='7' y='36' rx='3' ry='3' width='59' height='17' />
      <rect x='76' y='36' rx='3' ry='3' width='72' height='17' />
      <rect x='161' y='36' rx='3' ry='3' width='78' height='17' />
      <rect x='304' y='4' rx='3' ry='3' width='96' height='22' />
    </ContentLoader>
  );
};
