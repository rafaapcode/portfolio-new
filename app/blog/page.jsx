"use client";

import Title from "../components/title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sobre() {
  const nomePosts = [{ id: 1, nome: "Em desenvolvimento" }];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Blog" />
      <div className="mt-10 w-full h-[75%] overflow-auto">
        <ul className="ml-10">
          {nomePosts.map(({ nome, id }) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2"
              key={nome}
            >
              <span className="text-base font-semibold text-[#fff] hover:text-[#666565] transition-all cursor-pointer p-2 rounded">
                {nome}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
