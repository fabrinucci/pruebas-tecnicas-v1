import React from "react";
import { Link } from "../components/Link";

export const NotFound = () => {
  return (
    <main>
      <h1>Something is wrong</h1>
      <img
        src="https://midu.dev/images/this-is-fine-404.gif"
        alt="Page not found"
      />
      <div>
        <Link to="/">Go to home</Link>
      </div>
    </main>
  );
};
