"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Posts({ params }) {
  const post = {
    desc: "<h2><b>Testando</b>O Teste</h2><br/>",
  };
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="mt-10 w-full lg:w-[70%] h-[80%] lg:h-[90%] md:h-screen px-5"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-fit h-fit cursor-pointer"
      >
        <Link href="/blog">
          <Image
            src="/images/arrow.png"
            width={50}
            height={50}
            alt="icon arrow back"
          />
        </Link>
      </motion.div>
      <div
        className="mt-5 text-white w-full px-5 text-lg flex flex-col items-center h-[85%] overflow-auto gap-y-2"
        dangerouslySetInnerHTML={{ __html: post.desc }}
      >
      </div>
    </motion.section>
  );
}
