import Providers from "./providers";
import "../src/index.css";
import "../src/assets/scss_reusable/variables.scss";
import AppHeader from "../src/components/page_layouts/AppHeader";
import AppFooter from "../src/components/page_layouts/AppFooter";
import AppClientWrapper from "./appClientWrapper";
import { cookies } from "next/headers";
import { authApi } from "../src/axiosApiBoilerplates/authApi";

const RootLayout = async ({ children }) => {
  const token = (await cookies()).get("lasu-mart-auth-token")?.value
  let userData
  if(token) {
    userData = await authApi(token).get("/user/get")
  }
  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <AppHeader />
          </Providers>
          <Providers>
            <AppClientWrapper initUserData={userData.data} >
              {children}
            </AppClientWrapper>
          </Providers>
          <AppFooter />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
