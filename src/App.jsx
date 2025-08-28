import FormField from "./components/form_components/FormField";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import "./assets/scss_reusable/variables.scss";
import Register from "./pages/Register";
import AppHeader from "./components/page_layouts/AppHeader";
import AppFooter from "./components/page_layouts/AppFooter";
import HomeHero from "./components/page_layouts/HomeHero";
import { useEffect } from "react";

const App = () => {
    useEffect(()=>{
        document.body.style.background = "var(--white-400)"
    }, [])
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={"/"} element={<HomeHero />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
