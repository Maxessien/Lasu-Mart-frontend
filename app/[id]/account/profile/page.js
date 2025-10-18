import AccountInfoForm from "./../../../../src/components/account_components/profile/AccountInfoForm";
import EditProfilePhoto from "./../../../../src/components/account_components/profile/EditProfilePhoto";
import ChangeAccountPasswordForm from "./../../../../src/components/account_components/profile/ChangeAccountPasswordForm";
import {accountHeadersStyles} from "../layout.js"

const ProfilePage = () => {
  const headerStyles =
    "font-bold text-xl text-[var(--text-primary)] text-left mt-4 mb-2";
  return (
    <>
        <h1 className={accountHeadersStyles}>
          Profile
        </h1>

        <h2 className={headerStyles}>Edit Profile</h2>
        <AccountInfoForm />

        <h2 className={headerStyles}>Change Photo</h2>
        <EditProfilePhoto />

        <h2 className={headerStyles}>Change Password</h2>
        <ChangeAccountPasswordForm />
    </>
  );
};

export default ProfilePage;
