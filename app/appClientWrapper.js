"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setScreenSize } from "../src/store_slices/windowSizesSlice";
import { onAuthStateChanged, onIdTokenChanged, signOut } from "firebase/auth";
import { fetchLoggedInUser } from "../src/utils/userAuthHelpers";
import { auth } from "../firebase/fb_config";
import { setUserAuth } from "../src/store_slices/userAuthSlice";
import Loader from "./../src/components/reusable_components/Loader";

export default function AppClientWrapper({ children, initUserData }) {
  const [userInfo, setUserInfo] = useState({});
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const { isFetching } = useQuery({
    queryKey: ["loggedInUserData", userInfo.userId],
    queryFn: () => fetchLoggedInUser(userInfo.userId, userInfo.token),
    enabled: isLoggedIn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    ...(initUserData ? { initialData: initUserData } : {}),
  });
  useEffect(() => {
    if (!initUserData) {
      signOut(auth);
    }
    dispatch(setScreenSize());
    window.addEventListener("resize", () => dispatch(setScreenSize()));
    const unSubscribeAuthStateListener = onAuthStateChanged(
      auth,
      async (user) => {
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
    const unSubcribeTokenListener = onIdTokenChanged(auth, async (user) => {
      try {
        const token = await user.getIdToken();
        await cookieStore.set("lasu-mart-auth-token", token);
      } catch (err) {
        console.log(err);
        signOut(auth);
      }
    });
    return () => {
      window.removeEventListener("resize", () => dispatch(setScreenSize()));
      unSubscribeAuthStateListener();
      unSubcribeTokenListener();
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
