import { authApi } from "../axiosApiBoilerplates/authApi";


const fetchLoggedInUser = async (userId, token) => {
  try {
    const user = await authApi(token).get("/user/get", {
      params: { uid: userId },
    });
    return user.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { fetchLoggedInUser };
