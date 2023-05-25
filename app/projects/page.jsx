"use client";

import Title from "../components/title";
import Tags from "../components/tag";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const items = [
    { id: 1, nome: "Reservas", desc: "teste do teste", techs: ["HTML", "CSS", "JS", "PY", "C", "JAVA"] },
    { id: 2, nome: "Cadastro", desc: "teste do teste", techs: ["JS", "PY"] },
    { id: 3, nome: "Futebol APP", desc: "teste do teste", techs: ["C", "JAVA"] },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Projetos" />
      <div className="mt-10 w-full flex gap-x-2 h-[50%]">
        {items.map((item) => (
          <motion.div
            className="mt-10 p-2 bg-[#201f1f] w-[35%] h-[35%] rounded-md cursor-pointer"
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              setSelectedItem(item);
            }}
          >
            <motion.p className="text-base md:text-lg text-[#666565]">{item.nome}</motion.p>
            <div className="mt-2 w-full flex gap-x-2 gap-y-2 flex-wrap">
              {item.techs.map(tech => (
                <Tags key={tech} techname={tech} />
              ))}
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div className="bg-red-300" layoutId={selectedId}>
              <motion.h5>{selectedItem.nome}</motion.h5>
              <motion.button
                className="bg-orange-300"
                onClick={() => setSelectedId(null)}
              >
                exit
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
