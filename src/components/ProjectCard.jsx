import { useEffect, useState } from "react";
import { recentProject } from "../data";

export default function ProjectCard() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(recentProject);
    }, []);

    return (
        <div className="bg-[#2d2d2d]">
            <div className="w-[70%] ms-auto me-auto">
                <div className="flex justify-center pt-16">
                    <h1 className="font-semibold text-textColor text-[32px] sm:text-[41px] border-b-mainColor border-b-[3px] sm:border-b-[5px] px-5 w-fit whitespace-nowrap transition-all duration-700">Recent Project</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">

                    {projects.map((item, index) => (
                        <div key={index} className="bg-black p-5 pb-10 rounded-3xl shadow-2xl hover:shadow-mainColor hover:-translate-y-5 transition-all duration-700">
                            <div>
                                <img
                                    className="rounded-xl"
                                    src={`assets/img/${item.image}`}
                                    alt={item.title}
                                />
                            </div>
                            <div>
                                <p className="text-textColor font-semibold py-5 text-xl">{item.title}</p>
                                <div className="text-textColor flex gap-3">
                                    <a
                                        href={item.vercel}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-[2px] text-xs 2xl:text-lg border-mainColor bg-mainColor text-black px-4 py-3 whitespace-nowrap rounded-lg font-semibold
                                                  transition-all duration-500 hover:-translate-y-2">
                                        Demo
                                    </a>
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-[2px] text-xs 2xl:text-lg  border-mainColor bg-transparent px-4 py-3 whitespace-nowrap rounded-lg font-semibold
                                                    transition-all duration-500 hover:-translate-y-2 hover:bg-mainColor hover:text-bgColor">
                                        Git Hub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}