import SignOutUser from "../src/components/reusable_components/SignOutUser"
import { getUserServerSide } from "../src/utils/authHelpers";

export const dynamic = "force-dynamic"

const HeaderServer = async()=>{
    try{
        const userData = await getUserServerSide();
        return <AppHeader initUserData={userData} />
    }catch(err){
        console.log(err)
        return (
            <>
            <AppHeader initUserData={null} />
            <SignOutUser />
            </>

        )
    }
}

export default HeaderServer