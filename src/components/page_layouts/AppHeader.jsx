import { Link, NavLink } from "react-router";
import Button from "../reusable_components/Buttons";

const AppHeader = () => {
  const navLinks = "text-lg font-semibold text-gray-800 hover:text-orange-600";
  const activeNav = "text-orange-700 border-b-2 border-b-orange-700";
  return (
    <>
      <header className="flex justify-between px-10 py-6 bg-white">
        <div className="flex items-center justify-center">
          <div className="mr-4">
            <span className="text-xl font-bold text-[--navy-700] mr-[1px]">
              Lasu
            </span>
            <span className="text-xl font-bold text-orange-700">Mart</span>
          </div>
          <nav className="flex items-center justify-center gap-3">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${navLinks} ${isActive ? activeNav : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                `${navLinks} ${isActive ? activeNav : ""}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/categories"}
              className={({ isActive }) =>
                `${navLinks} ${isActive ? activeNav : ""}`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${navLinks} ${isActive ? activeNav : ""}`
              }
            >
              About
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link to={"/register"}>
            <Button type="primary" size="medium" rounded="md">
              Sign up
            </Button>
          </Link>
          <Link to={"login"}>
            <Button type="primary" size="medium" rounded="md">
              Login
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
