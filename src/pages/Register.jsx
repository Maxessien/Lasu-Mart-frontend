import { Link } from "react-router"
import FormField from "../components/form_components/FormField"
import FormLayout from "../components/form_components/FormLayout"
// import { useEffect } from "react"

const Register = ()=>{
    return (
        <>
        <FormLayout type={"register"}>
            <FormField email password name phone />
        </FormLayout>
        </>
    )
}

export default Register