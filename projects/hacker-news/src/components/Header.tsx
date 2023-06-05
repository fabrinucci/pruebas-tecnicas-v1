import { Link } from 'wouter';
import { header, image, link } from './header.css';

export const Header = () => {
  return (
    <header className={header}>
      <img className={image} src='/logo.png' alt='Go to home' />
      <Link className={link} to='/'>
        Hacker news
      </Link>
    </header>
  );
};
