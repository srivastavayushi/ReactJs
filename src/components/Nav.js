import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h1> Ayushi's Movies</h1>
      <h2>Ayushi has movies : {movies.length} </h2>
    </nav>
  );
}
