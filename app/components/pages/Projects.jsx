"use client";

import Title from "../utils/title";
import Tags from "../utils/tag";
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
      url: 'https://github.com/rafaapcode/newsPortal'
    },
    {
      id: 2,
      nome: "Image Manipulation",
      techs: ["Express", "EJS", "MULTER", "JIMP", "NODEMAILER"],
      desc: "O objetivo dessa aplicação é adicionar um moldura em várias fotos, e depois fazer o envio das fotos via email. Esse projeto surgiu a partir de um problema , que identifiquei quando trabalhava em um outro projeto que era relacionado ao meio ambiente e a excursão de escolas.",
      url: 'https://github.com/rafaapcode/imageManipulation'
    },
    {
      id: 3,
      nome: "Inventory Control",
      techs: ["MongoDB", "NODEJS", "Swagger"],
      desc: "Este projeto de API, foi retirado de um processo seletivo. Tem objetivo de fazer o controle de um estoque em uma loja pequena.",
      url: 'https://github.com/rafaapcode/inventoryControl'
    },
    {
      id: 4,
      nome: "Trello Notification",
      techs: ["TypeScript", "HTML", "CSS"],
      desc: "A ideia desse projeto surgiu quando eu estava estagiando. Recebíamos os chamados pelo Trello, porém muitas vezes não percebia que tinha chamado pois estava fazendo outras atividades, foi então que percebi que se tivessemos como fazer uma forma do trello nos notificar, não precisariamos ficar observando ele a todo momento.",
      url: 'https://github.com/rafaapcode/trello-notification'
    },
    {
      id: 5,
      nome: "Sistema de Advocacia",
      techs: ["Angular"],
      desc: "Sistema para facilitar o direcionamento e origanização dos casos em um advocacia local.",
      url: ''
    },
  ];

  function style(index) {
    return `flex flex-col p-3 left-[0%] lg:left-[10%] top-[${index}%] rounded h-fit w-[98%] md:w-[90%] lg:w-[60%] absolute backdrop-blur-lg border border-[#272525] shadow-md shadow-[#000] overflow-auto`;
  }

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Projetos" />
      <div className="mt-10 w-full flex flex-col items-start lg:gap-x-2 h-[70%] overflow-y-auto relative">
        {items.map((item) => (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-2 p-5 bg-[#201f1f] w-fit h-fit rounded-md cursor-pointer"
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              setSelectedItem(item);
            }}
          >
            <motion.p className="text-base md:text-lg text-[#7a7a7a]">
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
              className={style(selectedItem.id)}
              layoutId={selectedId}
            >
              <motion.button
                className="self-end mr-2 mt-2 text-center transition-all duration-75 text-[#fff] text-xl hover:text-[#a0a0a0] h-[30px] w-[30px] rounded-lg"
                onClick={() => setSelectedId(null)}
              >
                X
              </motion.button>
              <div className="mx-auto w-[200px] h-[200px]">
                <img
                  className="rounded-lg mt-5 mb-5"
                  src="https://www.alura.com.br/artigos/assets/testes/imagem-2.jpg"
                  alt="teste"
                />
              </div>
              <motion.p className="px-5 py-2 font-bold text-sm md:text-base text-[#fff]">
                {selectedItem.desc}
              </motion.p>
              {selectedItem.url && (
                <button className="p-2 bg-[#272727] hover:bg-[#4e4949] w-[20%] mx-auto text-white rounded-md"><a href={selectedItem.url} target="_blank">Link</a></button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
