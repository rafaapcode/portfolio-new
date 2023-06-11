"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [contact, setContact] = useState({});
  const router  = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setContact({ nome, assunto, mensagem });
    setAssunto('');
    setNome('');
    setMensagem('');
    router.push('/');
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white bg-[#111010]">
      {/* <form
        className="w-[95%] md:w-[80%] lg:w-[40%] h-[65%] flex flex-col justify-center items-center gap-y-5 p-5 border backdrop-blur-md rounded-lg border-[#1d1b1b] shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:w-[90%] lg:w-[80%] flex justify-center items-center gap-x-5">
          <span>Nome : </span>
          <input
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            className="rounded-md outline-none bg-[#1d1b1b] p-1"
            type="text"
          />
        </div>
        <div className="w-full md:w-[90%] lg:w-[80%] flex justify-center items-center gap-x-2">
          <span>Assunto : </span>
          <input
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
            className="rounded-md outline-none bg-[#1d1b1b] p-1"
            type="text"
          />
        </div>
        <div className="w-full md:w-[90%] lg:w-[80%] h-[70%] flex flex-col justify-center items-center gap-x-2 gap-y-2">
          <span>Mensagem : </span>
          <textarea
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
            className="rounded-md w-[80%] h-full outline-none bg-[#1d1b1b] p-1"
          />
        </div>
        <button className="cursor-pointer bg-[#2c2929] hover:bg-[#3b3737] rounded-md px-3 py-1" type="submit">Enviar</button>
      </form> */}
      <button onClick={() => router.push("/")} className="cursor-pointer text-white mt-10 rounded-md py-1 px-3 hover:bg-[#3b3737]">Em desenvolvimento</button>
    </div>
  );
}
