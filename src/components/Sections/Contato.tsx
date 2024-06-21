"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import { BeatLoader } from "react-spinners";
import Notification from "../Notification";

type Props = {};

const Contato = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setmessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    setLoading(true);


    await emailjs
      .send("service_ohwwtnu", "template_mmpk2dg", templateParams, {
        publicKey: "VZufU4TkjCtbVTQMJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setLoading(false);

    setEmail("");
    setName("");
    setmessage("");
  };

  return (
    <section className="flex justify-center py-32 bg-neutral-700">
      <div className="max-w-6xl flex flex-col w-full gap-12">
        <h2 className="text-6xl font-bold text-white">Entre em contato</h2>

        <div className="flex gap-6">
          <form
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-6 relative"
          >
            <input
              className="px-4 py-3 outline-none border-none bg-neutral-100"
              type="text"
              placeholder="Nome"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <input
              className="px-4 py-3 outline-none border-none bg-neutral-100"
              type="email"
              placeholder="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <textarea
              className="px-4 py-3 outline-none border-none bg-neutral-100 resize-none h-32"
              placeholder="Mensagem"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setmessage(e.target.value)
              }
            ></textarea>

            {loading && (
              <Button
                icon={<BeatLoader size={20} color="white" />}
                className="absolute bottom-[-4rem] w-full right-0"
              />
            )}
            {!loading && (
              <Button
                text="Enviar"
                className="absolute bottom-[-4rem] w-full right-0"
              />
            )}
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

        <Notification type="success"/>

    </section>
  );
};

export default Contato;
