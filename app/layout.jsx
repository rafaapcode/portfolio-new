"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [active, setActive] = useState("");

  const menus = [
    { title: "Home", path: "/", activeKey: "home" },
    { title: "Sobre", path: "/sobre", activeKey: "sobre" },
    { title: "Formação", path: "/qualification", activeKey: "formacao" },
    { title: "Experiência", path: "/experiencia", activeKey: "experiencia" },
    { title: "Projetos", path: "/projects", activeKey: "projetos" },
    { title: "Blog", path: "/blog", activeKey: "blog" },
  ];

  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen lg:flex-row md:flex-row bg-[#111010]">
        <header className="w-full lg:w-[30%] md:w-[30%] h-[30%] lg:h-screen md:h-screen">
          <ul className="lg:mt-5 md:mt-5 lg:float-right md:float-right">
            <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <Image src="/images/logo.svg" width={100} height={100} />
            </motion.li>
            <div className="flex flex-row md:flex-col lg:flex-col flex-wrap ml-2 md:ml-0 lg:ml-0 gap-x-5 gap-y-2 lg:gap-x-0 md:gap-x-0 lg:gap-y-0 md:gap-y-0">
              {menus.map(({ title, activeKey, path }, index) => (
                <motion.li
                  transition={{ duration: index / 10 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-fit h-fit px-2 py-1 rounded-md mt-2 bg-[#262626] hover:text-[#fff] text-[#E5E5E5]"
                >
                  <Link onClick={() => setActive({ active })} href={path}>
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