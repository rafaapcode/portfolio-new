import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen lg:flex-row md:flex-row bg-[#242222]">
        <header className="w-full lg:w-[30%] md:w-[30%] h-[30%] lg:h-screen md:h-screen">
          <ul className="lg:mt-5 md:mt-5 lg:float-right md:float-right">
            <li>
              <Image src="/images/logo.svg" width={100} height={100} />
            </li>
            <div className="flex flex-row md:flex-col lg:flex-col flex-wrap ml-2 md:ml-0 lg:ml-0 gap-x-5 gap-y-2 lg:gap-x-0 md:gap-x-0 lg:gap-y-0 md:gap-y-0">
              <li className="w-fit h-fit px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/">Home</Link>
              </li>
              <li className="w-fit h-fit lg:mt-2 md:mt-2 px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/about">Sobre</Link>
              </li>
              <li className="w-fit h-fit lg:mt-2 md:mt-2 px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/qualification">Formação</Link>
              </li>
              <li className="w-fit h-fit lg:mt-2 md:mt-2 px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/experience">Experiência</Link>
              </li>
              <li className="w-fit h-fit lg:mt-2 md:mt-2 px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/projects">Projetos</Link>
              </li>
              <li className="w-fit h-fit lg:mt-2 md:mt-2 px-2 py-1 rounded-md text-[#5f5d5d] hover:text-[#fff]">
                <Link href="/blog">Blog</Link>
              </li>
            </div>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
