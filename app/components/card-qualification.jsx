import { motion } from "framer-motion";

export default function CardQualification({
  curso,
  instituicao,
  duracao,
  desc,
  transitionDuration,
}) {
  return (
    <div className="w-full">
      <motion.article
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0 }}
        className="w-full px-2 py-3 border border-slate-500 rounded-lg"
      >
        <div className="w-full flex items-center gap-x-5 mb-2">
          <h2 className="text-base md:text-lg lg:text-lg">
            Sou um card - <b>SENAI</b>
          </h2>
          <small className="text-[#666565]">Jun 2022 - Dez 2022</small>
        </div>
        <p className="text-sm md:text-base lg:text-base text-[#666565]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis,
          nihil dolor voluptate itaque consequatur dicta recusandae dignissimos
          doloremque, non vero provident iste quis consectetur, dolore soluta
          illo eum tempora?
        </p>
      </motion.article>
    </div>
  );
}
