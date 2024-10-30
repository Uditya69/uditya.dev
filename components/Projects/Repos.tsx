"use client";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { LuGithub } from "react-icons/lu";
import Loader from "../shared/loader";

interface proj {
  id: string;
  img: string;
  name: string;
  description: string;
  src: string;
  url: string;
}
async function fetchproject(): Promise<proj[]> {
  const snapshot = await getDocs(collection(db, "Projects"));
  const data: proj[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as proj);
  });
  return data;
}
function Repos() {
  const [loading,setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState<proj[]>([]);
  React.useEffect(() => {
    async function fetchdata() {
      const data = await fetchproject();
      if(data){
        setProjects(data);
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

  if(loading){
    return(
      <Loader/>
    )
  }

  return (
    <div>
      
      {projects.map((project) => (
        <div key={project.id} className=" relative group pt-4 flex flex-col ">
          <img src={project.img} alt={project.name} className="w-full h-auto rounded-md" />
          <div className=" absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-16 text-white">
            <div className="flex flex-col gap-5">
              <h2 className=" self-start text-3xl font-semibold">
                {project.name}
              </h2>
              <p>{project.description}</p>
            </div>
            <div className="text-gray-400 flex flex-row justify-between">
              <a href={project.url} className="hover:text-gray-200 transition duration-300 ">
                🔗 {project.url.slice(8)}
              </a>
              <a href={project.src} className="hover:text-blue-300 transition duration-300">
                <LuGithub size={22}/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repos;
