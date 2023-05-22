import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SocialButton({ imgUrl, text }) {
  return (
    <a href="https://www.linkedin.com/in/rafael-ap/" target="_blank">
      <motion.button
        initial={{ x: -530 }}
        animate={{ x: 0 }}
        transition={{duration: 0.7}}
        className="border border-slate-700 flex px-5 py-2 rounded-lg shadow shadow-slate-500/50 hover:bg-[#201f1f] transition-all duration-75"
      >
        <Image src={imgUrl} width={25} height={25} alt="logo-social" />
        <span className="ml-2">{text}</span>
      </motion.button>
    </a>
  );
}
