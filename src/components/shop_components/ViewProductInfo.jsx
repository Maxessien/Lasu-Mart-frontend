"use client";
import Button from "../reusable_components/Buttons";
import ProductImageSlide from "./ProductImageSlide";
import { FaComment, FaPhone, FaShoppingCart, FaStar } from "react-icons/fa";
import { useMutation } from '@tanstack/react-query';
import { addToCart } from "../../utils/regHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import {toast} from "react-toastify"

const ViewProductInfo = ({
  images,
  name,
  description,
  price,
  vendorContact: { email, phoneNumber },
  ratings,
  productId,
}) => {
    const dispatch = useDispatch()
    const {idToken, userData} = useSelector((state)=>state.userAuth)
    const {mutateAsync, isPending, data} = useMutation({
        mutationFn: ()=>addToCart(idToken, userData.userId, productId),
        onSuccess: () => {
            dispatch(
            setUserAuth({
                stateProp: "userData",
                value: data,
            })
            );
            toast.success("Added Succesfully");
        },
        onError: () => {
            toast.error("Unable to add to cart, Try again later");
        },
    }) 
  return (
    <>
      <section className="flex flex-col sm:flex-row bg-[var(--text-secondary-light)] sm:px-2 sm:py-3 sm:rounded-md gap-3">
        <ProductImageSlide images={images} productName={name} />
        <div className="flex flex-col gap-2 px-2 sm:px-0">
          <p className="text-lg text-[var(--text-primary-light)] font-semibold">
            {name}
          </p>
          <p className="text-xl text-[var(--text-primary)] flex items-center gap-2 font-semibold">
            &#8358;{price} {" "} -
            <span className="flex gap-1 text-orange-400">{Array(ratings)
              .fill(0)
              .map(() => (
                <FaStar />
              ))}</span>
          </p>
          <p className="text-base text-[var(--main-secondary)] font-semibold">
            {description}
          </p>
          <p className="flex gap-2">
            <Button type="secondary" rounded="md">
              <FaPhone />
            </Button>
            <Button width="full" className="gap-2" rounded="md">
              <FaComment />
              Chat with Vendor
            </Button>
          </p>
          <Button buttonFn={()=>mutateAsync()} className="gap-2" rounded="md" width="full">
            {isPending ? ("...") : (
                <>
                <FaShoppingCart /> {" "} Add to Cart
                </>
            )}
          </Button>
          <div className="space-y-1">
            <h2 className="text-xl text-[var(--text-primary)] font-semibold">
              Contact Info
            </h2>
            <p>
              <span className="text-lg text-[var(--text-primary)] font-semibold">
                Email:{" "}
              </span>
              <span className="text-base text-[var(--text-primary-light)] font-semibold">
                {email}
              </span>
            </p>
            <p>
              <span className="text-lg text-[var(--text-primary)] font-semibold">
                Phone Number:{" "}
              </span>
              <span className="text-base text-[var(--text-primary-light)] font-semibold">
                {phoneNumber}
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProductInfo;
