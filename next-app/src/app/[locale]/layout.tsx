import { ReactNode } from "react";
import { type Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import "@/assets/css/main.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";


export const metadata: Metadata = {
  title: "next app",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Navbar />
          </header>
          <main className="m-10">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
