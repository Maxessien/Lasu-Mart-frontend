import { FaPen, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../axiosApiBoilerplates/authApi";

const VendorProductCards = ({
  name,
  price,
  createdAt,
  lastUpdated = "",
  images,
  productId,
}) => {
  const router = useRouter();
  const { userData, idToken } = useSelector((state) => state.userAuth);

  const deleteProduct = async (pid) => {
    try {
      const res = await authApi(idToken).delete("/product/delete", {
        params: { productId: pid },
      });
      router.replace(`/${userData.userId}/account/vendor/products`);
      toast.success("Deleted Successfully");
      return res;
    } catch (err) {
      console.log(err);
      toast.error("Unable to delete product");
      throw err;
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id) => deleteProduct(id),
  });

  return (
    <>
      <div className="grid grid-cols-[25%_65%_10%] gap-1 px-2 py-3 rounded-md shadow-[0.4px_0.8px_3px_var(--text-primary)]">
        <div className="w-full h-full">
          {images?.length > 0 ? (
            <img
              className="w-full"
              src={images[0]?.url || "default"}
              alt={`${name} image 1`}
            />
          ) : (
            <p className="text-[var(--main-secondary)] text-base font-semibold text-center">
              No image
            </p>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-[var(--text-primary)]">
            {name}
          </p>
          <p className="text-base font-semibold text-[var(--text-primary)]">
            &#8358;{price}
          </p>
          <p className="text-sm font-semibold text-[var(--main-secondary)]">
            Date added - {createdAt.toLocaleString()}
          </p>
          <p className="text-sm font-semibold text-[var(--main-secondary)]">
            Last updated - {lastUpdated}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <button
            onClick={() =>
              router.push(
                `/${userData.userId}/account/vendor/products/${productId}`
              )
            }
          >
            <FaPen />
          </button>
          <button disabled={isPending} onClick={() => mutateAsync(productId)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default VendorProductCards;
