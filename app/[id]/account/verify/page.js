import { getUserServerSide } from "../../../../src/utils/authHelpers";
import { redirect } from "next/navigation";
import VerifyClientPage from "./clientPage";
import Link from "next/link";
import { FaCheck } from "react-icons/fa"

const VerifyUserInfoPage = async ({ searchParams }) => {
  const { user } = await getUserServerSide();
	const params = await searchParams
  if (
    !params.auth ||
    (params.auth !== "email" && params.auth !== "phone")
  )
    redirect(`/${user.userId}/account/verify?auth=email`);
  if (user.isVerified.phone && user.isVerified.email) redirect(`/${user.userId}/account/profile`)
  return (
    <>
      <h1 className="text-2xl text-[var(--text-primary)] font-bold text-center w-full mb-2">
        Verify Email and Phone Number
      </h1>
      <div className="flex md:gap-8 gap-4 justify-center overflow-x-auto mb-5 w-full">
        <Link
	href={`/${user.userId}/account/verify?auth=email`}
          className={`text-base font-semibold pb-1 ${
            params.auth === "email"
              ? "text-[var(--main-primary)] border-b-[3px] border-b-[var(--main-primary)]"
              : "text-[var(--text-primary)]"
          }`}
        >
          Verify Email
        </Link>
        <Link
	href={`/${user.userId}/account/verify?auth=phone`}
          className={`text-base font-semibold pb-1 ${
            params.auth === "phone"
              ? "text-[var(--main-primary)] border-b-[3px] border-b-[var(--main-primary)]"
              : "text-[var(--text-primary)]"
          }`}
        >
          Verify Phone Number
        </Link>
      </div>
      {params.auth === "email" ? (
        user.isVerified.email ? (
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <button className="p-3 text-2xl w-[max-content] font-bold text-white bg-green-500 rounded-full">
              <FaCheck />
            </button>
		<h2 className="text-2xl text-[var(--main-secondary)] font-bold">Email already verified</h2>
          </div>
        ) : (
          <VerifyClientPage otpType="email" allVerified={user.isVerified.phone} />
        )
      ) : (
        user.isVerified.phone ? (
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <button className="p-3 text-2xl w-[max-content] font-bold text-white bg-green-500 rounded-full">
              <FaCheck />
            </button>
		<h2 className="text-2xl text-[var(--main-secondary)] font-bold">Phone number already verified</h2>
          </div>
        ) : (
          <VerifyClientPage otpType="phoneNumber" allVerified={user.isVerified.email} />
        )
      )}
    </>
  );
};

export default VerifyUserInfoPage;
