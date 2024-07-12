"use client";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed w-full bg-[#6b4c38] rounded-sm z-40 top-0 m-0 py-3 px-4 md:px-20 flex justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <a href="#" className="text-white text-lg font-bold">
          <span className="logo">Y</span> Yani
        </a>
        <div
          className="nav__menu__btn text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </div>
      </div>
      <ul
        className={`nav__links flex-col md:flex md:flex-row md:items-center md:static fixed w-full left-0 bg-[#6b4c38] md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
        } md:opacity-100 md:top-auto`}
      >
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#home" className="text-white block px-4 py-2 ">
            Home
          </a>
        </li>
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#about" className="text-white block px-4 py-2">
            About
          </a>
        </li>
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#education" className="text-white block px-4 py-2">
            Education
          </a>
        </li>
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#service" className="text-white block px-4 py-2">
            Skill
          </a>
        </li>
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#portfolio" className="text-white block px-4 py-2">
            Project
          </a>
        </li>
        <li className="md:mx-2 my-2 md:my-0">
          <a href="#contact" className="text-white block px-4 py-2 btn-custom">
            Contact
          </a>
        </li>
      </ul>
      <a href="#contact" className="btn-custom btn__large hidden md:block">
        Contact
      </a>
    </nav>
  );
}
