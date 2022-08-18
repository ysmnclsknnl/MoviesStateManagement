import React, { useState } from "react";
import { useMovieContext } from "./MovieContext";

const AddMovie = () => {
  const { addMovie } = useMovieContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <form onSubmit={(e) => addMovie(e, name, price)}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
