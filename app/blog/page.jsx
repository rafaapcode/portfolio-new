"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  const nomePosts = [
    { id: 1, nome: "Em desenvolvimento", tags: ["Back-End", "Full-Stack", "Front-End"] }
  ];
  const router = useRouter();
  return (
    <section className="w-full mx-auto lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <div className="mx-auto py-5 w-1/2 flex justify-between">
        <h1 className="text-white text-3xl">BLOG</h1>
        <Link href="/">
            <Image
              src="/images/arrow.png"
              width={50}
              height={50}
              alt="icon arrow back"
            />
          </Link>
      </div>
      <div className="flex flex-col items-center mt-2 w-full h-[75%] overflow-auto">
        <ul>
          {nomePosts.map(({ nome, id, tags }) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2"
              onClick={() => router.push(`/blog/${id}`)}
              key={nome}
            >
              <span className="bg-[#979797] flex flex-col gap-y-2 text-base font-semibold text-[#070707] transition-all cursor-pointer p-2 rounded">
                {nome}
                <div className="w-full flex gap-x-2">
                  {tags.map((tag) => (
                    <span className="w-fit bg-white shadow text-slate-600 px-2 rounded-md text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
