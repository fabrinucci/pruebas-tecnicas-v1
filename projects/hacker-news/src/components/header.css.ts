import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px',
  borderBottom: '1px solid rgba(250,250,250,.2)',
});

export const image = style({
  height: '28px',
  width: '28px',
  borderRadius: '50%',
});

export const link = style({
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
});
