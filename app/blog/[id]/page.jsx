'use client';

import { motion } from 'framer-motion';

export default function Posts({params}) {
  return (
    <motion.section initial={{ scale: 0 }} animate={{scale: 1}} className="mt-10 w-full lg:w-[70%] h-[80%] lg:h-[90%] md:h-screen px-5 bg-red-300">
        Como faço uma rota dinâmica no {params.id}
    </motion.section>
  );
}
