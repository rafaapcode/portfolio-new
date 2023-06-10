"use client";

import React from "react";
import Title from "../utils/title";
import PostsCard from "../utils/post-card";

export default function Blog() {
  
  
  return (
    <section className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5">
      <Title title="BLOG" />
      <div className="max-w-[45%] w-fit h-fit">
        <PostsCard id={10} techs='teste' titulo='teste'/>
      </div>
    </section>
  );
}
