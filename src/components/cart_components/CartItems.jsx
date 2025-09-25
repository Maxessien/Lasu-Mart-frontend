import { useSelector } from "react-redux";
import CartListProductCards from "./CartListProductCards";

const CartItems = () => {
  const { userData } = useSelector((state) => state.userAuth);

  return (
    <>
      <section className="w-full px-4 py-3 bg-[var(--text-secondary-light)] shadow-[0px_2px_8px_-3px_black] rounded-md">
        <header className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-[var(--text-primary-light)]">
            Cart Items
          </h2>
          {userData?.cart?.length > 0 && <button className="text-md font-semibold text-[var(--main-primary)]">
            Clear all
          </button>}
        </header>
        {(userData?.cart?.length >  0 ? userData?.cart.map(
          ({ name, price, imageUrl, quantity }, index) => {
            console.log(name, price, quantity)
            return (
              <>
        <div className="mb-3">
                <CartListProductCards
                key={index}
                  name={name}
                  quantity={quantity}
                  price={price}
                  imageUrl={`/images/${name}.webp`}
                />
        </div>
              </>
            );
          }
        ) : (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-lg text-[var(--text-pimary-light)] font-semibold">
                    Cart is empty
                </p>
            </div>
        ))}
      </section>
    </>
  );
};

export default CartItems;
