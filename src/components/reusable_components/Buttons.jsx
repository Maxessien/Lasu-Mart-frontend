import { Circles } from "react-loader-spinner";

const variantStyles = {
  primary: "bg-orange-700 text-gray-200 hover:bg-orange-600",
  secondary: "text-orange-700 bg-gray-200 hover:bg-gray-300",
  tertiary: "bg-transparent text-gray-800 hover:bg-orange-200",
};

const sizeStyles = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const baseStyles = "inline-flex items-center justify-center font-semibold";

const Button = ({
  children,
  size = "medium",
  type = "primary",
  rounded = "full",
  isLoading = false,
  isDisabled = false,
  width = "[max-content]",
  classNames = "",
}) => {
  const allStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[type]} ${
    isDisabled && "opacity-50 cursor-not-allowed"
  } ${
    isLoading && "cursor-not-allowed"
  } rounded-${rounded} w-${width} ${classNames}`;

  return (
    <>
      <button disabled={isDisabled} className={allStyles}>
        {children}{" "}
        {isLoading && (
          <Circles
            visible={true}
            width={20}
            height={20}
            color={
              type === "secondary" ? "var(--orange-600)" : "var(--white-300)"
            }
            radius={2}
            wrapperClass="ml-2"
          />
        )}
      </button>
    </>
  );
};

export default Button;
