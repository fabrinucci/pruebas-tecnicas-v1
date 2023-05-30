import { Link } from "../components/Link";

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <p>My custom react router</p>
      <Link to="/about">Go to about</Link>
    </section>
  );
};

export default Home;
