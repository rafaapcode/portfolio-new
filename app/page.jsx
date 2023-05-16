import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full lg:w-[70%] h-[80%] lg:h-screen md:h-screen px-5 overflow-auto">
      <div className="w-[95%] mt-5 lg:mt-12 md:mt-12 md:px-10 lg:px-10">
        <h1 className="text-2xl">Rafael Aparecido</h1>
      </div>
      <div className="md:px-10 mt-5 text-[#666565]">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sint
          deserunt explicabo obcaecati at! Reiciendis laudantium maiores, cum
          consequatur odio aliquid. Quasi vel dolorem provident placeat
          distinctio, dolores praesentium modi!
        </p>
      </div>
      <div className="md:px-10 lg:mt-5 md:mt-5 flex flex-col md:flex-row lg:flex-row gap-x-12 mb-5 lg:mb-0 md:mb-0">
        <Image className="rounded-full mt-5 mb-5 lg:mt-0 md:mt-0  lg:mb-0 md:mb-0" src="/images/cacto.jpg" width={100} height={100}/>
        <div className="flex flex-col justify-center items-start lg:items-center md:items-center w-[40%] lg:w-[15%] md:w-[15%]">
            <ul>
              <li className="flex gap-x-2"><span><Image src="/images/linkedin-icon.svg" width={20} height={20}/></span><a href="https://www.linkedin.com/in/rafael-ap/" target="_blank" rel="noopener noreferrer" className="text-[#5f5d5d]" >Linkedin</a></li>
              <li className="mt-2 flex gap-x-2"><span><Image src="/images/github-icon.svg" width={20} height={20}/></span><a href="https://github.com/rafaapcode" target="_blank" rel="noopener noreferrer" className="text-[#5f5d5d]" >GitHub</a></li>
              <li className="mt-2 flex gap-x-2"><span><Image src="/images/email-icon.svg" width={20} height={20}/></span><Link  className="text-[#5f5d5d]" href="/contact">Email</Link></li>
            </ul>
        </div>
      </div>
      <div className="md:px-10 lg:mt-5 md:mt-5 text-[#666565]">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sint
          deserunt explicabo obcaecati at! Reiciendis laudantium maiores, cum
          consequatur odio aliquid. Quasi vel dolorem provident placeat
          distinctio, dolores praesentium modi!
        </p>
      </div>
    </main>
  );
}
