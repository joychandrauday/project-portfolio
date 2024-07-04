import React from "react";
import { FaCopy } from "react-icons/fa";
import "../../components/Shared/Navbar/styles.css";

const Projects = () => {
  const projects = [
    {
      title: "Bengal Trails",
      coverImage: "https://i.ibb.co/DWcyZP8/Screenshot-2024-07-04-030651.png",
      description:
        "Welcome to Bengal Trails, your comprehensive resource for exploring the wonders of Bangladesh. Our mission is to help travelers discover both famous landmarks and hidden gems, ensuring a rich and unforgettable travel experience.",
      liveLink: "https://bengaltrails-7a35f.web.app/",
      clientCodeLink: "https://github.com/joychandrauday/bengaltrails-client",
      serverCodeLink: "https://github.com/joychandrauday/bengaltrails-server",
      underDevelopment: false,
      features: {
        feature1:
          "Book your travel plans directly through our website with convenient payment options and instant confirmation.",
        feature2:
          "Receive personalized travel itineraries based on your interests and budget.",
        feature3:
          "Engage with other travel enthusiasts in our community forums to exchange tips, stories, and advice.",
      },
      usedTechnologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      title: "Booker's Den",
      coverImage: "https://i.ibb.co/k3v5tVq/Screenshot-2024-07-04-030827.png",
      description:
        "Bookers Den is a library website to manage books and forums. One can borrow books. There is a librarian role who manage all the books.",
      liveLink: "https://bengaltrails.web.app/",
      clientCodeLink: "https://github.com/joychandrauday/BookersDen-client",
      serverCodeLink: "https://github.com/joychandrauday/bookersden-server/",
      underDevelopment: false,
      features: {
        feature1:
          "Borrow books directly from our website and enjoy hassle-free delivery to your doorstep.",
        feature2:
          "Browse through a vast collection of books spanning various genres, from classic literature to contemporary bestsellers.",
        feature3:
          "Read reviews from fellow book enthusiasts and leave your own ratings to help others discover their next great read.",
      },
      usedTechnologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      title: "Path Chokro",
      coverImage: "https://i.ibb.co/x1tFS4K/Screenshot-2024-07-04-031102.png",
      description:
        "Path Chokro is a library website to manage books and forums. One can borrow books. There is a librarian role who manage all the books.",
      liveLink: "https://pathchokro-5e1d8.web.app/",
      clientCodeLink: "https://github.com/joychandrauday/PathChokro",
      serverCodeLink: "",
      underDevelopment: true,
      features: {
        feature1:
          "Borrow books directly from our website and enjoy hassle-free delivery to your doorstep.",
        feature2:
          "Browse through a vast collection of books spanning various genres, from classic literature to contemporary bestsellers.",
        feature3:
          "Read reviews from fellow book enthusiasts and leave your own ratings to help others discover their next great read.",
      },
      usedTechnologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
      ],
    },
  ];

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
