import { Link } from "react-router"
import FormField from "../components/form_components/FormField"
import FormLayout from "../components/form_components/FormLayout"
// import { useEffect } from "react"

const Login = ()=>{
    return (
        <>
        <FormLayout type={"login"}>
            <FormField email password />
        </FormLayout>
        </>
    )
}

export default Login