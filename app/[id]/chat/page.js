import { authApi } from "../../../src/axiosApiBoilerplates/authApi"
import AllChats from "../../../src/components/chat_components/AllChats"
import { getServerAuthToken } from "../../../src/utils/authHelpers"

const AllChatsPage = async()=>{
    const token = await getServerAuthToken()
    const allChats = await authApi(token).get("/chat")
    console.log(allChats.data, allChats.data.length, "chats")

    return <AllChats userChats={allChats.data} />
}

export default AllChatsPage