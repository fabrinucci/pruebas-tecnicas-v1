import { header, image, link } from './header.css';

export const Header = () => {
  return (
    <header className={header}>
      <img className={image} src='logo.png' alt='Go to home' />
      <a className={link} href='/'>
        Hacker news
      </a>
    </header>
  );
};
