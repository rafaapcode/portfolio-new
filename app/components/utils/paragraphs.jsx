'use client';

import {motion} from "framer-motion";

export default function Paragraphs({ paragraph }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      className="md:px-10 mt-5 mb-5 text-[#666565]"
    >
      <p>
        {paragraph}
      </p>
    </motion.div>
  );
}
