import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import "./assets/scss_reusable/variables.scss";
import Register from "./pages/Register";
import AppHeader from "./components/page_layouts/AppHeader";
import AppFooter from "./components/page_layouts/AppFooter";
import { useEffect } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/fb_config";
import { setUserAuth } from "./store_slices/userAuthSlice";
import Home from "./pages/Home";
import { setScreenSize } from "./store_slices/windowSizesSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setScreenSize())
    window.addEventListener("resize", ()=>dispatch(setScreenSize()));
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken(auth);
        dispatch(setUserAuth({stateProp:"isLoggedIn", value: true}));
        dispatch(setUserAuth({stateProp:"idToken", value: idToken}));
      } else {
        dispatch(setUserAuth({stateProp:"isLoggedIn", value: false}));
        dispatch(setUserAuth({stateProp:"idToken", value: ""}));
      }
    });
    document.body.style.background = "var(--main-tertiary-light)";
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
