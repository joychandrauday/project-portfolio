import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/categories`);
      return res.data;
    },
    keepPreviousData: true,
  });

  return {
    categories,
    isLoading,
    isError,
    refetch,
  };
};

export default useCategory;
