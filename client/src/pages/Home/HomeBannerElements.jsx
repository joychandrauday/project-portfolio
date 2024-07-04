import React from "react";
import { FaCopy, FaGithub } from "react-icons/fa";

const HomeBannerElements = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 sm:py-16 md:py-24 lg:py-8">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-center lg:justify-between lg:gap-12">
        <img
          src="https://i.ibb.co/NjKK6Mm/download-2.png"
          alt="Your Name"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:w-2/6 rounded-lg shadow-2xl shadow-black"
        />
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold">
            Hello, I'm Joy Chandra Uday
          </h1>
          <p className="py-2 text-lg">
            I am a passionate{" "}
            <span className="text-primary bg-yellow-400 px-1">
              MERN Stack Developer
            </span>{" "}
            specializing in building dynamic and responsive web applications.
          </p>
          <p className="text-secondary text-lg">
            My goal is "Transforming your Ideas into Reality through Code"
          </p>
          <div className="flex gap-4 items-center py-4 justify-center lg:justify-start">
            <a
              href="https://github.com/joychandrauday"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400 flex items-center gap-2">
                <FaGithub /> My Github
              </button>
            </a>
            <a
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400 flex items-center gap-2">
                <FaCopy /> Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerElements;
