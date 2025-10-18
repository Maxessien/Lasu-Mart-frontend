"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

const AccountNavigation = ({isVendor, userId}) => {
  const pathName = usePathname();

  const generalNavigation = [
    {
      name: "Profile",
      path: `/${userId}/account/profile`,
    },
    {
      name: "Order History",
      path: `/${userId}/account/orders`,
    },
    {
      name: "Settings",
      path: `/${userId}/account/settings`,
    },
  ];

  const protectedNavs = [
    {
      name: "Dashboard",
      path: `/${userId}/account/vendor/dashboard`,
    },
    {
      name: "Products",
      path: `/${userId}/account/vendor/products`,
    }
  ]

  const navigationDetails = !isVendor ? [
    ...generalNavigation, 
    {
      name:  "Sell Products",
      path: `/${userId}/account/sell`,
    }
  ] : [...generalNavigation, ...protectedNavs]


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
                    pathName?.split("/").pop() === path ? "text-[var(--main-primary)] border-b-[var(--main-primary)]" : ""
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
