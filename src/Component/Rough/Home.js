import React from "react";
import { NavLink } from "react-router-dom";
import "./route.css";

export default function Home() {
  return (
    <nav>
      <NavLink
        style={(isActive) => {
          return { color: isActive ? "red" : "black" };
        }}
        to="/"
      > 
        Home
      </NavLink>
      <br />
      <NavLink to="/about">About</NavLink>
      <h1>This is HOme Page</h1>
    </nav>
  );
}
