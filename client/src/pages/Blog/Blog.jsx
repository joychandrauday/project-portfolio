import React from "react";
import { FaEye, FaHammer, FaLinkedin } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: blogs,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
    keepPreviousData: true,
  });
  if (isLoading) {
    refetch();
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wrap">
          <div className="loading loading-ball loading-lg"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600">Error fetching blog data</div>
    );
  }
  console.log(blogs);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="wrap grid grid-cols-3 gap-4 pt-24 pl-32 pr-4">
        {blogs.map((blog) => (
          <Link to={`${blog.slug}`} key={blog._id} className="flex">
            <div className="text-center  bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg shadow-xl shadow-black flex flex-col justify-between h-full relative w-full group hover:-translate-y-1 transition-transform">
              <div className="werap relative">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="rounded-t-md"
                />
                <div className="absolute top-0 left-0 items-center gap-2 hidden group-hover:flex group-hover:bg-black group-hover:bg-opacity-60 h-full w-full justify-center transition-all">
                  <FaEye /> {blog.views}
                </div>
                <Link to={`/blogs/${blog?.category}`} className="absolute top-0 right-0 flex items-center gap-2 p-2 badge rounded-none">
                  {blog?.category}
                </Link>
              </div>
              <div className="p-4 text-left">
                <div className="category flex justify-between">
                  <p className="text-gray-500">{blog?.author.name}</p>
                  <p className="text-gray-500">On:{new Date().toLocaleDateString()}</p>
                </div>
                <h1 className="text-xl font-bold mb-2 text-white">
                  {blog.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
