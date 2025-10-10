import React from "react";
import { getUserServerSide } from "../../src/utils/authHelpers"
import SignOutUser from './../../src/components/reusable_components/SignOutUser';



const UserLayout = async ({children}) => {
  try {
  const userData = await getUserServerSide();
	if(!userData) throw new Error("User not logged in")
    return React.cloneElement(children, {initUserData: userData})
  } catch (err) {
    console.log(err);
    return <SignOutUser />
  }
};

export default UserLayout;
