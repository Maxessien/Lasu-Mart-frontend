import SignOutUser from "../../../../src/components/reusable_components/SignOutUser"
import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import {accountHeadersStyles} from "../layout.js"
import OrderHistoryTable from './../../../../src/components/account_components/order-history/OrderHistoryTable';
import { getUserServerSide } from "../../../../src/utils/authHelpers.js";


const OrderHistory = async()=>{
    try {
        const {token} = await getUserServerSide()
        const orderHistory = await authApi(token).get("/user/orders")
	console.log(orderHistory)
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