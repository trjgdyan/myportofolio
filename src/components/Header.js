import React from "react";
import { RiStarFill, RiTelegramLine } from "@remixicon/react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="section__container header__container backdrop-sepia-0 bg-white/30 rounded-lg flex justify-between items-center"
      id="home"
    >
      <div className="header__image">
        <Image src="assets/yani-profile.jpeg" alt="header" />
      </div>
      <div className="header__content">
        <div>
          <h1 className="font-bold">Tri Jagad A</h1>
          <div className="flex items-center">
            <h2 className="text-xl font-medium ps-8">
              Hello there! I am a Web Developer. Nice to meet you!
            </h2>
            <RiStarFill size={20} color="#7d1d5d" className="ml-2" />
          </div>
        </div>
        <div className="header__btn ps-8 pt-4">
          <a href="mailto:trjgdyan@gmail.com">
            <button className=" btn btn-warning text-xl font-semibold ">
              Hire Me Now 
              {/* <span>
                <RiTelegramLine size={20} className="ml-2" />
              </span> */}
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
