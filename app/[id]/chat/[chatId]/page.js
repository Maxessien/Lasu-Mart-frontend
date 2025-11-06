import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import ChatRoom from "../../../../src/components/chat_components/ChatRoom"
import { getServerAuthToken } from "../../../../src/utils/authHelpers"
import { notFound } from "next/navigation"  

const ChatPage = async({params})=>{
    const {chatId} = await params
    if (!chatId) return notFound()
    const token = await getServerAuthToken()
    const chat = await authApi(token).get(`/chat/${chatId}`)
    if (!chat) return notFound()

    return (
        <>
            <div className="shadow-[0_0_7px_-3px_var(--main-secondary)] rounded-md h-full w-full">
                <ChatRoom chat={chat.data}/>
            </div>
        </>
    )
}

export default ChatPage