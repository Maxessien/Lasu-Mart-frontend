import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartListProductCards = ({ name, quantity = 1, price, imageUrl }) => {
  return (
    <>
      <div className="flex items-center justify-between px-3 w-full">
        <div className="flex items-center justify-center gap-2">
          <div className="w-23 sm:w-32 md:40 lg:48 xl:56 aspect-square mx-auto">
            <img
              src={`${imageUrl}`}
              alt={`${name} image`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between h-full items-start">
            <p className="text-lg text-[var(--text-primary)] pl-3 font-semibold">
              {name}
            </p>
            <div className="flex gap-3 items-center justify-center">
              <div className="flex gap-4 px-3 text-[var(--text-primary)] h-10 rounded-full border-2 border-[var(--main-secondary-light)]">
                <button className="font-bold text-md hover:bg-[var(--main-primary-light)]">
                  <FaPlus />
                </button>
                <span className="font-bold text-lg flex items-center justify-center">{quantity}</span>
                <button className="font-bold text-md hover:bg-[var(--main-primary-light)]">
                  <FaMinus />
                </button>
              </div>
              <span className="text-[var(--main-primary)] font-bold text-md">
                &#8358;{price}3
              </span>
            </div>
          </div>
        </div>

        <button className="text-lg font-bold text-[var(--text-primary-light)]">
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default CartListProductCards;
