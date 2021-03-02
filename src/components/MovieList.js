import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

export default function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          director={movie.director}
          key={movie.id}
        />
      ))}
    </div>
  );
}
