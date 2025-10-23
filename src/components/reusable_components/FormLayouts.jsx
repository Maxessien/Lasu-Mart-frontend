const Input = ({ inputType = "input", className = "", ...otherProps }) => {
  if (inputType === "input") {
    return (
      <input
        {...otherProps}
        className={`w-full max-w-[540px] px-3 py-1 text-base font-semibold text-[var(--text-primary)] disabled:opacity-[0.7] rounded-md shadow-[0.3px_0.5px_6px_-2px_var(--text-primary-light)] ${className}`}
      />
    );
  } else if (inputType === "textarea") {
    return (
      <textarea
        {...otherProps}
        className={`w-full max-w-[540px] px-3 py-1 text-base font-semibold text-[var(--text-primary)] disabled:opacity-[0.7] rounded-md shadow-[0.3px_0.5px_6px_-2px_var(--text-primary-light)] ${className}`}
      />
    );
  } else if (inputType === "select") {
    return (
      <select
        {...otherProps}
        className={`w-full max-w-[540px] px-3 py-1 text-base font-semibold text-[var(--text-primary)] disabled:opacity-[0.7] rounded-md shadow-[0.3px_0.5px_6px_-2px_var(--text-primary-light)] ${className}`}
      >
        {otherProps.selectOptions &&
          otherProps.selectOptions.map((option) => {
            return <option>{option}</option>;
          })}
      </select>
    );
  }
};

const FormWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">{children}</div>
  );
};

const FormErrors = ({ errorText }) => {
  return (
    <p className="text-sm text-[var(--text-errors)] font-semibold">
      {errorText}
    </p>
  );
};

const Label = ({ children, className, ...otherProps }) => {
  return (
    <label
      {...otherProps}
      className={`text-base text-[var(--text-primary)] font-semibold ${className}`}
    >
      {children}
    </label>
  );
};

export { Input, FormWrapper, FormErrors, Label };
