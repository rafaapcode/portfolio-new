'use client';

import { motion } from "framer-motion";

export default function Title({title}) {
  return (
    <div className="w-[95%] mt-5 lg:mt-12 md:mt-12 md:px-10 lg:px-10">
      <motion.h2
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        className="text-xl lg:text-2xl md:text-2xl text-white"
      >
        {title.toUpperCase()}
      </motion.h2>
    </div>
  );
}
