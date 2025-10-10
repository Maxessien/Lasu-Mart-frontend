"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

const AccountNavigation = () => {
  const pathName = usePathname();

  const navigationDetails = [
    {
      name: "Profile",
      path: "profile",
    },
    {
      name: "Order History",
      path: "orders",
    },
    {
      name: "Settings",
      path: "settings",
    },
  ];

  return (
    <>
      <nav className="h-full">
        <ul className="flex md:flex-col items-center justify-start h-full gap-3 w-full p-3 bg-[var(--text-secondary-light)]">
          {navigationDetails.map(({ name, path }) => {
            return (
              <li>
                <Link
                  href={path}
                  className={`text-base font-semibold text-[var(--text-primary)] ${
                    pathName === path ? "text-[var(--main-primary)]" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default AccountNavigation;
