import { authApi } from "../axiosApiBoilerplates/authApi";
import { cookies } from "next/headers"

const getUserServerSide = async () => {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("userSessionToken")
    const user = token ? await authApi(token.value).get("/auth/verify") : {data: null}
    return {user: user?.data, token: token.value}
  } catch (err) {
    console.log(err)
	  return {user: null, token: null}
  }
};

export {getUserServerSide}
