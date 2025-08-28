import { Link } from "react-router"
import AuthFormField from "../components/form_components/AuthFormField"
import AuthFormLayout from "../components/form_components/AuthFormLayout"
// import { useEffect } from "react"

const Register = ()=>{
    return (
        <>
        <AuthFormLayout type={"register"}>
            <AuthFormField email password name phone buttonText="Sign Up" />
        </AuthFormLayout>
        </>
    )
}

export default Register