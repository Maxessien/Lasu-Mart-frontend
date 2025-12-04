import { useForm } from "react-hook-form";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import Button from "../reusable_components/Buttons";
import { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

const AppHeaderMain = ({ navToggle, navState, signOutFn }) => {
  const [accountDropDowm, setAccountDropDown] = useState(false);
  const { currentSize } = useSelector((state) => state.screenSize);
  const { isLoggedIn, userData } = useSelector((state) => state.userAuth);
  const { register, handleSubmit } = useForm();
  const router = useRouter()

  const user = userData
  const loggedIn = isLoggedIn

  const submitSearchQuery = (data) => {
    if (!data.searchQuery || data?.searchQuery?.length < 1 || typeof data?.searchQuery !== "string") return
    router.push(`/shop?search=${data.searchQuery}`)
  };

  useEffect(() => {
    setAccountDropDown(false);
  }, [isLoggedIn]);

  return (
    <>
      {console.log(currentSize)}
      <div className="flex items-center justify-between px-3 sm:px-5 md:px-10">
        <div
          className={`flex ${
            currentSize <= 480
              ? "flex-col items-start justify-center"
              : "flex-row items-center justify-start"
          } gap-2`}
        >
          <span>
            <span className="text-[var(--text-primary)] font-bold text-2xl">
              Lasu
            </span>
            <span className="text-[var(--main-primary)] font-bold text-2xl">
              Mart
            </span>
          </span>
          <form className="relative" onSubmit={handleSubmit(submitSearchQuery)}>
            <input
              type="text"
              {...register("searchQuery")}
              placeholder="Search products"
              className="rounded-full border-[--text-primary-light] border-3 lg:w-lg pl-8 py-1 focus:border-[--main-primary] text-base font-semibold text-[var(--text-primary-light)]"
            />
            <button type="submit" className="absolute top-0 h-full left-1 hover:text-[var(--main-primary)] text-[var(--text-primary-light)] text-lg rounded-full p-2">
              <FaSearch />
            </button>
          </form>
        </div>

        {currentSize >= 768 ? (
          <>
            {loggedIn ? (
              <div className="flex items-center justify-end gap-3 relative">
                <button
                  onClick={() => setAccountDropDown(!accountDropDowm)}
                  className="flex items-center p-3 hover:bg-[var(--main-primary-light)] rounded-full hover:text-[var(--main-tertiary)] justify-center gap-[2px] font-semibold text-[var(--text-primary-light)] text-xl"
                >
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                  <span>
                    <FaUser />
                  </span>
                </button>

                {accountDropDowm && (
                  <div className="flex flex-col items-center justify-center absolute top-[100%] left-[-20%] z-999 gap-2 py-3 px-10 rounded-md bg-white shadow-sm">
                    <Link
                      href={`/${user?.userId}/account/profile`}
                      className="font-semibold text-base text-[var(--text-primary)] hover:text-[var(--main-primary-light)]"
                    >
                      Profile
                    </Link>
                    <Link
                      href={"/account/settings"}
                      className="font-semibold text-base text-[var(--text-primary)] hover:text-[var(--main-primary-light)]"
                    >
                      Settings
                    </Link>
                    <button
                      className="font-semibold text-base text-[var(--text-primary)] hover:text-[var(--main-primary-light)]"
                      onClick={() => signOutFn()}
                    >
                      Log out
                    </button>
                  </div>
                )}

                <Link
                  href={`/${user?.userId}/cart`}
                  className="relative font-semibold p-2 rounded-full hover:bg-[var(--main-primary-light)] text-[var(--text-primary-light)] text-2xl"
                >
                  {user?.cart?.length > 0 && (
                    <span
                      className={`rounded-full absolute top-[-5px] left-[-5px] bg-[var(--main-primary)] font-semibold text-[var(--text-secondary-light)] text-[1rem] py-1 px-2`}
                    >
                      {user?.cart?.length}
                    </span>
                  )}
                  <FaShoppingCart />
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-end gap-3">
                <Link href={"/register"}>
                  <Button>Sign Up</Button>
                </Link>
                <Link href={"/login"}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <div onClick={() => navToggle()} className="z-999 cursor-pointer">
              {navState ? (
                <FaTimes className="text-3xl fixed top-3 right-2 font-normal text-[var(--text-secondary)]" />
              ) : (
                <FaBars className="text-2xl font-bold text-[var(--text-primary)]" />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AppHeaderMain;
