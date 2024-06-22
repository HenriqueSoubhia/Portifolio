"use client";

import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

import coldeFoto from '../../assets/imgs/coldelabs.png'
import todoFoto from '../../assets/imgs/todo-firebase.png'
import sassCurso from '../../assets/imgs/sassCurso.png'

type Props = {};

type Projeto = {
  name: string;
  link: string;
  foto: string | StaticImageData;
};

const projetos: Projeto[] = [
  {
    name: "Colde Labs - Ensinando programação",
    link: "https://coldelabs.web.app/",
    foto: coldeFoto,
  },
  {
    name: "To do List - React/Firebase",
    link: "https://github.com/HenriqueSoubhia/to-do-firebase",
    foto: todoFoto,
  },
  {
    name: "Layout em SASS",
    link: "https://github.com/HenriqueSoubhia/projeto-agency-SASS",
    foto: sassCurso,
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

const Projetos = (props: Props) => {
  const projectsSliced = [
    projetos.slice(0, projetos.length / 2),
    projetos.slice(projetos.length / 2, projetos.length),
  ];

  return (
    <section id="projetos" className="flex justify-center py-32 bg-gray-blue">
      <div className="max-w-6xl px-8 w-full flex flex-col gap-12">
        <h2 className="text-6xl font-bold text-white">Projetos</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {projectsSliced.map((list,i) => (
            <div className="flex flex-col flex-1 gap-6" key={i} >
              {list.map((project) => (
                <Link href={project.link} className="relative overflow-hidden group" target="_blank" key={project.name}>
                  <Image
                
                    className="w-full"
                    src={project.foto as string}
                    alt={"print do "+project.name}
                  />
                  <h3 className="absolute bottom-[-6rem] text-xl font-bold transition-all w-full bg-black/70 text-white py-3 px-4 group-hover:bottom-0">{project.name}</h3>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
