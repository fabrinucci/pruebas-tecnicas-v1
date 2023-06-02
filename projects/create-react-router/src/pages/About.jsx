import Link from "../components/Link";

const i18n = {
  es: {
    title: "Sobre mi",
    description: "Este es mi perfil donde podrás conocerme un poco más",
    goHome: "Ir al inicio",
  },
  en: {
    title: "About me",
    description:
      "This is my profile where you can get to know me a little bit better.",
    goHome: "Go to home",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const About = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang || "es");

  return (
    <section>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/73539314?v=4"
          alt=""
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.goHome}</Link>
    </section>
  );
};

export default About;
