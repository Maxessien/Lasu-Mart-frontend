// import { Circles } from "react-loader-spinner";

const variantStyles = {
  primary:
    "bg-[var(--main-primary)] text-[var(--text-secondary-light)] hover:bg-[var(--main-primary-light)]",
  secondary:
    "text-[var(--main-primary)] bg-[var(--text-secondary-light)] hover:bg-[var(--text-secondary)]",
  tertiary:
    "bg-transparent text-[var(--text-primary-light)] hover:bg-orange-200 border-md border-[var(--text-primary-light)]",
};

const sizeStyles = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const baseStyles = "inline-flex items-center justify-center font-semibold";

const Button = ({
  children,
  buttonFn,
  size = "medium",
  type = "primary",
  rounded = "full",
  isLoading = false,
  isDisabled = false,
  width = "[max-content]",
  classNames = "",
}) => {
  const allStyles = `rounded-${rounded} ${baseStyles} ${sizeStyles[size]} ${
    variantStyles[type]
  } w-${width} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${
    isLoading ? "cursor-not-allowed" : ""
  } ${classNames}`;

  return (
    <>
      <button disabled={isDisabled} onClick={()=>buttonFn()} className={allStyles}>
        {children}{" "}
        {/* {isLoading && (
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
        )} */}
      </button>
    </>
  );
};

export default Button;
