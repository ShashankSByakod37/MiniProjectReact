import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/employee">
            Employee
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/employee/:id">
            
          </Link>
        </li>
      </ul>
    </>
  );
};
