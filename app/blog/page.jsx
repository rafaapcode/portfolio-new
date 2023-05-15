export default function Home() {
  return (
    <main className="w-[70%] h-screen flex items-center">
      <div className="w-full lg:h-[85%] md:h-[65%] bg-blue-300">
        <div className="w-1/2 py-5 px-2">
          <h1 className="text-3xl">Blog</h1>
        </div>
        <div className="w-[98%] lg:h-[80%] md:h-[85%] mt-5 bg-red-300 px-5 overflow-auto">
          <p>Meus artigos</p>
        </div>
      </div>
    </main>
  );
}
