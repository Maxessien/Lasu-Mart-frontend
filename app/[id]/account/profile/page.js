import AccountInfoForm from "./../../../../src/components/account_profile_components/AccountInfoForm";
import EditProfilePhoto from "./../../../../src/components/account_profile_components/EditProfilePhoto";
import ChangeAccountPasswordForm from "./../../../../src/components/account_profile_components/ChangeAccountPasswordForm";

const ProfilePage = () => {
  const headerStyles =
    "font-bold text-xl text-[var(--text-primary)] text-left mt-4 mb-2";
  return (
    <>
      <main className="py-3 px-5 w-full">
        <h1 className="font-bold text-3xl text-[var(--text-primary)] text-center mb-1">
          Profile
        </h1>

        <h2 className={headerStyles}>Edit Profile</h2>
        <AccountInfoForm />

        <h2 className={headerStyles}>Change Photo</h2>
        <EditProfilePhoto />

        <h2 className={headerStyles}>Change Password</h2>
        <ChangeAccountPasswordForm />
      </main>
    </>
  );
};

export default ProfilePage;
