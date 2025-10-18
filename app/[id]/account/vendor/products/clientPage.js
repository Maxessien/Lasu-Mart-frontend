"use client";

import { useRouter } from "next/navigation";
import VendorProductCards from "../../../../../src/components/account_components/vendor/VendorProductCards";
import Button from "./../../../../../src/components/reusable_components/Buttons";

const ClientVendorProduct = ({ vendorProducts, initUserData }) => {
  console.log(initUserData, "inidudhdhddjjjdjd");
  const router = useRouter();
  return (
    <>
      <h1 className="text-2xl mb-3 font-bold text-[var(--text-primary)] w-full text-center">
        Products
      </h1>
      <Button
        classNames="block"
        type="secondary"
        buttonFn={() =>
          router.push(`/${initUserData?.uid}/account/vendor/products/new`)
        }
      >
        Add New Product
      </Button>
      {vendorProducts && vendorProducts.length > 0 ? (
        <ul className="mt-2 space-y-1">
          {vendorProducts.map((product) => {
            return (
              <li>
                <VendorProductCards {...product} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-5 w-full text-center text-[var(--main-secondary)] font-semibold text-xl">
          No Products Added
        </p>
      )}
    </>
  );
};

export default ClientVendorProduct;
