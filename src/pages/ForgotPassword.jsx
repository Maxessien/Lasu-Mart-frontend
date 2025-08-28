import AuthFormField from "../components/form_components/AuthFormField"
import AuthFormLayout from "../components/form_components/AuthFormLayout"

const ForgotPassword = ()=>{
    return (
        <>
        <div className="form_page_section">
            <h1>Forgot Password</h1>
            <AuthFormField email buttonText="Reset" />
        </div>
        </>
    )
}

export default ForgotPassword