import React from "react";

export default function Movie({ name, price, director }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h3>{director}</h3>
    </>
  );
}
