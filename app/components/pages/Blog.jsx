"use client";

import React from "react";
import Title from "../utils/title";
import PostsCard from "../utils/post-card";

export default function Blog() {
  const nomePosts = [
    {
      id: 1,
      nome: "Em desenvolvimento",
      tags: ["Back-End", "Full-Stack", "Front-End"],
    }
  ];

  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="BLOG" />
      <div className="w-full h-fit overflow-auto">
        {nomePosts.map((post) => (
          <PostsCard key={post.id} id={post.id} techs={post.tags} titulo={post.nome} />
        ))}
      </div>
    </section>
  );
}
