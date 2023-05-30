import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Router } from "./components/Router";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";

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
    {
      path: "/search/:query",
      Component: Search,
    },
  ];

  return (
    <main>
      <Router routes={routes} defaultComponent={<NotFound />} />
    </main>
  );
};
