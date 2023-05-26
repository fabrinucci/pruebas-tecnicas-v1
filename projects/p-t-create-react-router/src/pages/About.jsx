import { navigate } from "../components/Link";

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
      <button onClick={() => navigate("/")}>Go to home</button>
    </section>
  );
};
