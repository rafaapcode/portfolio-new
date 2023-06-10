"use client";

import Link from "next/link";

export default function PostsCard({ id, titulo, techs }) {
  return (
    <div className="mt-5 ml-7 px-5 py-1 bg-[#2c2929] rounded-lg">
      <a href={`/${id}`}>
        <h1 className="text-white text-lg">Nome do POST</h1>
      </a>
      <div className="flex flex-wrap gap-x-2 gap-y-2 text-[#fff] p-3">
        <span className="px-3 text-[#888585] bg-[#464141] rounded-md">#js</span>
      </div>
    </div>
  );
}
