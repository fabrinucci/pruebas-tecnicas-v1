import React from "react";
import { Link } from "../components/Link";

export const Search = ({ routeParams }) => {
  return (
    <div>
      <h1>You have searched "{routeParams.query}"</h1>
      <Link to={"/"}>Go to home</Link>
    </div>
  );
};
