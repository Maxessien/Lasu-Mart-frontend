import { useSelector } from "react-redux";
import AppHeaderMain from "./AppHeaderMain";
import AppHeaderNavigation from "./AppHeaderNavigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/fb_config";
import { useNavigate } from "react-router";

const AppHeader = () => {
  const navigate = useNavigate()
  const { currentSize } = useSelector((state) => state.screenSize);
  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    setShowNavigation(false);
  }, [currentSize]);
  const navigationToggle = () => {
    setShowNavigation(!showNavigation);
  };
  
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("There was an error logging out, please try again later");
    }
  };

  return (
    <>
      <header className="w-screen space-y-2 py-3 md:py-5">
        <AppHeaderMain signOutFn={logOut} navToggle={navigationToggle} navState={showNavigation} />
        {currentSize <= 768 ? (
          showNavigation && <AppHeaderNavigation signOutFn={logOut} navToggle={navigationToggle} />
        ) : (
          <AppHeaderNavigation />
        )}
      </header>
    </>
  );
};

export default AppHeader;
