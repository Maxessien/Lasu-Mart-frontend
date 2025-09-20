import Button from "./../reusable_components/Buttons";
import { FaShoppingCart } from "react-icons/fa";

const ProductCards = ({ imageUrl, name, price, discountPrice = undefined }) => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-[0.4px_0.7px_6px_var(--text-primary)] rounded-sm px-3 py-2 bg-[var(--text-secondary-light)] justify-end">
        <div className="w-26 sm:w-36 md:44 lg:52 xl:60 aspect-square mx-auto">
          <img
            src={`/images/${imageUrl}`}
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
              <span className="line-through text-md mr-[10px]">&#8358;{price}</span>
              <span>&#8358;{discountPrice.toFixed(2)}</span>
            </>
          ) : (
            <>&#8358; {price}</>
          )}
        </p>
        <Button rounded="md">
          <FaShoppingCart size={20} className="mr-[5px]" /> Add To Cart
        </Button>
      </div>
    </>
  );
};

export default ProductCards;
