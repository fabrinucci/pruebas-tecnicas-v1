import { style } from '@vanilla-extract/css';

export const storyArticle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const storyIndex = style({
  color: '#424242',
  fontSize: '20px',
});
export const storyTitle = style({
  color: '#161616',
  fontSize: '20px',
  transition: 'all .2s',
  ':hover': { filter: 'brightness(2)' },
});

export const storyLink = style({
  color: '#424242',
  fontSize: '17px',
  transition: 'all .2s',
  ':hover': { filter: 'brightness(0.6)' },
});

export const score = style({
  color: '#828282',
  fontSize: '15px',
  transition: 'all .2s',
  ':hover': { filter: 'brightness(0.7)' },
});

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const articleButton = style({
  height: '40px',
  width: '100px',
  border: 'none',
  borderRadius: '5px',
});
