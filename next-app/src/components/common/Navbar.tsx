import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  return (
    <nav className="h-20 border flex items-center shadow px-10">
      <div className="w-full flex justify-between">
        <ul className="flex gap-4">
          <li>
            <NavigationLink href="/">{t("home")}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/about">{t("about")}</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/contact">Contact</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/users">Users</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/login">Login</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/register">Register</NavigationLink>
          </li>
        </ul>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};


