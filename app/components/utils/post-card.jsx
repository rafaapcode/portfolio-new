"use client";

import { useState } from "react";

export default function PostsCard({ id, titulo, techs }) {

  return (
    <div className="w-full">
      <div className="mt-5 max-w-full lg:max-w-[45%] ml-7 px-5 py-1 bg-[#2c2929] rounded-lg">
        <a href={`/posts/${id}`}>
          <h1 className="text-white text-lg">{titulo}</h1>
        </a>
        <div className="flex flex-wrap gap-x-2 gap-y-2 text-[#fff] p-3">
          {techs.map((tech, index) => (
            <span className="px-3 text-[#888585] bg-[#464141] rounded-md">
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}