import {redirect} from "next/navigation"
import { getUserServerSide } from "../../../../src/utils/authHelpers"


const VendorLayout = async({children})=>{
    const {user} = await getUserServerSide()
    if (user.isVerified?.email && user.isVerified?.phone){
        return children
    }else if (user.email && user.phoneNumber){
        redirect(`/${user.uid}/account/verify`)
    }else{
        redirect(`/${user.uid}/account/complete-profile`)
    }
}

export default VendorLayout