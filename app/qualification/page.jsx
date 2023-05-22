"use client";

import Title from "../components/title";
import CardQualification from "../components/card-qualification";

export default function Formacao() {
  const qualification = [{}];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <Title title="Formação" />
      <div className="mt-10 w-full md:w-[75%] lg:w-[70%] flex flex-col justify-center items-center gap-y-1">
        <CardQualification />
      </div>
    </section>
  );
}
