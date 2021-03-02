import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$20",
      director: "J.K.Rowling",
      id: 1,
    },
    {
      name: "Harry Potter-2",
      price: "$20-2",
      director: "J.K.Rowling-2",
      id: 2,
    },
    {
      name: "Harry Potter-3",
      price: "$20-3",
      director: "J.K.Rowling-3",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
