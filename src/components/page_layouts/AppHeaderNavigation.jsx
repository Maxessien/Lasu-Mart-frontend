import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import "./scss/app_header_navigation.scss";

const AppHeaderNavigation = ({ navToggle, signOutFn }) => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  return (
    <>
      <div className="nav_container">
        <nav className="header_navigation">
          <NavLink
            to={"/"}
            onClick={() => navToggle(false)}
            className={({ isActive }) => {
              return `header_navigation_links ${isActive ? "active" : ""}`;

            }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => navToggle(false)}
            to={"/shop"}
            className={({ isActive }) => {
              return `header_navigation_links ${isActive ? "active" : ""}`;
            }}
          >
            Shop
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => navToggle(false)}
            className={({ isActive }) => {
              return `header_navigation_links ${isActive ? "active" : ""}`;
            }}
          >
            Contact
          </NavLink>
          {currentSize <= 768 && (
            <>
              {isLoggedIn ? (
                <>
                  <NavLink
                    to={"/cart"}
                    onClick={() => navToggle(false)}
                    className={({ isActive }) => {
                      return `header_navigation_links ${
                        isActive ? "active" : ""
                      }`;
                    }}
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to={"/account"}
                    onClick={() => navToggle(false)}
                    className={({ isActive }) => {
                      return `header_navigation_links ${
                        isActive ? "active" : ""
                      }`;
                    }}
                  >
                    Account
                  </NavLink>
                  <NavLink
                    to={"/settings"}
                    onClick={() => navToggle(false)}
                    className={({ isActive }) => {
                      return `header_navigation_links ${
                        isActive ? "active" : ""
                      }`;
                    }}
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={() => {
                      navToggle(false)
                      signOutFn()
                    }}
                    className={`header_navigation_links`}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/login"}
                    onClick={() => navToggle(false)}
                    className={({ isActive }) => {
                      return `header_navigation_links ${
                        isActive ? "active" : ""
                      }`;
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={"/register"}
                    onClick={() => navToggle(false)}
                    className={({ isActive }) => {
                      return `header_navigation_links ${
                        isActive ? "active" : ""
                      }`;
                    }}
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default AppHeaderNavigation;
