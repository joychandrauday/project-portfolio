import React from "react";
import { FaHammer, FaLinkedin } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="flex items-center justify-center lg:pt-24 ">
      <div className="text-center p-8 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg shadow-xl shadow-black mt-16 max-w-lg w-full">
        <FaHammer className="text-6xl text-blue-600 mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold mb-2 text-white">Blog Section</h1>
        <p className="text-xl text-gray-600 mb-4">
          This section is currently under development.
        </p>
        <p className="text-gray-500">
          We're working hard to bring you the best content. Stay tuned!
        </p>
        <div className="mt-6 flex gap-2 items-center justify-center py-4">
          <a
            href="https://linkedin.com/in/joychandrauday"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-yellow-400 h-full"
          >
            <button className="btn bg-primary text-yellow-400 rounded-none hover:border border-yellow-400">
              <FaLinkedin className="mr-2" />
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
