import { Link } from "react-router";
import "./scss/auth_form_layout.scss";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/fb_config.js";

const AuthFormLayout = ({ children, type }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const googlePopup = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  const facebookSignIn = async()=>{
    try {
      const provider = new FacebookAuthProvider()
      const res = await signInWithPopup(auth, provider)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="form_page_section">
        <h1>{type == "login" ? "Login" : "Sign Up"}</h1>
        {children}
        {type == "login" && (
          <Link to={"/reset-password"} className="link">
            Forgot Password?
          </Link>
        )}

        <p className="line_seperator">Or continue with</p>

        <div className="socials">
          <button onClick={() => googlePopup()}>
            <FaGoogle /> Continue With Google
          </button>
          <button onClick={() => facebookSignIn()}>
            <FaFacebook /> Continue With Facebook
          </button>
        </div>

        <p className="text-lg text-center text-[var(--text-primary-light)] font-semibold">
          {type == "login" ? (
            <>
              Don't have an account
              <Link
                to={"/register"}
                className="text-[var(--main-primary)] hover:text-[var(--main-primary-light)] cursor-pointer"
              >
                {" "}
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account
              <Link
                to={"/login"}
                className="text-[var(--main-primary)] hover:text-[var(--main-primary-light)] cursor-pointer"
              >
                {" "}
                Sign in
              </Link>
            </>
          )}
        </p>
      </section>
    </>
  );
};

export default AuthFormLayout;
