import { Link } from "../components/Link";

export const About = () => {
  return (
    <section>
      <h1>About Page</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/73539314?v=4"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Link to="/">Go to home</Link>
    </section>
  );
};
