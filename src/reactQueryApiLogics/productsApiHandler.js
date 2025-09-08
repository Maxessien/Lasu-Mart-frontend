import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchAllProducts, fetchProductsByCategory, fetchTopProducts } from './utils/productsApiUtils';

const useAllProducts = ()=>{
    return useInfiniteQuery({
        queryKey: ["allProducts"],
        queryFn: ({pageNumber})=>{
            fetchAllProducts(pageNumber)
        },
        getNextPageParam: (lastPage)=>{
            return lastPage.nextPageNumber
        }
    })
}

const useCategoryProducts = (selectedCategory)=>{
    return useInfiniteQuery({
        queryKey: ["categoryProducts"],
        queryFn: ({pageNumber})=>{
            fetchProductsByCategory(pageNumber, selectedCategory)
        },
        getNextPageParam: (lastPage)=>{
            return lastPage.nextPageNumber
        }
    })
}

const useTopProducts = ()=>useQuery({
    queryKey: ["topProducts"],
    queryFn: ()=>fetchTopProducts()
})


export {useAllProducts, useCategoryProducts, useTopProducts}