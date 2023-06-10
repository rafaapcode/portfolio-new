import Tags from "@/app/components/utils/tag";

export default function Posts({ params }) {
  const post = {
    titulo: "Blog em desenvolvimento",
    tags: ["Desenvolvendo", "Em Desenvolvimento"],
    content: "<p>Esta será lançada em breve</p>",
  };

  return (
    <div className="w-screen h-screen bg-[#111010]">
      <div className="w-full p-2 flex flex-col justify-center items-center italic">
        <p className="mt-5 text-4xl text-white">{post.titulo}</p>
        <div className="mt-5 flex gap-x-2 gap-y-2 max-w-full md:max-w-[50%] lg:max-w-[30%] p-2 w-fit">
          {post.tags.map((techs, index) => (
            <Tags key={index} techname={techs} />
          ))}
        </div>
      </div>
      <div
        className="text-white mx-auto w-[95%] h-[77%] overflow-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
