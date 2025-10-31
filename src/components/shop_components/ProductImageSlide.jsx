"use client"
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "../reusable_components/Buttons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductImageSlide = ({ images, productName }) => {
  const [containerScroll, setContainerScroll] = useState({
    totalImages: images?.length,
    position: 0,
  });

  const scrollImage = (direction) => {
    direction === "forward"
      ? setContainerScroll((state) => ({
          ...state,
          position: state.position + 100 / state.totalImages,
        }))
      : setContainerScroll((state) => ({
          ...state,
          position: state.position - 100 / state.totalImages,
        }));
  };

  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${containerScroll.position}%` }}
        transition={{ duration: 0.4 }}
        className="relative snap-x overflow-x-auto aspect-square w-full max-w-[520px] mx-auto sm:w-1/2"
      >
        {containerScroll.position > 0 && (
          <Button
            type="tertiary"
            buttonFn={() =>
              containerScroll.position > 0 ? scrollImage("forward") : null
            }
            className="absolute top-1/2 left-2 z-5"
          >
            <FaArrowLeft />
          </Button>
        )}
        {images?.map(({ url }) => {
          return (
            <image
              src={url}
              alt={`${productName} image`}
              className="snap-start object-cover w-full z-1"
            />
          );
        })}
        {containerScroll.position < 100 && (
          <Button
            type="tertiary"
            buttonFn={() =>
              containerScroll.position < 100 ? scrollImage("backward") : null
            }
            className="absolute top-1/2 right-2 z-5"
          >
            <FaArrowRight />
          </Button>
        )}
      </motion.div>
    </>
  );
};

export default ProductImageSlide