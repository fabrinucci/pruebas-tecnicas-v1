import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Router } from "./components/Router";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const routes = [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/about",
      Component: About,
    },
  ];

  return (
    <main>
      <Router routes={routes} defaultComponent={<NotFound />} />
    </main>
  );
};
