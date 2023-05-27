import { Link } from "../components/Link";

export const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <p>My custom react router</p>
      <Link to="/about">Go to about</Link>
    </section>
  );
};
