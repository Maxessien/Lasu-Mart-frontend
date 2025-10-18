import SignOutUser from "../../../../src/components/reusable_components/SignOutUser"
import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import {accountHeadersStyles} from "../layout.js"
import OrderHistoryTable from './../../../../src/components/account_components/order-history/OrderHistoryTable';


const OrderHistory = async({authToken})=>{
    try {
        const orderHistory = await authApi(authToken).get("/user/orders")
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