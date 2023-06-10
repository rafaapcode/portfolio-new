"use client";

import Title from "../utils/title";
import CardQualification from "../utils/card-qualification";

export default function Formacao() {
  const qualification = [
    {
      curso: "Técnico em Redes de Computadores",
      instituicao: "SENAI",
      duracao: "Jan 2020 - Jul 2021",
    },
    {
      curso: "Azure AI Fundamentals",
      instituicao: "SENAI",
      duracao: "Jul 2022 - Nov 2022",
    },
    {
      curso: "Programador Front-End",
      instituicao: "SENAI",
      duracao: "Jun 2022 - Nov 2022",
    },
    {
      curso: "Google Cloud Foundations",
      instituicao: "SENAI",
      duracao: "Fev 2023 - Mai 2023",
    },
    {
      curso: "Engenharia de Software",
      instituicao: "Uninter",
      duracao: "Fev 2022 - Atual",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="Formação" />
      <div className="p-5 mt-10 w-full h-[63%] lg:h-fit md:h-fit flex  flex-wrap gap-y-3 gap-x-3 overflow-auto">
        {qualification.map(({ curso, instituicao, duracao }, index) => (
          <CardQualification
            curso={curso}
            instituicao={instituicao}
            duracao={duracao}
            transitionDuration={index / 10}
          />
        ))}
      </div>
    </section>
  );
}
