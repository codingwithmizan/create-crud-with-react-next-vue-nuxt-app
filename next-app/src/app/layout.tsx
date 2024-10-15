import { type Metadata } from "next";
import "@/assets/css/main.css";
import { Navbar } from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "my next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="m-10">{children}</main>
      </body>
    </html>
  );
}
