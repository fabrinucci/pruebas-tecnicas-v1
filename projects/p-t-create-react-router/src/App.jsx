import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Router } from "./components/Router";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import { Route } from "./components/Route";

export const App = () => {
  const routes = [
    {
      path: "/search/:query",
      Component: Search,
    },
  ];

  return (
    <main>
      <Router routes={routes} defaultComponent={<NotFound />}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Router>
    </main>
  );
};
