"use client"

import { useForm } from "react-hook-form"
// import PaymentMethodToggle from "./PaymentMethodToggle"
import Button from './../reusable_components/Buttons';
import { authApi } from "../../axiosApiBoilerplates/authApi"
import { useSelector } from 'react-redux';
import { useMutation } from "@tanstack/react-query";

const CheckoutForm = () => {
  const {idToken, userData} = useSelector((state)=>state.userAuth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: userData.displayName,
      email: userData.email,
      phone: userData.phoneNumber,
      address: "",
      paymentMethod: "delivery",
    },
  })

  const onSubmit = async(data) => {
    try{
      const res = await authApi(idToken).post("/user/orders/add", data)
      await authApi(idToken).post("/user/update", {cart: []})
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  const {mutateAsync, isPending} = useMutation({mutationFn: (data)=>onSubmit(data)})

  // ✅ Reusable utility class groups for consistency
  const formLabel = "block font-semibold text-[var(--text-primary)] mb-[10px]"
  const inputField =
    "w-full border-[2px] border-[var(--text-primary)] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
const errorMessage = "text-red-600 text-sm mt-[6px]"

  return (
    <section className="w-full max-w-[768px] mx-auto p-6 rounded-md shadow-[0px_0px_5px_var(--text-primary)] bg-[var(--text-secondary-light)]">
      <h1 className="text-2xl font-bold mb-6 text-center text-[var(--text-primary)]">
        Checkout Details
      </h1>

      <form onSubmit={handleSubmit(mutateAsync)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className={formLabel}>Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className={inputField}
            placeholder="Enter your name"
          />
          {errors.fullName && (
            <p className={errorMessage}>
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email (optional) */}
        <div>
          <label className={formLabel}>Email (optional)</label>
          <input
            type="email"
            {...register("email")}
            className={inputField}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className={formLabel}>Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className={inputField}
            placeholder="+234 801 234 5678"
          />
          {errors.phone && (
            <p className={errorMessage}>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className={formLabel}>Delivery Address</label>
          <input
            type="text"
            {...register("address", { required: "Delivery address is required" })}
            className={inputField}
            placeholder="Enter your delivery address"
          />
          {errors.address && (
            <p className={errorMessage}>
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Payment Method Toggle */}
        {/* <PaymentMethodToggle register={register} /> */}

        <Button isDisabled={isPending} buttonType="submit" rounded="md">{isPending ? "..." : "Proceed To Payment"}</Button>
      </form>
    </section>
  )
}

export default CheckoutForm