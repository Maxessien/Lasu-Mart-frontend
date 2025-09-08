import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchAllProducts,
  fetchBySearchQuery,
  fetchProductsByCategory,
  fetchTopProducts,
} from "./utils/productsApiUtils";

const useAllProducts = () => {
  return useInfiniteQuery({
    queryKey: ["allProducts"],
    queryFn: ({ pageNumber = 1 }) => {
      return fetchAllProducts(pageNumber);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageNumber;
    },
  });
};

const useCategoryProducts = (selectedCategory) => {
  return useInfiniteQuery({
    queryKey: ["categoryProducts", selectedCategory],
    queryFn: ({ pageNumber }) => {
      return fetchProductsByCategory(pageNumber, selectedCategory);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageNumber;
    },
  });
};

const useTopProducts = () =>
  useQuery({
    queryKey: ["topProducts"],
    queryFn: () => fetchTopProducts(),
  });

const useSearchQuery = (query) => {
  return useQuery({
    queryKey: ["searchQuery", query],
    queryFn: () => fetchBySearchQuery(query),
  });
};

export { useAllProducts, useCategoryProducts, useTopProducts, useSearchQuery };
