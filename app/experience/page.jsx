"use client";

import React from "react";
import Title from "../components/title";
import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      id: 0,
      empresa: "Projetos Pessoais",
      cargo: "Desenvolvedor",
      periodo: "Jan de 2021 - Atual",
      desc: "Desenvolvo projetos que acredito que irão agregar no meu desenvolvimento profissional e que irá me desafiar a aprender cada vez mais.",
    },
    {
      id: 1,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Jan de 2023 - Mar de 2023",
      desc: "Suporte aos usuários da rede e do SAP ( ERP ), manutenção de computadores e instação de softwares, implementação de monitoramento de redes, implementeação de plataforma de ensino ( MOODLE ).",
    },
    {
      id: 2,
      empresa: "Universidade São Francisco",
      cargo: "Suporte Técnico",
      periodo: "Mar de 2023 - Atual",
      desc: "Manutenção e configuração em equipamentos de TI em geral, utilização de plataformas como GLPI e CITRIX e preparação de equipamentos para as aulas.",
    },
    {
      id: 3,
      empresa: "Freelancer",
      cargo: "Desenvolvedor Front-End",
      periodo: "Mar de 2023 - Atual",
      desc: "Atuando como desenvolvedor front-end, dando manutenção e adicionando funcionalidade em um sistema de Advocacia. Usando como tecnologia principal ANGULAR. Sendo essa minha prinmeira oportunidade de trabalhar em um projeto real.",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="Experiência" />
      <div className="mt-10 w-full h-[70%] lg:h-[75%] flex justify-center md:justify-start lg:justify-start flex-wrap gap-x-2 gap-y-5 overflow-y-auto">
        {items.map((item) => (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-evenly h-1/2 shadow-md shadow-[#2b2727] hover:bg-[#2b2727] cursor-pointer w-full lg:w-[40%] md:w-[70%] md:mx-auto lg:mx-0 bg-[#1f1d1d] rounded-md px-2 py-3"
          >
            <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center">
              <motion.p className="text-base md:text-lg">
                {item.empresa}
              </motion.p>
              <motion.p className="text-sm md:text-base text-[#494949]">
                {item.cargo}
              </motion.p>
            </div>
            <motion.p className="mb-2 mt-2 lg:mt-0 self-center text-xs px-1 text-[#818080]">
              {item.periodo}
            </motion.p>
            <div className="mx-auto w-1/2 h-[1px] bg-[#3a3a3a]"></div>
            <p className="mt-2 px-2 text-xs md:text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
