import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px',
  borderBottom: '1px solid rgba(0,0,0,.2)',
});

export const image = style({
  height: '28px',
  width: '28px',
  borderRadius: '50%',
});

export const link = style({
  color: '#242424',
  fontWeight: '600',
});
