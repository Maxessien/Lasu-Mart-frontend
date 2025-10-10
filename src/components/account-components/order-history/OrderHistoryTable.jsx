"use client"

import { useSelector } from 'react-redux';
import ListProductTable from './ListProductTable';
import Button from './../../reusable_components/Buttons';
import { useRouter } from 'next/navigation';

const OrderHistoryTable = ({initOrdersData})=>{
    const {userData} = useSelector((state)=>state.userAuth)
    const ordersData = userData?.orderHistory ?? initOrdersData
    const router = useRouter()

    return (
        <>
        {ordersData && ordersData.length > 0 ? (
            <>
            {ordersData.map((data, index)=>{
                return (
                    <>
                    <div className="flex flex-cols md:grid grid-cols-[150px_1fr] border-collapse border-2 border-[var(--main-secondary-light)]">
                        <p className="w-full flex items-center justify-center text-md font-semibold text-[var(--text-primary)]">{data.orderId}</p>
                        <ListProductTable key={index} {...data} />
                    </div>
                    </>
                )
            })}
            </>
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