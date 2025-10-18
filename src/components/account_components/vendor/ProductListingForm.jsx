"use client";

import "./scss/vendor_form.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authApi } from "../../../axiosApiBoilerplates/authApi";
import Button from "../../reusable_components/Buttons";
import { useMutation } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { formatFormData } from "../../../utils/regHelpers";
import { useState } from "react";

const ProductListingForm = ({
  availableCategories,
  hasDefault = false,
  mode = "add",
}) => {
  const { idToken } = useSelector((state) => state.userAuth);
  const [_, manualRender] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: hasDefault?.name ?? "",
      price: hasDefault?.price ?? 0,
      images: [],
      category: hasDefault?.category ?? [],
      tags: hasDefault?.tags ?? "",
    },
  });

  const categoryValue = watch("category");

  const onSubmit = async (data) => {
    try {
      if (
        (!data.images || data.images.length <= 0) &&
        (!hasDefault.images || hasDefault.images.length <= 0)
      )
        throw new Error("No product image");
      const formattedData = formatFormData({
        ...data,
        ...(hasDefault?.productId ? { productId: hasDefault.productId } : {}),
      });
      for (const [key, value] of formattedData.entries())
        console.log(key, value, "modeee");
      const res = await authApi(idToken).post(
        `/product/${mode}`,
        formattedData,
	(hasDefault?.productId ? { params: {productId: hasDefault.productId} } : {})
      );
      toast.success("Product listed Successfully");
      return res;
    } catch (err) {
      console.log(err);
      toast.error("Unable to add Product, try again later");
      throw err;
    }
  };

  const deleteProductImage = async (pubId, prodId) => {
    try {
      await authApi(idToken).delete("/product/delete/image", {
        params: { productId: prodId, publicId: pubId },
      });
      hasDefault.images = hasDefault.images.filter(
        ({ publicId }) => publicId !== pubId
      );
      manualRender((prev) => prev + 1);
      toast.success("Deleted Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Unable to delete image, try again later");
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data) => onSubmit(data),
  });

  return (
    <>
      <form className="vendor_form" onSubmit={handleSubmit(mutateAsync)}>
        <div className="field_group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Product Name cannot be empty",
            })}
          />
          {errors?.name && <p className="input_error">{errors.name.message}</p>}
        </div>
        <div className="field_group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "Price cannot be empty",
              min: { value: 0, message: "Price cannot be below zero" },
            })}
          />
          {errors?.price && (
            <p className="input_error">{errors.price.message}</p>
          )}
        </div>
        <div className="field_group">
          <label htmlFor="tags">Add Tags</label>
          <textarea
            id="tags"
            placeholder="Each tags should be seperated with spaces"
            {...register("tags")}
          />
          {errors?.tags && <p className="input_error">{errors.tags.message}</p>}
        </div>

        {hasDefault?.images && (
          <ul className="flex flex-wrap gap-3">
            {hasDefault.images.map(({ url, publicId }, index) => {
              return (
                <li className="flex flex-col gap-2">
                  <img
                    className="w-4 h-4"
                    src={url}
                    alt={`${hasDefault?.name} image ${index + 1}`}
                  />
                  <button
                    className="text-xl font-bold text-[var(--main-secondary)]"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteProductImage(publicId, hasDefault.productId);
                    }}
                  >
                    <FaTrash />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <div className="image_group">
          <p className="group_title">Add one or more Product Images</p>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register(`images`)}
          />
          {errors.images && (
            <p className="input_error">{errors.images.message}</p>
          )}
        </div>

        <div className="category_group">
          <p className="group_title">Select one or more Categories</p>
          <div className="category_wrapper">
            {availableCategories.map((category) => {
              return (
                <>
                  <label className="cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      id={category}
                      value={category}
                      {...register("category")}
                    />
                    <div className="absolute w-full h-full z-3 opacity-0 top-0 left-0"></div>
                    <Button
                      type={
                        categoryValue.includes(category)
                          ? "primary"
                          : "secondary"
                      }
                      buttonType="button"
                    >
                      {category}
                    </Button>
                  </label>
                </>
              );
            })}
          </div>
        </div>

        <Button
          isDisabled={isPending}
          buttonType="submit"
          rounded="md"
          width="full"
          classNames="max-w-[240px]"
        >
          {isPending
            ? mode === "add"
              ? "Submitting..."
              : "Saving"
            : mode === "add"
            ? "Submit Product"
            : "Save"}
        </Button>
      </form>
    </>
  );
};

export default ProductListingForm;
