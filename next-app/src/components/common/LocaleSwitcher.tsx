"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale = locale === "en" ? "de" : "en";

  // const onChangeLanguage = () =>{
  //   const nextLocale = locale === "en" ? "de" : "en";
  //   router.replace(pathname, {locale: nextLocale})
  // }

  return (
    <Link href={pathname} locale={otherLocale} replace>
      {otherLocale}
    </Link>
  );
}
