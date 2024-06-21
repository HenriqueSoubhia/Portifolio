import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center">
      <div className="max-w-6xl px-8 flex justify-center flex-col items-center w-full gap-6 py-16">
        <nav className="border-b border-black">
          <ul className="flex">
            <li className="p-5 transition-all cursor-pointe hover:text-gray-blue">
              <Link href="#home">Home</Link>
            </li>
            <li className="p-5 transition-all cursor-pointe hover:text-gray-blue">
              <Link href="#sobre">Sobre</Link>
            </li>
            <li className="p-5 transition-all cursor-pointe hover:text-gray-blue">
              <Link href="#projetos">Projetos</Link>
            </li>
            <li className="p-5 transition-all cursor-pointe hover:text-gray-blue">
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <p>©{currentYear} Feito por Henrique Soubhia</p>

      </div>
    </footer>
  );
};

export default Footer;
