import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/page";
import About from "@/components/About/page";
import Gallery from "@/components/Gallery/page";
import NameCard from "@/components/Navbar/NameCard";
import Socials from "@/components/Navbar/Socials";
export default function Home() {
  return (
    <main className="scroll-smooth lg:w-[80vw] w-100vw sm:w-[100vw] md:w-[100vw] min-h-screen flex flex-row m-auto  gap-x-5 p-2">
      <div
        id="fixed"
        className="hidden lg:block w-[45%] pt-10 h-full items-center fixed top-0 right-0 m-auto "
      >
        <Navbar />
      </div>
      <div
        id="relative"
        className=" scroll-smooth h-full w-[100%] lg:w-[55%]  relative flex p-5 flex-col justify-normal lg:mt-[2.5%]"
      >
        <div className="block lg:hidden">
          <div className="flex flex-col gap-10 my-10">

          <NameCard />
          <Socials />
          </div>
        </div>

        <div id="about" className="">
          <About />
        </div>
        <div id="projects" className="">
          <Projects />
        </div>
        <div id="gallery" className="">
          <Gallery />
        </div>
      </div>
    </main>
  );
}
