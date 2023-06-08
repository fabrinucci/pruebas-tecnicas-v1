import { style } from '@vanilla-extract/css';

export const main = style({
  padding: '20px',
});

export const li = style({
  margin: '10px 0',
});

export const storiesButton = style({
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: 'bold',
  backgroundColor: '#424242',
  cursor: 'pointer',
  transition: 'all .3s',
  marginTop: '15px',
  ':hover': {
    backgroundColor: '#161616',
  },
});
