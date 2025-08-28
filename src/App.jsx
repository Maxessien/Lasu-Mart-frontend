import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import "./assets/scss_reusable/variables.scss";
import Register from "./pages/Register";
import AppHeader from "./components/page_layouts/AppHeader";
import AppFooter from "./components/page_layouts/AppFooter";
import HomeHero from "./components/page_layouts/HomeHero";
import { useEffect } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/fb_config";
import { setIsLoggedin } from "./store_slices/loggedinSlice";

const App = () => {
  const isLoggedin = useSelector((state)=>state.isLoggedin)
  const dispatch = useDispatch()
  const {data} = useQuery({
    queryKey: ['loggedIn']
  })
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=> user ? dispatch(setIsLoggedin(true)) : dispatch(setIsLoggedin(false)))
        document.body.style.background = "var(--white-400)"
        return ()=> unSubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={"/"} element={<HomeHero />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassword/>} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
