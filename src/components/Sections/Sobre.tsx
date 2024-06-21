import React from "react";
import eu from "@/assets/imgs/eu.webp";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiMongodb, SiReactquery, SiReactrouter } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaPython } from "react-icons/fa";

type Props = {};

const skills = [
  {
    name: "HTML5",
    icon: <AiFillHtml5 />,
    color: "#f16529",
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 />,
    color: "#2862e9",
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript />,
    color: "#efd81d",
  },
  {
    name: "React",
    icon: <BiLogoReact />,
    color: "#5ed3f3",
  },
  {
    name: "Firebase",
    icon: <BiLogoFirebase />,
    color: "#f7c52a",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#5CAD50",
  },
  {
    name: "Sass",
    icon: <DiSass />,
    color: "#cd6799",
  },
  {
    name: "tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "#38BDF8",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#FED142",
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript  /> ,
    color: "#2F76C4",
  },
  {
    name: "React-Router",
    icon: <SiReactrouter />,
    color: "#f73750",
  },
  {
    name: "React Query",
    icon: <SiReactquery /> ,
    color: "#EF4741",
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs /> ,
    color: "#4AA859",
  },
  {
    name: "NextJs",
    icon: <RiNextjsLine color="#fff" />,
    color: "#000",
  },

];

const Sobre = (props: Props) => {
  return (
    <section id="sobre" className="flex justify-center py-32">
      <div className="max-w-6xl px-8 w-full flex gap-12 items-center">
        <Image className="max-h-96" src={eu} alt="Foto minha" />

        <div className="flex flex-col gap-6">
          <h2 className="text-6xl font-bold">Sobre</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quae obcaecati repudiandae in qui, inventore fugit error, odit
            similique quidem cum, quas quo nostrum illo saepe aliquid iusto eum
            temporibus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            non velit, ratione aspernatur dolorem mollitia rerum quam! Molestias
            sed corporis ut ratione tempore laborum veritatis dolorem. Natus vel
            temporibus placeat.
          </p>

          <div className="flex flex-wrap gap-6 pr-32">
            {skills.map((item) => (
              <div key={item.name}
                style={{ backgroundColor: item.color }}
                className={"p-2 flex justify-center group relative"}
              >
                <div className="text-5xl group-hover:scale-125 transition-all">
                  {item.icon}
                </div>
                <p className="hidden absolute top-16 group-hover:flex text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
