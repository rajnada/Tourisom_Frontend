import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import Home from "./homepage";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Tourism Webapp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registration</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
