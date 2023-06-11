"use client";

import { motion } from "framer-motion";
export default function PostsCard({ id, titulo, techs }) {
  return (
    <div  className="w-full">
      <div className="mt-5 max-w-[95%] md:max-w-[52%] lg:max-w-[30%] mx-auto px-5 py-1 bg-[#2c2929] hover:bg-[#3a3636] rounded-lg">
        <a href={`/blog/${id}`}>
          <h1 className="text-white text-lg">{titulo}</h1>
        </a>
        <div className="flex flex-wrap gap-x-2 gap-y-2 text-[#fff] p-3">
          {techs.map((tech, index) => (
            <span className="px-3 text-[#888585] bg-[#464141] shadow-lg rounded-md">
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
