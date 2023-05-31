import { Suspense, lazy } from "react";
import Router from "./components/Router";
import Route from "./components/Route";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Search = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  {
    path: "/search/:query",
    Component: Search,
  },
  {
    path: "/:lang/about",
    Component: About,
  },
];

const App = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={NotFound}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Router>
      </Suspense>
    </main>
  );
};

export default App;
