import { authApi } from "../axiosApiBoilerplates/authApi";
import { cookies } from "next/headers"

const getUserServerSide = async () => {
  try {
    const cookieStore = await cookies()
    console.log(cookieStore.getAll())
    const token = cookieStore.get("userSessionToken")?.value
	console.log(token)
    const user = token ? await authApi(token).get("/user/get") : null
    return user?.data
  } catch (err) {
    console.log(err)
	return null
  }
};

export {getUserServerSide}
