import AuthFormField from "../components/form_components/AuthFormField"
import AuthFormLayout from "../components/form_components/AuthFormLayout"
import { regApi } from "../axiosApiBoilerplates/regApi.js"
import { toast, ToastContainer } from  "react-toastify"

const Register = ()=>{
    const registerUser = async ({email, password, name, phone})=>{
        const newUser = {
            email: email,
            displayName: name,
            password: password,
            phoneNumber: "+234" + phone
        }
        try {
            const res = await regApi.post("/user/register", newUser)
            toast.success(res.data.message)
            console.log(res)
        } catch (err) {
            console.log(err)
            toast.error(err.response.data.message)
        }

    }
    return (
        <>
        <AuthFormLayout type={"register"}>
            <AuthFormField submitFunction={registerUser} email password name phone buttonText="Sign Up" />
        </AuthFormLayout>
        <ToastContainer position="top-center" newestOnTop pauseOnHover theme="colored" />
        </>
    )
}

export default Register