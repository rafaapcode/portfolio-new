import Tags from "@/app/components/utils/tag";
import Image from "next/image";

export default function Posts({ params }) {
  const post = {
    titulo: "Blog em desenvolvimento",
    tags: ["Desenvolvendo", "Em Desenvolvimento"],
    content: "<p>Esta será lançada em breve</p>",
  };

  return (
    <div className="w-screen h-screen bg-[#111010]">
      <div className="w-full p-2 flex flex-col justify-center items-center italic">
        <div className="w-full flex flex-col">
          <div className="w-fit ml-5 flex items-center">
            <a href="/blog">
              <Image
                src="/images/arrow.png"
                width={45}
                height={45}
                alt="Icon arrow"
              />
            </a>
          </div>
          <div className="w-full flex justify-center items-center">
          <p className="mt-5 text-xl md:text-3xl lg:text-4xl text-white">
            {post.titulo}
          </p>
          </div>
        </div>
        <div className="mt-5 flex gap-x-2 gap-y-2 max-w-full md:max-w-[50%] lg:max-w-[30%] p-2 w-fit">
          {post.tags.map((techs, index) => (
            <Tags key={index} techname={techs} />
          ))}
        </div>
      </div>
      <div
        className="text-white mx-auto w-[95%] h-[72%] overflow-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
