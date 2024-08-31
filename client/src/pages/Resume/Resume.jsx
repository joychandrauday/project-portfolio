import React from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  {
    name: "JavaScript",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  },
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
  },
  {
    name: "Node.js",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
  },
  {
    name: "Express",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/express/express.png",
  },
  {
    name: "MongoDB",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png",
  },
  {
    name: "HTML",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
  },
  {
    name: "CSS",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
  },
  {
    name: "Git",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/git/git.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png",
  },
];

const educationData = [
  {
    degree: "Bachelor of Arts in English Literature",
    institution: "National University Bangladesh",
    year: "2019 - present",
    description: "A detailed study in English and european literature.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Govt. Janata College",
    year: "2018 - 2020",
    description:
      "Focused on science subjects with a specialization in mathematics and physics.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Lebukhali Habibullah Secondary School",
    year: "2012 - 2017",
    description:
      "Completed secondary education with a focus on general science.",
  },
];

const experienceData = [
  {
    role: "Wordpress Developer",
    company: "Fiverr",
    year: "2021 - Present",
    description:
      "Developing and maintaining web applications using Wordpress Cms.",
  },
];

const Resume = () => {
  return (
    <section className="lg:pt-24 lg:pl-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-around items-center mb-12">
          <div className="text-left lg:w-1/2 mb-12">
            <h1 className="text-4xl font-bold mb-4">Joy Chandra Uday</h1>
            <p className="text-lg">
              Passionate MERN Stack Developer specializing in building dynamic
              and responsive web applications.
            </p>
          </div>
          <div className="lg:ml-8 flex">
            
            <a
              href="../../../public/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className=" bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none  translate-y-[-4px] translate-x-1 :border border-yellow-400 btn-lg">
               Download Resume
              </button>
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="border-l border-gray-200 dark:border-gray-700 pl-4 mb-6">
            {educationData.map((education, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-400">{education.year}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white mb-1">
                  {education.degree}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-2">
                  {education.institution}
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {education.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-2xl p-2"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 mb-2"
                />
                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="border-l border-gray-200 dark:border-gray-700 pl-4 mb-6">
            {experienceData.map((experience, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-400">{experience.year}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white mb-1">
                  {experience.role}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-2">
                  {experience.company}
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex lg:gap-2 items-center py-4">
            <a
              href="https://linkedin.com/in/joychandrauday"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hover:bg-warning hover:text-black bg-primary text-yellow-400 rounded-none hover:border border-yellow-400"
            >
              <FaLinkedin className="mr-2" />
              Linkedin
            </a>
            <a
              href="https://github.com/joychandrauday"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hover:bg-warning hover:text-black bg-primary text-yellow-400 rounded-none hover:border border-yellow-400"
            >
              <FaGithub className="mr-2" />
              Github
            </a>
            <a
              href="https://facebook.com/joychandraudayy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hover:bg-warning hover:text-black bg-primary text-yellow-400 rounded-none hover:border border-yellow-400"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
