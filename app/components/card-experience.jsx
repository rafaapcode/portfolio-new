import { motion } from "framer-motion";

export default function CardExperience({ experiencia }) {
  return (
    <section className="group cursor-pointer ml-0 md:ml-7 lg:ml-7 w-full md:w-1/2 lg:w-[45%] h-fit p-3 border border-[#272525] shadow-md shadow-[#000] rounded-md text-white font-semibold">
      <div>
        <p>
          {experiencia.cargo} -{" "}
          <span className="font-semibold text-base lg:text-lg text-[#353232] underline">
            {experiencia.empresa}
          </span>
        </p>
      </div>
      <span className="text-sm text-[#504b4b]">{experiencia.periodo}</span>
      <motion.div className="p-5 hidden group-hover:block transition ease-in-out">
        <p className="text-sm">{experiencia.desc}</p>
      </motion.div>
    </section>
  );
}
