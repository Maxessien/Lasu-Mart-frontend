"use client";

import { useState } from "react";
import Filters from "./../../src/components/shop_components/Filters";
import { useSelector } from "react-redux";
import ShopHeader from "./../../src/components/shop_components/ShopHeader";
import ShopMain from "./../../src/components/shop_components/ShopMain";

const ClientShopPage = ({ initialShopData, serverSideWindowSize }) => {
  const [openFilter, setOpenFilter] = useState(false);
	const {currentSize} = useSelector((state)=>state.screenSize)
	const showFilter = openFilter !== undefined ? openFilter : !serverSideWindowSize;
	const isMobile = currentSize ? currentSize < 768 : serverSideWindowSize
  return (
    <>
      {console.log(showFilter, "filter", isMobile)}
      <div className="block relative md:grid md:grid-cols-[25%_75%]">
        {!isMobile && (
          <aside>
            <Filters closeFilterFn={() =>{
              console.log("setting false")
              setOpenFilter(false)
            }} />
          </aside>
        )}
        {isMobile && showFilter && (
          <aside>
            <Filters closeFilterFn={() =>{
              console.log("setting false")
              setOpenFilter(false)
            }} />
          </aside>
        )}
        <main>
          {!showFilter && isMobile && (
            <ShopHeader openFilterFn={() =>{
              console.log("setting true")
              setOpenFilter(true)
            }} />
          )}
          <ShopMain initialShopData={initialShopData.data} />
        </main>
      </div>
    </>
  );
};

export default ClientShopPage;
