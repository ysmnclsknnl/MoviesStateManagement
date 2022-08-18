import React from "react";
import { useMovieContext } from "./MovieContext";

const Nav = () => {
  const { movies } = useMovieContext();
  return (
    <div>
      <h3>Yasemin</h3>
      <p>List Of Movies:{movies.length}</p>{" "}
    </div>
  );
};

export default Nav;
