import React from 'react';

export const Navbar = function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="react">REACT</li>
        <li className="jest">JEST</li>
      </ul>
      <input placeholder="search..." />
    </nav>
  );
};

export default Navbar;
