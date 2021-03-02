import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [director, setDirector] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateDirector = (e) => {
    setDirector(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, director: director },
    ]);
  };
  return (
    <>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="name" value={price} onChange={updatePrice} />
        <input
          type="text"
          name="name"
          value={director}
          onChange={updateDirector}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
