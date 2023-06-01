"use client";

import Title from "../title";
import Paragraphs from "../paragraphs";
import SocialButton from "../social-buttons";
import { motion } from "framer-motion";

export default function Sobre() {
  const aboutMe = {
    presentation: {
      part1:
        "Olá, sou o Rafael, mais normalmente me chamam de Rafa ou Rafinha, do jeito que você preferir.",
      part2:
        "Atualmente estou trabalhando como Suporte Técnico Júnior na USF, onde faço manutenção e configuração em equipamentos de TI em geral, utilização de plataformas como GLPI e CITRIX e preparação de equipamentos para as aulas. Mas meu foco e objetivo estão na minha carreira de Desenvolvedor Júnior.",
    },
    about:
      "Olá! Sou o Rafael, um desenvolvedor apaixonado por Back-End, IA e Blockchain, com mais de 1 ano de experiência em projetos pessoais e comecei fazer alguns freelances nesse ano. Tenho paixão por projetos desafiadores e busco constantemente a excelência em tudo o que faço. Sou proativo, organizado e estou sempre aprimorando minhas habilidades. Convido você a explorar meu portfólio para conhecer mais sobre meus projetos e o que sou capaz de realizar.",
  };

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Sobre" />
      <br />
      <Paragraphs paragraph={aboutMe.presentation.part1} />
      <br />
      <Paragraphs paragraph={aboutMe.presentation.part2} />
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "95%" }}
        transition={{ duration: 0.8 }}
        className="mt-5 mb-5 md:ml-10 lg:ml-10 w-full md:w-[95%] lg:w-[95%]"
      />
      <Paragraphs paragraph={aboutMe.about} />
      <div className="mt-5 w-1/2 mx-auto flex flex-col justify-center items-center md:flex-row lg:flex-row gap-y-3 md:gap-y-0 lg:gap-y-0 md:gap-x-3 lg: ">
        <SocialButton url="https://www.linkedin.com/in/rafael-ap/" imgUrl={'/images/linkedin-icon.svg'} text={'Linkedin'}/>
        <SocialButton url="https://github.com/rafaapcode" imgUrl={'/images/github-icon.svg'} text={'GitHub'}/>
      </div>
    </section>
  );
}
<Paragraphs paragraph="Olá, sou o Rafael, mais normalmente me chamam de Rafa ou Rafinha, do jeito que você preferir." />;
