import Providers from "./providers";
import "../src/index.css";
import "../src/assets/scss_reusable/variables.scss";
import AppFooter from "../src/components/page_layouts/AppFooter";
import AppClientWrapper from "./appClientWrapper";
import AppHeader from "../src/components/page_layouts/AppHeader";

const RootLayout = async ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <AppHeader />
          </Providers>
          <Providers>
            <AppClientWrapper>
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
