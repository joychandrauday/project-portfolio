import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const ManageProjects = () => {
  const [activeTab, setActiveTab] = useState("add"); // State to manage active tab
  const { register, handleSubmit, control, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "features",
  });
  const {
    fields: technologyFields,
    append: appendTechnology,
    remove: removeTechnology,
  } = useFieldArray({
    control,
    name: "usedTechnologies",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post('/projects', data);
      if (response.data.message === "Product added successfully") {
        toast.success('Project added successfully');
        reset(); // Reset form after successful submission
      } else {
        alert('Failed to add project');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error adding project');
    }
  };
  const {
    data: projects,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wraap">
          <div className="lds-dual-ring"></div>
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
  const handleDelete = async (id) => {
    try {
      const response = await axiosPublic.delete(`/projects/${id}`);
      console.log(response);
      if (response.status === 200) {
        toast.success("Project deleted successfully");
        refetch();
      } else {
        alert("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Error deleting project");
    }
  };
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-gray-200 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-semibold mb-6">Manage Projects</h2>
      <div className="mb-6 justify-center flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("add")}
          className={`py-2 px-4 ${
            activeTab === "add"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200"
          } rounded-t-lg`}
        >
          Add Project
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`py-2 px-4 ${
            activeTab === "manage"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200"
          } rounded-t-lg`}
        >
          Manage Projects
        </button>
      </div>

      {activeTab === "add" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Add Project Form */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter project title"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Cover Image URL</label>
            <input
              type="text"
              {...register("coverImage", {
                required: "Cover Image URL is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter cover image URL"
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-sm font-medium mb-2">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter project description"
              rows="4"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Live Link</label>
            <input
              type="text"
              {...register("liveLink", { required: "Live Link is required" })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter live link URL"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Client Code Link</label>
            <input
              type="text"
              {...register("clientCodeLink", {
                required: "Client Code Link is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter client code link URL"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Server Code Link</label>
            <input
              type="text"
              {...register("serverCodeLink", {
                required: "Server Code Link is required",
              })}
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Enter server code link URL"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">
              Under Development
            </label>
            <Controller
              name="underDevelopment"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              )}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Features</label>
            {featureFields.map((field, index) => (
              <div key={field.id} className="flex items-center mb-2">
                <input
                  type="text"
                  {...register(`features.${index}.feature`)}
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 flex-1"
                  placeholder={`Feature ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="ml-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendFeature({ feature: "" })}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Add Feature
            </button>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">
              Used Technologies
            </label>
            {technologyFields.map((field, index) => (
              <div key={field.id} className="flex items-center mb-2">
                <input
                  type="text"
                  {...register(`usedTechnologies.${index}`)}
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 flex-1"
                  placeholder={`Technology ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="ml-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendTechnology("")}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Add Technology
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 col-span-1 md:col-span-2"
          >
            Add Project
          </button>
        </form>
      )}

      {activeTab === "manage" && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Manage Projects</h3>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-gray-400">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Live Link</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id} className="border-b border-gray-700">
                  <td className="px-4 py-2">{project.title}</td>
                  <td className="px-4 py-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {project.liveLink}
                    </a>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      Delete
                    </button>
                    {/* Add an update button here if you want to allow updates */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
