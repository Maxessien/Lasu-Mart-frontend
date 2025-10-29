"use client"

import { useRouter } from "next/navigation";
import Button from "../../reusable_components/Buttons";
import {
  PageHeader,
  VendorProductCard,
} from "../../reusable_components/CardsLayouts";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authApi } from "../../../axiosApiBoilerplates/authApi";

const VendorProducts = ({ products }) => {
  const {
    userData: { userId },
	idToken
  } = useSelector((state) => state.userAuth);
  const router = useRouter();
	
	const delFn = async(id)=>{
		try{
			await authApi(idToken).delete(`/product/${id}`, {params: {productId: id}})
			toast.success("Product deleted")
			router.replace(`/${userId}/vendor/products`)
		}catch(err){
			console.log(err)
			toast.error("Unable to delete product")
		}
	}
  return (
    <>
      <PageHeader headerText={"Products"} />
      <Button
        buttonFn={() => router.push(`/${userId}/vendor/products/new`)}
        className="block mb-3"
        type="secondary"
      >
        Add New Products
      </Button>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-[minmax(250px,300px)] max-w-[1440px]">
          {products.map(({ name, price, productId, images }) => {
            return (
              <VendorProductCard
		userId={userId}
                productName={name}
                price={price}
                productId={productId}
                imageUrl={images[0].url}
		deleteFn={delFn}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-[var(--main-secondary)] text-lg font-semibold">
          You haven't added any product
        </p>
      )}
    </>
  );
};

export default VendorProducts;
