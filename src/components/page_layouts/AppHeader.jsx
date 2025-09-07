import { useSelector } from "react-redux";
import AppHeaderMain from "./AppHeaderMain";
import AppHeaderNavigation from "./AppHeaderNavigation";
import { useEffect, useState } from "react";

const AppHeader = () => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    setShowNavigation(false);
  }, [currentSize]);
  const navigationToggle = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <>
      <header className="w-screen space-y-2 py-3 md:py-5">
        <AppHeaderMain navToggle={navigationToggle} navState={showNavigation} />
        {currentSize <= 768 ? (
          showNavigation && <AppHeaderNavigation navToggle={navigationToggle} />
        ) : (
          <AppHeaderNavigation />
        )}
      </header>
    </>
  );
};

export default AppHeader;
