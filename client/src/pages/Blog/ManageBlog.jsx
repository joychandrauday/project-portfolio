import React, { useContext, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useCategory from "../../hooks/useCategory";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ManageBlog = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("add");
  const { register, handleSubmit, control, reset } = useForm();
  const { fields: tags, append: appendTag, remove: removeTag } = useFieldArray({
    control,
    name: "tags",
  });
  const axiosPublic = useAxiosPublic();
  const { categories, isLoading: categoriesLoading, isError: categoriesError } = useCategory();

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

  const onSubmit = async (data) => {
    try {
      const emailSlug = user?.email?.split("@")[0];
      const authorSlug = emailSlug;
      const blogData = {
        ...data,
        author: {
          name: user?.displayName,
          profileImage: user?.photoURL,
          email: user?.email,
          slug: authorSlug,
        },
        publishedDate: new Date().toISOString(),
        views: 0,
        comments: [],
      };
      const response = await axiosPublic.post("/blogs", blogData);
      if (response.status === 200) {
        toast.success("Blog posted successfully");
        reset();
        refetch();
      } else {
        toast.error("Failed to add blog");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Error adding blog");
    }
  };

  const handleDelete = async (id) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
  
      // If confirmed, proceed with deletion
      if (result.isConfirmed) {
        const response = await axiosPublic.delete(`/blogs/${id}`);
        if (response.status === 200) {
          toast.success("Blog deleted successfully");
          refetch(); // Refresh the list of blogs
        } else {
          toast.error("Failed to delete blog");
        }
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog");
    }
  };

  if (isLoading || categoriesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wrap">
          <div className="lds-dual-ring"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600">Error fetching blogs data</div>
    );
  }

  if (categoriesError) {
    return (
      <div className="text-center text-red-600">Error fetching categories data</div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-gray-200 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-semibold mb-6">Manage Blogs</h2>
      <div className="mb-6 justify-center flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("add")}
          className={`py-2 px-4 ${
            activeTab === "add"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200"
          } rounded-t-lg`}
        >
          Add Blog
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`py-2 px-4 ${
            activeTab === "manage"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200"
          } rounded-t-lg`}
        >
          Manage Blogs
        </button>
      </div>

      {activeTab === "add" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter blog title"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Cover Image URL</label>
            <input
              type="text"
              {...register("featuredImage", {
                required: "Cover Image URL is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter cover image URL"
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-sm font-medium mb-2">Content</label>
            <textarea
              {...register("content", {
                required: "Content is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter blog content"
              rows="6"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Tags</label>
            {tags.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  type="text"
                  {...register(`tags.${index}`, { required: "Tag is required" })}
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
                  placeholder="Enter a tag"
                />
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="ml-2 px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendTag({})}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Another Tag
            </button>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Category</label>
            {categories && categories[0]?.categories ? (
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                  >
                    <option value="">Select a category</option>
                    {categories[0].categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                )}
              />
            ) : (
              <p>Loading categories...</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 col-span-1 md:col-span-2"
          >
            Add Blog
          </button>
        </form>
      )}

      {activeTab === "manage" && (
        <div className="space-y-4">
          {blogs?.map((blog) => (
            <div
              key={blog._id}
              className="p-4 hover:-translate-y-1 text-left bg-gray-800 border border-gray-700 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-400">{blog.content.slice(0, 100)}...</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400 badge">{blog.author.name}</span>
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-32 rounded-lg object-cover"
                />
              </div>
              <button
                onClick={() => handleDelete(blog._id)}
                className="ml-4 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
