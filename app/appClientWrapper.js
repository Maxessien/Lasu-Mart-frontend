"use client";

import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setScreenSize } from "../src/store_slices/windowSizesSlice";
import { onAuthStateChanged } from "firebase/auth";
import { fetchLoggedInUser } from "../src/utils/userAuthHelpers";
import { auth } from "../firebase/fb_config";
import { setUserAuth } from "../src/store_slices/userAuthSlice";
import Loader from "./../src/components/reusable_components/Loader";

export default function AppClientWrapper({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const { isFetching } = useQuery({
    queryKey: ["loggedInUserData", userInfo.userId],
    queryFn: () => fetchLoggedInUser(userInfo.userId, userInfo.token),
    enabled: isLoggedIn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
  useEffect(() => {
    dispatch(setScreenSize());
    const handleResize = () => dispatch(setScreenSize());
    window.addEventListener("resize", handleResize);
    const unsubscribeAuthStateListener = onAuthStateChanged(
      auth,
      async (user) => {
        console.log("running auth");
        console.log(user);
        if (user) {
          const idToken = await user.getIdToken();
          setUserInfo({ userId: user.uid, token: idToken });
          dispatch(setUserAuth({ stateProp: "isLoggedIn", value: true }));
          dispatch(setUserAuth({ stateProp: "idToken", value: idToken }));
        } else {
          dispatch(setUserAuth({ stateProp: "isLoggedIn", value: false }));
          dispatch(setUserAuth({ stateProp: "idToken", value: "" }));
        }
      }
    );
    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribeAuthStateListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isFetching ? (
        <>
          <Loader
            size={"w-screen h-screen"}
            position={"fixed top-0 bottom-0"}
          />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
