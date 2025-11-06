"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { initSocket } from "../../utils/regHelperFns";
import { Input } from "../reusable_components/FormLayouts";
import Button from "../reusable_components/Buttons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useRef } from "react";

const ChatRoom = ({ chat }) => {
  const { userData, idToken } = useSelector((state) => state.userAuth);
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState(chat.messages);
  const router = useRouter();
  const chatContainerRef = useRef(null);
  // connect to the /chat namespace and pass chatId via query and idToken via auth
  const chatSocket = initSocket(`/chat`, idToken, { chatId: chat.chatId });

  useEffect(() => {
    chatSocket.on("connection", console.log("Connected"));
    chatSocket.on("newMessage", (data) => {
      console.log(data, "new message");
      setChatMessages(data);
      // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    });
    chatSocket.on("serverError", (err) => {
      console.log(err);
      toast.error("Unable to connect to chat");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    if (!messageInput?.trim()) return;
    chatSocket.emit("newMessage", {
      senderId: userData.userId,
      senderName: userData.displayName,
      message: messageInput,
    });
    setMessageInput("");
  };
  return (
    <>
      <header className="bg-[var(--text-secondary-light)] flex gap-2 items-center px-2 py-1">
        <span
          onClick={() => router.push(`/${userData.userId}/chat`)}
          className="mr-3 text-lg font-semibold text-[var(--text-primary)]"
        >
          <FaArrowLeft />
        </span>
        <h1 className="text-lg text-[var(--text-primary)] font-semibold">
          {chat.vendorBasicInfo.name}
        </h1>
      </header>

      <main className="grid grid-rows-[90%_10%]">
        <div ref={chatContainerRef} className="overflow-y-auto py-3 h-full">
          <div className="flex flex-col gap-3 h-full w-full px-2 py-1">
            {chatMessages?.map(
              ({ message, senderId, senderName, timeSent }, idx) => {
                const isMine = userData.userId === senderId;
                const timeStamp = new Date(timeSent);
                return (
                  <div
                    key={`${senderId}-${timeSent}-${idx}`}
                    className={`flex w-full ${
                      isMine ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex flex-col gap-2 bg-[var(--text-secondary-light)] w-max max-w-[65%] px-2 py-1 rounded-md border-1 border-[var(--text-primary)] ${
                        isMine
                          ? "items-end text-right"
                          : "items-start text-left"
                      }`}
                    >
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {isMine ? "You" : senderName}
                      </p>
                      <p className="text-base font-normal text-[var(--text-primary)]">
                        {message}
                      </p>
                      <p className="text-sm font-normal text-[var(--main-secondary)]">
                        {timeStamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="flex gap-2 bg-[var(--text-secondary-light)] p-2">
          <Input
            type="text"
            onChange={(e) => setMessageInput(e.target.value)}
            className="h-max"
            value={messageInput}
          />
          <Button className="h-max gap-2" buttonFn={sendMessage}>
            Send <FaPaperPlane />
          </Button>
        </div>
      </main>
    </>
  );
};

export default ChatRoom;
