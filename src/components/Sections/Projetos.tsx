"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { onValue, ref } from "firebase/database";
import { db } from "@/firebaseConfig";
import { BeatLoader } from "react-spinners";

type Project = {
  name: string;
  link: string;
  photo: string;
};

const Projetos = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsRef = ref(db, "projects");

    const unsubscribe = onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const projectsArray: Project[] = [];

        Object.keys(data).forEach((item) => {
          projectsArray.push({
            name: data[item].name,
            link: data[item].link,
            photo: data[item].imgUrl,
          });
        });

        setProjects(projectsArray);
      } else {
        setProjects([]);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {});

  return (
    <section id="projetos" className="flex justify-center py-32 bg-gray-blue">
      <div className="max-w-6xl px-8 w-full flex flex-col gap-12">
        <h2 className="text-6xl font-bold text-white">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.length > 0 &&
            projects.map((project) => (
              <Link
                href={project.link}
                className="relative overflow-hidden group"
                target="_blank"
                key={project.name}
              >
                <Image
                  className="w-full"
                  width={300}
                  height={150}
                  src={project.photo as string}
                  alt={"print do " + project.name}
                />
                <h3 className="absolute bottom-[-6rem] text-xl font-bold transition-all w-full bg-black/70 text-white py-3 px-4 group-hover:bottom-0">
                  {project.name}
                </h3>
              </Link>
            ))}
          {!(projects.length > 0) && (
            <div className="flex ">
              <BeatLoader size={20} color="white" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
