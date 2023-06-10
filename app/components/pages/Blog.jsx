"use client";

import React from "react";
import Title from "../utils/title";

export default function Blog() {
  
  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title='BLOG' />
      <div className="max-w-[45%] w-fit h-fit">
        <div className="mt-5 ml-7 px-5 py-1 bg-[#2c2929] rounded-lg">
            <h1 className="text-white text-lg">Nome do POST</h1>
            <div className="flex flex-wrap gap-x-2 gap-y-2 text-[#fff] p-3">
                <span className="px-3 text-[#888585] bg-[#464141] rounded-md">#js</span>
                <span className="px-3 text-[#888585] bg-[#464141] rounded-md">#java</span>
                <span className="px-3 text-[#888585] bg-[#464141] rounded-md">#javascript</span>
                <span className="px-3 text-[#888585] bg-[#464141] rounded-md">#css</span>
                
            </div>
        </div>
      </div>
    </section>
  );
}
