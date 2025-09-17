import { replace } from "react-router";
import AuthFormField from "../components/form_components/AuthFormField";
import AuthFormLayout from "../components/form_components/AuthFormLayout";
// import { useEffect } from "react"
import { findError } from './../../public/fbAuthErrors';
import { toast, ToastContainer } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/fb_config.js"

const Login = () => {
  const loginFormSubmit = async({email, password})=>{
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
      toast.success("Login Successful")
      setTimeout(()=>{
        replace("/home")
      })
    } catch (err) {
      console.log(err)
      const errorInfo = findError(err.code)
      toast.error(errorInfo.customMessage)
    }
  }
  return (
    <>
      <AuthFormLayout type={"login"}>
        <AuthFormField submitFunction={loginFormSubmit} email password buttonText="Sign in" />
      </AuthFormLayout>
      <ToastContainer position="top-center" pauseOnHover theme="colored" />
    </>
  );
};

export default Login;
