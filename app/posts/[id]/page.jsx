import Tags from "@/app/components/utils/tag";
import Link from "next/link";

export default function Posts({ params }) {
  const post = {
    titulo: "Titulo 1",
    tags: ["Back-End", "Python", "AI"],
    content: "<h1>testando</h1>",
  };

  return (
    <div className="w-screen h-screen bg-[#111010]">
      <div className="ml-[10%] text-white w-fit p-5 hover:text-[#919191]">
        <Link href="/">VOLTAR</Link>
      </div>
      <div className="w-full p-2 flex flex-col justify-center items-center italic">
        <p className="text-4xl text-white">{post.titulo}</p>
        <div className="mt-5 flex gap-x-2 gap-y-2 max-w-[30%] p-2 w-fit">
          {post.tags.map((techs, index) => (
            <Tags key={index} techname={techs} />
          ))}
        </div>
      </div>
    </div>
  );
}
