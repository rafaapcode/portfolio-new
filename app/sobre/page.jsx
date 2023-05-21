"use client";

import Title from "../components/title";
import Paragraphs from "../components/paragraphs";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Sobre" />
      <br />
      <Paragraphs paragraph="Olá, sou o Rafael, mais normalmente me chamam de Rafa ou Rafinha, do jeito que você preferir." />
      <br />
      <Paragraphs paragraph="Atualmente estou trabalhando como Suporte Técnico Júnior na USF, onde faço manutenção e configuração em equipamentos de TI em geral, utilização de plataformas como GLPI e CITRIX e preparação de equipamentos para as aulas. Mas meu foco e objetivo estão na minha carreira de Desenvolvedor Júnior." />
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "95%" }}
        transition={{ duration: 0.8 }}
        className="mt-5 mb-5 md:ml-10 lg:ml-10 w-full md:w-[95%] lg:w-[95%]"
      />
    </section>
  );
}
<Paragraphs paragraph="Olá, sou o Rafael, mais normalmente me chamam de Rafa ou Rafinha, do jeito que você preferir." />;
