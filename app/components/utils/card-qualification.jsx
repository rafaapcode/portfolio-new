import { motion } from "framer-motion";

export default function CardQualification({
  curso,
  instituicao,
  duracao,
  transitionDuration,
}) {
  return (
    <motion.div whileHover={{scale:1.02}} className="flex cursor-pointer h-fit w-full md:w-fit lg:w-fit">
      <motion.article
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: transitionDuration }}
        className="h-[15%] px-2 py-3 border border-[#272525] rounded-lg shadow-md shadow-[#000000]"
      >
        <h2 className="text-base font-semibold text-white md:text-lg lg:text-lg">
          {curso} 
        </h2>
        <p className="underline text-white/40 underline-offset-4"><b>{instituicao}</b></p>
        <small className="text-[#666565]">{duracao}</small>
      </motion.article>
    </motion.div>
  );
}
