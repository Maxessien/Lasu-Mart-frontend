"use client"

import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/fb_config";
import { findError } from './../../public/fbAuthErrors';
import AuthFormLayout from './../../src/components/form_components/AuthFormLayout';
import AuthFormField from './../../src/components/form_components/AuthFormField';


const ClientLogin = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const loginFormSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      toast.success("Login Successful");
      router.replace("/")
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
    <main>
      <AuthFormLayout type={"login"}>
        <AuthFormField
          submitFunction={loginFormSubmit}
          email
          password
          buttonText={isLoading ? "Signing In..." : "Sign In"}
        />
      </AuthFormLayout>
      <ToastContainer position="top-center" pauseOnHover theme="colored" />
    </main>
    </>
  );
};

export default ClientLogin;
