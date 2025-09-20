import AuthFormField from "../components/form_components/AuthFormField";
import AuthFormLayout from "../components/form_components/AuthFormLayout";
import { regApi } from "../axiosApiBoilerplates/regApi.js";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const navigate = useNavigate();
  const registerUser = async ({ email, password, name }) => {
    const newUser = {
      email: email,
      displayName: name,
      password: password,
    };
    console.log(newUser);
    try {
      const res = await regApi.post("/user/register", newUser);
      toast.success(res.data.message);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  };
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data) => registerUser(data),
    mutationKey: ["registerUser"],
    onSuccess: ()=> setTimeout(() => navigate("/login"), 2300),
  });
  return (
    <>
      <AuthFormLayout type={"register"}>
        <AuthFormField
          submitFunction={mutateAsync}
          email
          password
          name
          buttonText={isPending ? "Signing Up..." : "Sign Up"}
        />
      </AuthFormLayout>
      <ToastContainer
        position="top-center"
        newestOnTop
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Register;
