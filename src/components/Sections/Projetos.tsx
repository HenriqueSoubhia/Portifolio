"use client";

import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

import coldeFoto from "../../assets/imgs/coldelabs.png";
import todoFoto from "../../assets/imgs/todo-firebase.png";
import sassCurso from "../../assets/imgs/sassCurso.png";

type Project = {
  name: string;
  link: string;
  photo: string | StaticImageData;
};

const projects: Project[] = [
  {
    name: "Colde Labs - Ensinando programação",
    link: "https://coldelabs.web.app/",
    photo: coldeFoto,
  },
  {
    name: "To do List - React/Firebase",
    link: "https://github.com/HenriqueSoubhia/to-do-firebase",
    photo: todoFoto,
  },
  {
    name: "Layout em SASS",
    link: "https://github.com/HenriqueSoubhia/projeto-agency-SASS",
    photo: sassCurso,
  },
  // {
  //   name: "Projeto 4",
  //   link: "https://www.example.com",
  //   foto: "https://picsum.photos/500/300?random=4",
  // },
  // {
  //   name: "Projeto 5",
  //   link: "https://www.example.com",
  //   foto: "https://picsum.photos/500/250?random=5",
  // },
  // {
  //   name: "Projeto 6",
  //   link: "https://www.example.com",
  //   foto: "https://picsum.photos/500/320?random=6",
  // },
  // {
  //   name: "Projeto 7",
  //   link: "https://www.example.com",
  //   foto: "https://picsum.photos/500/300?random=7",
  // },
  // {
  //   name: "Projeto 8",
  //   link: "https://www.example.com",
  //   foto: "https://picsum.photos/500/200?random=8",
  // },
];

const Projetos = () => {
  return (
    <section id="projetos" className="flex justify-center py-32 bg-gray-blue">
      <div className="max-w-6xl px-8 w-full flex flex-col gap-12">
        <h2 className="text-6xl font-bold text-white">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects &&
            projects.map((project) => (
              <Link
                href={project.link}
                className="relative overflow-hidden group"
                target="_blank"
                key={project.name}
              >
                <Image
                  className="w-full"
                  src={project.photo as string}
                  alt={"print do " + project.name}
                />
                <h3 className="absolute bottom-[-6rem] text-xl font-bold transition-all w-full bg-black/70 text-white py-3 px-4 group-hover:bottom-0">
                  {project.name}
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
