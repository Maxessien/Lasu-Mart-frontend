import { useDispatch, useSelector } from "react-redux"
import Products from "./Products"
import Button from "../reusable_components/Buttons"
import { nextPage, prevPage, setPage } from "../../store_slices/productPageSlice"
import { MdArrowBack, MdArrowForward } from "react-icons/md"

const ShopMain = ()=>{
    const {currentPage, totalPages} = useSelector((state)=>state.productPage)
    const dispatch = useDispatch()
    console.log(totalPages, "tottt")
    return (
        <>
        <Products pageNumber={currentPage} />
            <div className="flex items-center pb-8 justify-center gap-3 mt-4 w-full">
                {currentPage > 1 && <Button type="primary" classNames="text-lg font-bold p-2" buttonFn={()=>dispatch(prevPage())} ><MdArrowBack /></Button>}
                {Array(totalPages).fill(0).map((_,page)=>{
                    console.log(page)
                    return <Button size="small" classNames="w-[35px] h-[35px] text-center" type={currentPage === page +1 ? "primary" : "secondary"} buttonFn={()=>dispatch(setPage(page+1))}>{page+1}</Button>
                })}
                {currentPage < totalPages && <Button type="primary" classNames="text-lg font-bold" buttonFn={()=>dispatch(nextPage())} ><MdArrowForward /></Button>}
            </div>
        </>
    )
}

export default ShopMain