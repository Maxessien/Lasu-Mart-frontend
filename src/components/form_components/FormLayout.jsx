import { Link } from "react-router";
import FormField from "./FormField";
import "./scss/form_layout.scss";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useEffect } from "react";


const FormLayout = ({children, type}) => {
  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "smooth", left: 0})
  }, [])
  return (
    <>
      <section className="form_page_section">
        <h1>{type == "login" ? "Login" : "Sign Up"}</h1>
        {children}
        {
            type == "login" && (
                <Link className="link">Forgot Password?</Link>
            )
        }

        <button className="submit_button">Sign {type == "login" ? "In" : "Up"}</button>

        <p className="line_seperator">Or continue with</p>
        
        <div className="socials">
            <button>
               <FaGoogle /> Continue With Google
            </button>
            <button>
               <FaFacebook /> Continue With Facebook
            </button>
        </div>

        <p className="text-lg text-center text-gray-700 font-semibold">{
            type == "login" ? (
                <>
                Don't have an account
                <Link to={"/register"} className="text-orange-700 hover:text-orange-800 cursor-pointer"> Sign up</Link>
                </>
            ) : (
                <>
                Already have an account
                <Link to={"/login"} className="text-orange-700 hover:text-orange-800 cursor-pointer"> Sign in</Link>
                </>
            )
            }</p>
      </section>
    </>
  );
};

export default FormLayout;
