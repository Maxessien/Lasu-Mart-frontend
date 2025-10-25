"use client"
import {FaEye} from "react-icons/fa"
import {useRouter} from "next/navigation"
import {useSelector} from "react-redux"

const StyledTh = ({children})=><th className="text-lg text-[var(--text-primary)] px-2 py-1 font-bold">{children}</th>
const StyledTd = ({children})=><td className="text-base text-[var(--text-primary)] px-2 py-1 font-semibold">{children}</td>

const VendorOrdersTable = ({ordersData})=>{
    const {userData: {userId}} = useSelector((state)=>state.userAuth)
    const router = useRouter()
    return (
        <>
        <table className="border-collapse border-1 border-[var(---text-secondary)] rounded-md">
            <thead>
                <tr className="border-b-1 border-b-[var(---text-secondary)]">
                    <StyledTh>Product Name</StyledTh>
                    <StyledTh>Customer phone number</StyledTh>
                    <StyledTh>Quantity</StyledTh>
                    <StyledTh>Total price</StyledTh>
                    <StyledTh>Date Added</StyledTh>
                    <StyledTh>Status</StyledTh>
                    <StyledTh>Action</StyledTh>
                </tr>
            </thead>
            <tbody>
                {ordersData.map(({orderId, name, customerContactInfo: {phone}, createdAt, quantity, deliveryStatus, price})=>{
                    return (
                        <tr className="border-b-1 border-b-[var(---text-secondary)]" onClick={()=>router.push(`/${userId}/vendor/orders/${orderId}`)}>
                            <StyledTd>{name}</StyledTd>
                            <StyledTd>{phone}</StyledTd>
                            <StyledTd>{quantity}</StyledTd>
                            <StyledTd>{price*quantity}</StyledTd>
                            <StyledTd>{createdAt}</StyledTd>
                            <StyledTd>{deliveryStatus}</StyledTd>
                            <StyledTd onClick={()=>router.push(`/${userId}/vendor/orders/${orderId}`)}><FaEye /> View</StyledTd>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}