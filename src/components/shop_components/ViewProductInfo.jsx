"use client";
import Button from "../reusable_components/Buttons";
import ProductImageSlide from "./ProductImageSlide";
import { FaComment, FaPhone, FaShoppingCart, FaStar } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../utils/regHelperFns";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRef } from "react";
import { authApi } from "../../axiosApiBoilerplates/authApi";
import { useRouter } from "next/navigation";

const ViewProductInfo = ({
  hasMessaged,
  images,
  name,
  description,
  price,
  vendorContact: { email, phone },
  ratings,
  productId,
  vendorId,
}) => {
  //React and Next js hooks initailizations
  const [messageForm, setMessageForm] = useState({ message: "" });
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const { idToken, userData } = useSelector((state) => state.userAuth);
  const router = useRouter();

  //Functions and mutation Logic
  const isValid = (text) => text?.trim()?.length > 0;
  const chatWithVendor = async () => {
    console.log(!isValid(messageForm.message));
    if (!isValid(messageForm.message)) {
      textareaRef.current.focus();
      return;
    }
    try {
      const { data: {chatId} } = await authApi(idToken).post("/chat", {
        message: messageForm.message,
        vendorId: vendorId,
      });
      console.log(chatId, "dhdhdhdhd")
      router.push(`/${userData.userId}/chat/${chatId}`);
    } catch (err) {
      console.log(err);
      toast.error("Message not sent, try again later");
    }
  };
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: () => addToCart(idToken, userData.userId, productId),
    onSuccess: (resData) => {
      console.log(resData);
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: resData,
        })
      );
      toast.success("Added Succesfully");
    },
    onError: () => {
      toast.error("Unable to add to cart, Try again later");
    },
  });

  //Component UI
  return (
    <>
      {console.log(data, "in component")}
      <section className="flex flex-col sm:flex-row bg-[var(--text-secondary-light)] sm:px-2 sm:py-3 sm:rounded-md gap-3">
        <ProductImageSlide images={images} productName={name} />
        <div className="flex flex-col gap-3 px-2 sm:px-0">
          <p className="text-lg text-[var(--text-primary-light)] font-semibold">
            {name}
          </p>
          <p className="text-xl text-[var(--text-primary)] flex items-center gap-2 font-semibold">
            &#8358;{price} -
            <span className="flex gap-1 text-orange-400">
              {Array(ratings)
                .fill(0)
                .map(() => (
                  <FaStar />
                ))}
            </span>
          </p>
          <p className="text-base text-[var(--main-secondary)] font-semibold">
            {description}
          </p>
          <label
            className="flex flex-col gap-1 justify-start w-full"
            htmlFor="message"
          >
            <span className="text-base font-semibold text-[var(--text-primary)]">
              Message Vendor
            </span>
            <textarea
              className="text-base font-semibold text-[var(--text-primary)] w-full h-15 px-2 py-1 rounded-md border-[2px] border-[var(--main-secondary)]"
              name="message"
              id="message"
              placeholder="Send Message"
              value={messageForm.message}
              onChange={({ target: { value } }) => {
                setMessageForm((state) => ({ ...state, message: value }));
              }}
              ref={textareaRef}
            ></textarea>
          </label>
          <p className="flex gap-2">
            <Button type="secondary" rounded="md">
              <FaPhone />
            </Button>
            <Button
              buttonFn={() => chatWithVendor()}
              width="full"
              className="gap-2"
              rounded="md"
            >
              <FaComment />
              {hasMessaged ? "Chat with Vendor" : "Send Message"}
            </Button>
          </p>
          <Button
            buttonFn={() => mutateAsync()}
            className="gap-2"
            rounded="md"
            width="full"
          >
            {isPending ? (
              "..."
            ) : (
              <>
                <FaShoppingCart /> Add to Cart
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
                {phone}
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProductInfo;
