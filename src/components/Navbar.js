"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="nav__bar">
        <a href="#">
          <span className="logo nav__logo">Y</span> Yani
        </a>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`} id="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Skill</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#contact" className="btn">
            Contact
          </a>
        </li>
      </ul>
      <a href="#contact" className="btn btn__large">
        Contact
      </a>
    </nav>
  );
}
