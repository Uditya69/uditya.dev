import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/page";
import About from "@/components/About/page";
import Gallery from "@/components/Gallery/page";
export default function Home() {
  return (
    <main className="w-[80-vw] md:w-[80vw] min-h-screen flex flex-row m-auto gap-x-5 bg-red-200 p-2">
      <div id="fixed" className=" bg-blue-300  w-[50%] h-full flex items-center p-5 fixed top-0 right-0 m-auto ">
        <Navbar />
      </div>
      <div id="relative" className="bg-purple-600 h-full w-[50%]  relative flex p-5 flex-col justify-normal">
        <div id="about" className="bg-emerald-400 p-3">
          <About />
        </div>
        <div id="projects" className="bg-yellow-400 p-3">
          <Projects />
        </div>
        <div id="gallery" className="bg-lime-300">
          <Gallery />
        </div>
      </div>
      
    </main>
  );
}
