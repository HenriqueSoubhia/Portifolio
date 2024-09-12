"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-blue flex justify-center text-white p-2 fixed top-0 w-full z-50">
      <div className="max-w-6xl px-8 flex justify-between items-center w-full">
        <h2 className="text-3xl">
          Henrique <span className="font-bold">Soubhia</span>
        </h2>

        <nav className="hidden md:block">
          <ul className="flex p-5">
            <li>
              <Link
                href="#home"
                className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#sobre"
                className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#projetos"
                className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex justify-start">
          <button onClick={toggleMenu} aria-label="botão menu" className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-gray-blue flex flex-col items-center justify-center md:hidden">
            <ul className="flex flex-col items-center gap-10">
              <li>
                <Link
                  href="#home"
                  className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
                  onClick={toggleMenu}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
                  onClick={toggleMenu}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
