import { useMutation } from "@tanstack/react-query";
import Button from "./../reusable_components/Buttons";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { authApi } from "../../axiosApiBoilerplates/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductCards = ({
  imageUrl,
  name,
  price,
  discountPrice = undefined,
  productId,
  vendorPhone="8114537444",
}) => {
  const { isLoggedIn, idToken } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const router = useRouter();
  const addToCart = async () => {
    try {
      const res = await authApi(idToken).post("user/cart/add", {
        productId: productId,
        quantity: 1,
      });
      console.log(res.data);
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: res.data,
        })
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error("Unable to add to cart, Try again later");
      throw err;
    }
  };

  const shopBtn = async () => {
    if (isLoggedIn) {
      await mutateAsync();
      toast.success("Added Succesfully");
    } else {
      router.push("/register");
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => addToCart(),
  });

  return (
    <>
      <div className="flex flex-col gap-2 shadow-[0.4px_0.7px_6px_var(--text-primary)] rounded-sm px-3 py-2 bg-[var(--text-secondary-light)] justify-end">
        <div className="w-26 sm:w-36 md:44 lg:52 xl:60 aspect-square mx-auto">
          <img
            src={`${imageUrl}`}
            alt={`${name} image`}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[var(--text-primary)] text-lg font-semibold align-center">
          {name}
        </p>
        <p className="text-[var(--text-primary-light)] flex flex-wrap text-lg font-bold align-left">
          {discountPrice ? (
            <>
              <span className="line-through text-base mr-[10px]">
                &#8358;{price}
              </span>
              <span>&#8358;{discountPrice.toFixed(2)}</span>
            </>
          ) : (
            <>&#8358; {price}</>
          )}
        </p>
        {!isPending ? (
          <>
            {vendorPhone && (
              <a
                href={`wa.me/${vendorPhone}?text=${encodeURIComponent(
                  `Hi there, I'm interested in the ${name} you listed on Lasu Mart.`
                )}`}
                target={"_blank"}
                className="inline-flex items-center justify-center rounded-md w-full font-semibold bg-[var(--main-primary)] text-[var(--text-secondary-light)] hover:bg-[var(--main-primary-light)] px-4 py-2 text-base"
              >
                <FaWhatsapp size={20}  className="mr-[5px]" /> Chat on Whatsapp
              </a>
            )}
            <Button width="full" buttonFn={() => shopBtn("add")} rounded="md">
              <FaShoppingCart size={20} className="mr-[5px]" /> Add to Cart
            </Button>
          </>
        ) : (
          <Button width="full">...</Button>
        )}
      </div>
    </>
  );
};

export default ProductCards;
