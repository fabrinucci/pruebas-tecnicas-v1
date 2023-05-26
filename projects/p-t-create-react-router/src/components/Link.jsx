import React from "react";
import { EVENTS } from "../utils/consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSH_STATE);
  window.dispatchEvent(navigationEvent);
}

export const Link = () => {
  return <div>Link</div>;
};
