"use client"

import { useEffect, useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { initSocket } from "../../utils/regHelperFns";
import { Input } from "../reusable_components/FormLayouts";
import Button from "../reusable_components/Buttons";
import { useRouter } from "next/navigation";

const ChatRoom = ({ chat }) => {
  const { userData, idToken } = useSelector((state) => state.userAuth);
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState(chat.messages);
  const router = useRouter()
  const chatSocket = initSocket("/chat", idToken);

  useEffect(() => {
    chatSocket.on("newMessage", (data) =>
      setChatMessages((state) => [...state, data])
    );
    chatSocket.on("serverError", (err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    if (!messageInput?.trim() || messageInput?.trim().length < 0) return;
    chatSocket.emit("newMessage", {
      senderId: userData.userId,
      senderName: userData.displayName,
      message: messageInput,
    });
  };
  return (
    <>
      <header className="bg-[var(--text-secondary-light)] px-2 py-3">
        <span onClick={()=>router.push(`/${userData.uuserId}/chat`)} className="mr-3 text-lg font-semibold text-[var(--text-primary)]">
          <FaArrowLeft />
        </span>
        <h1 className="text-lg text-[var(--text-primary)] font-semibold">
          {chat.vendorBasicInfo.name}
        </h1>
      </header>

      <main className="grid grid-row-[90%_10%]">
        <div className="overflow-y-auto h-full">
          <div className="transform h-max w-full px-2 translate-y-[100%]">
            {chatMessages?.map(
              ({ message, senderId, senderName, timeSent }) => {
                return (
                  <>
                  <div className={`flex w-full ${userData.userId === senderId ? "items-end" : "items-start"}`}>
                    <div className={`flex bg-[var(--text-secondary-light)] w-max max-w-[65%] px-2 py-1 rounded-md border-1 border-[var(--text-primary)] ${userData.userId === senderId ? "items-end" : "items-start"}`}>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {userData.userId === senderId ? "You" : senderName}
                      </p>
                      <p className="text-base font-normal text-[var(--text-primary)]">
                        {message}
                      </p>
                      <p className="text-sm font-normal text-[var(--main-secondary)]">
                        {timeSent}
                      </p>
                    </div>
                  </div>
                  </>
                );
              }
            )}
          </div>
        </div>
        <div className="flex gap-2 bg-[var(--text-secondary-light)] p-2">
          <Input
            type="text"
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button buttonFn={sendMessage}>
            Send <FaPaperPlane />
          </Button>
        </div>
      </main>
    </>
  );
};

export default ChatRoom;
