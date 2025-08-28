import { Link } from "react-router"
import AuthFormField from "../components/form_components/AuthFormField"
import AuthFormLayout from "../components/form_components/AuthFormLayout"
// import { useEffect } from "react"

const Login = ()=>{
    return (
        <>
        <AuthFormLayout type={"login"}>
            <AuthFormField email password buttonText="Sign in" />
        </AuthFormLayout>
        </>
    )
}

export default Login