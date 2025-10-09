"use client"

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./scss/auth_form_field.scss";
import { useState } from "react";

const AuthFormField = ({
  email = false,
  password = false,
  submitFunction,
  name = false,
  phone = false,
  hasDefault = false,
  buttonText="",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: hasDefault
      ? {
          name: hasDefault.name ? hasDefault.name : "",
          email: hasDefault.email ? hasDefault.email : "",
          password: hasDefault.password ? hasDefault.password : "",
          gender: hasDefault.gender ? hasDefault.gender : "",
          phone: hasDefault.phone ? hasDefault.phone : "",
        }
      : {
          name: "",
          email: "",
          password: "",
          gender: "",
          phone: "",
        },
    mode: "onTouched",
  });

  const submitForm = (data)=>{
    submitFunction(data)
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        {name && (
          <label className="form_labels" htmlFor="name">
            <p className="form_labels_names">Name</p>
            <input
              className="form_labels_inputs"
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 16,
                  message: "Name must be below 16 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="form_labels_error">{errors.name.message}</p>
            )}
          </label>
        )}
        {email && (
          <label className="form_labels" htmlFor="email">
            <p className="form_labels_names">Email</p>
            <input
              className="form_labels_inputs"
              type="text"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "This field is required",
                // pattern: { value: "22222", message: "Invalid email address" },
              })}
            />
            {errors.email && (
              <p className="form_labels_error">{errors.email.message}</p>
            )}
          </label>
        )}
        {phone && (
          <label className="form_labels" htmlFor="phone">
            <p className="form_labels_names">phone</p>
            <input
              className="form_labels_inputs"
              type="phone"
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "This field is required",
                minLength: {value: 10, message: "Phone number must be at least 10 digits"},
                maxLength: {value: 11, message: "Phone number cannot be more than 11 digits"},
                pattern: {value: /^[0-9]+$/, message: "Can only contain numbers"}
              })}
            />
            {errors.phone && (
              <p className="form_labels_error">{errors.phone.message}</p>
            )}
          </label>
        )}
        {password && (
          <label className="form_labels" htmlFor="password">
            <p className="form_labels_names">Password</p>
            <div>
              <input
                className="form_labels_inputs"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your passsword"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters long",
                  },
                })}
              />
              <button type="button">
                {showPassword ? (
                  <FaEye className="text-xl" onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEyeSlash className="text-xl" onClick={() => setShowPassword(true)} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="form_labels_error">{errors.password.message}</p>
            )}
          </label>
        )}

        <button type="submit" className="submit_button">{buttonText}</button>
      </form>
    </>
  );
};

export default AuthFormField;
