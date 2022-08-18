import React from "react";
import { Movie } from "./Movie";
import { useMovieContext } from "./MovieContext";

const MovieList = () => {
  const { movies } = useMovieContext();
  return (
    <div>
      {movies.map(({ id, name, price }) => (
        <Movie name={name} price={price} key={id} />
      ))}{" "}
    </div>
  );
};

export default MovieList;
