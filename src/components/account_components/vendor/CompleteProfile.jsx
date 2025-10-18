"use client";

import { useSelector } from "react-redux";
import { authApi } from "../../../axiosApiBoilerplates/authApi";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import AuthFormField from "../../form_components/AuthFormField";
import { Link } from "next/link";

const TermsCheckbox = ({ registerFn, errorsObj }) => {
  return (
    <>
      <label htmlFor="terms" className="flex gap-1">
        <input
          {...registerFn("termsAndCondition", {
            required: "You must agree to terms and conditions",
          })}
          id="terms"
          type="checkbox"
          style={{ transform: "scale(1.2)" }}
        />
        <span className="text-sm text-[var(--text-primary)]">
          Do you agree to{" "}
          <Link
            target="_blank"
            className="text-[var(--main-secondary-light)]"
            href="https//instagram.com/@essienmax484"
          >
            Terms and Conditions
          </Link>
        </span>
      </label>
      {errorsObj.termsAndCondition && (
        <p className="text-sm text-red-600 font-semibold">
          {errorsObj.termsAndCondition}
        </p>
      )}
    </>
  );
};

const CompleteProfile = () => {
  const { idToken } = useSelector((state) => state.userAuth);

  const onSubmit = async (data) => {
    try {
      const res = await authApi(idToken).post("/user/update", data);
      console.log(res);
      toast.success("Registration Successful");
      return res;
    } catch (err) {
      console.log(err);
      toast.error("Registration Unsuccessful");
      throw err;
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutateFn: (data) => onSubmit(data),
  });

  return (
    <>
      <AuthFormField
        email
        phone
        buttonText={isPending ? "Saving..." : "Save"}
        submitFunction={(data) => mutateAsync(data)}
        isSubmitting={isPending}
      >
        <TermsCheckbox />
      </AuthFormField>
    </>
  );
};

export default CompleteProfile;
