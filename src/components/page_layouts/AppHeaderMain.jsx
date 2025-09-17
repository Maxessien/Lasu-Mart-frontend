import { useForm } from "react-hook-form";
import {
  FaArrowDown,
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Button from "../reusable_components/Buttons";

const AppHeaderMain = ({ navToggle, navState }) => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  const { register, handleSubmit } = useForm();
  const submitSearchQuery = (data) => {
    console.log(data);
  };

  return (
    <>
      {console.log(isLoggedIn)}
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
              className="rounded-full border-[--text-primary-light] border-3 lg:w-lg pl-8 py-1 text-md font-semibold text-[var(--text-primary-light)]"
            />
            <button className="absolute top-0 h-full left-1 text-[var(--text-primary-light)] text-lg rounded-full p-2">
              <FaSearch />
            </button>
          </form>
        </div>

        {currentSize >= 768 ? (
          <>
            {isLoggedIn ? (
              <div className="flex items-center justify-end gap-3">
                <Link
                  to={"/account"}
                  className="flex items-center p-3 hover:bg-[var(--main-primary-light)] rounded-full hover:text-[var(--main-tertiary)] justify-center gap-[2px] font-semibold text-[var(--text-primary-light)] text-xl"
                >
                  <span>
                    <FaUser />
                  </span>
                </Link>

                <Link
                  to={"/cart"}
                  className="font-semibold p-2 rounded-full hover:bg-[var(--main-primary-light)] text-[var(--text-primary-light)] text-2xl"
                >
                  <FaShoppingCart />
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-end gap-3">
                <Link to={"/register"}>
                  <Button>Sign Up</Button>
                </Link>
                <Link to={"/login"}>
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
