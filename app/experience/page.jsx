"use client";

import React from "react";
import Title from "../components/title";
import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      id: 1,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Jan de 2023 - Mar de 2023",
      desc: "Suporte aos usuários da rede e do SAP ( ERP ), manutenção de computadores e instação de softwares, implementação de monitoramento de redes, implementeação de plataforma de ensino ( MOODLE ).",
    },
    {
      id: 2,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Jan de 2023 - Mar de 2023",
      desc: "Suporte aos usuários da rede e do SAP ( ERP ), manutenção de computadores e instação de softwares, implementação de monitoramento de redes, implementeação de plataforma de ensino ( MOODLE ).",
    },
    {
      id: 3,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Jan de 2023 - Mar de 2023",
      desc: "Suporte aos usuários da rede e do SAP ( ERP ), manutenção de computadores e instação de softwares, implementação de monitoramento de redes, implementeação de plataforma de ensino ( MOODLE ).",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="Experiência" />
      <div className="mt-10 w-full h-[70%] lg:h-[75%] flex justify-center md:justify-start lg:justify-start flex-wrap gap-x-2 gap-y-5 overflow-y-auto">
        {items.map((item) => (
          <motion.div
            className="flex flex-col justify-evenly shadow-md shadow-[#2b2727] hover:bg-[#2b2727] cursor-pointer w-full lg:w-[35%] md:w-[60%] md:mx-auto lg:mx-0 bg-[#1f1d1d] rounded-md px-2 py-3"
          >
            <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center">
              <motion.p className="text-base md:text-lg">{item.empresa}</motion.p>
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
