  "use client"

import { useSelector } from "react-redux";

const AllChats = ({ userChats }) => {
  const { userData } = useSelector((state) => state.userAuth);
  console.log(userChats)
  return (
    <>
      <div className="w-full max-w-[768px] rounded-md px-2 sm:px-3 py-3 bg-[var(--text-secondary-light)] shadow-[0_0_7px_-3px_var(--main-secondary)]">
        <ul className="flex flex-col gap-2 justify-start items-start">
          {userChats.map(({ messages, userBasicInfo: {id}, vendorBasicInfo: {name} }) => {
            return (
              <li className="flex flex-col items-start bg-[var(--main-tertiary)] w-full rounded-md px-1 py-2">
                <p className="text-base sm:text-lg lg:text-xl text-[var(--text-primary)] font-semibold">
                  {userData.userId !== id
                    ? userData.displayName
                    : name}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-[var(--main-secondary)] truncate font-semibold">
                  {messages[messages.length - 1].message}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AllChats;
