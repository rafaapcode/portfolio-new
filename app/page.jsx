"use client";

import Image from "next/image";
import Link from "next/link";
import Title from "./components/title";
import Paragraphs from "./components/paragraphs";
import Tags from "./components/tag";
import { motion } from "framer-motion";

export default function Home() {
  const techs = [
    "HTML",
    "CSS",
    "TypeScript",
    "NestJS",
    "Google Cloud",
    "Python",
    "Angular",
    "NextJS",
    "MongoDB",
    "MySql",
  ];

  return (
    <main className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Rafael Aparecido" />
      <Paragraphs
        paragraph="Olá, sou o Rafael e atualmente trabalho como Suporte Técnico na USF."
      />
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        className="md:px-10 lg:mt-5 md:mt-5 flex gap-x-12 mb-5 lg:mb-0 md:mb-0"
      >
        <Image
          className="rounded-full mt-5 mb-5 lg:mt-0 md:mt-0  lg:mb-0 md:mb-0"
          src="/images/foto-perfil.jpeg"
          width={100}
          height={100}
          alt="my photo"
        />
        <div className="flex flex-col justify-center items-start lg:items-center md:items-center w-[40%] lg:w-[15%] md:w-[25%]">
          <ul>
            <li className="flex gap-x-2">
              <span>
                <Image
                  src="/images/linkedin-icon.svg"
                  width={20}
                  height={20}
                  alt="social icon"
                />
              </span>
              <a
                href="https://www.linkedin.com/in/rafael-ap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5f5d5d]"
              >
                Linkedin
              </a>
            </li>
            <li className="mt-2 flex gap-x-2">
              <span>
                <Image
                  src="/images/github-icon.svg"
                  width={20}
                  height={20}
                  alt="social icon"
                />
              </span>
              <a
                href="https://github.com/rafaapcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5f5d5d]"
              >
                GitHub
              </a>
            </li>
            <li className="mt-2 flex gap-x-2">
              <span>
                <Image
                  src="/images/email-icon.svg"
                  width={20}
                  height={20}
                  alt="social icon"
                />
              </span>
              <Link className="text-[#5f5d5d]" href="/contact">
                Email
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        className="md:px-10 lg:px-10 mt-5 mb-5 w-full lg:w-[75%] md:w-[90%] h-16 flex items-center flex-wrap gap-x-2 gap-y-2"
      >
        {techs.map((techName) => (
         <Tags key={techName} techname={techName} />
        ))}
      </motion.div>
      <Paragraphs
        paragraph="Estou buscando minha primeira oportunidade na área de Desenvolvimento de Software, sou apaixonado por tudo que envolva Back-End. Procuro estar sempre me atualizando das tecnologias e principalmente sobre IA e Blockchain, onde possuo um interesse em aprender."
      />
    </main>
  );
}
