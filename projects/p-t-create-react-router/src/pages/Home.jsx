import { navigate } from "../components/Link";

export const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <p>My custom react router</p>
      <button onClick={() => navigate("/about")}>Go to about</button>
    </section>
  );
};
