import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import { FaCopy } from "react-icons/fa";
import "../../components/Shared/Navbar/styles.css";

const Projects = () => {
  const axiosPublic=useAxiosPublic()
  const {
    data: projects,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: [
      "projects",
    ],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    refetch()
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wraap">
          <div className="loading loading-ball loading-lg"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600">
        Error fetching products data
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8 px-4 lg:pt-24 lg:pl-24">
      <div className="gap-2 font-bold flex items-center uppercase font-noto text-2xl">
        <FaCopy /> Projects
        <h1 className="blink font-bold text-xl" style={{ color: "yellow" }}>
          _
        </h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-2 mt-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="border-2 border-gray-700 rounded-md bg-gradient-to-b from-gray-800 to-black">
              <img
                src={project.coverImage}
                alt={project.title}
                className="rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="lg:flex space-x-2 mb-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:bg-yellow-400 "
                  >
                    <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                      Live Link
                    </button>
                  </a>
                  <a
                    href={project.clientCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:bg-yellow-400 "
                  >
                    <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                      Client Code
                    </button>
                  </a>
                  {project.serverCodeLink && (
                    <a
                      href={project.serverCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:bg-yellow-400 "
                    >
                      <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                        Server Code
                      </button>
                    </a>
                  )}
                </div>
                {project.underDevelopment && (
                  <div className="text-red-600 mb-2">Under Development</div>
                )}
                <div className="flex flex-wrap">
                  {project.usedTechnologies.map((technology) => (
                    <span
                      key={technology}
                      className="badge badge-outline bg-gray-700 text-white mr-2 mb-2"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
