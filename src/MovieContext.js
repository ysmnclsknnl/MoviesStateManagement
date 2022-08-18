import React, { useState, createContext, useContext } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game Of Thrones",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
    },
  ]);

  const addMovie = (e, name, price) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
