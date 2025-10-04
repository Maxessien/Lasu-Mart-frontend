"use client";

import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Filters from './../../src/components/shop_components/Filters';
import ShopHeader from './../../src/components/shop_components/ShopHeader';
import ShopMain from './../../src/components/shop_components/ShopMain';
import { useQuery } from "@tanstack/react-query";
import { setTotalPages } from "../../src/store_slices/productPageSlice";

const ClientShopPage = ({initialShopData}) => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setTotalPages(initialShopData.totalPages))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useQuery({queryKey: ["products", 1], initialData: initialShopData.data})
  return (
    <>
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

export default ClientShopPage;
