import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { EVENTS } from "./utils/consts";

export const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange);
    window.addEventListener(EVENTS.POP_STATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange);
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <Home />}
      {currentPath === "/about" && <About />}
    </main>
  );
};
