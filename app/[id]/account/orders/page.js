import { cookies } from "next/headers"
import SignOutUser from "../../../../src/components/reusable_components/SignOutUser"
import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import {accountHeadersStyles} from "../layout.js"
import OrderHistoryTable from './../../../../src/components/account-components/order-history/OrderHistoryTable';


const OrderHistory = async()=>{
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get("userSessionToken")
        const orderHistory = await authApi(token.value).get("/user/orders")
        return <>
        <h1 className={accountHeadersStyles}>
            Orders
        </h1>
        <OrderHistoryTable initOrdersData={orderHistory.data} />
        </>
    } catch (err) {
        console.log(err)
        return <SignOutUser />
    }
}

export default OrderHistory