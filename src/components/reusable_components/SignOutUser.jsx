"use client"

import { signOut } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "../../../firebase/fb_config"
import { useRouter } from "next/navigation"

const SignOutUser = ()=>{
    const router = useRouter()
    useEffect(()=>{
        signOut(auth)
        router.replace("/login")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<></>)
}

export default SignOutUser