"use client"

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
  const projetosSeparado = [projetos.slice(0, projetos.length / 2), projetos.slice(projetos.length / 2, projetos.length)];
  
  console.log(projetosSeparado);

  return (
    <section className="flex justify-center py-32 bg-gray-blue">
      <div className="max-w-6xl w-full flex flex-col gap-6">
        <h2 className="text-6xl font-bold text-white">Projetos</h2>

        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-6">
            <img
              className="w-full"
              src="https://picsum.photos/500/320?random=1"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/250?random=2"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/250?random=3"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/300?random=4"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <img
              className="w-full"
              src="https://picsum.photos/500/250?random=1"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/320?random=2"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/300?random=3"
              alt=""
            />
            <img
              className="w-full"
              src="https://picsum.photos/500/200?random=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
