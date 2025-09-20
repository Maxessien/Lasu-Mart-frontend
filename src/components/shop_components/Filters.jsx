import { useForm } from "react-hook-form";
import Button from "../reusable_components/Buttons";
import "./scss/filters.scss";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilter,
  updateFilter,
} from "../../store_slices/shopProductsFiltersSlice";
import { setPage } from "../../store_slices/productPageSlice";

const Filters = ({ closeFilterFn }) => {
  const { currentSize } = useSelector((state) => state.screenSize);
  const { filters } = useSelector((state) => state.shopProductFilter);
  const dispatch = useDispatch();
  const categories = [
    "fashion",
    "food",
    "electronics",
    "sports",
    "accessories",
  ];
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      sortType: filters.sortInfo.type,
      sortOrder: filters.sortInfo.order,
      minPrice: filters.priceRange.min,
      maxPrice: filters.priceRange.max,
      categories: filters.categories,
    },
  });

  const submitFilter = ({
    sortType,
    sortOrder,
    minPrice,
    maxPrice,
    categories,
  }) => {
    dispatch(
      updateFilter({
        sortInfo: {
          type: sortType,
          order: sortOrder,
        },
        priceRange: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
        category: categories,
      })
    );
    setPage(1);
    closeFilterFn ? closeFilterFn() : null;
  };

  return (
    <>
      <form className="filter_form" onSubmit={handleSubmit(submitFilter)}>
        {currentSize <= 768 && (
          <Button
            size="small"
            buttonFn={currentSize < 768 ? () => closeFilterFn() : null}
          >
            <FaTimes />
          </Button>
        )}
        <h3>Sort By</h3>
        <div className="sort_options">
          <label htmlFor="sortType">
            <span>Type</span>
            <select id="sortType" {...register("sortType")}>
              <option value="rating">Popularity</option>
              <option value="createdAt">Recent</option>
              <option value="price">Price</option>
            </select>
          </label>
          <label htmlFor="sortOrder">
            <span>Order</span>
            <select id="sortOrder" {...register("sortOrder")}>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </label>
        </div>
        <h3>Categories</h3>
        <div className="category_options">
          {categories.map((category) => {
            return (
              <>
                <label htmlFor={category}>
                  <input
                    type="checkbox"
                    value={category}
                    id={category}
                    {...register("categories")}
                  />
                  <span>{category}</span>
                </label>
              </>
            );
          })}
        </div>
        <h3>Price Range</h3>
        <div className="price_range">
          <label htmlFor="min">
            <span>Min</span>
            <input type="number" id="min" {...register("minPrice")} />
          </label>
          <label htmlFor="max">
            <span>Max</span>
            <input type="number" id="max" {...register("maxPrice")} />
          </label>
        </div>
        <Button
          type="secondary"
          rounded="md"
          classNames="border-1 border-[var(--text-primary)] mr-2"
          buttonFn={() => {
            dispatch(resetFilter());
            reset();
          }}
        >
          Reset
        </Button>
        <Button
          rounded="md"
          buttonType="submit"
          classNames="text-lg font-semibold"
        >
          Apply Filters
        </Button>
      </form>
    </>
  );
};

export default Filters;
