import React from "react";
import { EVENTS } from "../utils/consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSH_STATE);
  window.dispatchEvent(navigationEvent);
}

export const Link = ({ target, to, ...props }) => {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0;
    const isModifiedEvent = e.metaKey || e.altKey || e.shiftKey || e.ctrlKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
    }
  };
  return <a onClick={handleClick} href={to} target={target} {...props} />;
};
