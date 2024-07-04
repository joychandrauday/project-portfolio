import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Education from "./Education";

const About = () => {
  return (
    <section className="pt-8 lg:pt-24 lg:pl-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-16 items-start gap-8">
          <div className="md:w-1/2 md:pl-12 text-center md:text-right">
            <p className="mb-4 text-lg">
              Hello, I'm Joy Chandra Uday. I am a passionate web developer with
              a deep love for building scalable and efficient applications using
              the MERN stack.
            </p>
            <p className="mb-4 text-lg">
              I specialize in building dynamic and responsive web applications.
              My goal is to transform ideas into reality through code.
            </p>
            <p className="text-lg">
              With a solid foundation in JavaScript and extensive experience
              with MongoDB, Express, React, and Node.js, I am dedicated to
              delivering high-quality and user-friendly applications.
            </p>

            <div className="flex justify-center md:justify-end gap-2 items-center py-4">
              <a
                href="https://linkedin.com/in/joychandrauday"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-400 "
              >
                <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                <FaLinkedin />
                LinkedIn
                </button>
                
              </a>
              <a
                href="https://github.com/joychandrauday"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-400 "
              >
                <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                  <FaGithub />
                  Github
                </button>
              </a>
              <a
                href="https://facebook.com/joychandraudayy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-400 "
              >
                <button className="btn bg-primary text-yellow-400 rounded-none  hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                <FaFacebook />
                Facebook
                </button>
                
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
