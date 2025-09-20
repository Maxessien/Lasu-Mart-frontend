import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import "./assets/scss_reusable/variables.scss";
import Register from "./pages/Register";
import AppFooter from "./components/page_layouts/AppFooter";
import { useEffect, useState } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/fb_config";
import { setUserAuth } from "./store_slices/userAuthSlice";
import Home from "./pages/Home";
import { setScreenSize } from "./store_slices/windowSizesSlice";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "./axiosApiBoilerplates/authApi";
import Loader from "./components/reusable_components/Loader";
import Shop from "./pages/Shop";

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const { isLoggedIn } = useSelector((state) => state.userAuth);
  const fetchLoggedInUser = async (uid, token) => {
    try {
      const user = await authApi(token).get("/user/get", {
        params: { uid: uid },
      });
      console.log(user);
      return user.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  const dispatch = useDispatch();
  const { isFetching } = useQuery({
    queryKey: ["loggedInUserData", userInfo.userId],
    queryFn: fetchLoggedInUser(userInfo.userId, userInfo.token),
    enabled: isLoggedIn,
  });
  useEffect(() => {
    dispatch(setScreenSize());
    window.addEventListener("resize", () => dispatch(setScreenSize()));
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        setUserInfo({ userId: user.uid, token: idToken });
        dispatch(setUserAuth({ stateProp: "isLoggedIn", value: true }));
        dispatch(setUserAuth({ stateProp: "idToken", value: idToken }));
      } else {
        dispatch(setUserAuth({ stateProp: "isLoggedIn", value: false }));
        dispatch(setUserAuth({ stateProp: "idToken", value: "" }));
      }
    });
    document.body.style.background = "var(--main-tertiary-light)";
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // if (isFetching) {
  //   return (

  //   );
  // }

  return (
    <>
      <BrowserRouter>
        {isFetching && (
          <>
            <Loader size={"w-screen h-screen"} position={"fixed bottom-0"} />
          </>
        )}

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/shop"} element={<Shop />} />
          {!isLoggedIn && (
            <>
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
            </>
          )}
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
