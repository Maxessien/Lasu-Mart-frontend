"use client"

import ListProductTable from './ListProductTable';
import Button from './../../reusable_components/Buttons';
import { useRouter } from 'next/navigation';

const OrderHistoryTable = ({initOrdersData})=>{
    const ordersData = initOrdersData
    const router = useRouter()

    return (
        <>
        {ordersData && ordersData.length > 0 ? (
            <div className="border-collapse flex flex-col gap-[10px]">
            {ordersData.map((data, index)=>{
                return (
                    <>
                    <div className="flex flex-col md:grid md:grid-cols-[20%_1fr] border-2 border-[var(--main-secondary-light)]">
                        <p className="w-full flex items-center justify-center p-2 border-b-2 md:border-r-2 border-[var(--main-secondary-light)] text-md font-semibold text-[var(--text-primary)]">{data.orderId}</p>
                        <ListProductTable key={index} {...data} />
                    </div>
                    </>
                )
            })}
            </div>
        ) : (
            <>
            <div className="flex flex-col gap-4 items-center justify-center w-full p-4">
                <p className="text-lg font-semibold text-[var(--text-primary-light)]">No Orders Made</p>
                <Button rounded='md' buttonFn={()=>router.push("/shop")}>Shop Now</Button>
            </div>
            </>
        )}
        </>
    )
}

export default OrderHistoryTable