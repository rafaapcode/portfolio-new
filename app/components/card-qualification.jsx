import { motion } from "framer-motion";

export default function CardQualification({
  curso,
  instituicao,
  duracao,
  transitionDuration,
}) {
  return (
    <div className="flex h-fit w-full md:w-fit lg:w-fit">
      <motion.article
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: transitionDuration }}
        className="h-[15%] px-2 py-3 border border-slate-500 rounded-lg"
      >
        <h2 className="text-base md:text-lg lg:text-lg">
          {curso} 
        </h2>
        <p className="underline underline-offset-4"><b>{instituicao}</b></p>
        <small className="text-[#666565]">{duracao}</small>
      </motion.article>
    </div>
  );
}
