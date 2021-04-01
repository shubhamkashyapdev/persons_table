import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className='logo'></div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/persons'>Persons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
