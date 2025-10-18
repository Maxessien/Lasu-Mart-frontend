import CompleteProfile from './../../../../src/components/account_components/vendor/CompleteProfile';
import {redirect} from "next/navigation"

const CompleteProfilePage = ({initUserData, params})=>{
    if (initUserData?.phoneNumber && initUserData?.email){
        redirect(`/${params.id}/account/verify`)
        return
    }
    return (
        <>
            <h1>Complete Your Profile</h1>
            <CompleteProfile />
        </>
    )
}

export default CompleteProfilePage