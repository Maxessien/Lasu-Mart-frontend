import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import ChatRoom from "../../../../src/components/chat_components/ChatRoom"
import { getServerAuthToken } from "../../../../src/utils/authHelpers"
import { notFound } from "next/navigation"

const ChatPage = async({params})=>{
    const {chatId} = await params
    if (!chatId) return notFound()
    const token = await getServerAuthToken()
    console.log(token)
    const chat = await authApi(token).get(`/chat/${chatId}`)
    console.log(chat, "ghghghg")    
    if (!chat) return notFound()

    return (
        <>
            <ChatRoom chat={chat.data} />
        </>
    )
}

export default ChatPage