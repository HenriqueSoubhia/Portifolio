"use client";

import React from "react";
import Button from "../Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section
      id="home"
      className="bg-gray-blue flex justify-center text-white py-16"
    >
      <div className="max-w-6xl px-8 w-full flex">
        <div className="flex flex-col gap-8 flex-1">
          <h1 className="text-7xl font-bold">
            <span className="block mb-4">Full-stack</span>
            <span className="block text-skyblue h-[6rem]">
              <TypeAnimation
                style={{
                  wordBreak: "break-all",
                }}
                sequence={["Developer", 5000, "", 5000]}
                repeat={Infinity}
                speed={10}
              />
            </span>
          </h1>
          <p className="w-1/2 min-w-80">
            Entusiasta de programação Fullstack com experiência em diversas
            tecnologias. Pronto para contribuir com projetos inovadores.
          </p>

          <div className="flex gap-8">
            <Button
              className="bg-black"
              text="Github"
              icon={<FaGithub />}
              href="https://github.com/HenriqueSoubhia"
            />
            <Button
              className="bg-[#0077b5]"
              text="Linkedin"
              icon={<FaLinkedin />}
              href="https://www.linkedin.com/in/henrique-soubhia/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
