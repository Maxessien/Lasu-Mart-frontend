import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import AllChats from "../../../../src/components/chat_components/AllChats"
import { getServerAuthToken } from "../../../../src/utils/authHelpers"

const AllChatsPage = async()=>{
    const token = await getServerAuthToken()
    const allChats = await authApi(token).get("/chat")


    return <AllChats userChats={allChats} />
}

export default AllChatsPage