import Link from "next/link";
import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "../Button";

type Props = {};

const Contato = (props: Props) => {
  return (
    <section className="flex justify-center py-32 bg-neutral-700">
      <div className="max-w-6xl flex flex-col w-full gap-12">
        <h2 className="text-6xl font-bold text-white">Entre em contato</h2>

        <div className="flex gap-6">
          <form className="flex flex-col flex-1 gap-6 relative">
            <input
              className="px-4 py-3 outline-none border-none bg-neutral-100"
              type="text"
              placeholder="Nome"
            />
            <input
              className="px-4 py-3 outline-none border-none bg-neutral-100"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <textarea
              className="px-4 py-3 outline-none border-none bg-neutral-100 resize-none h-32"
              name=""
              id=""
              placeholder="Mensagem"
            ></textarea>

            <Button
              text="Enviar"
              className="absolute bottom-[-4rem] w-full right-0"
            />
          </form>

          <ul className="w-96 border-l-2 border-white pl-4 flex flex-col gap-8 justify-center">
            <li className="text-white text-lg ">
              <Link
                className="flex gap-2 items-center"
                href="https://wa.me/5511996250147/?text=textourl"
                target="_blank"
              >
                <FaWhatsapp size={32} />
                <span>+55 11 99625-0147</span>
              </Link>
            </li>
            <li className="text-white text-lg flex gap-2 items-center">
              <IoIosMail size={32} />
              <span>soubhiahenrique0@gmail.com</span>
            </li>
            <li className="text-white text-lg">
              <Link
                className="flex gap-2 items-center"
                target="_blank"
                href="https://www.linkedin.com/in/henrique-soubhia/"
              >
                <FaLinkedin size={32} />
                <span>henrique-soubhia</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contato;
