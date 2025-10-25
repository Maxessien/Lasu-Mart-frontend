import { authApi } from "../../../src/axiosApiBoilerplates/authApi"
import VendorDashboard from "../../../src/components/vendor_components/dashboard/VendorDashboard"
import { getUserServerSide } from "../../../src/utils/authHelpers"

const VendorDashboardPage = async()=>{
    const {token} = await getUserServerSide()
    const orders = await authApi(token).get("/orders/vendor", {params: {limit: 5}}) || {data: null}

    return (
        <VendorDashboard recentOrders={orders.data} />
    )
}

export default VendorDashboardPage