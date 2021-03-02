import React, { useState } from "react";
import "./App.css";

import Tweet from "./Tweet";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";

function App() {
  // const [count, setCount] = useState(0);
  // const [isRed, setRed] = useState(false);

  // const increment = () => {
  //   setCount((prev) => prev + 1);
  //   setRed(!isRed);
  // };

  // const [users, setUsers] = useState([
  //   {
  //     name: "Ayushi",
  //     message: "This message is from ayushi",
  //   },
  //   {
  //     name: "Kaustav",
  //     message: "This message is from kaustav",
  //   },
  //   {
  //     name: "Bunny",
  //     message: "This message is from bunny",
  //   },
  // ]);
  return (
    <MovieProvider>
      <div className="app">
        {/* <Tweet name="ayushi" message="message from ayushi" />

      <h1 className={isRed ? "red" : ""}>Change my color !</h1>
      <div>
        {" "}
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
      <div>
        {" "}
       
      </div>
      <div>
        {users.map((user) => (
          <Tweet name={user.name} message={user.message} />
        ))}
      </div> */}

        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
