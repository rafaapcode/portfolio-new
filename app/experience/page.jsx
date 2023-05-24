"use client";

import React, { useState } from "react";
import Title from "../components/title";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const items = [
    {
      id: 1,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Testando outro2",
    },
    {
      id: 2,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Testando outro2",
    },
    {
      id: 3,
      empresa: "ITP SYSTEMS",
      cargo: "Estagiário de TI",
      periodo: "Testando outro2",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="Experiência" />
      <div className="mt-10 w-full flex justify-center md:justify-start lg:justify-start flex-wrap gap-x-2 gap-y-2">
        {items.map((item) => (
          <motion.div
            className="flex justify-evenly cursor-pointer hover:bg-[#5c5b5b] w-[50%] lg:w-[35%] md:w-[35%] bg-[#1f1d1d] rounded-md shadow px-2 py-3"
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              setSelectedItem(item);
            }}
          >
            <div className="w-[75%] flex flex-col lg:flex-row lg:justify-around items-center">
              <motion.p className="text-base">{item.empresa}</motion.p>
              <motion.p className="text-sm text-[#494949] ">
                {item.cargo}
              </motion.p>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="w-fit h-fit flex flex-col justify-center items-center"
            >
              <motion.button
                className="bg-slate-500 w-[35px] h-[35px] self-end rounded-full"
                onClick={() => {
                  setSelectedId(null);
                  setSelectedItem({});
                }}
              >
                X
              </motion.button>
              <div> 
                <h1>OLá sou o rafa</h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
