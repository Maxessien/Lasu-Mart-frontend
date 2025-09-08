import { authApi } from "../../axiosApiBoilerplates/authApi";

const updateUser = async (updatedData) => {
  try {
    const res = await authApi.post("/user/update", updatedData);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};


export { updateUser };
