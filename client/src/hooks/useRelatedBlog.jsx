import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRelatedBlog = (category) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: relatedBlogs,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["relatedBlogs", category],
    queryFn: async () => {
      if (!category) {
        return []; // Return an empty array if there's no category
      }
      const res = await axiosPublic.get(`/blogs/${category}`);
      return res.data;
    },
    enabled: !!category, // Only run the query if category is available
    keepPreviousData: true,
  });

  return {
    relatedBlogs,
    isLoading,
    isError,
    refetch,
  };
};

export default useRelatedBlog;
