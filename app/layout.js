import Providers from "./providers";
import "../src/index.css";
import "../src/assets/scss_reusable/variables.scss";
import AppHeader from "../src/components/page_layouts/AppHeader";
import AppFooter from "../src/components/page_layouts/AppFooter";
import { fetchLoggedInUser } from "../src/utils/userAuthHelpers";
import { authApi } from "../src/axiosApiBoilerplates/authApi";
import { cookies } from "next/headers";
import AppClientWrapper from "./appClientWrapper";

const RootLayout = async ({ children }) => {
  const token = (await cookies()).get("lasu-mart-auth-token")?.value;
  let userData = {};
  if (token) {
    const userId = await authApi(token).get("/user/verify");
    userData = await fetchLoggedInUser(userId.uid, token);
  }
  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <AppHeader />
          </Providers>
          <Providers>
            <AppClientWrapper initUserData={userData || null}>
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
