import React from "react";
import { Link, useParams } from "react-router-dom";
import useRelatedBlog from "../../hooks/useRelatedBlog";
import { FaTags, FaCalendarAlt, FaUser, FaEye } from "react-icons/fa";

const CatWiseBlogs = () => {
  const { category } = useParams();
  const {
    relatedBlogs,
    isLoading: relatedBlogsLoading,
    isError: relatedBlogsError,
  } = useRelatedBlog(category || "");

  if (relatedBlogsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wrap">
          <div className="loading loading-ball loading-lg"></div>
        </div>
      </div>
    );
  }

  if (relatedBlogsError) {
    return <div className="text-center text-red-600">Error fetching blogs</div>;
  }

  return (
    <div className="pl-32 pt-24 ">
      <h1 className="text-4xl font-bold text-white mb-8">
        Blogs in <span className="text-yellow-400">{category}</span> Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedBlogs.length > 0 ? (
          relatedBlogs.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog._id} className="flex">
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
                  <Link
                    to={`/blogs/${blog?.category}`}
                    className="absolute top-0 right-0 flex items-center gap-2 p-2 badge rounded-none"
                  >
                    {blog?.category}
                  </Link>
                </div>
                <div className="p-4 text-left">
                  <div className="category flex justify-between">
                    <p className="text-gray-500">{blog?.author.name}</p>
                    <p className="text-gray-500">
                      On:{new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <h1 className="text-xl font-bold mb-2 text-white">
                    {blog.title}
                  </h1>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No blogs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CatWiseBlogs;
