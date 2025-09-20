import { useSelector } from "react-redux";
import Filters from "../components/shop_components/Filters";
import ShopHeader from "../components/shop_components/ShopHeader";
import ShopMain from "../components/shop_components/ShopMain";
import AppHeader from "./../components/page_layouts/AppHeader";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Shop = () => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <AppHeader />
      <div className="block relative md:grid md:grid-cols-[25%_75%]">
        {currentSize > 768 && (
          <aside>
            <Filters />
          </aside>
        )}
        {currentSize <= 768 && openFilter && (
          <AnimatePresence>
            <motion.aside
              initial={{
                y: -200,
                opacity: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -200,
                opacity: 0.3,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            >
              <Filters closeFilterFn={()=>setOpenFilter(false)} />
            </motion.aside>
          </AnimatePresence>
        )}
        <main>
          {currentSize <= 768 && (
            <ShopHeader openFilterFn={() => setOpenFilter(true)} />
          )}
          <ShopMain />
        </main>
      </div>
    </>
  );
};

export default Shop;
