"use client";

import React from "react";
import PostsCard from "../components/utils/post-card";
import Image from "next/image";

export default function Blog() {
  const nomePosts = [
    {
      id: 1,
      nome: "Em desenvolvimento",
      tags: ["Back-End", "Full-Stack", "Front-End"],
    },
  ];

  return (
    <section className="w-full mx-auto bg-[#111010] h-screen">
      <div className="w-[70%] justify-around h-fit flex items-center p-3">
        <a href="/"><Image src="/images/arrow.png" width={45} height={45} alt="Icon arrow"/></a>
        <h1 className="text-white text-4xl">BLOG</h1>
      </div>
      <div className="w-full h-fit overflow-auto">
        {nomePosts.map((post) => (
          <PostsCard
            key={post.id}
            id={post.id}
            techs={post.tags}
            titulo={post.nome}
          />
        ))}
      </div>
    </section>
  );
}
