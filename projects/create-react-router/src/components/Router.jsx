import { useState, useEffect, Children } from "react";
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils";
import { EVENTS } from "../events";

const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange);
    window.addEventListener(EVENTS.POP_STATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange);
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const isRoute = type.name === "Route";
    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find((route) => {
    if (route.path === currentPath) return true;

    const matcherUrl = match(route.path, { encode: encodeURI });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;

    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
};

export default Router;
