"use client";

import React from "react";
import Title from "../title";
import CardExperience from "../card-experience";

export default function Experience() {
  const items = [
    {
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Jan de 2023 - Mar de 2023",
      desc: "Suporte aos usuários da rede e do SAP ( ERP ), manutenção de computadores e instação de softwares, implementação de monitoramento de redes, implementeação de plataforma de ensino ( MOODLE ).",
    },
    {
      empresa: "Projetos Pessoais",
      cargo: "Desenvolvedor",
      periodo: "Jan de 2021 - Atual",
      desc: "Desenvolvo projetos que acredito que irão agregar no meu desenvolvimento profissional e que irá me desafiar a aprender cada vez mais.",
    },
    {
      empresa: "Universidade São Francisco",
      cargo: "Suporte Técnico",
      periodo: "Mar de 2023 - Atual",
      desc: "Manutenção e configuração em equipamentos de TI em geral, utilização de plataformas como GLPI e CITRIX e preparação de equipamentos para as aulas.",
    },
    {
      empresa: "Freelancer",
      cargo: "Desenvolvedor Front-End",
      periodo: "Mar de 2023 - Atual",
      desc: "Atuando como desenvolvedor front-end, dando manutenção e adicionando funcionalidade em um sistema de Advocacia. Usando como tecnologia principal ANGULAR. Sendo essa minha prinmeira oportunidade de trabalhar em um projeto real.",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="Experiência" />
      <div className="mt-2 md:mt-10 lg:mt-10 w-full py-5 md:py-0 lg:py-0 h-full lg:h-[75%] flex flex-col justify-center md:justify-start gap-y-5 overflow-y-auto">
        {items.map((item, index) => (
          <CardExperience key={index} experiencia={item} />
        ))}
      </div>
    </section>
  );
}
