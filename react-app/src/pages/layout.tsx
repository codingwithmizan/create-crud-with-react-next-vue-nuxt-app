import { Navbar } from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="h-[calc(100vh-80px)] bg-gray-100 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
