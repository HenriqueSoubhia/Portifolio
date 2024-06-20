"use client";

import React from "react";

type Props = {};

type Projeto = {
  name: string;
  link: string;
  foto: string;
};

const projetos: Projeto[] = [
  {
    name: "Projeto 1",
    link: "https://www.google.com",
    foto: "https://picsum.photos/500/320?random=1",
  },
  {
    name: "Projeto 2",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/250?random=2",
  },
  {
    name: "Projeto 3",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/250?random=3",
  },
  {
    name: "Projeto 4",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/300?random=4",
  },
  {
    name: "Projeto 5",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/250?random=5",
  },
  {
    name: "Projeto 6",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/320?random=6",
  },
  {
    name: "Projeto 7",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/300?random=7",
  },
  {
    name: "Projeto 8",
    link: "https://www.example.com",
    foto: "https://picsum.photos/500/200?random=8",
  },
];

const Projetos = (props: Props) => {
  const projectsSliced = [
    projetos.slice(0, projetos.length / 2),
    projetos.slice(projetos.length / 2, projetos.length),
  ];

  return (
    <section className="flex justify-center py-32 bg-gray-blue">
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <h2 className="text-6xl font-bold text-white">Projetos</h2>

        <div className="flex gap-6">
          {projectsSliced.map((list) => (
            <div className="flex flex-col flex-1 gap-6">
              {list.map((project) => (
                <a href={project.link} className="relative overflow-hidden group">
                  <img
                    className="w-full"
                    src={project.foto}
                    alt={project.name}
                  />
                  <h4 className="absolute bottom-[-6rem] text-xl font-bold transition-all w-full bg-black/70 text-white py-3 px-4 group-hover:bottom-0">{project.name}</h4>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
