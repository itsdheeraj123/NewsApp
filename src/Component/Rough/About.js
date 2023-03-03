import React from "react";
import { NavLink } from "react-router-dom";
import "./route.css";

export default function About() {
  //   const navLink = ({ isActive }) => {
  //     return {
  //       fontWeight: isActive ? "bold" : "normal",
  //       textDecoration: isActive ? "none" : "underline",
  //     };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink
        style={(isActive) => {
          return { color: isActive ? "red" : "black" };
        }}
        to="/about"
      >
        About
      </NavLink>
      <h1>This is About page</h1>
    </nav>
  );
}
