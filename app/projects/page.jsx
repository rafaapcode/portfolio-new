"use client";

import Title from "../components/title";
import Tags from "../components/tag";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const items = [
    {
      id: 1,
      nome: "News Portal",
      techs: ["React", "Express", "Tailwind"],
      desc: "Mostra as notícias de um idioma especificado, podendo também filtrar as notícias por data e também por autor.",
    },
    {
      id: 2,
      nome: "Image Manipulation",
      techs: ["Express", "EJS", "MULTER", "JIMP", "NODEMAILER"],
      desc: "O objetivo dessa aplicação é adicionar um moldura em várias fotos, e depois fazer o envio das fotos via email. Esse projeto surgiu a partir de um problema , que identifiquei quando trabalhava em um outro projeto que era relacionado ao meio ambiente e a excursão de escolas.",
    },
    {
      id: 3,
      nome: "Inventory Control",
      techs: ["MongoDB", "NODEJS", "Swagger"],
      desc: "Este projeto de API, foi retirado de um processo seletivo. Tem objetivo de fazer o controle de um estoque em uma loja pequena.",
    },
    {
      id: 4,
      nome: "Trello Notification",
      techs: ["TypeScript", "HTML", "CSS"],
      desc: "A ideia desse projeto surgiu quando eu estava estagiando. Recebíamos os chamados pelo Trello, porém muitas vezes não percebia que tinha chamado pois estava fazendo outras atividades, foi então que percebi que se tivessemos como fazer uma forma do trello nos notificar, não precisariamos ficar observando ele a todo momento.",
    },
    {
      id: 5,
      nome: "Sistema de Advocacia",
      techs: ["Angular"],
      desc: "Sistema para facilitar o direcionamento e origanização dos casos em um advocacia local.",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Projetos" />
      <div className="mt-10 w-full flex flex-row items-center flex-wrap lg:justify-start lg:gap-x-2 lg:items-start lg:flex-row h-[70%] overflow-y-auto relative">
        {items.map((item) => (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-2 p-2 bg-[#201f1f] w-full h-[35%] md:h-[20%] md:w-[70%] lg:w-[35%] lg:h-[35%] rounded-md cursor-pointer"
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              setSelectedItem(item);
            }}
          >
            <motion.p className="text-base md:text-lg text-[#666565]">
              {item.nome}
            </motion.p>
            <div className="mt-2 w-full flex gap-x-2 gap-y-2 flex-wrap">
              {item.techs.map((tech) => (
                <Tags key={tech} techname={tech} />
              ))}
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="flex flex-col left-[0%] md:left-[10%] lg:left-[20%] top-[70%] md:top-[10%] lg:top-[10%] rounded h-[90%] w-full  md:w-[80%] lg:w-[60%] absolute bg-[#666565] overflow-auto"
              layoutId={selectedId}
            >
              <motion.button
                className="self-end mr-2 mt-2 text-center transition-all duration-75 hover:bg-[#505050] bg-[#a09f9f] h-[30px] w-[30px] rounded-full"
                onClick={() => setSelectedId(null)}
              >
                X
              </motion.button>
              <motion.p className="px-2 font-bold text-[#fff]">
                {selectedItem.desc}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
