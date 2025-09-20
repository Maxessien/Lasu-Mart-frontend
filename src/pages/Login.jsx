import AuthFormField from "../components/form_components/AuthFormField";
import AuthFormLayout from "../components/form_components/AuthFormLayout";
import { findError } from "./../../public/fbAuthErrors";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/fb_config.js";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginFormSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      toast.success("Login Successful");
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      const errorInfo = findError(err.code);
      toast.error(errorInfo.customMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthFormLayout type={"login"}>
        <AuthFormField
          submitFunction={loginFormSubmit}
          email
          password
          buttonText={isLoading ? "Signing In..." : "Sign In"}
        />
      </AuthFormLayout>
      <ToastContainer position="top-center" pauseOnHover theme="colored" />
    </>
  );
};

export default Login;
