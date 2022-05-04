import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Form</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </ul>
  );
}

export default Navbar;
