import Providers from "./providers";
import "../src/index.css";
import "../src/assets/scss_reusable/variables.scss";
import AppHeader from "../src/components/page_layouts/AppHeader";
import AppFooter from "../src/components/page_layouts/AppFooter";
import AppClientWrapper from "./appClientWrapper";
import { getUserServerSide } from "../src/utils/authHelpers";

const RootLayout = async ({ children }) => {
  const userData = await getUserServerSide()
  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <AppHeader />
          </Providers>
          <Providers>
            <AppClientWrapper initUserData={userData?.data}>
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
