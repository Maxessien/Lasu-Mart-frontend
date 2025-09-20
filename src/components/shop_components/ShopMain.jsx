import { useDispatch, useSelector } from "react-redux"
import Products from "./Products"
import Button from "../reusable_components/Buttons"
import { nextPage, prevPage, setPage } from "../../store_slices/productPageSlice"
import { MdArrowBack, MdArrowForward } from "react-icons/md"

const ShopMain = ()=>{
    const {currentPage, totalPages} = useSelector((state)=>state.productPage)
    const dispatch = useDispatch()
    return (
        <>
        <Products pageNumber={currentPage} />
            <div className="flex items-center pb-8 justify-center gap-3 mt-4 w-full">
                <Button type="primary" classNames="text-lg font-bold p-2" buttonFn={()=>dispatch(nextPage())} ><MdArrowBack /></Button>
                {Array(totalPages).map((_,page)=>{
                    <Button size="small" rounded="md" buttonFn={()=>dispatch(setPage(page))}>{page}</Button>
                })}
                <Button type="primary" classNames="text-lg font-bold" buttonFn={()=>dispatch(prevPage())} ><MdArrowForward /></Button>
            </div>
        </>
    )
}

export default ShopMain