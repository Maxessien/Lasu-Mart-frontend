"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { authApi } from "../../../../src/axiosApiBoilerplates/authApi";
import Button from "./../../../../src/components/reusable_components/Buttons";

const VerifyClientPage = ({ otpType }) => {
  const { userData, idToken } = useSelector((state) => state.userAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched", defaultValues: {otpValue: ""} });
  const submitOtp = async (data) => {
    try {
      setIsLoading(true);
      await authApi(idToken).post("/user/otp/verify", data);
      toast.success("OTP verified successfully");
	reset()
    } catch (err) {
      console.log(err);
      toast.error("Invalid OTP");
    } finally {
      setIsLoading(false);
    }
  };
  const requestOtp = async (type, value) => {
    try {
      setIsLoading(true);
      await authApi(idToken).post("/user/otp", { type: type, value: value });
      toast.success("OTP Sent");
      setOtpRequested(true);
    } catch (err) {
      console.log(err);
      toast.error("Couldn't send OTP, try again later");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => submitOtp({ ...data, type: otpType }))}
      >
        <div className="flex gap-[10px]">
          <input
		placeholder={"Enter OTP"}
            className="w-full max-w-[768px] text-base text-[var(--text-primary)] font-semibold px-2 py-1 rounded-md border-[2px] border-[var(--text-primary-light)]"
            type="text"
            {...register("otpValue", {
              required: "You must enter the otp sent",
            })}
          />
          {!otpRequested ? (
            <Button
              buttonFn={() => requestOtp(otpType, userData[otpType])}
              size="small"
              isDisabled={isLoading}
            >
              {!isLoading ? "Send otp" : "..."}
            </Button>
          ) : (
            <Button buttonType="submit" size="small" isDisabled={isLoading}>
              {!isLoading ? "Verify otp" : "..."}
            </Button>
          )}
        </div>
        {errors.otpValue && <p className="text-red-500 text-base font-semibold">{errors.otpValue.message}</p>}
      </form>
    </>
  );
};

export default VerifyClientPage;
