"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Sobre", path: "/sobre" },
    { title: "Formação", path: "/qualification" },
    { title: "Experiência", path: "/experiencia" },
    { title: "Projetos", path: "/projects" },
    { title: "Blog", path: "/blog" },
  ];

  const style = {
    notSelected:
      "w-fit h-fit px-2 py-1 rounded-md mt-2 bg-[#262626] hover:cursor-pointer text-[#E5E5E5] transition ease-in-out duration-500",
    selected:
      "w-fit h-fit px-2 py-1 rounded-md mt-2 border-b-2 border-zinc-700 hover:cursor-pointer text-[#E5E5E5] transition ease-in-out duration-500",
  };

  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen lg:flex-row md:flex-row bg-[#111010]">
        <header className="w-full lg:w-[30%] md:w-[30%] h-[30%] lg:h-screen md:h-screen">
          <ul className="lg:mt-5 md:mt-5 lg:float-right md:float-right">
            <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <Image
                src="/images/logo.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </motion.li>
            <div className="flex flex-row md:flex-col lg:flex-col flex-wrap ml-2 md:ml-0 lg:ml-0 gap-x-5 gap-y-2 lg:gap-x-0 md:gap-x-0 lg:gap-y-0 md:gap-y-0">
              {menus.map(({ title, path }, index) => (
                <motion.li
                  key={title}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ y: -5 }}
                  transition={{ duration: index / 10 }}
                  className={
                    selectedIndex === index
                      ? style["selected"]
                      : style["notSelected"]
                  }
                >
                  <Link onClick={() => setSelectedIndex(index)} href={path}>
                    {title}
                  </Link>
                </motion.li>
              ))}
            </div>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
